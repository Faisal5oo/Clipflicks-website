"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import LayoutWrapper from "@/components/Layout/LayoutWrapper";

export default function NotFound() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.3,
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <LayoutWrapper>
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with premium gradient effect */}
        <div className="absolute inset-0 bg-black">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')] bg-center opacity-[0.03]"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#712f8e]/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-[#d601db]/10 rounded-full blur-[100px]"></div>
        </div>
        
        {/* Content */}
        <motion.div 
          className="relative z-10 max-w-5xl mx-auto px-6 text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* 404 Number */}
          <motion.div
            variants={itemVariants}
            className="text-[120px] md:text-[200px] font-extrabold leading-none"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#712f8e] to-[#d601db]">404</span>
          </motion.div>
          
          {/* Messages */}
          <motion.h1 
            variants={itemVariants}
            className="text-3xl md:text-5xl font-bold text-white mt-2 mb-6"
          >
            Page Not Found
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-10"
          >
            The page you're looking for doesn't exist or has been moved.
          </motion.p>
          
          {/* Button Group */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link href="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-[#712f8e] to-[#d601db] text-white font-semibold rounded-xl shadow-lg shadow-[#712f8e]/20 w-full sm:w-auto"
              >
                Return Home
              </motion.button>
            </Link>
            
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-black/40 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors w-full sm:w-auto mt-3 sm:mt-0"
              >
                Contact Support
              </motion.button>
            </Link>
          </motion.div>
          
          {/* Animated dots */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-3">
            {[0, 1, 2].map((dot) => (
              <motion.div
                key={dot}
                className="w-3 h-3 bg-[#d601db] rounded-full"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                  delay: dot * 0.2,
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </LayoutWrapper>
  );
} 