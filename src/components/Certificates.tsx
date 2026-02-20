import { FaFilePdf } from 'react-icons/fa'

const Certificates = () => {
  return (
    <section id="certificates" className="section-container bg-gradient-to-br from-gray-50 to-primary-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="gradient-text">Certificates</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-primary-400 mx-auto mb-8 rounded-full"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <a
            href="/assets/nptl.certificate.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
            className="card text-center hover:scale-105 transition-all duration-300 group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 to-primary-600/0 group-hover:from-primary-500/10 group-hover:to-primary-600/10 transition-all duration-300"></div>
            <div className="relative z-10">
              <div className="text-5xl text-red-500 mb-4 group-hover:scale-110 transition-all duration-300 inline-block">
                <FaFilePdf />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-primary-600 transition-colors">
                NPTEL Certificate
              </h3>
              <p className="text-gray-600 group-hover:text-gray-800 transition-colors">
                Download the NPTEL certificate (PDF)
              </p>
              <span className="inline-block mt-4 px-4 py-2 bg-primary-50 text-primary-600 rounded-full text-sm font-medium">
                Download Certificate
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Certificates
