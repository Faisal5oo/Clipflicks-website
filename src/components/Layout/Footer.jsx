import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-black via-black via-80% to-[#7c349c] text-white py-10 px-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        
        {/* Left Side - Logo & Description */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
        <Link href="/" className="text-2xl font-bold tracking-wide flex items-center mb-6">
          <img src="/cf-logo.jpg" alt="Logo" className="h-8 w-auto mr-2" />
        </Link>
          <p className="text-gray-400 text-xs max-w-xs leading-relaxed">
            VideoSite is your go-to platform for sharing and discovering amazing videos. 
            Join our community and be part of the future of content creation!
          </p>
          <p className="text-gray-500 text-xs mt-2">
            © {new Date().getFullYear()} VideoSite. All rights reserved.
          </p>
        </div>

        {/* Center - Quick Links */}
        <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-5 text-gray-300 text-sm">
          {[
            { name: "Home", path: "/" },
            { name: "Video Library", path: "/video-library" },
            { name: "Submit a Video", path: "/submit-video" },
            { name: "Contact Us", path: "/contact" },
            { name: "About Us", path: "/about" },
          ].map((item) => (
            <li key={item.name} className="whitespace-nowrap">
              <Link
                href={item.path}
                className="hover:text-purple-400 transition duration-300 hover:underline"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Side - Social Icons */}
        <div className="flex space-x-5">
          {[
            { icon: <Facebook size={24} />, link: "#" },
            { icon: <Instagram size={24} />, link: "#" },
            { icon: <Twitter size={24} />, link: "#" },
            { icon: <Youtube size={24} />, link: "#" },
          ].map((social, index) => (
            <Link
              key={index}
              href={social.link}
              className="text-gray-300 hover:text-purple-400 transition duration-300 transform hover:scale-110"
            >
              {social.icon}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
