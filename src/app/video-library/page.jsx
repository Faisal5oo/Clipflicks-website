"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Filter, ChevronLeft, ChevronRight, Menu } from "lucide-react";
import LayoutWrapper from "../../components/Layout/LayoutWrapper";

// Sample videos with Pexels images
const videos = [
  {
    id: 1,
    title: "Urban City Timelapses",
    description: "Experience the beautiful urban landscapes and architectural marvels in this stunning visual montage.",
    category: "Technology",
    thumbnail: "https://images.pexels.com/photos/1707820/pexels-photo-1707820.jpeg"
  },
  {
    id: 2,
    title: "Wildlife Encounters",
    description: "Get up close with nature's most magnificent creatures in their natural habitats.",
    category: "Nature",
    thumbnail: "https://images.pexels.com/photos/41178/africa-animal-big-carnivore-41178.jpeg"
  },
  {
    id: 3,
    title: "Aerial Landscapes",
    description: "Breathtaking drone footage showcasing the beauty of our planet from above.",
    category: "Science",
    thumbnail: "https://images.pexels.com/photos/1671324/pexels-photo-1671324.jpeg"
  },
  {
    id: 4,
    title: "Ocean Adventures",
    description: "Dive into the deep blue and discover the wonders of marine life and ocean landscapes.",
    category: "Nature",
    thumbnail: "https://images.pexels.com/photos/1738991/pexels-photo-1738991.jpeg"
  },
  {
    id: 5,
    title: "Mountain Exploration",
    description: "Journey through rugged peaks and serene valleys in this mountain adventure series.",
    category: "Science",
    thumbnail: "https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg"
  },
  {
    id: 6,
    title: "Tech Innovations",
    description: "Discover the latest technological breakthroughs and innovations shaping our future.",
    category: "Technology",
    thumbnail: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg"
  },
  {
    id: 7,
    title: "Sunset Collections",
    description: "A stunning compilation of magical sunset moments from across the globe.",
    category: "Nature",
    thumbnail: "https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg"
  }
];

export default function PremiumVideoLibrary() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const videosPerPage = 4;

  const filteredVideos = selectedCategory === "All" 
    ? videos 
    : videos.filter(video => video.category === selectedCategory);
    
  const totalPages = Math.ceil(filteredVideos.length / videosPerPage);
  const displayedVideos = filteredVideos.slice((currentPage - 1) * videosPerPage, currentPage * videosPerPage);

  return (
    <LayoutWrapper>
      <div className="min-h-screen bg-black p-6">
        <div className="max-w-6xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">
              <span className="text-white">Premium </span>
              <span className="text-[#712f8e]">Video Library</span>
            </h1>
            <div className="h-1 w-20 bg-[#712f8e] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Browse our collection of high-quality videos available for licensing
            </p>
          </div>
          
          {/* Main Content Area */}
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar - Fixed Category Filter */}
            <div className="w-full md:w-1/4 md:sticky md:self-start md:top-24" style={{height: 'fit-content'}}>
              <div className="bg-black/40 rounded-xl border border-gray-800 p-6">
                {/* Mobile Toggle */}
                <div className="flex items-center justify-between mb-4 md:hidden">
                  <h2 className="text-xl font-bold text-white flex items-center">
                    <Filter className="mr-2 text-[#712f8e] w-5 h-5" /> Filters
                  </h2>
                  <button 
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    className="bg-gray-800 p-2 rounded-lg"
                  >
                    <Menu className="text-white w-5 h-5" />
      </button>
                </div>
                
                {/* Desktop Heading */}
                <h2 className="text-xl font-bold text-white mb-4 hidden md:flex items-center">
                  <Filter className="mr-2 text-[#712f8e] w-5 h-5" /> Categories
        </h2>
                
                {/* Categories List */}
                <ul className={`space-y-2 ${isSidebarOpen ? 'block' : 'hidden md:block'}`}>
          {["All", "Technology", "Nature", "Science"].map((category) => (
            <li
              key={category}
                      onClick={() => { 
                        setSelectedCategory(category); 
                        setCurrentPage(1); 
                        setIsSidebarOpen(false); 
                      }}
                      className={`cursor-pointer flex items-center p-3 rounded-lg transition-colors ${
                        selectedCategory === category 
                          ? "bg-[#712f8e] text-white" 
                          : "text-gray-300 hover:bg-[#712f8e]/10"
                      }`}
                    >
                      {selectedCategory === category && <Check className="mr-2 w-4 h-4" />}
              {category}
            </li>
          ))}
        </ul>
              </div>
            </div>
            
            {/* Video Grid */}
            <div className="w-full md:w-3/4">
              {displayedVideos.length > 0 ? (
                <>
                  <div className="grid grid-cols-1 gap-6">
                    {displayedVideos.map((video) => (
      <motion.div
                        key={video.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="bg-black/40 rounded-xl border border-gray-800 overflow-hidden hover:border-[#712f8e]/50 transition-colors"
                      >
                        <div className="flex flex-col md:flex-row">
                          {/* Thumbnail */}
                          <div className="w-full md:w-2/5 relative">
                            <div className="aspect-video md:h-full">
                              <img 
                                src={video.thumbnail} 
                                alt={video.title}
                                className="w-full h-full object-cover"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                              <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-12 h-12 rounded-full bg-[#712f8e]/80 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8 5v14l11-7z" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          {/* Content - Removed View Details button */}
                          <div className="p-6 w-full md:w-3/5">
                            <h3 className="text-xl font-bold text-white mb-2">{video.title}</h3>
                            <p className="text-gray-300 mb-4">{video.description}</p>
                            <div className="flex items-center">
                              <span className="px-3 py-1 bg-[#712f8e]/20 text-[#712f8e] rounded-full text-xs">
                                {video.category}
                              </span>
              </div>
              </div>
            </div>
                      </motion.div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
                    <div className="flex justify-center items-center mt-10 space-x-2">
            <button
                        className={`p-2 rounded-lg ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : "bg-[#712f8e] hover:bg-[#712f8e]/90"}`}
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
                        <ChevronLeft className="text-white w-5 h-5" />
                      </button>
                      
                      {Array.from({ length: totalPages }).map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentPage(index + 1)}
                          className={`w-8 h-8 rounded-lg ${
                            currentPage === index + 1
                              ? "bg-[#712f8e] text-white"
                              : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                          }`}
                        >
                          {index + 1}
            </button>
                      ))}
                      
            <button
                        className={`p-2 rounded-lg ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "bg-[#712f8e] hover:bg-[#712f8e]/90"}`}
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
            >
                        <ChevronRight className="text-white w-5 h-5" />
            </button>
          </div>
        )}
                </>
              ) : (
                <div className="flex items-center justify-center h-64 bg-black/40 rounded-xl border border-gray-800">
                  <p className="text-gray-400 text-lg">No videos found. Please try another category.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </LayoutWrapper>
  );
}
