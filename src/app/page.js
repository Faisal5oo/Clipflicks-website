"use client";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import LayoutWrapper from "../components/Layout/LayoutWrapper";
// import VideoSlider from "@/components/Slider/VideoSlider";
// import ReactPlayer from "react-player";
import WhyChooseUs from "@/components/Features/FeaturesComponent";
import VisualShowcase from "@/components/Features/VisualShowCase";
import TextTransition, { presets } from "react-text-transition";
import Link from "next/link";

export default function Home() {
  const [index, setIndex] = useState(0);

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
      {/* Hero Section */}
      <div className="relative min-h-screen bg-black flex items-center justify-center">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/placeholder.mp4" type="video/mp4" />
        </video>

        {/* Overlay with brand gradient */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-black via-black/80 to-[#712f8e]/30"></div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-white max-w-3xl p-8 text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-white">Monetize Your </span>
            <span className="text-[#712f8e]">Creative Videos</span>
          </h1>
          
          <p className="text-xl text-gray-200 mt-6 max-w-2xl mx-auto leading-relaxed">
            Join thousands of creators who earn revenue by sharing their authentic video content with global brands and media companies.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Link href="/submit-video">
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="px-8 py-4 bg-[#712f8e] text-white font-semibold rounded-lg hover:bg-[#8a3dad] transition-colors"
            >
              Submit Your Video
            </motion.button>
          </Link>
            
            <Link href="/about">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="px-8 py-4 bg-black border border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
              >
                Learn More
              </motion.button>
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="mt-16">
            <p className="text-gray-400 uppercase tracking-wider text-sm mb-4">Trusted by creators worldwide</p>
            <div className="flex flex-wrap justify-center gap-8 items-center">
              <div className="text-gray-300 font-semibold">20K+ Videos</div>
              <div className="h-6 w-px bg-gray-700"></div>
              <div className="text-gray-300 font-semibold">100+ Countries</div>
              <div className="h-6 w-px bg-gray-700"></div>
              <div className="text-gray-300 font-semibold">$5M+ Paid</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Steps Section */}
      <section className="bg-black py-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-white">How It </span>
              <span className="text-[#712f8e]">Works</span>
            </h2>
            <div className="h-1 w-20 bg-[#712f8e] mx-auto rounded-full"></div>
            <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
              Our simple process helps content creators monetize their videos quickly and efficiently
            </p>
          </div>

          {/* Steps in a modern card layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
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
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-black border border-gray-800 rounded-xl p-6 hover:border-[#712f8e] transition-all group"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-[#712f8e]/10 text-[#712f8e] rounded-lg mb-4 text-xl">
                  {step.icon}
                </div>
                <div className="text-[#712f8e] font-bold text-3xl mb-3 opacity-50">{step.number}</div>
                <h3 className="text-white text-xl font-semibold mb-3 group-hover:text-[#712f8e] transition-colors">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </motion.div>
            ))}
          </div>

          {/* What Makes ClipsFlick the Best Choice - Modernized with Pexels image */}
          <motion.div
            ref={step1Ref}
            initial={{ opacity: 0, y: 50 }}
            animate={step1InView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
            className="mb-24"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="text-white order-2 md:order-1">
                <h2 className="text-3xl font-bold mb-6">
                  <span className="text-white">What Makes ClipsFlick </span>
                  <span className="text-[#712f8e]">the Best Choice?</span>
              </h2>
                <div className="h-1 w-20 bg-[#712f8e] mb-6 rounded-full"></div>
                <p className="text-gray-300 text-lg leading-relaxed">
                  We are leading the way in the user-generated content sector, connecting creators and distributors globally. Some of the most shared and copied footage on the internet may be found in our vast video archive.
                </p>
                
                <div className="mt-8 space-y-4">
                  {[
                    "Global network of media buyers",
                    "Transparent earnings and payments",
                    "Advanced copyright protection",
                    "Dedicated support team"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-[#712f8e]/20 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                        <svg className="w-4 h-4 text-[#712f8e]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-gray-300">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="md:order-2 relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#712f8e]/20 to-black rounded-xl blur-lg opacity-70"></div>
                <div className="relative overflow-hidden rounded-xl border border-gray-800">
                  {/* Using Pexels image */}
                  <img
                    src="https://images.pexels.com/photos/7256897/pexels-photo-7256897.jpeg" 
                    alt="Video Content Marketing"
                    className="w-full h-auto rounded-xl hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
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

          {/* Video section with placeholders instead of YouTube links */}
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
                  
                  {/* Play button - no link */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-[#712f8e]/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity scale-90 group-hover:scale-100 transition-transform">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Video Info - no YouTube link */}
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

          {/* Featured Video - Placeholder instead of YouTube embedded player */}
          <div className="mt-16 rounded-xl overflow-hidden border border-gray-800">
            <div className="aspect-video relative bg-black/60">
              <img 
                src="https://images.pexels.com/photos/3062541/pexels-photo-3062541.jpeg" 
                alt="Featured Video" 
                className="w-full h-full object-cover opacity-70"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-[#712f8e]/90 flex items-center justify-center">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
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

      {/* Testimonials Section with Pexels avatars - Commented out as requested */}
      {/*
      <div className="mt-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-white">Creator </span>
            <span className="text-[#712f8e]">Testimonials</span>
          </h2>
          <div className="h-1 w-20 bg-[#712f8e] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              quote: "ClipsFlick helped me turn my passion for videography into a profitable venture. Their platform is incredibly easy to use.",
              name: "Sarah Johnson",
              role: "Travel Filmmaker",
              avatar: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg"
            },
            {
              quote: "I've been able to reach a global audience and earn consistent revenue thanks to ClipsFlick's extensive network of buyers.",
              name: "Michael Chen",
              role: "Drone Specialist",
              avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg"
            },
            {
              quote: "The copyright protection alone is worth it. I finally have peace of mind knowing my creative work is protected and properly monetized.",
              name: "Emily Rodriguez",
              role: "Documentary Creator",
              avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
            }
          ].map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-black border border-gray-800 rounded-xl p-6 hover:border-[#712f8e] transition-all"
            >
              <div className="mb-4 text-[#712f8e]">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-gray-300 mb-6 font-light italic leading-relaxed">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-[#712f8e]">
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      */}
    </LayoutWrapper>
  );
}
