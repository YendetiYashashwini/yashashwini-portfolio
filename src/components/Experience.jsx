export default function Experience() {
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
    <section id="experience" className="relative py-24 sm:py-32 px-6 max-w-7xl mx-auto scroll-mt-20">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Section Header */}
      <div className="relative z-10 text-center max-w-3xl mx-auto mb-16 sm:mb-20">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-neutral-900/80 border border-neutral-800 text-xs font-medium text-slate-300 mb-4 shadow-sm backdrop-blur-sm">
          <span>Proof of Work &amp; Achievements</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4 leading-tight">
          Hackathons &amp;{' '}
          <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
            Milestones
          </span>
        </h2>
        <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
          Demonstrated competitive engineering execution across national hackathons,
          autonomous AI challenges, and applied machine learning benchmarks.
        </p>
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
          <span className="text-xs text-purple-400 font-medium">Verified Milestones</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {milestones.map((item) => (
            <div
              key={item.title}
              className="p-5 rounded-xl bg-neutral-800/50 border border-neutral-800/80 hover:border-neutral-700 transition-all flex flex-col justify-between"
            >
              <div>
                {/* 1. Title */}
                <h4 className="text-base font-bold text-white mb-2 leading-snug">
                  {item.title}
                </h4>

                {/* 2. Badge Tag (below title) */}
                <div className="mb-2.5">
                  <span className={`inline-flex items-center text-xs px-2.5 py-0.5 rounded-full border font-medium ${item.tagColor}`}>
                    {item.tag}
                  </span>
                </div>

                {/* 3. Organizer / Subtitle */}
                <p className="text-xs text-indigo-300 font-medium mb-2.5">
                  {item.event}
                </p>

                {/* 4. Description */}
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
