"use client"

import { useState } from "react";
import "../globals.css"
import Link from "next/link";

interface NavItem {
  name: string;
  path: string;
}

const navItems: NavItem[] = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="bg-[#06141B] text-white w-full border-b border-gray-950 relative z-50">
      {/* Outer Wrapper: Core alignment configurations */}
      <div className="flex justify-between items-center h-16 px-6 max-w-7xl mx-auto w-full">
        
        {/* Logo Element */}
        <div className="flex-shrink-0">
          <h1 className="text-2xl font-bold tracking-wide">SHOPIFY</h1>
        </div>
        
        {/* Desktop Navigation Link Container */}
        {/* md:flex directly targets browser layout engine without script initialization delays */}
        <div className="hidden md:flex items-center space-x-6">
          <ul className="flex items-center">
            {navItems.map((item) => (
              <Link href={item.path} key={item.path}>
                <li className="hover:text-[#4A5C6A] px-4 py-2 text-sm font-medium transition-colors duration-75 whitespace-nowrap">
                  {item.name}
                </li>
              </Link>
            ))}
          </ul>
        </div>

        {/* Mobile Toggle Drawer Interface */}
        {/* md:hidden instantly flags button mounting state on display engine boundaries */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="p-2 text-white hover:text-[#4A5C6A] focus:outline-none transition-colors duration-75"
            aria-expanded={isOpen}
          >
            <svg
              className="h-6 w-6"
              xmlns="http://w3.org"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Responsive Panel Navigation Container */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-[#06141B] border-t border-gray-900 transition-all duration-200 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <ul className="flex flex-col items-center gap-4 p-5">
          {navItems.map((item) => (
            <Link href={item.path} key={item.path} onClick={() => setIsOpen(false)}>
              <li className="hover:text-[#4A5C6A] py-2 text-base font-medium transition-colors duration-75 w-full text-center">
                {item.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
