import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const VisualShowcase = () => {
  return (
    <section className="relative bg-black py-16 px-6 text-white">
      {/* Background Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg')",
        }}
      ></div>

      <div className="max-w-6xl mx-auto relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold text-purple-500"
        >
          Monetize Your Creativity
        </motion.h2>
        <p className="text-gray-300 mt-4 text-lg">
          Join our platform and start selling your high-quality videos to a global audience.  
          Whether you create short films, tutorials, or stock footage, we provide the tools to 
          help you <strong>earn from your passion.</strong>
        </p>

        {/* Video Showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-12 flex justify-center"
        >
          <video
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            controls
            className="rounded-3xl shadow-2xl hover:scale-105 transition-all duration-300 w-[80%] md:w-[60%] h-[350px] object-cover"
          />
        </motion.div>

        {/* Features */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-300">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="bg-gray-900 p-6 rounded-xl shadow-lg hover:bg-gray-800 transition"
          >
            <h3 className="text-xl font-semibold text-purple-500">💰 Earn Revenue</h3>
            <p className="mt-2 text-sm">
              Set your own prices and keep <strong>100% of your earnings</strong> with no hidden fees.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="bg-gray-900 p-6 rounded-xl shadow-lg hover:bg-gray-800 transition"
          >
            <h3 className="text-xl font-semibold text-purple-500">🌍 Reach Millions</h3>
            <p className="mt-2 text-sm">
              Get discovered by businesses, content creators, and marketers looking for premium content.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="bg-gray-900 p-6 rounded-xl shadow-lg hover:bg-gray-800 transition"
          >
            <h3 className="text-xl font-semibold text-purple-500">🔒 Secure Transactions</h3>
            <p className="mt-2 text-sm">
              Your sales are protected with <strong>secure payment gateways</strong> and instant payouts.
            </p>
          </motion.div>
        </div>

        {/* Call to Action */}
        <Link href={"/submit-video"}>
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="mt-8 inline-block bg-purple-500 px-8 py-3 text-lg font-semibold rounded-full hover:bg-purple-700 transition-all duration-300 shadow-lg"
        >
          Start Selling Now
        </motion.button></Link>
      </div>
    </section>
  );
};

export default VisualShowcase;
