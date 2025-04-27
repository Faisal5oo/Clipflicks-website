"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import LayoutWrapper from "../../components/Layout/LayoutWrapper";
import Link from "next/link";

export default function AboutUs() {
  return (
    <LayoutWrapper>
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section with Pexels image */}
        <section className="relative h-screen flex items-center justify-center text-center">
          <Image
            src="https://images.pexels.com/photos/2833037/pexels-photo-2833037.jpeg"
            layout="fill"
            objectFit="cover"
            alt="Video Production"
            className="opacity-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-[#712f8e]/20"></div>
          
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="z-10 px-6"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-white">About</span>
              <span className="text-[#712f8e]"> Us</span>
            </h1>
            
            <p className="mt-4 text-sm text-gray-300 max-w-2xl mx-auto">
              At the vanguard of the user-generated content industry, we are
              facilitating the connection between creators and distributors on a
              global scale. We are
              proud of our customer service, which is managed by genuine
              individuals who are available to respond to any inquiries or
              concerns via email or phone. Our licensing department specializes
              in custom licensing requests and briefs, ensuring we meet the
              specific and bulk content needs of our clients.
            </p>
            
            <Link href={"/submit-video"}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="mt-6 bg-[#712f8e] px-6 py-3 rounded-lg text-lg font-semibold"
              >
                Submit Video
              </motion.button>
            </Link>
          </motion.div>
        </section>

        {/* Library Section - Original Content */}
        <section className="relative py-20">
          <Image
            src="https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg"
            layout="fill"
            objectFit="cover"
            alt="How It Works"
            className="absolute inset-0 opacity-50"
          />
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-4xl font-bold"
            >
              Our Library
            </motion.h2>
            <p className="mt-4 text-lg text-gray-300">
              Our extensive video library is home to some of the most widely shared and replicated clips on the internet
            </p>
          </div>
        </section>

        {/* Global Reach Section with World Map */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            {/* <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">
                <span className="text-white">Global </span>
                <span className="text-[#712f8e]">Reach</span>
              </h2>
              <div className="h-1 w-20 bg-[#712f8e] mx-auto rounded-full"></div>
              <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
                Our network spans across continents, connecting creators with media companies worldwide
              </p>
            </div> */}
            
            {/* <div className="relative">
              <div className="absolute -inset-4 bg-[#712f8e]/20 rounded-lg blur-lg opacity-30"></div>
              <img 
                src="https://images.pexels.com/photos/1098536/pexels-photo-1098536.jpeg" 
                alt="Global Reach"
                className="relative rounded-lg w-full h-auto border border-gray-800"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
              {[
                { stat: "100+", label: "Countries" },
                { stat: "1M+", label: "Monthly Views" },
                { stat: "20K+", label: "Content Creators" },
                { stat: "$5M+", label: "Creator Payouts" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-black border border-gray-800 rounded-xl p-6 text-center"
                >
                  <div className="text-3xl font-bold text-[#712f8e] mb-2">{item.stat}</div>
                  <div className="text-gray-300">{item.label}</div>
                </motion.div>
              ))}
            </div> */}
          </div>
        </section>

        {/* Contact Section - Simple with specific email */}
        <section className="py-4 px-6 bg-black/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-white">Contact </span>
              <span className="text-[#712f8e]">Us</span>
            </h2>
            <div className="h-1 w-20 bg-[#712f8e] mx-auto rounded-full mb-6"></div>
            
            <p className="text-gray-300 mb-8 text-lg">
              Have questions or need assistance? Reach out to our team directly.
            </p>
            
            <div className="bg-black/60 py-6 px-8 rounded-xl inline-flex items-center border border-gray-800">
              <div className="w-12 h-12 bg-[#712f8e]/20 rounded-full flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#712f8e]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-gray-400 text-sm">Email Us At</p>
                <a href="mailto:clipsflickofficial@gmail.com" className="text-white text-lg hover:text-[#712f8e] transition-colors">
                  clipsflickofficial@gmail.com
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </LayoutWrapper>
  );
}
