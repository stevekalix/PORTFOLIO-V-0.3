import { FaGithub, FaEnvelope, FaChevronDown, FaCode, FaLaptopCode, FaJava } from 'react-icons/fa'
import { SiSpringboot, SiReact } from 'react-icons/si'

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 pt-20 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="section-container relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="text-center md:text-left animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full shadow-md mb-6 animate-slide-up border border-white/20">
              <FaCode className="text-primary-400" size={16} />
              <span className="text-sm font-medium text-white">Third-Year CSE Student</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <span className="bg-gradient-to-r from-white via-primary-200 to-white bg-clip-text text-transparent">
                Manikandan S
              </span>
            </h1>
            
            <div className="flex items-center justify-center md:justify-start gap-3 mb-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <FaLaptopCode className="text-primary-400" size={24} />
              <h2 className="text-2xl md:text-4xl font-semibold text-white">
                Java Full-Stack Developer
              </h2>
            </div>

            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed animate-slide-up" style={{ animationDelay: '0.3s' }}>
              Specializing in building robust full-stack web applications using{' '}
              <span className="font-semibold text-white">Java</span>,{' '}
              <span className="font-semibold text-white">Spring Boot</span>, and{' '}
              <span className="font-semibold text-white">React</span>
            </p>

            {/* Tech Stack Icons */}
            <div className="flex items-center justify-center md:justify-start gap-6 mb-10 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg shadow-md hover:shadow-lg transition-all border border-white/20 hover:bg-white/20">
                <FaJava className="text-orange-400" size={24} />
                <span className="text-sm font-medium text-white">Java</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg shadow-md hover:shadow-lg transition-all border border-white/20 hover:bg-white/20">
                <SiSpringboot className="text-green-400" size={24} />
                <span className="text-sm font-medium text-white">Spring Boot</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg shadow-md hover:shadow-lg transition-all border border-white/20 hover:bg-white/20">
                <SiReact className="text-cyan-400" size={24} />
                <span className="text-sm font-medium text-white">React</span>
              </div>
            </div>
            
            <div className="flex items-center justify-center md:justify-start gap-4 mb-12 animate-slide-up" style={{ animationDelay: '0.5s' }}>
              <a
                href="https://github.com/stevekalix"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-8 py-4 bg-white text-gray-900 rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 font-medium"
              >
                <FaGithub size={20} className="group-hover:rotate-12 transition-transform" />
                <span>GitHub</span>
              </a>
              <a
                href="mailto:manirevathi404@gmail.com"
                className="group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-400 text-white rounded-xl hover:from-primary-600 hover:to-primary-500 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 font-medium"
              >
                <FaEnvelope size={20} className="group-hover:scale-110 transition-transform" />
                <span>Contact Me</span>
              </a>
            </div>

            <a
              href="#about"
              className="inline-block animate-bounce text-primary-400 hover:text-primary-300 transition-colors md:hidden"
              aria-label="Scroll to about section"
            >
              <FaChevronDown size={32} />
            </a>
          </div>

          {/* Right Side - Photo */}
          <div className="flex justify-center md:justify-end animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              {/* Decorative rings */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-400 to-blue-400 opacity-20 blur-2xl animate-pulse"></div>
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-primary-500/30 to-blue-500/30 blur-xl"></div>

              {/* Photo container */}
              <div className="relative z-10">
                {/* Use a rounded rectangle so the full photo is visible, and object-cover to fill without gaps */}
                <div className="w-64 h-64 md:w-80 md:h-96 rounded-2xl overflow-hidden border-4 border-white/10 shadow-2xl bg-gradient-to-br from-primary-400 to-blue-500 p-1">
                  <div className="w-full h-full rounded-lg overflow-hidden bg-slate-800 flex items-center justify-center">
                    <img
                      src="/assets/profile-photo.png"
                      alt="Manikandan S - Full-Stack Developer"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div>
                
                {/* Floating badge */}
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 shadow-lg">
                  <a
                    href="https://github.com/stevekalix"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white hover:text-primary-300 transition-colors"
                  >
                    <FaGithub size={16} />
                    <span className="text-sm font-medium">github.com/stevekalix</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator for desktop */}
        <div className="hidden md:flex justify-center mt-12">
          <a
            href="#about"
            className="inline-block animate-bounce text-primary-400 hover:text-primary-300 transition-colors"
            aria-label="Scroll to about section"
          >
            <FaChevronDown size={32} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
