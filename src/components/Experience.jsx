export default function Experience() {
  const milestones = [
    {
      title: 'SkillProof AI',
      event: 'Google for Developers / Hack2Skill Hackathon',
      date: 'Oct 2026',
      tag: 'Hackathon Project',
      tagColor: 'text-cyan-300 bg-cyan-500/10 border-cyan-500/30',
      nodeColor: 'border-cyan-400 shadow-cyan-500/40',
      description:
        'Engineered an interactive skills verification platform evaluating real code authentications using Gemini API.',
    },
    {
      title: 'SIH GovGrievance AI',
      event: 'Smart India Hackathon (SIH)',
      date: 'Aug 2026',
      tag: 'National Hackathon',
      tagColor: 'text-amber-300 bg-amber-500/10 border-amber-500/30',
      nodeColor: 'border-amber-400 shadow-amber-500/40',
      description:
        'Automated public grievance classification, priority scoring, and department triage system using NLP.',
    },
    {
      title: 'Adobe University Hackathon',
      event: 'Adobe',
      date: 'Aug 2026',
      tag: 'National Hackathon',
      tagColor: 'text-rose-300 bg-rose-500/10 border-rose-500/30',
      nodeColor: 'border-rose-400 shadow-rose-500/40',
      description:
        'Cleared Round 1 (Coding Round), competing among university-level applicants nationwide.',
    },
    {
      title: 'INDIA RUNS Candidate Ranking System',
      event: 'INDIA RUNS Hackathon',
      date: 'June 2026',
      tag: 'Hackathon Project',
      tagColor: 'text-purple-300 bg-purple-500/10 border-purple-500/30',
      nodeColor: 'border-purple-400 shadow-purple-500/40',
      description:
        'Automated resume parsing and candidate scoring pipeline powered by Hugging Face models.',
    },
  ]

  return (
    <section id="experience" className="relative py-24 sm:py-32 px-6 max-w-7xl mx-auto scroll-mt-20">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Section Header */}
      <div className="relative z-10 text-center max-w-3xl mx-auto mb-16 sm:mb-20">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-neutral-900/80 border border-neutral-800 text-xs font-medium text-slate-300 mb-4 shadow-sm backdrop-blur-sm">
          <span>Proof of Work &amp; Achievements</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4 leading-tight">
          Experience &amp;{' '}
          <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
            Milestones
          </span>
        </h2>
        <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Chronological timeline of competitive hackathons, national rounds, and applied machine learning achievements.
        </p>
      </div>

      {/* Chronological Timeline Container */}
      <div className="relative max-w-4xl mx-auto">
        {/* Continuous Vertical Spine Line */}
        <div className="absolute left-4 sm:left-32 top-6 bottom-6 w-[2px] bg-gradient-to-b from-cyan-500 via-indigo-500 to-purple-500/40 pointer-events-none" />

        <div className="space-y-8 sm:space-y-10">
          {milestones.map((item) => (
            <div
              key={item.title}
              className="relative flex flex-col sm:flex-row items-start gap-4 sm:gap-8 group"
            >
              {/* Date Column (Left on desktop) */}
              <div className="hidden sm:flex sm:w-24 text-right flex-col justify-start pt-4 shrink-0">
                <span className="font-mono text-sm font-bold text-slate-200 tracking-tight">
                  {item.date}
                </span>
                <span className="text-[11px] text-slate-500 font-medium">Milestone</span>
              </div>

              {/* Timeline Node / Glowing Marker */}
              <div className="absolute left-4 sm:left-32 -translate-x-1/2 top-5 z-20 flex items-center justify-center">
                <div
                  className={`w-4 h-4 rounded-full border-2 bg-neutral-950 ${item.nodeColor} shadow-md transition-transform duration-300 group-hover:scale-125`}
                />
              </div>

              {/* Milestone Card (Right of spine) */}
              <div className="ml-10 sm:ml-4 flex-1 w-full rounded-2xl bg-neutral-900/70 backdrop-blur-xl border border-neutral-800/90 hover:border-neutral-700 p-6 sm:p-7 transition-all duration-300 hover:shadow-2xl hover:-translate-y-0.5">
                {/* Mobile Date Badge */}
                <div className="sm:hidden mb-2.5 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-indigo-300 bg-indigo-500/10 px-2.5 py-1 rounded-md border border-indigo-500/20">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {item.date}
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-indigo-200 transition-colors">
                    {item.title}
                  </h3>
                  <span
                    className={`inline-flex items-center self-start sm:self-auto text-xs px-2.5 py-0.5 rounded-full border font-medium ${item.tagColor}`}
                  >
                    {item.tag}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-indigo-300 font-medium mb-3">
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
