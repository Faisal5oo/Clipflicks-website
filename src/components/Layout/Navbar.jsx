"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-wide flex items-center">
          <img src="/cf-logo.jpg" alt="Logo" className="h-6 w-auto mr-2" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-lg">
          {[
            { name: "Submit a Video", path: "/submit-video" },
            { name: "Video Library", path: "/video-library" },
            { name: "Contact Us", path: "/contact" },
            { name: "About Us", path: "/about" },
            { name: "FAQs", path: "/faqs" },

          ].map((item) => (
            <li key={item.name}>
              <Link
                href={item.path}
                className="relative after:block after:h-0.5 after:w-0 after:bg-[#d601db] after:transition-all after:duration-300 hover:after:w-full hover:text-purple-300"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu with animation */}
      <div
        className={`md:hidden bg-[#1a1a40] text-white transition-all duration-300 ${
          isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col items-center space-y-4 py-4">
          {[
            { name: "Submit a Video", path: "/submit" },
            { name: "Video Library", path: "/library" },
            { name: "Contact Us", path: "/contact" },
            { name: "About Us", path: "/about" },
            { name: "FAQs", path: "/faqs" },
          ].map((item) => (
            <li key={item.name}>
              <Link
                href={item.path}
                className="block text-md hover:text-purple-400"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
