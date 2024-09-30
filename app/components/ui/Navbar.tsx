'use client';
import { useState } from 'react'
import Link from "next/link"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6 bg-black z-100">
      <Link href="/" className="mr-6 flex items-center" prefetch={false}>
        <span className="ml-2 text-xl font-semibold text-gray-300">R.A. Scheuring</span>
      </Link>
      <button 
        className="lg:hidden ml-auto"
        onClick={toggleMenu}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="text-gray-300" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
        <span className="sr-only">Toggle navigation menu</span>
      </button>
      <nav className={`${isMenuOpen ? 'flex' : 'hidden'} lg:flex flex-col lg:flex-row absolute lg:relative top-20 lg:top-0 left-0 lg:left-auto w-full lg:w-auto bg-gray-100 lg:bg-transparent p-4 lg:p-0 lg:ml-auto gap-4 lg:gap-6`}>
        {['Home', 'Books', 'About', 'Contact'].map((item) => (
          <Link
            key={item}
            href={`/${item.toLowerCase()}`}
            className="text-gray-300 hover:text-yellow-600 font-medium"
            prefetch={false}
            onClick={() => setIsMenuOpen(false)}
          >
            {item}
          </Link>
        ))}
      </nav>
    </header>
  )
}