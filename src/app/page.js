"use client";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import LayoutWrapper from "../components/Layout/LayoutWrapper";
// import VideoSlider from "@/components/Slider/VideoSlider";
// import ReactPlayer from "react-player";
import WhyChooseUs from "@/components/Features/FeaturesComponent";
import VisualShowcase from "@/components/Features/VisualShowCase";
import TextTransition, { presets } from "react-text-transition";
import Link from "next/link";
import { ChevronRight, ChevronDown, Shield, CheckCircle2, Zap, Globe } from "lucide-react";

export default function Home() {
  const [index, setIndex] = useState(0);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const heroBgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((prev) => (prev + 1) % TEXTS.length),
      2000
    );
    return () => clearInterval(intervalId);
  }, []);

  const step1Ref = useRef(null);
  const step2Ref = useRef(null);

  const step1InView = useInView(step1Ref, {
    triggerOnce: true,
    threshold: 0.2,
  });
  const step2InView = useInView(step2Ref, {
    triggerOnce: true,
    threshold: 0.2,
  });
  const TEXTS = ["Sell Your Videos", "Earn Instantly!", "Get Paid Now!"];
  
  return (
    <LayoutWrapper>
      {/* Premium Hero Section */}
      <motion.div 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ opacity: heroOpacity, scale: heroScale }}
      >
        {/* Video Background with Parallax */}
        <motion.div 
          className="absolute top-0 left-0 w-full h-full"
          style={{ y: heroBgY }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover"
          >
            <source src="/placeholder.mp4" type="video/mp4" />
          </video>

          {/* Enhanced gradient overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black via-black/80 to-[#712f8e]/30"></div>
        </motion.div>

        {/* Animated particle or flare effect */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-[#712f8e]/30 rounded-full blur-[100px] animate-pulse"></div>
          <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-[#d601db]/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        {/* Hero Content with enhanced animations */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-4"
          >
            <span className="inline-block py-1.5 px-4 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium border border-white/20">
              Welcome to the Future of Video Monetization
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="text-white block mb-2">Turn Your Creative Videos</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#712f8e] to-[#d601db]">into Income</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-gray-200 mt-6 max-w-3xl mx-auto leading-relaxed"
          >
            Join thousands of creators who are earning revenue by sharing genuine, high-quality videos with top global brands and media companies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-5 justify-center mt-10"
          >
            <Link href="/submit-video">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="px-8 py-4 bg-gradient-to-r from-[#712f8e] to-[#d601db] text-white font-semibold rounded-xl shadow-lg shadow-[#712f8e]/20 flex items-center justify-center group"
              >
                <span>Submit Your Video</span>
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
            
            <Link href="/about">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="px-8 py-4 bg-black/40 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors"
              >
                Learn More
              </motion.button>
            </Link>
          </motion.div>

          {/* Scroll indicator - now centered */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="absolute bottom-10 left-0 right-0 mx-auto flex flex-col items-center cursor-pointer w-40"
            onClick={() => window.scrollTo({
              top: window.innerHeight,
              behavior: 'smooth'
            })}
          >
            <span className="text-gray-400 text-sm mb-2">Scroll to discover</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ChevronDown className="text-[#d601db]" />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Steps Section with enhanced visuals */}
      <section className="bg-black py-24 px-6 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')] bg-center opacity-[0.03]"></div>
          <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-[#712f8e]/10 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-1/4 left-1/3 w-60 h-60 bg-[#d601db]/10 rounded-full blur-[80px]"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative">
          {/* Section Header with animation */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.span 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-block py-1.5 px-4 rounded-full bg-[#712f8e]/10 text-[#d601db] text-sm font-medium mb-4"
            >
              Simple Process
            </motion.span>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-white">How It </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#712f8e] to-[#d601db]">Works</span>
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-[#712f8e] to-[#d601db] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-300 mt-6 max-w-2xl mx-auto text-lg">
              Our streamlined process helps content creators monetize their videos quickly and efficiently
            </p>
          </motion.div>

          {/* Steps in a premium card layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 relative">
            {/* Connection line in the background */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#712f8e] to-[#d601db] hidden md:block transform -translate-y-1/2 opacity-20"></div>
            
            {[
              {
                number: "01",
                title: "Upload Your Video",
                description: "Submit your video through our easy-to-use platform",
                icon: "📹"
              },
              {
                number: "02",
                title: "Review & Approval",
                description: "Our team reviews your content for quality and marketability",
                icon: "✓"
              },
              {
                number: "03",
                title: "Get Paid",
                description: "Earn revenue when your content is licensed or used",
                icon: "💰"
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 20px 40px -20px rgba(113, 47, 142, 0.3)",
                }}
                className="relative bg-gradient-to-b from-gray-900 to-black p-8 rounded-2xl border border-gray-800 hover:border-[#712f8e] transition-all duration-500 group z-10 hover:z-20"
              >
                {/* Step number with 3D effect */}
                <div className="absolute -top-6 -left-2 w-12 h-12 flex items-center justify-center rounded-full backdrop-blur-md border border-gray-700 bg-black shadow-lg">
                  <span className="text-[#d601db] font-bold">{step.number}</span>
                </div>
                
                <div className="mb-6 flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#712f8e]/20 to-transparent text-3xl">
                  {step.icon}
                </div>
                
                <h3 className="text-white text-xl font-bold mb-3 group-hover:text-[#d601db] transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {step.description}
                </p>
                
                {/* Animated arrow for desktop */}
                {index < 2 && (
                  <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 hidden md:block text-[#d601db] opacity-0 group-hover:opacity-100 transition-opacity">
                    <ChevronRight size={24} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* What Makes ClipsFlick the Best Choice - Enhanced */}
          <motion.div
            ref={step1Ref}
            initial={{ opacity: 0, y: 50 }}
            animate={step1InView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
            className="mb-24"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="text-white order-2 md:order-1">
                <motion.h2 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-3xl md:text-4xl font-bold mb-6"
                >
                  <span className="text-white">What Makes ClipsFlick </span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#712f8e] to-[#d601db]">the Best Choice?</span>
                </motion.h2>
                
                <div className="h-1 w-24 bg-gradient-to-r from-[#712f8e] to-[#d601db] rounded-full mb-6"></div>
                
                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-gray-300 text-lg leading-relaxed"
                >
                  We are leading the way in the user-generated content sector, connecting creators and distributors globally. Some of the most shared and recognized footage on the internet is part of our vast video archive.
                </motion.p>
                
                <div className="mt-8 space-y-5">
                  {[
                    { text: "Global network of media buyers", icon: <Globe size={20} /> },
                    { text: "Transparent earnings and payments", icon: <CheckCircle2 size={20} /> },
                    { text: "Advanced copyright protection", icon: <Shield size={20} /> },
                    { text: "Dedicated support team", icon: <Zap size={20} /> }
                  ].map((feature, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start group"
                    >
                      <div className="mr-4 p-2 rounded-lg bg-[#712f8e]/10 text-[#d601db] group-hover:bg-[#712f8e]/20 transition-colors duration-300">
                        {feature.icon}
                      </div>
                      <p className="text-gray-300 mt-1 group-hover:text-white transition-colors duration-300">{feature.text}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="md:order-2 relative">
                <div className="absolute -inset-8 bg-gradient-to-r from-[#712f8e]/20 to-black rounded-2xl blur-xl opacity-80"></div>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true }}
                  className="relative rounded-2xl border border-gray-800 overflow-hidden group"
                >
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-black/40 to-[#712f8e]/30 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Image */}
                  <img
                    src="https://images.pexels.com/photos/7256897/pexels-photo-7256897.jpeg" 
                    alt="Video Content Marketing"
                    className="w-full h-auto rounded-2xl hover:scale-105 transition-transform duration-700"
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Redesigned premium support cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="text-white">Premium </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#712f8e] to-[#d601db]">Support</span>
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-[#712f8e] to-[#d601db] mx-auto rounded-full mt-4"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1 - 24/7 Support */}
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-gradient-to-br from-gray-900 via-black to-[#712f8e]/10 rounded-2xl overflow-hidden border border-gray-800 shadow-xl shadow-black/50 backdrop-blur-sm group"
              >
                <div className="relative p-8">
                  {/* Background glow */}
                  <div className="absolute top-0 right-0 w-40 h-40 bg-[#712f8e]/20 rounded-full blur-[60px] opacity-60 group-hover:opacity-100 transition-opacity duration-700"></div>
                  
                  {/* Icon */}
                  <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-gradient-to-br from-[#712f8e] to-[#d601db] text-white mb-6 shadow-lg shadow-[#712f8e]/20 group-hover:shadow-[#712f8e]/40 transition-all duration-300">
                    <Zap size={28} />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#d601db] transition-colors">24/7 Support</h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">Our dedicated team is available around the clock to assist with any questions or issues.</p>
                  
                  {/* Hover reveal button */}
                  <div className="mt-6 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <Link href="/contact">
                      <button className="bg-gradient-to-r from-[#712f8e] to-[#d601db] text-white px-6 py-3 rounded-lg flex items-center group">
                        <span>Contact Us</span>
                        <ChevronRight className="ml-1 transform group-hover:translate-x-1 transition-transform" />
                      </button>
                    </Link>
                  </div>
                </div>
              </motion.div>
              
              {/* Card 2 - Expert Guidance */}
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-gradient-to-br from-gray-900 via-black to-[#d601db]/10 rounded-2xl overflow-hidden border border-gray-800 shadow-xl shadow-black/50 backdrop-blur-sm group"
              >
                <div className="relative p-8">
                  {/* Background glow */}
                  <div className="absolute top-0 right-0 w-40 h-40 bg-[#d601db]/20 rounded-full blur-[60px] opacity-60 group-hover:opacity-100 transition-opacity duration-700"></div>
                  
                  {/* Icon */}
                  <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-gradient-to-br from-[#712f8e] to-[#d601db] text-white mb-6 shadow-lg shadow-[#d601db]/20 group-hover:shadow-[#d601db]/40 transition-all duration-300">
                    <CheckCircle2 size={28} />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#d601db] transition-colors">Expert Guidance</h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">Our industry experts provide personalized guidance to help maximize your video content value.</p>
                  
                  {/* Hover reveal button */}
                  <div className="mt-6 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <Link href="/about">
                      <button className="bg-gradient-to-r from-[#712f8e] to-[#d601db] text-white px-6 py-3 rounded-lg flex items-center group">
                        <span>Learn More</span>
                        <ChevronRight className="ml-1 transform group-hover:translate-x-1 transition-transform" />
                      </button>
                    </Link>
                  </div>
                </div>
              </motion.div>
              
              {/* Card 3 - Global Service */}
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-gradient-to-br from-gray-900 via-black to-[#712f8e]/10 rounded-2xl overflow-hidden border border-gray-800 shadow-xl shadow-black/50 backdrop-blur-sm group"
              >
                <div className="relative p-8">
                  {/* Background glow */}
                  <div className="absolute top-0 right-0 w-40 h-40 bg-[#712f8e]/20 rounded-full blur-[60px] opacity-60 group-hover:opacity-100 transition-opacity duration-700"></div>
                  
                  {/* Icon */}
                  <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-gradient-to-br from-[#712f8e] to-[#d601db] text-white mb-6 shadow-lg shadow-[#712f8e]/20 group-hover:shadow-[#712f8e]/40 transition-all duration-300">
                    <Globe size={28} />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#d601db] transition-colors">Global Service</h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">We serve creators from over 100 countries, providing localized support and international reach.</p>
                  
                  {/* Hover reveal button */}
                  <div className="mt-6 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <Link href="/video-library">
                      <button className="bg-gradient-to-r from-[#712f8e] to-[#d601db] text-white px-6 py-3 rounded-lg flex items-center group">
                        <span>Explore</span>
                        <ChevronRight className="ml-1 transform group-hover:translate-x-1 transition-transform" />
                      </button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* WhyChooseUs - Original client content */}
          <div>
            <WhyChooseUs />
          </div>

          {/* VisualShowcase with placeholder videos instead of YouTube links */}
          <div>
            <VisualShowcase />
          </div>
        </div>
      </section>
    </LayoutWrapper>
  );
}
