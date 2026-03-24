"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useCart } from "@/lib/cart-context";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/shop", label: "Winkel" },
  { href: "/#technology", label: "Technologie" },
  { href: "/#performance", label: "Prestaties" },
  { href: "/#teams", label: "Teams" },
];

export function Header() {
  const { totalItems } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 w-full z-50 transition-colors duration-500 ${
          scrolled
            ? "bg-surface-container-low/80 backdrop-blur-xl shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="flex justify-between items-center px-6 py-4 max-w-screen-2xl mx-auto">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-black italic tracking-tighter text-inverse-surface font-headline hover:scale-105 transition-transform origin-left"
          >
            PaddleForge
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-headline tracking-tight text-on-surface-variant font-medium hover:text-inverse-surface hover:scale-105 transition-all duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <Link
              href="/cart"
              className="relative hover:scale-110 transition-transform flex items-center justify-center text-on-surface-variant hover:text-primary"
            >
              <span className="material-symbols-outlined text-[28px]" data-icon="shopping_cart">
                shopping_cart
              </span>
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary-container text-on-primary-container text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-bold">
                  {totalItems}
                </span>
              )}
            </Link>
            <button
              className="md:hidden material-symbols-outlined text-[28px] text-on-surface-variant hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-icon="menu"
            >
              menu
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-surface/95 backdrop-blur-3xl pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6 text-2xl font-headline font-black uppercase tracking-tighter">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-inverse-surface hover:text-primary transition-colors border-b border-outline-variant/20 pb-4"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
