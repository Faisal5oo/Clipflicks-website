import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Play } from "lucide-react";

export default function VisualShowcase() {
  const parentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  
  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')] bg-center opacity-[0.03]"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#712f8e]/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-[#d601db]/10 rounded-full blur-[100px]"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-block py-1.5 px-4 rounded-full bg-[#712f8e]/10 text-[#d601db] text-sm font-medium mb-4"
          >
            Coming Soon
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            <span className="text-white">Featured </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#712f8e] to-[#d601db]">Content</span>
          </motion.h2>
          
          <div className="h-1 w-24 bg-gradient-to-r from-[#712f8e] to-[#d601db] mx-auto rounded-full mb-6"></div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-gray-300 max-w-2xl mx-auto text-lg"
          >
            Our platform is ready to showcase your extraordinary creative vision
          </motion.p>
        </motion.div>

        {/* Premium Container */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          variants={parentVariants}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {/* Hero content placeholder */}
          <motion.div
            variants={childVariants}
            className="relative mb-16 rounded-2xl overflow-hidden group"
          >
            {/* Gradient border */}
            <div className="absolute inset-0 rounded-2xl p-0.5 bg-gradient-to-r from-[#712f8e] to-[#d601db] overflow-hidden">
              <div className="absolute inset-0 bg-black rounded-2xl"></div>
            </div>
            
            <div className="relative z-10 p-10 md:p-14 flex flex-col items-center">
              {/* 3D-like video icon */}
              <motion.div 
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="relative mb-8"
              >
                <div className="absolute -inset-6 bg-gradient-to-r from-[#712f8e] to-[#d601db] rounded-full opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-500"></div>
                <div className="relative w-24 h-24 rounded-full flex items-center justify-center bg-gradient-to-r from-[#712f8e]/20 to-black/20 border border-white/10">
                  <div className="absolute inset-0.5 rounded-full bg-black flex items-center justify-center">
                    <Play size={32} className="text-[#d601db] ml-1.5" />
                  </div>
                </div>
              </motion.div>
              
              <motion.h3 
                variants={childVariants}
                className="text-3xl md:text-4xl font-bold text-white mb-4 text-center"
              >
                Content Coming Soon
              </motion.h3>
              
              <motion.p 
                variants={childVariants}
                className="text-gray-300 text-lg text-center max-w-2xl mb-10"
              >
                We're building a library of extraordinary videos from creators like you. Be among the first to submit your content and have it featured on our platform.
              </motion.p>
              
              <motion.div
                variants={childVariants}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link href="/submit-video">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-gradient-to-r from-[#712f8e] to-[#d601db] rounded-xl text-white font-semibold shadow-lg shadow-[#712f8e]/20 flex items-center group"
                  >
                    <span>Submit Your Video</span>
                    <ArrowUpRight size={18} className="ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </motion.button>
                </Link>
                
                <Link href="/about">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-transparent border border-gray-700 hover:border-[#712f8e] rounded-xl text-white font-semibold transition-colors duration-300"
                  >
                    Learn More
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Stats and Benefits Section */}
          <motion.div 
            variants={childVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              { number: "100+", label: "Global Markets", icon: "🌎" },
              { number: "24/7", label: "Support Available", icon: "⚡" },
              { number: "Fast", label: "Payment Processing", icon: "💰" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-b from-gray-900 to-black p-6 rounded-xl border border-gray-800 flex flex-col items-center text-center transition-all duration-300 hover:border-[#712f8e]/50 hover:shadow-lg hover:shadow-[#712f8e]/5"
              >
                <span className="text-4xl mb-2">{stat.icon}</span>
                <h4 className="text-2xl font-bold text-white mb-1">{stat.number}</h4>
                <p className="text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
