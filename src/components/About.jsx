export default function About() {
  const stats = [
    {
      title: 'B.Tech CSE (AI & ML)',
      subtitle: 'Specialization & Degree',
      icon: (
        <svg className="w-5 h-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14v7" />
        </svg>
      ),
      accent: 'border-indigo-500/30 bg-indigo-500/10 text-indigo-300',
    },
    {
      title: 'Vasireddy Venkatadri Institute of Technology (VVIT)',
      subtitle: 'Institution & Alma Mater',
      icon: (
        <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      accent: 'border-cyan-500/30 bg-cyan-500/10 text-cyan-300',
    },
    {
      title: 'National Hackathons',
      subtitle: 'Adobe • SIH • Google • INDIA RUNS',
      icon: (
        <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      accent: 'border-amber-500/30 bg-amber-500/10 text-amber-300',
    },
    {
      title: 'AI & Full-Stack',
      subtitle: 'Production Agents & Pipelines',
      icon: (
        <svg className="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      accent: 'border-purple-500/30 bg-purple-500/10 text-purple-300',
    },
  ]

  return (
    <section id="about" className="relative py-24 sm:py-32 px-6 max-w-7xl mx-auto scroll-mt-20">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Section Header */}
      <div className="relative z-10 text-center max-w-4xl mx-auto mb-14 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-neutral-900/80 border border-neutral-800 text-xs font-medium text-slate-300 mb-4 shadow-sm backdrop-blur-sm">
          <span>Who I Am &amp; What I Build</span>
        </div>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4 leading-tight sm:whitespace-nowrap">
          Designing the Future with{' '}
          <span className="whitespace-nowrap bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
            AI &amp; ML
          </span>
        </h2>
        <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Transforming complex machine learning models and generative algorithms into production-ready, interactive applications and agentic systems.
        </p>
      </div>

      {/* Top Stats Cards Row */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="rounded-2xl bg-neutral-900/70 backdrop-blur-xl border border-neutral-800/90 hover:border-indigo-500/40 p-5 sm:p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`p-2.5 rounded-xl border ${stat.accent}`}>
                {stat.icon}
              </div>
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white mb-1 leading-snug">
                {stat.title}
              </h3>
              <p className="text-xs text-slate-400 font-medium">
                {stat.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Bento Grid Layout */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Bento Card 1: AI & ML Student & Engineer (Span 2) */}
        <div className="lg:col-span-2 rounded-2xl bg-neutral-900/70 backdrop-blur-xl border border-neutral-800/90 hover:border-indigo-500/40 p-7 sm:p-9 transition-all duration-300 hover:shadow-2xl flex flex-col justify-between group">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-indigo-300 bg-indigo-500/10 border border-indigo-500/30">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span>Specialization &amp; Focus</span>
              </div>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 group-hover:text-indigo-200 transition-colors">
              AI &amp; ML Student &amp; Engineer
            </h3>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
              Currently pursuing a B.Tech in Computer Science and Engineering specializing in <span className="text-white font-medium">Artificial Intelligence &amp; Machine Learning</span> at Vasireddy Venkatadri Institute of Technology (VVIT).
            </p>

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              My core engineering focus centers on architecting practical LLM workflows, autonomous agentic systems, and building production-ready machine learning models. I emphasize taking models out of Jupyter notebooks and turning them into scalable, evaluated, and deployable software solutions.
            </p>
          </div>
        </div>

        {/* Bento Card 2: Hackathon Builder (Span 1) */}
        <div className="lg:col-span-1 rounded-2xl bg-neutral-900/70 backdrop-blur-xl border border-neutral-800/90 hover:border-amber-500/40 p-7 sm:p-9 transition-all duration-300 hover:shadow-2xl flex flex-col justify-between group">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-amber-300 bg-amber-500/10 border border-amber-500/30">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
                <span>Competitive Arena</span>
              </div>
            </div>

            <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-4 group-hover:text-amber-200 transition-colors">
              Hackathon Builder
            </h3>

            <p className="text-slate-400 text-sm leading-relaxed mb-5">
              Active participant in competitive national hackathons, shipping functional AI prototypes under rapid sprint deadlines:
            </p>

            <ul className="space-y-3 mb-6">
              {[
                { event: 'Google for Developers / Hack2Skill', project: 'SkillProof AI Platform' },
                { event: 'Smart India Hackathon (SIH)', project: 'GovGrievance AI Routing' },
                { event: 'Adobe University Hackathon', project: 'Cleared Coding Round 1' },
                { event: 'INDIA RUNS Hackathon', project: 'Candidate Intelligence System' },
              ].map((item) => (
                <li key={item.event} className="flex items-start gap-2.5 text-xs text-slate-300">
                  <span className="text-amber-400 font-bold mt-0.5">&bull;</span>
                  <div>
                    <span className="font-semibold text-white">{item.event}</span>
                    <span className="text-slate-400 block text-[11px]">{item.project}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-4 border-t border-neutral-800/80">
            <span className="text-xs font-semibold text-amber-300">
              Tested under high-intensity sprint constraints
            </span>
          </div>
        </div>

        {/* Bento Card 3: Open-Source & AI Developer (Span 3) */}
        <div className="lg:col-span-3 rounded-2xl bg-neutral-900/70 backdrop-blur-xl border border-neutral-800/90 hover:border-purple-500/40 p-7 sm:p-9 transition-all duration-300 hover:shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 group">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-purple-300 bg-purple-500/10 border border-purple-500/30">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                <span>Engineering Philosophy</span>
              </div>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3 group-hover:text-purple-200 transition-colors">
              Open-Source &amp; AI Developer
            </h3>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-3">
              Focused on collaborative software engineering, shipping real code artifacts, and deploying agentic web applications. I believe software engineering is fundamentally about tangible outcomes—delivering working code, robust documentation, and public deployments.
            </p>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Every prototype is constructed with clean Git version control, modular frontend/backend boundaries, and reliable API integrations across Gemini and Hugging Face ecosystems.
            </p>
          </div>

          <div className="flex flex-wrap md:flex-col gap-2.5 w-full md:w-auto shrink-0">
            <div className="px-4 py-2.5 rounded-xl bg-neutral-800/80 border border-neutral-750 text-xs font-medium text-slate-200 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>100% Deployed Proof of Work</span>
            </div>
            <div className="px-4 py-2.5 rounded-xl bg-neutral-800/80 border border-neutral-750 text-xs font-medium text-slate-200 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
              <span>Collaborative Git &amp; Clean Architecture</span>
            </div>
            <div className="px-4 py-2.5 rounded-xl bg-neutral-800/80 border border-neutral-750 text-xs font-medium text-slate-200 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-400"></span>
              <span>Agentic Web Applications</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
