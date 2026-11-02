"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [cartCount, setCartCount] = useState<number>(0);

  // Dynamic Event Listener to capture cart modifications across all pages
  useEffect(() => {
    const handleUpdate = (e: Event) => {
      const items = (e as CustomEvent).detail || [];
      const count = items.reduce((total: number, item: any) => total + item.quantity, 0);
      
      // FIXED: setTimeout lagaya taake React layout render hone ke BAAD state update ho (Error Fixed)
      setTimeout(() => {
        setCartCount(count);
      }, 0);
    };

    // Checking if there is already a cached state available on initial mount
    if (typeof window !== "undefined") {
      const savedCart = localStorage.getItem("shopify_cart");
      const currentItems = savedCart ? JSON.parse(savedCart) : ((window as any).__shopify_cart_state || []);
      
      // Update global context variable
      (window as any).__shopify_cart_state = currentItems;
      
      const initialCount = currentItems.reduce((total: number, item: any) => total + item.quantity, 0);
      
      // FIXED: Initial count state ko bhi render phase se bahar safety delay diya
      setTimeout(() => {
        setCartCount(initialCount);
      }, 0);
    }

    window.addEventListener("CART_STATE_UPDATE", handleUpdate);
    return () => window.removeEventListener("CART_STATE_UPDATE", handleUpdate);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-neutral-950/80 backdrop-blur-md border-b border-neutral-900 selection:bg-purple-500 selection:text-white">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link href="/" className="group flex items-center gap-2">
          <span className="text-xl font-black bg-gradient-to-r from-white via-neutral-200 to-purple-400 bg-clip-text text-transparent tracking-tight">
            SHOPIFY
          </span>
          <span className="text-xs font-bold uppercase tracking-widest text-purple-400 bg-purple-950/50 border border-purple-800/40 px-2 py-0.5 rounded-md">
            PRO
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link, idx) => (
            <Link
              key={idx}
              href={link.path}
              className="text-sm font-semibold text-neutral-400 hover:text-white px-4 py-2 rounded-xl transition-all duration-200 hover:bg-neutral-900/50"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Global Action Utility Buttons */}
        <div className="flex items-center gap-2 md:gap-4">
          
          {/* Dynamic Cart Link Icon Component with Live Counter */}
          <Link
            href="/cart"
            className="p-2 text-neutral-400 hover:text-white rounded-xl hover:bg-neutral-900/50 relative group transition-colors duration-200"
          >
            <span className="text-lg">🛒</span>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-purple-600 text-white font-black text-[10px] w-4 h-4 flex items-center justify-center rounded-full shadow-md animate-scaleIn">
                {cartCount}
              </span>
            )}
          </Link>
          
          <Link
            href="/products"
            className="hidden sm:inline-block bg-white text-neutral-950 text-xs font-bold px-4 py-2.5 rounded-xl shadow hover:bg-neutral-200 transition-all duration-200 tracking-wide"
          >
            Acquire Hardware
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 md:hidden text-neutral-400 hover:text-white rounded-xl hover:bg-neutral-900/50 transition-colors duration-200 focus:outline-none"
            aria-label="Toggle Navigation Control Menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Dropdown Menu Layer For Mobile Displays */}
      {isOpen && (
        <div className="md:hidden border-t border-neutral-900 bg-neutral-950 px-6 py-4 space-y-2 absolute top-16 left-0 w-full shadow-2xl z-50">
          {navLinks.map((link, idx) => (
            <Link
              key={idx}
              href={link.path}
              onClick={() => setIsOpen(false)}
              className="block text-sm font-semibold text-neutral-400 hover:text-white py-2.5 px-3 rounded-xl hover:bg-neutral-900/60 transition-all duration-200"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 border-t border-neutral-900">
            <Link
              href="/products"
              onClick={() => setIsOpen(false)}
              className="block text-center bg-white text-neutral-950 text-sm font-bold py-3 rounded-xl shadow hover:bg-neutral-200 transition-colors duration-200 w-full"
            >
              Acquire Hardware
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
