"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Phone } from "lucide-react"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const phoneNumber = "+201024383203"
  const displayNumber = "0102 4383 203"

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#home", label: "IL Monte Galala" },
    { href: "#about", label: "نبذة عن المشروع" },
    { href: "#location", label: "الموقع" },
    { href: "#units", label: "الوحدات" },
    { href: "#payment", label: "الأسعار" },
    { href: "#amenities", label: "المميزات" },
    { href: "#gallery", label: "معرض الصور" },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-black/40 backdrop-blur-sm"}`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="#home">
            <Image src="/logo.png" alt="IL Monte Galala" width={120} height={40} className="h-10 w-auto" />
          </a>

          <nav className="hidden lg:flex items-center gap-5">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}
                className="text-sm font-medium text-white hover:text-primary transition-colors duration-200">
                {link.label}
              </a>
            ))}
          </nav>

          <a href={`tel:${phoneNumber}`}
            className="hidden lg:flex items-center gap-2 bg-primary text-white px-4 py-2 text-sm font-semibold hover:bg-primary/90 transition-colors">
            <Phone className="h-4 w-4" />
            {displayNumber}
          </a>

          <button className="lg:hidden p-2 text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden bg-background border-t border-border py-4">
            <nav className="flex flex-col">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href}
                  className="text-sm font-medium py-3 px-4 border-b border-border/50 hover:text-primary hover:bg-muted/30 transition-colors"
                  onClick={() => setIsMenuOpen(false)}>
                  {link.label}
                </a>
              ))}
              <a href={`tel:${phoneNumber}`}
                className="flex items-center gap-2 text-sm font-semibold text-primary py-3 px-4 mt-2">
                <Phone className="h-4 w-4" />
                {displayNumber}
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
