"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Почетна", href: "/" },
  { name: "Историјат", href: "/istorijat" },
  { name: "Архива", href: "/arhiva" },
  { name: "Препоруке књига", href: "/knjige" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 bg-transparent py-6`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-4 group">
          <div className="relative w-auto overflow-hidden">
            <img
              src="/logo1.png"
              alt="ПБФ Лого"
              className="h-20 w-auto object-contain transition-all duration-300 mix-blend-multiply opacity-90 hover:opacity-100"
            />
          </div>
          <div className="hidden md:flex flex-col">
            <span className="text-[#1a2a40] font-serif font-bold text-lg leading-tight uppercase tracking-wider">
              Актив за научни подмладак
            </span>
            <span className="text-[#c5a059] font-sans text-xs font-bold uppercase tracking-widest">
              Православни богословски факултет
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[#1a2a40] font-sans font-medium text-sm hover:text-[#c5a059] transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#c5a059] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-[#1a2a40]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl border-t border-gray-100 p-6 md:hidden flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#1a2a40] font-serif text-xl font-bold hover:text-[#c5a059] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
