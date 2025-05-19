// components/Navbar.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";

import { motion, AnimatePresence } from "framer-motion";

import IconWrapper from "@/components/IconWrapper";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const menuRef = useRef<HTMLDivElement>(null);

  // Close the menu when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  // Close the menu when the window is resized to md breakpoint or higher
  // This is a workaround for the issue where the menu doesn't close when resizing
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        // md breakpoint or higher
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { setTheme, theme, systemTheme } = useTheme();

  const currentTheme = theme === "system" ? systemTheme : theme;
  const isDark = currentTheme === "dark";

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinks = [
    { name: "About Me", href: "/about-me" },
    { name: "Experience", href: "/experience" },
    { name: "Projects", href: "/projects" },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <nav className="w-full border-b border-menu-border shadow-md">
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

          <div className="hidden md:flex items-center gap-6">
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
          </div>

          <div className="flex items-center gap-6 relative">
            <button
              onClick={() => setTheme(isDark ? "light" : "dark")}
              className="transition-colors duration-1000 hover:text-primary"
              aria-label="Toggle Theme"
            >
              {mounted &&
                (isDark ? (
                  <IconWrapper Icon={Sun} />
                ) : (
                  <IconWrapper Icon={Moon} />
                ))}
            </button>
            <a
              href="/assets/Peyton_Smith_Resume_2025.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex text-secondary hover:text-primary transition tracking-widest resume"
            >
              Resume
            </a>
            <button
              className="md:hidden text-secondary focus:outline-none"
              onClick={toggleMenu}
            >
              <IconWrapper Icon={Menu} />
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            ref={menuRef}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 right-0 w-64 bg-mobile-menu border-l border-b border-menu-border shadow-md p-6 md:hidden z-50"
          >
            <div className="flex flex-col gap-8">
              <div className="flex justify-end mb-4">
                <div onClick={toggleMenu} className="cursor-pointer">
                  <IconWrapper Icon={X} />
                </div>
              </div>{" "}
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`${
                    isActive(link.href) ? "text-primary" : "text-secondary"
                  } hover:text-primary transition tracking-widest text-xl`}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="/assets/Peyton_Smith_Resume_2025.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="text-secondary hover:text-primary transition tracking-widest text-xl w-max mx-auto resume mt-4"
              >
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
