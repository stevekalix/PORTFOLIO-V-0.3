import {
  FaJava,
  FaReact,
  FaDocker,
  FaGithub,
  FaPython,
} from 'react-icons/fa'
import { SiSpringboot, SiMysql, SiHtml5, SiNetlify, SiVercel, SiDart } from 'react-icons/si'

interface SkillCategory {
  title: string
  skills: {
    name: string
    icon: React.ReactNode
    color: string
  }[]
}

const Skills = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Backend Development',
      skills: [
        { name: 'Java', icon: <FaJava />, color: 'text-orange-500' },
        { name: 'Spring Boot', icon: <SiSpringboot />, color: 'text-green-500' },
        { name: 'Microservices', icon: <SiSpringboot />, color: 'text-green-600' },
        { name: 'REST APIs', icon: <FaJava />, color: 'text-blue-500' },
      ],
    },
    {
      title: 'Frontend Development',
      skills: [
        { name: 'React', icon: <FaReact />, color: 'text-cyan-500' },
        { name: 'HTML5', icon: <SiHtml5 />, color: 'text-orange-500' },
      ],
    },
    {
      title: 'Database & Querying',
      skills: [
        { name: 'MySQL', icon: <SiMysql />, color: 'text-blue-600' },
        { name: 'SQL', icon: <SiMysql />, color: 'text-blue-500' },
      ],
    },
    {
      title: 'Tools & Platforms',
      skills: [
        { name: 'GitHub', icon: <FaGithub />, color: 'text-gray-800' },
        { name: 'Netlify', icon: <SiNetlify />, color: 'text-teal-500' },
        { name: 'Vercel', icon: <SiVercel />, color: 'text-black' },
        { name: 'Docker', icon: <FaDocker />, color: 'text-blue-500' },
      ],
    },
    {
      title: 'Additional Skills',
      skills: [
        { name: 'Python', icon: <FaPython />, color: 'text-yellow-500' },
        { name: 'NumPy', icon: <FaPython />, color: 'text-blue-600' },
        { name: 'Pandas', icon: <FaPython />, color: 'text-red-500' },
        { name: 'Dart', icon: <SiDart />, color: 'text-blue-400' },
      ],
    },
  ]

  return (
    <section id="skills" className="section-container bg-gradient-to-br from-gray-50 to-primary-50">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
        <span className="gradient-text">Skills & Technologies</span>
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-primary-400 mx-auto mb-16 rounded-full"></div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, categoryIndex) => (
          <div
            key={categoryIndex}
            className="card group hover:scale-105 transition-all duration-300 animate-slide-up"
            style={{ animationDelay: `${categoryIndex * 0.1}s` }}
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-6 pb-3 border-b border-gray-200 group-hover:border-primary-300 transition-colors">
              {category.title}
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {category.skills.map((skill, skillIndex) => (
                <div
                  key={skillIndex}
                  className="flex flex-col items-center p-4 bg-gradient-to-br from-gray-50 to-white rounded-xl hover:from-primary-50 hover:to-primary-100 transition-all duration-300 hover:scale-110 hover:shadow-md cursor-default"
                >
                  <div className={`text-4xl mb-3 ${skill.color} transform group-hover:scale-110 transition-transform duration-300`}>
                    {skill.icon}
                  </div>
                  <span className="text-sm font-semibold text-gray-700 text-center group-hover:text-gray-900">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
