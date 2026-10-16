const projects = [
  {
    id: 'skillproof-ai',
    title: 'SkillProof AI',
    tag: 'Full Stack AI',
    tagColor: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30',
    borderGlow: 'hover:border-purple-500/50 hover:shadow-purple-500/10',
    description:
      'Interactive AI-powered skill verification platform that evaluates proof of work and code authentications.',
    techStack: ['Python', 'Streamlit', 'Gemini API', 'GitHub API'],
    githubUrl: 'https://github.com/YendetiYashashwini/skillproof-ai',
    liveUrl: 'https://skillproof-ai-zeue8qodmaqwhljpd5y6ym.streamlit.app/',
  },
  {
    id: 'ai-food-ordering-agent',
    title: 'AI Food Ordering Agent',
    tag: 'AI Agent',
    tagColor: 'bg-purple-500/10 text-purple-300 border-purple-500/30',
    borderGlow: 'hover:border-amber-500/50 hover:shadow-amber-500/10',
    description:
      'Autonomous conversational agent designed for natural language food ordering, custom workflow handling, and automated cart management.',
    techStack: ['Python', 'Streamlit', 'Gemini API', 'Agents'],
    githubUrl: 'https://github.com/YendetiYashashwini/ai-food-ordering-agent',
    liveUrl: 'https://ai-food-ordering-agent-j4fsccrafjyscp2h7cvkp9.streamlit.app/',
  },
  {
    id: 'sih-gov-grievance-ai',
    title: 'SIH GovGrievance AI',
    tag: 'Hackathon Project',
    tagColor: 'bg-amber-500/10 text-amber-300 border-amber-500/30',
    borderGlow: 'hover:border-purple-500/50 hover:shadow-purple-500/10',
    description:
      'Smart grievance routing and priority analysis system designed for public sector grievance management.',
    techStack: ['AI Classifiers', 'Natural Language Processing', 'Web App'],
    githubUrl: null, // Do not render GitHub button for this project
    liveUrl: 'https://govgrievai-uge4h4ip.manus.space/',
  },
  {
    id: 'intelligent-candidate-ranking',
    title: 'Intelligent Candidate Ranking System (INDIA RUNS Hackathon)',
    tag: 'Hackathon Project',
    tagColor: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30',
    borderGlow: 'hover:border-amber-500/50 hover:shadow-amber-500/10',
    description:
      'Advanced candidate evaluation and intelligence system designed for automated resume parsing and candidate ranking workflows.',
    techStack: ['Python', 'Hugging Face', 'NLP', 'Machine Learning'],
    githubUrl: 'https://github.com/bhanuxai/RedRobCandidateRanking-IndiaRuns',
    liveUrl: 'https://huggingface.co/spaces/BhanuXai/redrob-ai-candidate-intelligence',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32 px-6 max-w-7xl mx-auto scroll-mt-20">
      {/* Background ambient decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[38rem] h-[38rem] bg-gradient-to-tr from-purple-600/10 via-amber-500/5 to-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Section Header */}
      <div className="relative z-10 text-center max-w-3xl mx-auto mb-16 sm:mb-20">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-neutral-900/80 border border-neutral-800 text-xs font-medium text-amber-300 mb-4 shadow-sm backdrop-blur-sm">
          <span>Production &amp; Prototypes</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-5 leading-tight">
          Featured{' '}
          <span className="bg-gradient-to-r from-amber-400 via-rose-400 to-purple-400 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(251,191,36,0.25)]">
            Projects
          </span>
        </h2>
        <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
          Proof-of-work and deployed AI solutions showcasing autonomous agentic systems,
          scalable machine learning pipelines, and modern full-stack web applications.
        </p>
      </div>

      {/* Project Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`group relative rounded-2xl bg-neutral-900/70 backdrop-blur-xl border border-neutral-800/90 ${project.borderGlow} p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 overflow-hidden`}
          >
            {/* Subtle card glow overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            <div className="relative z-10">
              {/* Tag / Category Badge */}
              <div className="flex items-center justify-between gap-4 mb-4">
                <span
                  className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${project.tagColor}`}
                >
                  {project.tag}
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-amber-200 transition-colors">
                {project.title}
              </h3>
              <p className="text-neutral-400 text-sm sm:text-base leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs font-medium rounded-md bg-neutral-800/90 text-neutral-300 border border-neutral-750"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Links */}
            <div className="relative z-10 pt-5 border-t border-neutral-800/80 flex items-center justify-between gap-3">
              <div>
                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View GitHub repository for ${project.title}`}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-neutral-800/90 hover:bg-neutral-800 text-neutral-200 hover:text-white text-xs sm:text-sm font-medium border border-neutral-700/80 hover:border-neutral-600 transition-all duration-200 shadow-sm"
                  >
                    <svg className="w-4 h-4 fill-current text-white" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      />
                    </svg>
                    <span>GitHub</span>
                  </a>
                ) : null}
              </div>

              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View live demo for ${project.title}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 via-rose-500 to-purple-600 hover:from-amber-600 hover:via-rose-600 hover:to-purple-700 text-white text-xs sm:text-sm font-semibold shadow-md shadow-purple-500/20 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] ml-auto"
                >
                  <span>Live Demo</span>
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
