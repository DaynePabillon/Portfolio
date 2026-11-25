import React, { useState, useMemo } from 'react';
import { Lock, Globe, MapPin, RefreshCw, LogOut, Clock, Monitor, ExternalLink, ShieldAlert, Trash2, AlertTriangle, Info } from 'lucide-react';

export default function PrivateInsights({ onExit }) {
  const [passcode, setPasscode] = useState('');
  const [authToken, setAuthToken] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [data, setData] = useState(null);
  const [countryFilter, setCountryFilter] = useState('US');
  const [confirmClear, setConfirmClear] = useState(false);

  const fetchInsights = async (secretToUse) => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/visit', {
        method: 'GET',
        headers: {
          'x-admin-secret': secretToUse,
        },
      });
      const json = await res.json();
      if (!res.ok) {
        setError(json.error || 'Access denied.');
        if (res.status === 401) {
          setAuthToken('');
          setData(null);
        }
        return;
      }
      setAuthToken(secretToUse);
      setData(json);
    } catch {
      setError('Unable to reach /api/visit. Make sure this is deployed on Vercel.');
    } finally {
      setLoading(false);
    }
  };

  const handleUnlock = (e) => {
    e.preventDefault();
    if (!passcode.trim()) return;
    fetchInsights(passcode.trim());
  };

  const handleClearLogs = async () => {
    if (!authToken || loading) return;
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/visit', {
        method: 'DELETE',
        headers: { 'x-admin-secret': authToken },
      });
      if (res.ok) {
        setData({ totalVisits: 0, visits: [] });
        setConfirmClear(false);
      }
    } catch {
      setError('Failed to clear logs.');
    } finally {
      setLoading(false);
    }
  };

  const filteredVisits = useMemo(() => {
    if (!data?.visits) return [];
    if (countryFilter === 'ALL') return data.visits;
    return data.visits.filter((v) => (v.country || '').toUpperCase() === countryFilter);
  }, [data, countryFilter]);

  const regionSummary = useMemo(() => {
    const counts = {};
    for (const v of filteredVisits) {
      const key = `${v.country || 'Unknown'} / ${v.region || 'Unknown'}`;
      counts[key] = (counts[key] || 0) + 1;
    }
    return Object.entries(counts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 12);
  }, [filteredVisits]);

  if (!data) {
    return (
      <div className="min-h-screen bg-[#0B0F17] text-slate-100 flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-[#111827] border border-[#1E293B] rounded-2xl p-7 shadow-2xl">
          <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400 flex items-center justify-center mb-5">
            <Lock className="w-6 h-6" />
          </div>
          <h1 className="text-xl font-bold text-white mb-1">Private Visitor Insights</h1>
          <p className="text-xs text-slate-400 mb-6">
            Enter your server passcode to view country and state visit logs.
          </p>

          <form onSubmit={handleUnlock} className="space-y-4">
            <div>
              <input
                type="password"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                placeholder="Enter ADMIN_SECRET passcode"
                autoFocus
                className="w-full px-4 py-3 rounded-xl bg-[#0B0F17] border border-[#1E293B] focus:border-sky-500 focus:outline-none text-sm text-white placeholder-slate-500"
              />
            </div>

            {error && (
              <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-start gap-2">
                <ShieldAlert className="w-4 h-4 shrink-0 mt-0.5" />
                <span>{error}</span>
              </div>
            )}

            <div className="flex items-center gap-3">
              <button
                type="submit"
                disabled={loading}
                className="flex-1 py-3 px-4 rounded-xl bg-sky-500 hover:bg-sky-400 disabled:opacity-50 text-slate-950 font-bold text-sm transition-colors"
              >
                {loading ? 'Verifying...' : 'Unlock'}
              </button>
              <button
                type="button"
                onClick={onExit}
                className="py-3 px-4 rounded-xl bg-[#0B0F17] hover:bg-slate-800 border border-[#1E293B] text-slate-300 text-sm font-medium transition-colors"
              >
                Back
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0B0F17] text-slate-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#1E293B]">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-sky-400 mb-1">
              Private Telemetry (No IPs Stored)
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Visitor Location Insights
            </h1>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            {/* Country Filter Toggle */}
            <div className="inline-flex items-center p-1 rounded-xl bg-[#111827] border border-[#1E293B]">
              <button
                type="button"
                onClick={() => setCountryFilter('US')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                  countryFilter === 'US'
                    ? 'bg-sky-500 text-slate-950'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                US Only
              </button>
              <button
                type="button"
                onClick={() => setCountryFilter('ALL')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                  countryFilter === 'ALL'
                    ? 'bg-sky-500 text-slate-950'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                All Countries
              </button>
            </div>

            <button
              onClick={() => fetchInsights(authToken)}
              disabled={loading}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#111827] hover:bg-slate-800 border border-[#1E293B] text-xs font-semibold text-slate-200 transition-colors"
            >
              <RefreshCw className={`w-3.5 h-3.5 text-sky-400 ${loading ? 'animate-spin' : ''}`} />
              <span>Refresh</span>
            </button>
            <button
              onClick={() => setConfirmClear(true)}
              disabled={loading || confirmClear}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#111827] hover:bg-rose-500/10 disabled:opacity-50 border border-[#1E293B] hover:border-rose-500/30 text-xs font-semibold text-slate-300 hover:text-rose-300 transition-colors"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Clear Logs</span>
            </button>
            <button
              onClick={onExit}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 text-xs font-bold transition-colors"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Return to Portfolio</span>
            </button>
          </div>
        </div>

        {/* Warning Confirmation Banner for Clear Logs */}
        {confirmClear && (
          <div className="p-4 sm:p-5 rounded-2xl bg-rose-500/10 border border-rose-500/40 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
              <div>
                <div className="text-sm font-bold text-rose-200">
                  Warning: Permanently clear all visit logs?
                </div>
                <div className="text-xs text-rose-300/80 mt-0.5">
                  This will delete all recorded visits from Redis and reset the counter to 0. This cannot be undone.
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <button
                type="button"
                onClick={() => setConfirmClear(false)}
                disabled={loading}
                className="px-4 py-2 rounded-xl bg-[#0B0F17] hover:bg-slate-800 border border-[#1E293B] text-xs font-semibold text-slate-300 transition-colors"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleClearLogs}
                disabled={loading}
                className="px-4 py-2 rounded-xl bg-rose-500 hover:bg-rose-400 text-white text-xs font-bold transition-colors"
              >
                {loading ? 'Clearing...' : 'Yes, Clear All Logs'}
              </button>
            </div>
          </div>
        )}

        {/* Top Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-5 rounded-2xl bg-[#111827] border border-[#1E293B]">
            <div className="text-xs text-slate-400 font-medium mb-1">
              {countryFilter === 'US' ? 'US Visits (Recent)' : 'Total Recorded Visits'}
            </div>
            <div className="text-3xl font-extrabold text-white">
              {countryFilter === 'US' ? filteredVisits.length : data.totalVisits}
            </div>
          </div>
          <div className="p-5 rounded-2xl bg-[#111827] border border-[#1E293B]">
            <div className="text-xs text-slate-400 font-medium mb-1">
              {countryFilter === 'US' ? 'All Countries (Recent)' : 'Recent Logs Shown'}
            </div>
            <div className="text-3xl font-extrabold text-sky-400">{data.visits.length}</div>
          </div>
          <div className="p-5 rounded-2xl bg-[#111827] border border-[#1E293B]">
            <div className="text-xs text-slate-400 font-medium mb-1">
              {countryFilter === 'US' ? 'Unique US States' : 'Unique Country / State Pairs'}
            </div>
            <div className="text-3xl font-extrabold text-white">{regionSummary.length}</div>
          </div>
        </div>

        {/* Country & State Breakdown */}
        <div className="p-6 rounded-2xl bg-[#111827] border border-[#1E293B]">
          <h2 className="text-sm font-bold uppercase tracking-wider text-sky-400 mb-4 flex items-center gap-2">
            <Globe className="w-4 h-4" />
            <span>Breakdown by Country & State/Region</span>
          </h2>
          {regionSummary.length === 0 ? (
            <p className="text-sm text-slate-400">No visits recorded yet.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {regionSummary.map(([label, count]) => (
                <div
                  key={label}
                  className="p-3.5 rounded-xl bg-[#0B0F17] border border-[#1E293B] flex items-center justify-between"
                >
                  <span className="text-sm font-medium text-slate-200 flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-sky-400" />
                    {label}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-bold">
                    {count}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Recent Visits Table */}
        <div className="rounded-2xl bg-[#111827] border border-[#1E293B] overflow-hidden">
          <div className="p-5 border-b border-[#1E293B] flex items-center justify-between">
            <h2 className="text-sm font-bold uppercase tracking-wider text-white flex items-center gap-2">
              <Clock className="w-4 h-4 text-sky-400" />
              <span>Recent Visits</span>
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-[#0B0F17] text-slate-400 border-b border-[#1E293B]">
                  <th className="py-3 px-4 font-semibold">Time</th>
                  <th className="py-3 px-4 font-semibold">Country</th>
                  <th className="py-3 px-4 font-semibold">State / Region</th>
                  <th className="py-3 px-4 font-semibold">City</th>
                  <th className="py-3 px-4 font-semibold">Timezone</th>
                  <th className="py-3 px-4 font-semibold">Device</th>
                  <th className="py-3 px-4 font-semibold">Referrer</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1E293B]">
                {filteredVisits.length === 0 ? (
                  <tr>
                    <td colSpan="7" className="py-8 text-center text-slate-400">
                      {countryFilter === 'US'
                        ? 'No US visits recorded yet.'
                        : 'No visits recorded yet.'}
                    </td>
                  </tr>
                ) : (
                  filteredVisits.map((v, i) => (
                    <tr key={i} className="hover:bg-[#0B0F17]/60 transition-colors">
                      <td className="py-3 px-4 text-slate-300 whitespace-nowrap">
                        {new Date(v.timestamp).toLocaleString()}
                      </td>
                      <td className="py-3 px-4 text-white font-semibold">{v.country}</td>
                      <td className="py-3 px-4 text-sky-400 font-semibold">{v.region}</td>
                      <td className="py-3 px-4 text-slate-300">{v.city}</td>
                      <td className="py-3 px-4 text-slate-400">{v.timezone}</td>
                      <td className="py-3 px-4 text-slate-300">
                        <span className="inline-flex items-center gap-1">
                          <Monitor className="w-3 h-3 text-slate-500" />
                          {v.device}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-slate-400 max-w-[200px] truncate">
                        <span className="inline-flex items-center gap-1">
                          <ExternalLink className="w-3 h-3 text-slate-500 shrink-0" />
                          {v.referrer || 'Direct'}
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Earlier Visits Note (Pre-Implementation) */}
        <div className="p-5 sm:p-6 rounded-2xl bg-[#111827] border border-[#1E293B] flex flex-col sm:flex-row items-start justify-between gap-4">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <div className="text-sm font-bold text-white">
                Looking for visitors from before this tracker was added?
              </div>
              <p className="text-xs text-slate-400 leading-relaxed max-w-2xl">
                Visits that happened before Upstash Redis was connected cannot be imported into this table. To inspect earlier traffic, open your Vercel project and check <strong className="text-slate-200">Logs -&gt; CDN Requests</strong> (with the Timeline filter set to Last 24 hours or Last 7 days) or the <strong className="text-slate-200">Analytics</strong> tab.
              </p>
            </div>
          </div>
          <a
            href="https://vercel.com/dashboard"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#0B0F17] hover:bg-slate-800 border border-[#1E293B] text-xs font-semibold text-sky-400 shrink-0 transition-colors"
          >
            <span>Open Vercel Dashboard</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
