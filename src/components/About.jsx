export default function About() {
  const traits = [
    { emoji: '🚀', label: 'Hackathon Enthusiast' },
    { emoji: '🧠', label: 'AI & ML Builder' },
    { emoji: '💡', label: 'Problem Solver' },
    { emoji: '💻', label: 'Full-Stack Developer' },
  ]

  return (
    <section id="about" className="relative py-24 sm:py-32 px-6 max-w-7xl mx-auto scroll-mt-20">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Section Header */}
      <div className="relative z-10 text-center max-w-3xl mx-auto mb-16 sm:mb-20">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-neutral-900/80 border border-neutral-800 text-xs font-medium text-slate-300 mb-4 shadow-sm backdrop-blur-sm">
          <span>Who I Am</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4 leading-tight">
          About{' '}
          <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
            Me
          </span>
        </h2>
      </div>

      {/* Glassmorphism Bio Card */}
      <div className="relative z-10 max-w-4xl mx-auto rounded-2xl bg-neutral-900/60 backdrop-blur-xl border border-neutral-800/90 p-8 sm:p-12 shadow-2xl">
        {/* Subtle card glow overlay */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/5 via-transparent to-purple-500/5 pointer-events-none" />

        <div className="relative z-10">
          {/* Intro paragraph */}
          <p className="text-slate-200 text-lg sm:text-xl leading-relaxed mb-6">
            Hi, I&apos;m{' '}
            <span className="text-white font-bold bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
              Yashashwini
            </span>
            &mdash;a B.Tech Computer Science and Engineering student specializing in{' '}
            <span className="text-indigo-300 font-semibold">
              Artificial Intelligence &amp; Machine Learning
            </span>{' '}
            at Vasireddy Venkatadri Institute of Technology (VVIT).
          </p>

          {/* Passion paragraph */}
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed mb-6">
            I&apos;m passionate about building practical, production-ready full-stack applications
            that go beyond classroom theory. From architecting autonomous agentic workflows powered
            by LLM APIs to deploying live web applications with modern frameworks, I believe the
            best way to learn is to{' '}
            <span className="text-slate-200 font-medium italic">ship real things</span>.
          </p>

          {/* Problem solving paragraph */}
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed mb-10">
            Whether it&apos;s competing in national hackathons like SIH and Adobe, engineering
            intelligent grievance routing systems, or crafting AI-powered skill verification
            platforms, I thrive on solving complex problems through clean code, sound architecture,
            and relentless iteration.
          </p>

          {/* Trait Pills */}
          <div className="flex flex-wrap items-center gap-3">
            {traits.map((trait) => (
              <span
                key={trait.label}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-800/80 border border-neutral-700/80 hover:border-indigo-500/50 text-sm font-medium text-slate-200 hover:text-white transition-all duration-200 shadow-sm hover:shadow-indigo-500/10 hover:-translate-y-0.5 cursor-default"
              >
                <span className="text-base">{trait.emoji}</span>
                <span>{trait.label}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
