import { FaGraduationCap, FaLightbulb, FaRocket, FaServer, FaBrain } from 'react-icons/fa'

const About = () => {
  return (
    <section id="about" className="section-container bg-gradient-to-br from-gray-50 to-primary-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="gradient-text">About Me</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-primary-400 mx-auto mb-12 rounded-full"></div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                <FaGraduationCap className="text-primary-600" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Education</h3>
                <p className="text-gray-700 leading-relaxed">
                  Third-year Computer Science and Engineering student at{' '}
                  <span className="font-semibold text-primary-600">Karpagam Institute of Technology</span>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                <FaLightbulb className="text-primary-600" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Passion</h3>
                <p className="text-gray-700 leading-relaxed">
                  I specialize in building robust full-stack web applications using Java, Spring Boot,
                  React, and MySQL. I'm also passionate about DevOps practices — containerization with
                  <span className="font-semibold text-primary-600"> Docker</span>, orchestration with
                  <span className="font-semibold text-primary-600"> Kubernetes</span>, CI/CD automation,
                  and infrastructure-as-code (Terraform). I enjoy automating workflows, improving
                  deployment reliability, and learning cloud-native architectures.
                </p>

                <p className="text-gray-700 leading-relaxed mt-3">
                  I also build cross-platform mobile apps using <span className="font-semibold text-primary-600">Dart</span> and
                  <span className="font-semibold text-primary-600"> Flutter</span>. Check out the
                  <a href="#projects" className="font-semibold text-primary-600 hover:underline ml-1"> Travel App</a> in the Projects section.
                </p>

                <p className="text-gray-700 leading-relaxed mt-3">
                  I also have strong problem-solving skills and regularly practice algorithmic challenges on
                  <a
                    href="https://leetcode.com/u/Manikandan334/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-primary-600 hover:underline ml-1"
                  >LeetCode</a> to sharpen my skills.
                </p>

              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-2xl p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <FaRocket className="text-primary-600" size={24} />
              <h3 className="text-2xl font-semibold text-gray-800">My Mission</h3>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              I am eager to contribute to innovative projects, grow as a developer, and collaborate
              with like-minded professionals.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Whether it's building scalable microservices, creating beautiful user interfaces, or
              solving complex problems, I'm always ready for new challenges.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mt-8">
          <div className="card text-center hover:scale-105 transition-transform duration-300">
            <div className="text-4xl text-primary-600 mb-3">🚀</div>
            <h4 className="font-semibold text-gray-800 mb-2">Full-Stack Development</h4>
            <p className="text-sm text-gray-600">
              End-to-end application development from backend to frontend
            </p>
          </div>
          <div className="card text-center hover:scale-105 transition-transform duration-300">
            <div className="text-4xl text-primary-600 mb-3">⚡</div>
            <h4 className="font-semibold text-gray-800 mb-2">Microservices Architecture</h4>
            <p className="text-sm text-gray-600">
              Building scalable and distributed systems
            </p>
          </div>
          <div className="card text-center hover:scale-105 transition-transform duration-300">
            <div className="flex items-center justify-center text-4xl text-primary-600 mb-3">
              <FaServer />
            </div>
            <h4 className="font-semibold text-gray-800 mb-2">DevOps &amp; CI/CD</h4>
            <p className="text-sm text-gray-600">
              Containerization, orchestration, automation, and cloud infrastructure
            </p>
          </div>

          <a
            href="https://leetcode.com/u/Manikandan334/"
            target="_blank"
            rel="noopener noreferrer"
            className="card text-center hover:scale-105 transition-transform duration-300 group"
          >
            <div className="text-4xl text-primary-600 mb-3 flex items-center justify-center">
              <FaBrain />
            </div>
            <h4 className="font-semibold text-gray-800 mb-2">Problem Solving</h4>
            <p className="text-sm text-gray-600 mb-3">
              Algorithmic problem solving and competitive programming practice
            </p>
            <span className="inline-block px-4 py-2 bg-primary-50 text-primary-600 rounded-full text-sm font-medium">
              View LeetCode
            </span>
          </a>

        </div>
      </div>
    </section>
  )
}

export default About
