import { FaGithub, FaLinkedin, FaEnvelope, FaChevronUp } from 'react-icons/fa'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-gray-200 py-8">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <a href="mailto:manirevathi404@gmail.com" className="text-gray-200 hover:text-white transition-colors">
              <FaEnvelope size={20} />
            </a>
            <a href="https://github.com/stevekalix" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-white transition-colors">
              <FaGithub size={20} />
            </a>
            <a href="https://www.linkedin.com/in/manikandan-s-133179364/" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-white transition-colors">
              <FaLinkedin size={20} />
            </a>
            <a href="https://leetcode.com/u/Manikandan334/" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-white transition-colors text-sm font-medium ml-2">
              LeetCode
            </a>
            <a href="#projects" className="text-gray-200 hover:text-white transition-colors text-sm font-medium ml-2">
              Cross-Platform
            </a>
          </div>

          <div className="flex items-center gap-4">
            <p className="text-sm">© {year} <span className="font-semibold">Manikandan S</span></p>
            <p className="hidden md:block text-sm text-gray-400">Built with React, TypeScript, Vite & Tailwind CSS</p>
            <a href="#top" className="ml-4 inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary-500 text-white hover:bg-primary-600 transition-colors" aria-label="Back to top">
              <FaChevronUp />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
