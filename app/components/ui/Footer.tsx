import Link from 'next/link'
import { FaTwitter, FaFacebook } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-black backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mt-4 mb-4 md:mb-0">
            <span className="text-2xl font-bold text-yellow-600">R.A. Scheuring</span>
            <p className="mt-2 text-sm">Author of The DRYP Trilogy</p>
          </div>
          <nav className="flex space-x-6">
            <Link 
              href="http://twitter.com/rascheuring" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-yellow-600 transition-colors duration-200"
            >
              <FaTwitter className="w-6 h-6" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link 
              href="https://www.facebook.com/rascheuring/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-yellow-600 transition-colors duration-200"
            >
              <FaFacebook className="w-6 h-6" />
              <span className="sr-only">Facebook</span>
            </Link>
          </nav>
        </div>
        <div className="mt-10 border-t border-gray-800 pt-8 pb-4 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} R.A. Scheuring. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}