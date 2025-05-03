"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import LayoutWrapper from "../../components/Layout/LayoutWrapper";
import Link from "next/link";
import { ArrowUpRight, Users, Award, Globe, Shield, Check, Mail } from "lucide-react";

export default function AboutUs() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  // Animation for the hero image reveal
  const imageReveal = {
    hidden: { scale: 1.2, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { duration: 1.2, ease: "easeOut" }
    }
  };

  const services = [
    { 
      icon: <Globe className="text-[#d601db]" size={24} />,
      title: "Global Network", 
      description: "Connect with leading media companies and content distributors worldwide"
    },
    { 
      icon: <Shield className="text-[#d601db]" size={24} />,
      title: "Copyright Protection", 
      description: "Advanced tools to protect your creative content across all platforms"
    },
    { 
      icon: <Award className="text-[#d601db]" size={24} />,
      title: "Premium Support", 
      description: "Dedicated team of content specialists to maximize your earnings"
    }
  ];

  return (
    <LayoutWrapper>
      <div className="min-h-screen bg-black text-white relative overflow-hidden">
        {/* Hero Section with enhanced design */}
        <section className="relative min-h-screen flex items-center justify-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={imageReveal}
            className="absolute inset-0 z-0"
          >
            <Image
              src="https://images.pexels.com/photos/2833037/pexels-photo-2833037.jpeg"
              layout="fill"
              objectFit="cover"
              alt="Video Production"
              className="opacity-40"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-[#712f8e]/20"></div>
          </motion.div>
          
          {/* Animated Flares */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-[#712f8e]/30 rounded-full blur-[100px] animate-pulse"></div>
            <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-[#d601db]/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <motion.span 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="inline-block py-1.5 px-4 rounded-full bg-[#712f8e]/10 text-[#d601db] text-sm font-medium mb-6"
                >
                  Our Story
                </motion.span>
                
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="text-5xl md:text-6xl font-bold mb-6"
                >
                  <span className="text-white">About</span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#712f8e] to-[#d601db]"> Us</span>
                </motion.h1>
                
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "100px" }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="h-1 bg-gradient-to-r from-[#712f8e] to-[#d601db] rounded-full mb-8"
                />
                
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1 }}
                  className="text-gray-300 text-lg leading-relaxed mb-8"
                >
                  At the vanguard of the user-generated content industry, we are
                  facilitating the connection between creators and distributors on a
                  global scale. We prioritize exceptional customer service, provided by
                  authentic individuals who are ready to address any inquiries or
                  concerns via email.
                </motion.p>
                
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.4 }}
                  className="flex flex-col sm:flex-row gap-5"
                >
                  <Link href="/submit-video">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 bg-gradient-to-r from-[#712f8e] to-[#d601db] text-white font-semibold rounded-xl shadow-lg shadow-[#712f8e]/20 flex items-center group"
                    >
                      <span>Submit Video</span>
                      <ArrowUpRight className="ml-2 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" size={18} />
                    </motion.button>
                  </Link>
                  
                  <Link href="/contact">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 bg-black/40 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors"
                    >
                      Contact Us
                    </motion.button>
                  </Link>
                </motion.div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="relative hidden md:block"
              >
                <div className="absolute -inset-8 bg-gradient-to-r from-[#712f8e]/20 to-[#d601db]/20 rounded-full blur-xl opacity-70"></div>
                <div className="relative overflow-hidden rounded-2xl border border-white/10">
                  <Image
                    src="https://images.pexels.com/photos/3761509/pexels-photo-3761509.jpeg"
                    width={600}
                    height={800}
                    alt="Digital Content Creation"
                    className="rounded-2xl object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* Scroll indicator */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="absolute bottom-10 left-0 right-0 flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="flex flex-col items-center cursor-pointer"
              onClick={() => window.scrollTo({
                top: window.innerHeight,
                behavior: 'smooth'
              })}
            >
              <span className="text-gray-400 text-sm mb-2">Discover more</span>
              <svg className="w-6 h-6 text-[#d601db]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </motion.div>
          </motion.div>
        </section>

        {/* Our Mission Section */}
        <section className="py-24 px-6 relative">
          {/* Background elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')] bg-center opacity-[0.03]"></div>
            <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-[#712f8e]/10 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-1/4 left-1/3 w-60 h-60 bg-[#d601db]/10 rounded-full blur-[80px]"></div>
          </div>
          
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="text-center mb-16">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold mb-6"
              >
                <span className="text-white">Our </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#712f8e] to-[#d601db]">Mission</span>
              </motion.h2>
              
              <div className="h-1 w-24 bg-gradient-to-r from-[#712f8e] to-[#d601db] mx-auto rounded-full mb-6"></div>
              
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-gray-300 max-w-3xl mx-auto text-lg"
              >
                Our mission is to empower creators by providing them with a platform to monetize their content efficiently while maintaining creative control and proper rights management.
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-gradient-to-b from-gray-900 to-black p-8 rounded-2xl border border-gray-800 hover:border-[#712f8e] transition-all duration-500 group"
                >
                  <div className="mb-6 p-4 rounded-xl bg-[#712f8e]/10 inline-flex">
                    {service.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#d601db] transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Library Section - Enhanced */}
        <section className="relative py-24 px-6">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg"
              layout="fill"
              objectFit="cover"
              alt="Content Library"
              className="opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/90"></div>
          </div>
          
          <div className="relative z-10 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <motion.h2
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold mb-6"
              >
                <span className="text-white">Our </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#712f8e] to-[#d601db]">Library</span>
              </motion.h2>
              
              <div className="h-1 w-24 bg-gradient-to-r from-[#712f8e] to-[#d601db] mx-auto rounded-full mb-8"></div>
              
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-xl md:text-2xl text-white font-light max-w-3xl mx-auto leading-relaxed mb-12"
              >
                Our extensive video library is home to some of the most widely shared and recognizable clips on the internet
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <Link href="/submit-video" className="inline-block">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-gradient-to-r from-[#712f8e] to-[#d601db] text-white font-semibold rounded-xl shadow-lg shadow-[#712f8e]/40 flex items-center group"
                  >
                    <span>Join Our Library</span>
                    <ArrowUpRight className="ml-2 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" size={18} />
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section - Enhanced */}
        <section className="py-20 px-6 bg-gradient-to-b from-black to-[#712f8e]/10">
          <div className="max-w-5xl mx-auto text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              <span className="text-white">Contact </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#712f8e] to-[#d601db]">Us</span>
            </motion.h2>
            
            <div className="h-1 w-24 bg-gradient-to-r from-[#712f8e] to-[#d601db] mx-auto rounded-full mb-6"></div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-300 mb-12 text-lg max-w-2xl mx-auto"
            >
              Have questions or need assistance? Our team is ready to help you navigate the world of content monetization.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-black/60 backdrop-blur-sm py-8 px-10 rounded-2xl inline-flex items-center border border-gray-800 shadow-lg shadow-[#712f8e]/5 hover:border-[#712f8e]/50 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-[#712f8e]/20 rounded-full flex items-center justify-center mr-6">
                <Mail className="h-8 w-8 text-[#d601db]" />
              </div>
              <div className="text-left">
                <p className="text-gray-400 text-sm mb-1">Email Us At</p>
                <a href="mailto:clipsflickofficial@gmail.com" className="text-white text-xl font-medium hover:text-[#d601db] transition-colors">
                  clipsflickofficial@gmail.com
                </a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="mt-10"
            >
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-black/60 border border-gray-800 text-white rounded-xl hover:border-[#712f8e] transition-colors"
                >
                  View All Contact Options
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </LayoutWrapper>
  );
}
