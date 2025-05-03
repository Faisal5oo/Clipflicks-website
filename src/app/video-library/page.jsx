"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Filter, ChevronLeft, ChevronRight, Menu } from "lucide-react";
import LayoutWrapper from "../../components/Layout/LayoutWrapper";

// Sample videos with Pexels images
const videos = [
  
];

export default function PremiumVideoLibrary() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const videosPerPage = 4;

  // Always display the coming soon screen
  const displayComingSoon = true;

  const filteredVideos = selectedCategory === "All" 
    ? videos 
    : videos.filter(video => video.category === selectedCategory);
    
  const totalPages = Math.ceil(filteredVideos.length / videosPerPage);
  const displayedVideos = filteredVideos.slice((currentPage - 1) * videosPerPage, currentPage * videosPerPage);

  return (
    <LayoutWrapper>
      <div className="min-h-screen relative overflow-hidden px-6 py-20">
        {/* Background Pattern and Gradients */}
        <div className="absolute inset-0 bg-black pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')] bg-center opacity-[0.03]"></div>
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-[#712f8e]/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-1/4 left-1/3 w-60 h-60 bg-[#d601db]/10 rounded-full blur-[100px]"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Enhanced Page Header with animations */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold">
              <span className="text-white">Video </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#712f8e] to-[#d601db]">Library</span>
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-[#712f8e] to-[#d601db] mx-auto rounded-full mt-4 mb-6"></div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Explore our curated collection of exceptional videos
            </p>
          </motion.div>
          
          {/* Main Content Area */}
          <div className="flex flex-col">
            {/* Add your creative videos message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8 bg-black/40 backdrop-blur-sm border border-[#712f8e]/20 rounded-xl p-5 shadow-lg"
            >
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[#712f8e] to-[#d601db] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">Add Your Creative Videos</h3>
                  <p className="text-gray-300">Share your exceptional content with our global audience and start earning revenue today.</p>
                </div>
                <motion.a 
                  href="/submit-video"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-gradient-to-r from-[#712f8e] to-[#d601db] text-white rounded-lg text-sm font-medium shadow-md hover:shadow-lg hover:shadow-[#712f8e]/20 transition-all duration-300 whitespace-nowrap flex-shrink-0"
                >
                  Submit Video
                </motion.a>
              </div>
            </motion.div>

            {/* Coming Soon Message */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center min-h-[50vh] bg-black/60 backdrop-blur-md rounded-xl border border-gray-800 p-12 shadow-xl"
            >
              {/* Premium Coming Soon Message */}
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-center mb-8"
              >
                <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#712f8e] to-[#d601db] mb-5">  <span className="text-white">Coming </span>Soon</h2>
                <div className="h-1 w-32 bg-gradient-to-r from-[#712f8e] to-[#d601db] mx-auto rounded-full mb-8"></div>
              </motion.div>
              
              <p className="text-white text-xl text-center max-w-2xl mb-6">
                Be among the first to showcase your creative videos to our global audience.
              </p>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6"
              >
                <a 
                  href="/submit-video" 
                  className="px-8 py-4 bg-gradient-to-r from-[#712f8e] to-[#d601db] text-white font-semibold rounded-xl shadow-lg shadow-[#712f8e]/20 flex items-center group"
                >
                  <span>Submit Your Video</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </motion.div>
              
              {/* Animated dots */}
              <div className="mt-12 flex space-x-3">
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
        </div>
      </div>
    </LayoutWrapper>
  );
}
