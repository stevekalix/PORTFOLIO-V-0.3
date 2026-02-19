import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { SiSpringboot, SiReact, SiDart } from 'react-icons/si'

interface Project {
  title: string
  description: string
  technologies: string[]
  icon: React.ReactNode
  githubUrl?: string
  liveUrl?: string
  color: string
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: 'Inventory Management System',
      description:
        'A comprehensive Spring Boot application designed to track and manage inventory with advanced stock-level monitoring and reporting features. Built with robust backend architecture for efficient inventory operations.',
      technologies: ['Spring Boot', 'Java', 'MySQL', 'REST APIs'],
      icon: <SiSpringboot />,
      color: 'text-green-500',
    },
    {
      title: 'Microservices with Spring Boot',
      description:
        'A distributed application demonstrating scalable microservices architecture. This project showcases best practices in building resilient, scalable systems using Spring Boot microservices pattern.',
      technologies: ['Spring Boot', 'Microservices', 'Java', 'Docker'],
      icon: <SiSpringboot />,
      color: 'text-green-600',
    },
    {
      title: 'React-Spring Boot CRUD App',
      description:
        'A full-stack application featuring a modern React frontend seamlessly integrated with a Spring Boot backend. Demonstrates complete CRUD operations with a beautiful, responsive user interface.',
      technologies: ['React', 'Spring Boot', 'REST APIs', 'MySQL'],
      icon: <SiReact />,
      color: 'text-cyan-500',
    },
    {
      title: 'Travel App (Timely Travel)',
      description:
        'A Dart-based mobile application for travel planning and management. Features intuitive UI for planning trips, managing itineraries, and organizing travel-related information efficiently.',
      technologies: ['Dart', 'Flutter', 'Mobile Development'],
      icon: <SiDart />,
      color: 'text-blue-400',
    },
  ]

  return (
    <section id="projects" className="section-container bg-gradient-to-br from-gray-50 to-primary-50">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
        <span className="gradient-text">Featured Projects</span>
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-primary-400 mx-auto mb-16 rounded-full"></div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="card group hover:scale-[1.02] transition-all duration-300 relative overflow-hidden"
          >
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 to-primary-600/0 group-hover:from-primary-500/5 group-hover:to-primary-600/5 transition-all duration-300 pointer-events-none"></div>
            
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-6">
                <div className={`text-5xl ${project.color} mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                  {project.icon}
                </div>
                <div className="flex gap-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-gray-600 hover:text-white hover:bg-gray-900 rounded-lg transition-all duration-300"
                      aria-label="View on GitHub"
                    >
                      <FaGithub size={20} />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-gray-600 hover:text-white hover:bg-primary-600 rounded-lg transition-all duration-300"
                      aria-label="View live site"
                    >
                      <FaExternalLinkAlt size={18} />
                    </a>
                  )}
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-primary-600 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1.5 bg-gradient-to-r from-primary-100 to-primary-50 text-primary-700 rounded-lg text-sm font-medium border border-primary-200 group-hover:border-primary-300 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
