// Vercel Serverless Function for privacy-friendly visitor location tracking (Country + State/Region only, no IP stored)

function getRedisConfig() {
  const url =
    process.env.KV_REST_API_URL ||
    process.env.STORAGE_KV_REST_API_URL ||
    process.env.STORAGE_REST_API_URL ||
    process.env.UPSTASH_REDIS_REST_URL;
  const token =
    process.env.KV_REST_API_TOKEN ||
    process.env.STORAGE_KV_REST_API_TOKEN ||
    process.env.STORAGE_REST_API_TOKEN ||
    process.env.UPSTASH_REDIS_REST_TOKEN;
  return { url, token };
}

async function redisCommand(commandArgs) {
  const { url, token } = getRedisConfig();
  if (!url || !token) {
    throw new Error('Redis storage is not configured');
  }

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(commandArgs),
  });

  if (!response.ok) {
    throw new Error(`Redis request failed: ${response.status}`);
  }

  const data = await response.json();
  return data.result;
}

function decodeHeader(value) {
  if (!value) return 'Unknown';
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}

export default async function handler(req, res) {
  // Never cache private analytics responses
  res.setHeader('Cache-Control', 'no-store, max-age=0');

  if (req.method === 'POST') {
    try {
      const { url, token } = getRedisConfig();
      if (!url || !token) {
        return res.status(200).json({ ok: true, stored: false });
      }

      // Extract only coarse geo headers provided by Vercel Edge (never read or store IP)
      const country = decodeHeader(req.headers['x-vercel-ip-country']);
      const region = decodeHeader(req.headers['x-vercel-ip-country-region']);
      const city = decodeHeader(req.headers['x-vercel-ip-city']);

      let body = {};
      if (req.body && typeof req.body === 'object') {
        body = req.body;
      } else if (typeof req.body === 'string') {
        try {
          body = JSON.parse(req.body);
        } catch {
          body = {};
        }
      }

      const visit = {
        timestamp: new Date().toISOString(),
        country,
        region,
        city,
        timezone: typeof body.timezone === 'string' ? body.timezone.slice(0, 64) : 'Unknown',
        device: typeof body.device === 'string' ? body.device.slice(0, 32) : 'Unknown',
        referrer: typeof body.referrer === 'string' && body.referrer ? body.referrer.slice(0, 200) : 'Direct',
      };

      await redisCommand(['LPUSH', 'portfolio_visits', JSON.stringify(visit)]);
      await redisCommand(['LTRIM', 'portfolio_visits', 0, 499]);
      await redisCommand(['INCR', 'portfolio_visits_total']);

      return res.status(200).json({ ok: true, stored: true });
    } catch (err) {
      // Fail silently on tracking POST so visitor experience is never affected
      return res.status(200).json({ ok: true, stored: false });
    }
  }

  if (req.method === 'GET') {
    const adminSecret = process.env.ADMIN_SECRET;
    if (!adminSecret) {
      return res.status(503).json({ error: 'ADMIN_SECRET is not configured on the server.' });
    }

    const providedSecret = req.headers['x-admin-secret'];
    if (!providedSecret || providedSecret !== adminSecret) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    try {
      const { url, token } = getRedisConfig();
      if (!url || !token) {
        return res.status(503).json({ error: 'Redis storage (Upstash / Vercel KV) is not connected yet.' });
      }

      const [totalRaw, rawVisits] = await Promise.all([
        redisCommand(['GET', 'portfolio_visits_total']),
        redisCommand(['LRANGE', 'portfolio_visits', 0, 199]),
      ]);

      const visits = (Array.isArray(rawVisits) ? rawVisits : [])
        .map((item) => {
          try {
            return JSON.parse(item);
          } catch {
            return null;
          }
        })
        .filter(Boolean);

      return res.status(200).json({
        totalVisits: Number(totalRaw) || visits.length,
        visits,
      });
    } catch (err) {
      return res.status(500).json({ error: 'Failed to load visit logs.' });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
