import { useState } from "react"
import { Link } from "react-router-dom"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [language, setLanguage] = useState("EN")
  const [showUserMenu, setShowUserMenu] = useState(false)

  const toggleLanguage = () => {
    setLanguage(language === "EN" ? "VI" : "EN")
  }

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur shadow-sm">
      <nav className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo/Name on the left */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-indigo-500 to-pink-500 flex items-center justify-center text-white font-bold">B</div>
            <div>
              <h2 className=" font-bold">BASE</h2>
              <p className="text-xs text-gray-500">Brightway After School Education</p>
            </div>
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden inline-flex items-center p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setOpen(v => !v)}
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor">
              <path strokeWidth="2" d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>

          {/* Desktop menu on the right */}
          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-gray-700 hover:text-indigo-600 transition-colors">
              Home
            </Link>
            <Link to="/courses" className="text-gray-700 hover:text-indigo-600 transition-colors">
              Courses
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-indigo-600 transition-colors">
              Contact
            </Link>
            <Link to="/subscription" className="text-gray-700 hover:text-indigo-600 transition-colors">
              Subscription
            </Link>

            {/* Language toggle button */}
            <button 
              onClick={toggleLanguage}
              className="text-sm px-3 py-1 rounded-md border border-gray-300 hover:bg-gray-50 transition-colors"
            >
              {language}
            </button>

            {/* User avatar with dropdown menu */}
            <div className="relative">
              <button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="flex items-center p-1 rounded-full hover:bg-gray-100 transition-colors"
              >
                <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white text-sm font-medium">
                  U
                </div>
              </button>
              
              {showUserMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="py-1">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Profile
                    </a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Settings
                    </a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Sign out
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden pb-4 space-y-2">
            <Link to="/" className="block px-2 py-2 rounded hover:bg-gray-100">
              Home
            </Link>
            <Link to="/courses" className="block px-2 py-2 rounded hover:bg-gray-100">
              Courses
            </Link>
            <Link to="/contact" className="block px-2 py-2 rounded hover:bg-gray-100">
              Contact
            </Link>
            <Link to="/subscription" className="block px-2 py-2 rounded hover:bg-gray-100">
              Subscription
            </Link>
            
            <div className="flex gap-2 px-2 pt-2">
              <button 
                onClick={toggleLanguage}
                className="text-sm px-3 py-1 rounded-md border border-gray-300 hover:bg-gray-50"
              >
                {language}
              </button>
              <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white text-sm font-medium">
                U
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
