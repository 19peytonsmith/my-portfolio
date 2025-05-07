// components/Navbar.tsx
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)

  const navLinks = [
    { name: 'About Me', href: '/about-me' },
    { name: 'Experience', href: '/experience' },
    { name: 'Projects', href: '/projects' },
  ]

  return (
    <nav className="w-full border-b border-gray-200 bg-white shadow-md">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left: Home */}
          <Link href="/" className="text-xl font-bold text-gray-900">
            Home
          </Link>

          {/* Right: Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-blue-600 transition"
              >
                {link.name}
              </Link>
            ))}
            {/* Resume Link as external */}
            <a
              href="/assets/Peyton_Smith_Resume_2025.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Resume
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={toggleMenu}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-gray-700 hover:text-blue-600 transition"
              >
                {link.name}
              </Link>
            ))}
            <a
              href="/assets/Peyton_Smith_Resume_2025.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
