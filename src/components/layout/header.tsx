"use client";

import Link from "next/link";
import { ShoppingBag, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart-context";
import { useState } from "react";

const navLinks = [
  { href: "/shop", label: "Shop" },
  { href: "/#hoe-het-werkt", label: "Hoe het werkt" },
  { href: "/#faq", label: "FAQ" },
];

export function Header() {
  const { totalItems } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-[41px] z-40 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="page-width flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-semibold tracking-tight text-text-primary">
            CourtStart
          </span>
          <span className="text-xs font-medium text-brand-green bg-brand-green/10 px-2 py-0.5 rounded-full">
            NL
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <Link href="/cart" className="relative p-2 hover:bg-gray-100 rounded-2xl transition-colors">
            <ShoppingBag className="h-5 w-5 text-text-primary" />
            {totalItems > 0 && (
              <span className="absolute -top-0.5 -right-0.5 bg-brand-green text-white text-xs w-5 h-5 flex items-center justify-center rounded-full font-medium">
                {totalItems}
              </span>
            )}
          </Link>
          <Link href="/shop" className="hidden md:inline-flex">
            <Button size="sm">Shop nu</Button>
          </Link>
          <button
            className="md:hidden p-2 hover:bg-gray-100 rounded-2xl transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-white">
          <nav className="page-width py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base font-medium text-text-secondary hover:text-text-primary py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/shop" onClick={() => setMobileMenuOpen(false)}>
              <Button className="w-full mt-2">Shop nu</Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
