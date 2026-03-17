"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const open = () => { setMenuOpen(true); document.body.style.overflow = "hidden"; };
  const close = () => { setMenuOpen(false); document.body.style.overflow = "auto"; };

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  const navLinks = [
    { label: "Home", href: "#" },
    { label: "Category", href: "#" },
    { label: "How it's work", href: "#how-it-works" },
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0">
            <Image src="/img/logo.png" alt="Quick Helping Hand Logo" width={120} height={64} className="h-16 w-auto" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8 items-center">
            {navLinks.map((l) => (
              <Link key={l.label} href={l.href} className="text-black hover:text-[#1e40af] text-[18px] font-medium transition">
                {l.label}
              </Link>
            ))}
            <Link href="#register" className="bg-[#4075ae] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#023a78] transition shadow-md">
              Register Now
            </Link>
          </div>

          {/* Hamburger */}
          <button
            id="mobile-menu-btn"
            onClick={open}
            className={`lg:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none ${menuOpen ? "hamburger-active" : ""}`}
            aria-label="Toggle menu"
          >
            <span className="hamburger-line hamburger-line-1 block w-6 h-0.5 bg-[#023a78] mb-1.5" />
            <span className="hamburger-line hamburger-line-2 block w-6 h-0.5 bg-[#023a78] mb-1.5" />
            <span className="hamburger-line hamburger-line-3 block w-6 h-0.5 bg-[#023a78]" />
          </button>
        </div>
      </div>

      {/* Overlay */}
      <div
        onClick={close}
        className={`overlay ${menuOpen ? "overlay-visible" : "overlay-hidden"} fixed inset-0 bg-black/50 z-40 lg:hidden`}
      />

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "mobile-menu-visible" : "mobile-menu-hidden"} fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 lg:hidden`}>
        <div className="flex flex-col h-full">
          <div className="flex justify-end items-center p-6 border-b border-gray-200">
            <button onClick={close} className="w-8 h-8 flex items-center justify-center focus:outline-none" aria-label="Close menu">
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto py-4">
            {navLinks.map((l) => (
              <Link key={l.label} href={l.href} onClick={close}
                className="block px-6 py-4 text-gray-700 hover:bg-[#f0f9ff] hover:text-[#1e40af] font-medium transition border-l-4 border-transparent hover:border-[#1e40af]">
                {l.label}
              </Link>
            ))}
            <Link href="#register" onClick={close}
              className="block px-6 py-4 text-gray-700 hover:bg-[#f0f9ff] hover:text-[#1e40af] font-medium transition border-l-4 border-transparent hover:border-[#1e40af]">
              Register Now
            </Link>
          </div>

          <div className="p-6 border-t border-gray-200">
            <Link href="#register" onClick={close}
              className="block w-full bg-[#1e40af] text-white text-center px-6 py-3 rounded-full font-semibold hover:bg-[#023a78] transition shadow-md">
              Register Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
