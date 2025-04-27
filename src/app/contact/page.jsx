"use client";
import { motion } from "framer-motion";
import { Mail, User, MessageSquare } from "lucide-react";
import { useState } from "react";
import LayoutWrapper from "../../components/Layout/LayoutWrapper";

export default function ContactUs() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <LayoutWrapper>
      <div className="min-h-screen flex items-center justify-center bg-black px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-4xl"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-white">Contact </span>
              <span className="text-[#712f8e]">Us</span>
            </h2>
            <div className="h-1 w-20 bg-[#712f8e] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Have questions about our services or need assistance with your account? 
              Get in touch with our team, and we'll be happy to help.
            </p>
          </div>
          
          {/* Simple Contact Card */}
          <div className="bg-black/80 p-8 rounded-xl border border-gray-800 mt-8">
            <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left">
              <div className="bg-[#712f8e]/10 p-6 rounded-full mb-6 md:mb-0 md:mr-8">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#712f8e]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Email Us</h3>
                <p className="text-gray-400 mb-4">For all inquiries, please email us at:</p>
                <a 
                  href="mailto:clipsflickofficial@gmail.com" 
                  className="text-xl text-[#712f8e] hover:underline transition-colors"
                >
                  clipsflickofficial@gmail.com
                </a>
              </div>
            </div>
            
            {/* Response time information */}
            <div className="mt-12 bg-[#712f8e]/5 p-4 rounded-lg border border-gray-800">
              <p className="text-gray-300 text-center">
                We typically respond to all inquiries within 24-48 hours during business days.
              </p>
            </div>
          </div>
          
          {/* Form is commented out as requested */}
          {/* 
          <form className="mt-8 space-y-5">
            ...
          </form>
          */}
        </motion.div>
      </div>
    </LayoutWrapper>
  );
}
