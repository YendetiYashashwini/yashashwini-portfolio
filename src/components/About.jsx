export default function About() {
  const highlights = [
    {
      title: 'Autonomous AI & Agents',
      description:
        'Architecting intelligent agentic workflows with dynamic tool-calling, stateful context management, and live task execution.',
      icon: (
        <svg className="w-5 h-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: 'Full-Stack Integration',
      description:
        'Building resilient, high-speed Python/FastAPI backends seamlessly linked to modern, responsive React & Tailwind CSS user interfaces.',
      icon: (
        <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      title: 'Real-World Deployments',
      description:
        'Proven track record across national hackathons (Adobe, SIH, Google for Developers) delivering production-tested live prototypes.',
      icon: (
        <svg className="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
    },
  ]

  return (
    <section id="about" className="relative py-24 sm:py-32 px-6 max-w-7xl mx-auto scroll-mt-20">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Section Header */}
      <div className="relative z-10 text-center max-w-3xl mx-auto mb-16 sm:mb-20">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-neutral-900/80 border border-neutral-800 text-xs font-medium text-slate-300 mb-4 shadow-sm backdrop-blur-sm">
          <span>Background &amp; Philosophy</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4 leading-tight">
          About{' '}
          <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
            Me
          </span>
        </h2>
        <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
          Bridging foundational computer science principles with cutting-edge generative AI
          to engineer practical, high-impact software systems.
        </p>
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Bio Card */}
        <div className="lg:col-span-7 rounded-2xl bg-neutral-900/70 backdrop-blur-xl border border-neutral-800/90 p-8 sm:p-10 flex flex-col justify-between shadow-xl">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Building the Future with Code &amp; AI
            </h3>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6 font-normal">
              I&apos;m <span className="text-white font-semibold">Yashashwini Yendeti</span>, a B.Tech Computer Science and Engineering (AI &amp; ML) student at <span className="text-indigo-300 font-medium">Vasireddy Venkatadri Institute of Technology (VVIT)</span>, batch of 2024&ndash;2028.
            </p>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-6">
              My core drive is <span className="text-slate-200 font-medium">&ldquo;learning by building&rdquo;</span>. Instead of stopping at theoretical models, I focus on turning algorithms into deployed, functioning products&mdash;integrating LLM APIs, building automated agentic workflows, and training machine learning pipelines that solve tangible challenges.
            </p>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-8">
              Whether architecting civic intelligence platforms for the Smart India Hackathon, advancing through national coding rounds for Adobe, or engineering automated candidate screening systems, I thrive at the intersection of technical rigor and rapid execution.
            </p>
          </div>

          {/* Quick Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-neutral-800/80 text-xs">
            <div className="p-3 rounded-xl bg-neutral-800/50 border border-neutral-800">
              <span className="block text-slate-500 font-medium mb-1">Education</span>
              <span className="font-semibold text-slate-200">B.Tech CSE (AI &amp; ML)</span>
              <span className="block text-slate-400 mt-0.5">VVIT (2024&ndash;2028)</span>
            </div>
            <div className="p-3 rounded-xl bg-neutral-800/50 border border-neutral-800">
              <span className="block text-slate-500 font-medium mb-1">Focus Areas</span>
              <span className="font-semibold text-slate-200">Agentic AI &amp; Full Stack</span>
              <span className="block text-slate-400 mt-0.5">NLP &amp; Machine Learning</span>
            </div>
            <div className="p-3 rounded-xl bg-neutral-800/50 border border-neutral-800">
              <span className="block text-slate-500 font-medium mb-1">Location</span>
              <span className="font-semibold text-slate-200">Andhra Pradesh, India</span>
              <span className="block text-slate-400 mt-0.5">Open to Remote Roles</span>
            </div>
          </div>
        </div>

        {/* Right Highlights Cards */}
        <div className="lg:col-span-5 flex flex-col gap-5">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-2xl bg-neutral-900/70 backdrop-blur-xl border border-neutral-800/90 hover:border-neutral-700 transition-all duration-200 shadow-md flex items-start gap-4"
            >
              <div className="p-2.5 rounded-xl bg-neutral-800/90 border border-neutral-700/80 flex-shrink-0 mt-0.5">
                {item.icon}
              </div>
              <div>
                <h4 className="text-base font-bold text-white mb-1.5">
                  {item.title}
                </h4>
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
