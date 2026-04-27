import { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar({ darkMode, toggleDarkMode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-lg transition-colors duration-300">
      <div className="container mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <span className="text-3xl">🏎️</span>
          <span className="text-xl md:text-2xl font-bold text-ferrari-red">FerrariShowcase</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="relative hover:text-ferrari-red transition-colors duration-300 font-medium after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-ferrari-red after:transition-all after:duration-300 hover:after:w-full">
            Home
          </Link>
          <Link to="/cars" className="relative hover:text-ferrari-red transition-colors duration-300 font-medium after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-ferrari-red after:transition-all after:duration-300 hover:after:w-full">
            Cars
          </Link>
          <Link to="/about" className="relative hover:text-ferrari-red transition-colors duration-300 font-medium after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-ferrari-red after:transition-all after:duration-300 hover:after:w-full">
            About
          </Link>
          <Link to="/contact" className="relative hover:text-ferrari-red transition-colors duration-300 font-medium after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-ferrari-red after:transition-all after:duration-300 hover:after:w-full">
            Contact
          </Link>
        </div>

        {/* Dark Mode Toggle & Mobile Menu */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
            title="Toggle dark mode"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 border-t dark:border-gray-700 py-4 px-6">
          <div className="flex flex-col gap-4">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-ferrari-red transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              to="/cars"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-ferrari-red transition-colors font-medium"
            >
              Cars
            </Link>
            <Link
              to="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-ferrari-red transition-colors font-medium"
            >
              About
            </Link>
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-ferrari-red transition-colors font-medium"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
