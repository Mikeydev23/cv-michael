import { useState } from 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="text-xl font-bold text-gray-900">Michael</div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">About</a>
              <a href="#projects" className="text-gray-600 hover:text-gray-900 transition-colors">Projects</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <a href="#about" className="block py-2 text-gray-600 hover:text-gray-900">About</a>
              <a href="#projects" className="block py-2 text-gray-600 hover:text-gray-900">Projects</a>
              <a href="#contact" className="block py-2 text-gray-600 hover:text-gray-900">Contact</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Welcome to My Portfolio
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            I'm Michael, a passionate developer creating modern web experiences.
            Let's build something amazing together.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="#projects"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">About Me</h2>
          <div className="max-w-3xl mx-auto text-gray-600 leading-relaxed">
            <p>
              Hello! I'm Michael, a software developer with a passion for building beautiful and functional web applications.
              This is a placeholder for your about section - feel free to customize it with your own story,
              skills, and experience.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Project Card Placeholder */}
            {[1, 2, 3].map((project) => (
              <div key={project} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gray-200"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Project {project}</h3>
                  <p className="text-gray-600 mb-4">
                    A brief description of this project goes here. Highlight the technologies used and key features.
                  </p>
                  <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
                    Learn More →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Get In Touch</h2>
          <div className="max-w-md mx-auto text-center">
            <p className="text-gray-600 mb-6">
              Have a question or want to work together? I'd love to hear from you!
            </p>
            <a
              href="mailto:michael@example.com"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Send Me an Email
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Michael. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
