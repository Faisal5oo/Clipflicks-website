"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Filter, ChevronLeft, ChevronRight, Menu } from "lucide-react";
import ReactPlayer from "react-player";
import LayoutWrapper from "../../components/Layout/LayoutWrapper";


const videos = [
  { id: 1, title: "Exploring Space", url: "https://www.youtube.com/watch?v=b55fIOZaSh4", category: "Science", description: "A journey through the cosmos exploring the wonders of space." },
  { id: 2, title: "Deep Ocean Mysteries", url: "https://www.youtube.com/watch?v=b55fIOZaSh4", category: "Nature", description: "Unveiling the hidden secrets of the deep ocean." },
  { id: 3, title: "AI Revolution", url: "https://www.youtube.com/watch?v=b55fIOZaSh4", category: "Technology", description: "How AI is changing the world and its future implications." },
  { id: 4, title: "The Future of Quantum Computing", url: "https://www.youtube.com/watch?v=b55fIOZaSh4", category: "Technology", description: "Exploring the potential and challenges of quantum computing." },
  { id: 5, title: "Wildlife in the Amazon", url: "https://www.youtube.com/watch?v=b55fIOZaSh4", category: "Nature", description: "A look into the rich biodiversity of the Amazon rainforest." },
  { id: 6, title: "Mars Colonization", url: "https://www.youtube.com/watch?v=b55fIOZaSh4", category: "Science", description: "Challenges and possibilities of settling on Mars." },
  { id: 7, title: "Future of Robotics", url: "https://www.youtube.com/watch?v=b55fIOZaSh4", category: "Technology", description: "Where robotics is heading in the next decade." },
];

export default function PremiumVideoLibrary() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const videosPerPage = 5;

  const filteredVideos = selectedCategory === "All" ? videos : videos.filter(video => video.category === selectedCategory);
  const totalPages = Math.ceil(filteredVideos.length / videosPerPage);
  const displayedVideos = filteredVideos.slice((currentPage - 1) * videosPerPage, currentPage * videosPerPage);

  return (
    <LayoutWrapper>
    <div className="min-h-screen flex flex-col md:flex-row bg-black p-6 overflow-x-hidden">
      {/* Mobile Sidebar Toggle */}
      <button className="md:hidden p-3 text-white" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
        <Menu />
      </button>
      
      {/* Sidebar Filters */}
      <aside className={`absolute md:static md:w-1/4 p-6 bg-gray-900 bg-opacity-90 rounded-lg shadow-lg border border-gray-800 transition-transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 fixed h-full md:h-auto z-50`}>        
        <h2 className="text-xl font-bold text-purple-500 mb-4 flex items-center">
          <Filter className="mr-2" /> Filters
        </h2>
        <ul className="space-y-3">
          {["All", "Technology", "Nature", "Science"].map((category) => (
            <li
              key={category}
              onClick={() => { setSelectedCategory(category); setCurrentPage(1); setIsSidebarOpen(false); }}
              className={`cursor-pointer flex items-center text-gray-300 p-3 rounded-lg transition hover:bg-purple-500 hover:text-white ${
                selectedCategory === category ? "bg-purple-500 text-white" : ""
              }`}
            >
              {selectedCategory === category && <Check className="mr-2" />}
              {category}
            </li>
          ))}
        </ul>
      </aside>

      {/* Video List & Pagination */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="md:ml-6 w-full p-6 overflow-y-auto space-y-6"
      >
        <h2 className="text-3xl font-bold text-white mb-6">Premium Videos</h2>
        <div className="space-y-6">
          {displayedVideos.map((video) => (
            <div key={video.id} className="bg-gray-900 p-4 rounded-lg shadow-lg flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/3">
                <ReactPlayer
                  url={video.url}
                  controls
                  width="100%"
                  height="180px"
                  className="rounded-lg"
                />
              </div>
              <div className="w-full md:w-2/3 mt-4 md:mt-0 md:pl-4">
                <h3 className="text-lg font-semibold text-gray-300 mb-2">{video.title}</h3>
                <p className="text-gray-400 text-sm">{video.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center mt-6 space-x-4">
            <button
              className={`p-2 rounded-lg ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : "bg-purple-600 hover:bg-purple-700"}`}
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="text-white" />
            </button>
            <span className="text-gray-300 text-lg">Page {currentPage} of {totalPages}</span>
            <button
              className={`p-2 rounded-lg ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "bg-purple-600 hover:bg-purple-700"}`}
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
            >
              <ChevronRight className="text-white" />
            </button>
          </div>
        )}
      </motion.div>
    </div></LayoutWrapper>
  );
}
