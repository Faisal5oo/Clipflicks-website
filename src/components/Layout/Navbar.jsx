"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("/");

  useEffect(() => {
    setActiveLink(window.location.pathname);
    
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Submit Video", path: "/submit-video" },
    { name: "Videos", path: "/video-library" },
    { name: "Contact", path: "/contact" },
    { name: "About", path: "/about" },
    { name: "FAQs", path: "/faqs" },
  ];

  return (
    <>
      {/* Navbar spacer - fixes the overlap issue with content */}
      <div className="h-24"></div>
      
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-black/90 backdrop-blur-md py-3 shadow-xl shadow-[#712f8e]/10"
            : "bg-black/60 py-5"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center px-6">
          {/* Logo with animation - simplified */}
          <Link href="/" className="group flex items-center">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <img src="/cf-logo.jpg" alt="Logo" className="h-9 w-auto rounded-full" />
            </motion.div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <ul className="flex items-center space-x-1">
              {navLinks.map((item) => (
                <motion.li key={item.name} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href={item.path}
                    className={`relative px-2 md:px-2 lg:px-4 py-2 rounded-lg text-xs md:text-xs lg:text-sm font-medium transition-all duration-300 ${
                      activeLink === item.path
                        ? "text-white bg-[#712f8e]/20"
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {item.name}
                    {activeLink === item.path && (
                      <motion.span
                        layoutId="navbar-indicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#712f8e] to-[#d601db] rounded-full"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </Link>
                </motion.li>
              ))}
              
              {/* CTA Button */}
              <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/submit-video" className="ml-2 md:ml-2 lg:ml-4 px-3 md:px-3 lg:px-5 py-2 bg-gradient-to-r from-[#712f8e] to-[#d601db] text-white rounded-lg text-xs md:text-xs lg:text-sm font-medium flex items-center group">
                  <span>Start Now</span>
                  <ChevronRight size={14} className="ml-1 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.li>
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg bg-black/50 border border-gray-800"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu with improved animation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden bg-gradient-to-b from-black to-[#1a1a40] border-t border-gray-800"
            >
              <motion.ul 
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1
                    }
                  }
                }}
                className="container mx-auto py-4 px-6 space-y-1"
              >
                {navLinks.map((item) => (
                  <motion.li 
                    key={item.name}
                    variants={{
                      hidden: { y: 20, opacity: 0 },
                      visible: { y: 0, opacity: 1 }
                    }}
                  >
                    <Link
                      href={item.path}
                      className={`block py-3 px-4 rounded-lg ${
                        activeLink === item.path
                          ? "bg-[#712f8e]/20 text-white"
                          : "text-gray-300 hover:bg-black/20"
                      } transition-colors`}
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="flex items-center">
                        {activeLink === item.path && (
                          <div className="w-1 h-4 bg-gradient-to-b from-[#712f8e] to-[#d601db] rounded-full mr-2"></div>
                        )}
                        {item.name}
                      </div>
                    </Link>
                  </motion.li>
                ))}
                
                {/* CTA Button in mobile menu */}
                <motion.li 
                  variants={{
                    hidden: { y: 20, opacity: 0 },
                    visible: { y: 0, opacity: 1 }
                  }}
                  className="pt-2"
                >
                  <Link 
                    href="/submit-video"
                    className="block text-center py-3 px-4 bg-gradient-to-r from-[#712f8e] to-[#d601db] text-white rounded-lg font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    Submit Your Video
                  </Link>
                </motion.li>
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
