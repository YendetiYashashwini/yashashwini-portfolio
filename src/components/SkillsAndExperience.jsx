export default function SkillsAndExperience() {
  const skillCategories = [
    {
      category: 'Languages',
      badgeColor: 'text-blue-400 bg-blue-500/10 border-blue-500/30',
      hoverGlow: 'hover:border-blue-500/40',
      icon: (
        <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      skills: ['Python', 'Java', 'C', 'JS', 'HTML', 'CSS', 'SQL'],
    },
    {
      category: 'AI & ML',
      badgeColor: 'text-purple-400 bg-purple-500/10 border-purple-500/30',
      hoverGlow: 'hover:border-purple-500/40',
      icon: (
        <svg className="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      skills: ['Scikit-Learn', 'OpenAI API & LLMs', 'Gemini API', 'NumPy', 'Pandas'],
    },
    {
      category: 'Tools & Platforms',
      badgeColor: 'text-amber-400 bg-amber-500/10 border-amber-500/30',
      hoverGlow: 'hover:border-amber-500/40',
      icon: (
        <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      skills: ['Git', 'GitHub', 'VS Code', 'Docker', 'Streamlit', 'Vercel'],
    },
    {
      category: 'Core Concepts',
      badgeColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
      hoverGlow: 'hover:border-emerald-500/40',
      icon: (
        <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      skills: [
        'Data Structures & Algorithms',
        'Object-Oriented Programming',
        'Machine Learning',
      ],
    },
  ]

  const milestones = [
    {
      title: 'SkillProof AI',
      event: 'Google for Developers / Hack2Skill Hackathon',
      tag: 'Hackathon Project',
      tagColor: 'text-cyan-300 bg-cyan-500/10 border-cyan-500/30',
      description:
        'Engineered an interactive skills verification platform evaluating real code authentications and work artifacts using Gemini API.',
    },
    {
      title: 'SIH GovGrievance AI',
      event: 'Smart India Hackathon',
      tag: 'National Hackathon',
      tagColor: 'text-amber-300 bg-amber-500/10 border-amber-500/30',
      description:
        'Developed an automated public grievance classification, priority scoring, and intelligent department triage system using NLP.',
    },
    {
      title: 'INDIA RUNS Candidate Ranking System',
      event: 'INDIA RUNS Hackathon',
      tag: 'Hackathon Project',
      tagColor: 'text-purple-300 bg-purple-500/10 border-purple-500/30',
      description:
        'Created an automated resume parsing and intelligent candidate scoring pipeline powered by Hugging Face models.',
    },
    {
      title: 'Adobe University Hackathon',
      event: 'Adobe',
      tag: 'National Hackathon',
      tagColor: 'text-rose-300 bg-rose-500/10 border-rose-500/30',
      description:
        'Cleared Round 1 (Coding Round), competing among university-level applicants nationwide.',
    },
  ]

  return (
    <section id="skills" className="relative py-24 sm:py-32 px-6 max-w-7xl mx-auto scroll-mt-12">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Section Header */}
      <div className="relative z-10 text-center max-w-3xl mx-auto mb-16 sm:mb-20">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-neutral-900/80 border border-neutral-800 text-xs font-medium text-slate-300 mb-4 shadow-sm backdrop-blur-sm">
          <span>Capabilities &amp; Background</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4 leading-tight">
          Technical Expertise &amp;{' '}
          <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
            Achievements
          </span>
        </h2>
        <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
          Comprehensive foundation across core computer science, modern generative AI engineering,
          applied algorithms, and competitive hackathon deliverables.
        </p>
      </div>

      {/* Skills Category Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 sm:mb-20">
        {skillCategories.map((cat) => (
          <div
            key={cat.category}
            className={`group rounded-2xl bg-neutral-900/70 backdrop-blur-xl border border-neutral-800/90 ${cat.hoverGlow} p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
          >
            <div>
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 rounded-xl bg-neutral-800/80 border border-neutral-700/80">
                  {cat.icon}
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-slate-100 transition-colors">
                  {cat.category}
                </h3>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs font-medium rounded-lg bg-neutral-800/90 text-neutral-300 border border-neutral-750 hover:border-slate-600 hover:text-white transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Full Width Hackathons & Milestones Container */}
      <div className="relative z-10 w-full rounded-2xl bg-neutral-900/70 backdrop-blur-xl border border-neutral-800/90 hover:border-purple-500/40 p-7 sm:p-9 transition-all duration-300 hover:shadow-xl">
        <div className="flex items-center justify-between mb-8 pb-5 border-b border-neutral-800/80">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-purple-300 bg-purple-500/10 border border-purple-500/30">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
            <span>Hackathons &amp; Milestones</span>
          </div>
          <span className="text-xs text-purple-400 font-medium">Proof of Work</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {milestones.map((item) => (
            <div
              key={item.title}
              className="p-5 rounded-xl bg-neutral-800/50 border border-neutral-800/80 hover:border-neutral-700 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h4 className="text-base font-bold text-white">
                    {item.title}
                  </h4>
                  <span className={`text-xs px-2.5 py-0.5 rounded-full border font-medium ${item.tagColor}`}>
                    {item.tag}
                  </span>
                </div>
                <p className="text-xs text-indigo-300 font-medium mb-3">
                  {item.event}
                </p>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
