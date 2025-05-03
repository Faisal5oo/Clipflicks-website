import React, { useState } from "react";
import Link from "next/link";
import { Facebook, Instagram, Twitter, Youtube, ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [subscribeStatus, setSubscribeStatus] = useState(null);

  const socialLinks = [
    { icon: <Facebook size={20} />, link: "#", name: "Facebook" },
    { icon: <Instagram size={20} />, link: "#", name: "Instagram" },
    { icon: <Twitter size={20} />, link: "#", name: "Twitter" },
    { icon: <Youtube size={20} />, link: "#", name: "Youtube" },
  ];

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Video Library", path: "/video-library" },
    { name: "Submit a Video", path: "/submit-video" },
    { name: "Contact", path: "/contact" },
    { name: "About", path: "/about" },
    { name: "FAQs", path: "/faqs" },
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
    
    if (!email.trim()) {
      setSubscribeStatus({
        success: false,
        message: "Please enter your email"
      });
      return;
    }
    
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setSubscribeStatus({
        success: false,
        message: "Please enter a valid email"
      });
      return;
    }
    
    // Simulate subscription
    setSubscribeStatus({
      success: true,
      message: "Thanks for subscribing! You'll receive updates soon."
    });
    
    // Reset after 3 seconds
    setTimeout(() => {
      setSubscribeStatus(null);
      setEmail("");
    }, 3000);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <footer className="relative bg-black text-white pt-20 overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#712f8e]/10 rounded-full blur-[100px] transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-[#d601db]/10 rounded-full blur-[100px] transform -translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-gray-800">
          {/* Brand Section */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="lg:col-span-4"
          >
            <Link href="/" className="inline-block mb-6 group">
              <div className="flex items-center">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#712f8e] to-[#d601db] rounded-full opacity-75 blur-sm group-hover:opacity-100 transition duration-300"></div>
                  <div className="relative bg-black rounded-full p-1">
                    <img src="/cf-logo.jpg" alt="ClipsFlick Logo" className="h-10 w-auto rounded-full" />
                  </div>
                </div>
              </div>
            </Link>
            
            <p className="text-gray-400 mb-6 leading-relaxed">
              We help content creators monetize their videos by connecting them with global brands and media companies. Your creative vision, our global reach.
            </p>
            
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
          </motion.div>
          
          {/* Quick Links */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="lg:col-span-2"
          >
            <h3 className="font-bold text-lg mb-4 text-white relative inline-block">
              Quick Links
              <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#712f8e] to-[#d601db] rounded-full"></div>
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.path}
                    className="text-gray-400 hover:text-white transition-colors flex items-center group"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight size={14} className="ml-1 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
          
          {/* Contact Info */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="lg:col-span-3"
          >
            <h3 className="font-bold text-lg mb-4 text-white relative inline-block">
              Contact Us
              <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#712f8e] to-[#d601db] rounded-full"></div>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="text-[#712f8e] mt-1 mr-3 flex-shrink-0" size={18} />
                <div>
                  <p className="text-gray-300 mb-1">Email Us</p>
                  <a href="mailto:clipsflickofficial@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                    clipsflickofficial@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin className="text-[#712f8e] mt-1 mr-3 flex-shrink-0" size={18} />
                <div>
                  <p className="text-gray-300 mb-1">Global Reach</p>
                  <p className="text-gray-400">Serving creators worldwide</p>
                </div>
              </li>
            </ul>
          </motion.div>
          
          {/* Newsletter with subscription confirmation */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="lg:col-span-3"
          >
            <h3 className="font-bold text-lg mb-4 text-white relative inline-block">
              Stay Updated
              <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#712f8e] to-[#d601db] rounded-full"></div>
            </h3>
            <p className="text-gray-400 mb-4">
              Join our newsletter for updates on new features and opportunities.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col space-y-2">
              <div className="flex">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email" 
                  className="bg-gray-900 border border-gray-800 rounded-l-lg py-2 px-3 text-gray-300 focus:outline-none focus:ring-1 focus:ring-[#712f8e] w-full"
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-[#712f8e] to-[#d601db] text-white py-2 px-4 rounded-r-lg font-medium"
                >
                  Subscribe
                </motion.button>
              </div>
              
              {/* Subscription status message */}
              {subscribeStatus && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`text-sm px-3 py-2 rounded-md ${
                    subscribeStatus.success 
                      ? "bg-green-900/30 text-green-400 border border-green-900" 
                      : "bg-red-900/30 text-red-400 border border-red-900"
                  }`}
                >
                  {subscribeStatus.message}
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
        
        {/* Bottom Bar */}
        <div className="py-6 flex flex-col md:flex-row justify-between items-center">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-500 text-sm"
          >
            © {currentYear} ClipsFlick. All rights reserved.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex space-x-6 mt-4 md:mt-0"
          >
            <Link href="/privacy" className="text-gray-500 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-500 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookie-policy" className="text-gray-500 hover:text-white text-sm transition-colors">
              Cookie Policy
            </Link>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
