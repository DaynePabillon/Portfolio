import React from 'react';
import { 
  Server, 
  BrainCircuit, 
  Terminal, 
  Cloud, 
  Layout
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  const { skills } = portfolioData;

  const categories = [
    {
      title: "Backend & Databases",
      subtitle: "Core Specialization",
      icon: <Server className="w-5 h-5 text-sky-400" />,
      items: (skills?.backendAndDatabases || []).map(b => b.name),
      highlight: "Node.js, Express.js, PostgreSQL, RESTful APIs"
    },
    {
      title: "AI Integration & Systems",
      subtitle: "Secondary Specialization",
      icon: <BrainCircuit className="w-5 h-5 text-sky-400" />,
      items: (skills?.aiAndIntegration || []).map(a => a.name),
      highlight: "Local LLMs (Ollama), Python, OpenAI, Gemini"
    },
    {
      title: "Programming Languages",
      subtitle: "Foundations",
      icon: <Terminal className="w-5 h-5 text-sky-400" />,
      items: (skills?.languages || []).map(l => l.name),
      highlight: "JavaScript (ES6+), Python, SQL, C++, Java"
    },
    {
      title: "Cloud & Developer Tools",
      subtitle: "Infrastructure & Workflow",
      icon: <Cloud className="w-5 h-5 text-sky-400" />,
      items: (skills?.cloudAndTools || []).map(t => t.name),
      highlight: "AWS Cloud, Git & GitHub, Postman API Testing"
    },
    {
      title: "Supporting Frontend",
      subtitle: "Versatility Without Dependency",
      icon: <Layout className="w-5 h-5 text-sky-400" />,
      items: (skills?.supportingFrontend || []).map(f => f.name),
      highlight: "React.js, Next.js, Tailwind CSS, Responsive Design"
    }
  ];

  return (
    <section id="skills" className="py-20 border-b border-[#1E293B]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-3">
            Technical Stack
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Specialized Backend & AI Engineering
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-2 max-w-2xl">
            Anchored in Node.js, relational PostgreSQL databases, and on-premises AI pipelines with Ollama, with supporting capability in modern frontend frameworks.
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#111827] border border-[#1E293B] hover:border-sky-500/40 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0B0F17] border border-[#1E293B] flex items-center justify-center">
                    {cat.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base">
                      {cat.title}
                    </h3>
                    <p className="text-[11px] font-semibold text-sky-400">
                      {cat.subtitle}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="px-2.5 py-1 rounded-lg text-xs font-medium bg-[#0B0F17] text-slate-300 border border-[#1E293B] hover:border-sky-500/40 hover:text-white transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-[#1E293B] text-[11px] text-slate-400">
                Core: <strong className="text-sky-400">{cat.highlight}</strong>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
