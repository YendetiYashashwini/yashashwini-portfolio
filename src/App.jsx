import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-indigo-500/30 selection:text-indigo-200">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <footer className="py-8 px-6 border-t border-slate-900 bg-slate-950 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>&copy; {new Date().getFullYear()} Yashashwini Yendeti. All rights reserved.</p>
          <a
            href="#home"
            className="hover:text-slate-300 transition-colors inline-flex items-center gap-1 font-medium"
          >
            <span>Back to top</span>
            <span aria-hidden="true">&uarr;</span>
          </a>
        </div>
      </footer>
    </div>
  )
}

export default App
