import { FaEnvelope, FaGithub, FaHandshake, FaLinkedin } from 'react-icons/fa'

const Contact = () => {
  const contactMethods = [
    {
      icon: <FaEnvelope />,
      label: 'Email',
      value: 'manirevathi404@gmail.com',
      href: 'mailto:manirevathi404@gmail.com',
      color: 'text-red-500',
    },
    {
      icon: <FaGithub />,
      label: 'GitHub',
      value: 'github.com/stevekalix',
      href: 'https://github.com/stevekalix',
      color: 'text-gray-800',
    },
    {
      icon: <FaLinkedin />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/manikandan-s-133179364',
      href: 'https://www.linkedin.com/in/manikandan-s-133179364/',
      color: 'text-blue-600',
    },
  ]

  return (
    <section id="contact" className="section-container bg-gradient-to-br from-primary-50 via-white to-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="gradient-text">Let's Connect</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-primary-400 mx-auto mb-8 rounded-full"></div>
        
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
          I'm always open to discussing new projects, creative ideas, or opportunities 
          to be part of your visions. Feel free to reach out!
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.href}
              target={method.href.startsWith('http') ? '_blank' : undefined}
              rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="card text-center hover:scale-105 transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 to-primary-600/0 group-hover:from-primary-500/10 group-hover:to-primary-600/10 transition-all duration-300"></div>
              <div className="relative z-10">
                <div className={`text-5xl ${method.color} mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 inline-block`}>
                  {method.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-primary-600 transition-colors">
                  {method.label}
                </h3>
                <p className="text-gray-600 break-all group-hover:text-gray-800 transition-colors">
                  {method.value}
                </p>
              </div>
            </a>
          ))}

        </div>
        
        <div className="bg-gradient-to-br from-white to-primary-50 rounded-2xl p-8 shadow-xl border border-primary-100">
          <div className="flex items-center justify-center gap-3 mb-4">
            <FaHandshake className="text-primary-600" size={28} />
            <p className="text-gray-800 text-xl font-semibold">
              Ready to collaborate?
            </p>
          </div>
          <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Whether you have a project in mind, want to discuss opportunities, or just 
            want to connect, I'd love to hear from you. Let's build something amazing together!
          </p>
        </div>
        
      </div>
    </section>
  )
}

export default Contact
