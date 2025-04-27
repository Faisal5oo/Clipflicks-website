import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function VisualShowcase() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-white">Featured </span>
            <span className="text-[#712f8e]">Content</span>
          </h2>
          <div className="h-1 w-20 bg-[#712f8e] mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            Explore some of our most successful videos from creators around the world
          </p>
        </div>

        {/* Video Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Urban Timelapse",
              category: "City",
              duration: "0:45",
              thumbnail: "https://images.pexels.com/photos/3052361/pexels-photo-3052361.jpeg"
            },
            {
              title: "Aerial Sunset",
              category: "Drone",
              duration: "1:20",
              thumbnail: "https://images.pexels.com/photos/1671324/pexels-photo-1671324.jpeg"
            },
            {
              title: "Wildlife Safari",
              category: "Nature",
              duration: "2:10",
              thumbnail: "https://images.pexels.com/photos/750539/pexels-photo-750539.jpeg"
            },
            {
              title: "Mountain Exploration",
              category: "Adventure",
              duration: "1:35",
              thumbnail: "https://images.pexels.com/photos/848573/pexels-photo-848573.jpeg"
            },
            {
              title: "Night City Lights",
              category: "Urban",
              duration: "0:55",
              thumbnail: "https://images.pexels.com/photos/1707820/pexels-photo-1707820.jpeg"
            },
            {
              title: "Ocean Waves",
              category: "Nature",
              duration: "1:15",
              thumbnail: "https://images.pexels.com/photos/1738991/pexels-photo-1738991.jpeg"
            }
          ].map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl cursor-pointer"
            >
              <div className="aspect-video overflow-hidden rounded-xl border border-gray-800 group-hover:border-[#712f8e] transition-colors">
                <img 
                  src={video.thumbnail} 
                  alt={video.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80"></div>
                
                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-[#712f8e]/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity scale-90 group-hover:scale-100 transition-transform">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                
                {/* Video Info */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="text-xs font-medium bg-[#712f8e]/90 text-white px-2 py-1 rounded-full">{video.category}</span>
                  <h3 className="text-white font-medium mt-2 text-lg">{video.title}</h3>
                  <div className="flex items-center mt-1">
                    <p className="text-gray-300 text-sm">{video.duration}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <Link href="/video-library">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#712f8e] hover:bg-[#712f8e]/90 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
            >
              View All Videos
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
}
