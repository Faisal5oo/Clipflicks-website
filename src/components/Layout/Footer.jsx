import React from "react";
import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Social links commented out as requested
  /*
  const socialLinks = [
    { icon: <Facebook size={20} />, link: "#", name: "Facebook" },
    { icon: <Instagram size={20} />, link: "#", name: "Instagram" },
    { icon: <Twitter size={20} />, link: "#", name: "Twitter" },
    { icon: <Youtube size={20} />, link: "#", name: "Youtube" },
  ];
  */

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Video Library", path: "/video-library" },
    { name: "Submit a Video", path: "/submit-video" },
    { name: "Contact", path: "/contact" },
    { name: "About", path: "/about" },
    { name: "FAQs", path: "/faqs" },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <footer className="relative bg-black text-white pt-20 overflow-hidden">
      {/* Enhanced gradient overlay */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#712f8e]/10 rounded-full blur-[100px] transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-[#d601db]/10 rounded-full blur-[100px] transform -translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-[#712f8e]/15 rounded-full blur-[80px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Premium Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#712f8e]/50 to-transparent mb-16"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12">
          {/* Brand Section - Enhanced */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="lg:col-span-5"
          >
            <Link href="/" className="inline-block mb-6 group">
              <div className="flex items-center">
                <div className="relative">
                  <img src="/cf-logo.jpg" alt="ClipsFlick Logo" className="h-12 w-auto rounded-full shadow-lg shadow-[#712f8e]/20" />
                </div>
              </div>
            </Link>
            
            {/* <div className="p-6 bg-gradient-to-br from-black to-[#712f8e]/5 rounded-xl border border-[#712f8e]/10 mb-6">
              <p className="text-gray-300 leading-relaxed">
                Transform your passion for video creation into a sustainable income stream. Connect with us today to explore monetization opportunities.
              </p>
            </div> */}
            
            {/* Social links section commented out as requested */}
            {/*
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  aria-label={social.name}
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-9 h-9 rounded-full bg-gray-900 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gradient-to-r from-[#712f8e] to-[#d601db] transition-colors"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
            */}
          </motion.div>
          
          {/* Quick Links - Enhanced */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="lg:col-span-4"
          >
            <h3 className="font-bold text-xl mb-6 text-white relative inline-block">
              Quick Links
              <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#712f8e] to-[#d601db] rounded-full"></div>
            </h3>
            <ul className="grid grid-cols-2 gap-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.path}
                    className="text-gray-400 hover:text-white transition-colors flex items-center group bg-black/40 p-3 rounded-lg hover:bg-[#712f8e]/10 border border-transparent hover:border-[#712f8e]/20"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight size={14} className="ml-1 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
          
          {/* Contact Info - Enhanced */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="lg:col-span-3"
          >
            <h3 className="font-bold text-xl mb-6 text-white relative inline-block">
              Contact Us
              <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#712f8e] to-[#d601db] rounded-full"></div>
            </h3>
            <div className="bg-gradient-to-br from-[#712f8e]/10 to-black p-6 rounded-xl border border-[#712f8e]/20 hover:border-[#712f8e]/30 transition-colors">
              <div className="flex items-start mb-2">
                <Mail className="text-[#d601db] mt-1 mr-3 flex-shrink-0" size={18} />
                <div>
                  <p className="text-white mb-1 font-medium">Email Us</p>
                  <a 
                    href="mailto:clipsflickofficial@gmail.com" 
                    className="text-gray-400 hover:text-[#d601db] transition-colors inline-flex items-center group"
                  >
                    clipsflickofficial@gmail.com
                    <ArrowUpRight size={14} className="ml-1 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </a>
                </div>
              </div>
              <p className="text-gray-500 text-sm mt-4">We typically respond to inquiries within 24-48 hours.</p>
            </div>
          </motion.div>
        </div>
        
        {/* Premium Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#712f8e]/30 to-transparent mt-6"></div>
        
        {/* Bottom Bar - Enhanced */}
        <div className="py-8 text-center">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-500 text-sm"
          >
            © {currentYear} ClipsFlick. All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
