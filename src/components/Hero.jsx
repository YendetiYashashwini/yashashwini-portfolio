export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-slate-100 min-h-screen flex items-center justify-center px-6 py-20 lg:py-28">
      {/* Background decorative glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-750 text-xs sm:text-sm font-medium text-slate-300 mb-8 shadow-sm backdrop-blur-md">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
          </span>
          <span>Open to new opportunities &amp; collaborations</span>
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight">
          Hi, I&apos;m{' '}
          <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
            Yashashwini Yendeti
          </span>
        </h1>

        {/* Hero Subtitle */}
        <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl mb-10 leading-relaxed font-normal">
          Full-Stack Developer crafting modern, high-performance web applications with intuitive design,
          robust architectures, and exceptional digital experiences.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-10">
          <a
            href="https://github.com/YendetiYashashwini"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold shadow-lg shadow-indigo-500/25 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Explore Projects</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>

          <a
            href="mailto:yashashwini1207@gmail.com"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-100 border border-slate-700 hover:border-slate-600 font-semibold transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Get in Touch</span>
          </a>
        </div>

        {/* Prominent Social Links */}
        <div className="w-full max-w-2xl mb-12">
          <p className="text-xs font-semibold tracking-wider uppercase text-slate-400 mb-4">
            Connect &amp; Social Links
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {/* GitHub */}
            <a
              href="https://github.com/YendetiYashashwini"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile: YendetiYashashwini"
              className="group inline-flex items-center gap-3 px-4 py-2.5 rounded-xl bg-slate-900/90 hover:bg-slate-850 border border-slate-700/80 hover:border-slate-500 text-slate-200 hover:text-white transition-all duration-200 shadow-md hover:shadow-indigo-500/10 hover:-translate-y-0.5 active:translate-y-0"
            >
              <div className="p-1.5 rounded-lg bg-slate-800 border border-slate-700 group-hover:border-slate-600 transition-colors">
                <svg
                  className="w-5 h-5 fill-white"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  />
                </svg>
              </div>
              <div className="text-left">
                <span className="block text-xs text-slate-400 group-hover:text-slate-300">GitHub</span>
                <span className="block text-sm font-semibold text-white">YendetiYashashwini</span>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/yashashwini-yendeti-32b305322/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile: Yashashwini Yendeti"
              className="group inline-flex items-center gap-3 px-4 py-2.5 rounded-xl bg-slate-900/90 hover:bg-slate-850 border border-slate-700/80 hover:border-[#0a66c2]/80 text-slate-200 hover:text-white transition-all duration-200 shadow-md hover:shadow-blue-500/10 hover:-translate-y-0.5 active:translate-y-0"
            >
              <div className="p-1.5 rounded-lg bg-slate-800 border border-slate-700 group-hover:border-[#0a66c2]/60 transition-colors">
                <svg
                  className="w-5 h-5 fill-[#0a66c2]"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </div>
              <div className="text-left">
                <span className="block text-xs text-slate-400 group-hover:text-slate-300">LinkedIn</span>
                <span className="block text-sm font-semibold text-white">Yashashwini Yendeti</span>
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:yashashwini1207@gmail.com"
              aria-label="Send email to yashashwini1207@gmail.com"
              className="group inline-flex items-center gap-3 px-4 py-2.5 rounded-xl bg-slate-900/90 hover:bg-slate-850 border border-slate-700/80 hover:border-emerald-500/80 text-slate-200 hover:text-white transition-all duration-200 shadow-md hover:shadow-emerald-500/10 hover:-translate-y-0.5 active:translate-y-0"
            >
              <div className="p-1.5 rounded-lg bg-slate-800 border border-slate-700 group-hover:border-emerald-500/60 transition-colors">
                <svg
                  className="w-5 h-5 text-emerald-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div className="text-left">
                <span className="block text-xs text-slate-400 group-hover:text-slate-300">Email</span>
                <span className="block text-sm font-semibold text-white">yashashwini1207@gmail.com</span>
              </div>
            </a>
          </div>
        </div>

        {/* Tech Stack Pills */}
        <div className="pt-8 border-t border-slate-800/80 w-full flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm text-slate-400">
          <span className="text-slate-500 font-medium">Core Tech:</span>
          {['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Next.js', 'PostgreSQL'].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300 hover:border-slate-750 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
