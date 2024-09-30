'use client';
import { useState } from 'react'
import Link from "next/link"
import { motion } from "framer-motion"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const menuItems = ['Home', 'Books', 'About', 'Contact']

  return (
    <header className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center" prefetch={false}>
            <span className="text-xl font-bold text-yellow-600">R.A. Scheuring</span>
          </Link>
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-yellow-600 transition-colors duration-200"
                prefetch={false}
              >
                {item}
              </Link>
            ))}
          </nav>
          <button 
            className="md:hidden text-gray-300 hover:text-yellow-600 transition-colors duration-200"
            onClick={toggleMenu}
          >
            <span className="sr-only">Toggle navigation menu</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="md:hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-yellow-600 hover:bg-gray-900 transition-colors duration-200"
                prefetch={false}
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  )
}