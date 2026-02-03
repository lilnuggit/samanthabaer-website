'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect, useRef } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/podcast', label: 'Podcast' },
  { href: '/courses', label: 'Courses' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const menuRef = useRef<HTMLDivElement>(null)

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <nav className="bg-charcoal/95 backdrop-blur-sm text-white fixed top-0 left-0 right-0 z-50 border-b border-cream/[0.06]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center h-[72px]">
          {/* Logo */}
          <Link
            href="/"
            className="text-[22px] font-serif font-semibold tracking-[0.15em] text-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          >
            SAMANTHA BAER
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[13px] uppercase tracking-[0.08em] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
                  isActive(link.href)
                    ? 'text-gold'
                    : 'text-cream/70 hover:text-cream'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/login"
              className="bg-gold text-deep px-5 py-2.5 text-[13px] uppercase tracking-[0.06em] font-medium hover:bg-cream transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal"
              style={{ touchAction: 'manipulation' }}
            >
              Sign In
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-cream p-2 -mr-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            style={{ touchAction: 'manipulation' }}
          >
            {isOpen ? (
              <X size={24} aria-hidden="true" />
            ) : (
              <Menu size={24} aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation — slide-down with fade */}
      <div
        ref={menuRef}
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
        aria-hidden={!isOpen}
      >
        <div className="px-6 pb-8 pt-2 border-t border-cream/[0.06] bg-charcoal">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block py-3.5 text-[15px] tracking-wide transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
                isActive(link.href)
                  ? 'text-gold'
                  : 'text-cream/70 hover:text-cream'
              }`}
              onClick={() => setIsOpen(false)}
              style={{ touchAction: 'manipulation' }}
            >
              {link.label}
            </Link>
          ))}

          {/* Gold accent line */}
          <div className="h-px bg-gold/20 my-4" aria-hidden="true" />

          <Link
            href="/login"
            className="block mt-2 bg-gold text-deep px-4 py-3.5 text-center text-[14px] uppercase tracking-[0.06em] font-medium hover:bg-cream transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream"
            onClick={() => setIsOpen(false)}
            style={{ touchAction: 'manipulation' }}
          >
            Sign In
          </Link>
        </div>
      </div>
    </nav>
  )
}
