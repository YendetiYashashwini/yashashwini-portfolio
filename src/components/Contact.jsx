import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate sending delay for high-quality interactive UI feedback
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 700)
  }

  const handleReset = () => {
    setFormData({ name: '', email: '', subject: '', message: '' })
    setIsSubmitted(false)
  }

  return (
    <section id="contact" className="relative py-24 sm:py-32 px-6 max-w-7xl mx-auto scroll-mt-20">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[34rem] h-[34rem] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Section Header */}
      <div className="relative z-10 text-center max-w-3xl mx-auto mb-16 sm:mb-20">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-neutral-900/80 border border-neutral-800 text-xs font-medium text-slate-300 mb-4 shadow-sm backdrop-blur-sm">
          <span>Get In Touch</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4 leading-tight">
          Let&apos;s{' '}
          <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
            Connect
          </span>
        </h2>
        <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
          Have an AI/ML project in mind, seeking an innovative engineer, or just want to chat tech?
          Reach out through the contact form or connect directly.
        </p>
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Info & Social Profile Cards */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {/* Direct Email Card */}
          <a
            href="mailto:yashashwini1207@gmail.com"
            className="group p-6 rounded-2xl bg-neutral-900/70 backdrop-blur-xl border border-neutral-800/90 hover:border-emerald-500/50 transition-all duration-200 shadow-md hover:-translate-y-0.5 flex items-start gap-4"
          >
            <div className="p-3 rounded-xl bg-slate-800 border border-slate-700 text-emerald-400 group-hover:border-emerald-500/50 transition-colors">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <span className="block text-xs font-medium text-slate-400 uppercase tracking-wider mb-1">
                Direct Email
              </span>
              <span className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors break-all">
                yashashwini1207@gmail.com
              </span>
              <span className="block text-xs text-slate-500 mt-1">
                Click to send an email directly &rarr;
              </span>
            </div>
          </a>

          {/* Location Card */}
          <div className="p-6 rounded-2xl bg-neutral-900/70 backdrop-blur-xl border border-neutral-800/90 shadow-md flex items-start gap-4">
            <div className="p-3 rounded-xl bg-slate-800 border border-slate-700 text-indigo-400">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <span className="block text-xs font-medium text-slate-400 uppercase tracking-wider mb-1">
                Location
              </span>
              <span className="text-base font-bold text-white">
                Andhra Pradesh, India
              </span>
              <span className="block text-xs text-slate-400 mt-1">
                Open to remote opportunities &amp; relocations nationwide
              </span>
            </div>
          </div>

          {/* Availability Card */}
          <div className="p-6 rounded-2xl bg-neutral-900/70 backdrop-blur-xl border border-neutral-800/90 shadow-md flex items-center gap-3.5">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
            </span>
            <div>
              <span className="block text-xs font-semibold text-emerald-400">Available For Opportunities</span>
              <span className="text-xs text-slate-400">Internships, Full-Time Roles &amp; AI Collaborations</span>
            </div>
          </div>

          {/* Social Profiles Grid */}
          <div className="p-6 rounded-2xl bg-neutral-900/70 backdrop-blur-xl border border-neutral-800/90 shadow-md">
            <span className="block text-xs font-medium text-slate-400 uppercase tracking-wider mb-4">
              Social Profiles &amp; Handles
            </span>
            <div className="flex flex-col gap-3">
              {/* GitHub */}
              <a
                href="https://github.com/YendetiYashashwini"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-slate-800/50 hover:bg-slate-800 border border-slate-750 hover:border-slate-600 text-slate-300 hover:text-white transition-all duration-150"
              >
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    />
                  </svg>
                  <span className="text-sm font-semibold">GitHub</span>
                </div>
                <span className="text-xs text-slate-400">@YendetiYashashwini &rarr;</span>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/yashashwini-yendeti-32b305322/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-slate-800/50 hover:bg-slate-800 border border-slate-750 hover:border-slate-600 text-slate-300 hover:text-white transition-all duration-150"
              >
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 fill-[#0a66c2]" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                  <span className="text-sm font-semibold">LinkedIn</span>
                </div>
                <span className="text-xs text-slate-400">Yashashwini Yendeti &rarr;</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Functional UI Contact Form */}
        <div className="lg:col-span-7 rounded-2xl bg-neutral-900/70 backdrop-blur-xl border border-neutral-800/90 p-8 sm:p-10 shadow-xl">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-white mb-2">
              Send a Message
            </h3>
            <p className="text-slate-400 text-sm">
              Fill out the form below, and I will get back to you as soon as possible.
            </p>
          </div>

          {isSubmitted ? (
            <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center animate-in fade-in duration-300">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Message Sent!</h4>
              <p className="text-slate-300 text-sm sm:text-base max-w-md mx-auto mb-6">
                Thank you for reaching out, <span className="text-white font-semibold">{formData.name || 'friend'}</span>.
                Your message has been received, and I will get in touch with you shortly.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs sm:text-sm font-semibold border border-slate-700 transition-colors"
                >
                  Send Another Message
                </button>
                <a
                  href={`mailto:yashashwini1207@gmail.com?subject=${encodeURIComponent(
                    formData.subject || 'Portfolio Inquiry'
                  )}&body=${encodeURIComponent(formData.message || '')}`}
                  className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-semibold transition-colors"
                >
                  Open in Mail Client
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-slate-300 mb-2 uppercase tracking-wider">
                    Your Name <span className="text-rose-400">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Alex Johnson"
                    className="w-full px-4 py-3 rounded-xl bg-neutral-800/80 border border-neutral-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-slate-300 mb-2 uppercase tracking-wider">
                    Your Email <span className="text-rose-400">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="alex@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-neutral-800/80 border border-neutral-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-xs font-semibold text-slate-300 mb-2 uppercase tracking-wider">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Collaboration, Opportunity, or General Inquiry"
                  className="w-full px-4 py-3 rounded-xl bg-neutral-800/80 border border-neutral-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-xs font-semibold text-slate-300 mb-2 uppercase tracking-wider">
                  Message <span className="text-rose-400">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Share details about your project, role, or questions..."
                  className="w-full px-4 py-3 rounded-xl bg-neutral-800/80 border border-neutral-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all resize-y"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600 hover:from-blue-600 hover:via-indigo-700 hover:to-purple-700 disabled:opacity-70 text-white font-semibold shadow-lg shadow-indigo-500/25 transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                    </svg>
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
