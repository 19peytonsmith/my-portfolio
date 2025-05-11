// components/Navbar.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinks = [
    { name: "About Me", href: "/about-me" },
    { name: "Experience", href: "/experience" },
    { name: "Projects", href: "/projects" },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <nav className="w-full border-b border-gray-200 shadow-md">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <div className="flex justify-between items-center h-24">
          <Link
            href="/"
            className={`text-xl font-bold ${
              isActive("/") ? "text-primary" : "text-secondary"
            } hover:text-primary tracking-widest`}
          >
            Home
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`${
                  isActive(link.href) ? "text-primary" : "text-secondary"
                } hover:text-primary transition tracking-widest`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="/assets/Peyton_Smith_Resume_2025.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-primary transition tracking-widest"
            >
              Resume
            </a>
          </div>

          <button
            className="md:hidden text-secondary focus:outline-none"
            onClick={toggleMenu}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden px-4 pb-4">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`${
                  isActive(link.href) ? "text-primary" : "text-secondary"
                } hover:text-primary transition tracking-widest`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="/assets/Peyton_Smith_Resume_2025.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="text-secondary hover:text-primary transition tracking-widest"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
