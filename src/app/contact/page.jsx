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
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black  px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-black p-10 rounded-lg shadow-lg max-w-3xl w-full text-white"
        >
          <h2 className="text-4xl font-bold text-center text-white">Get in Touch</h2>
          <p className="text-gray-300 text-center mt-2">We'd love to hear from you! Fill out the form below.</p>

          <form className="mt-6 space-y-4">
            {/* Name Field */}
            <div className="flex items-center bg-gray-900 p-3 rounded-lg border border-gray-600 focus-within:border-purple-500 transition">
              <User className="text-purple-500 mr-3" />
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="bg-transparent outline-none text-white w-full"
                onChange={handleChange}
                required
              />
            </div>

            {/* Email Field */}
            <div className="flex items-center bg-gray-900 p-3 rounded-lg border border-gray-600 focus-within:border-purple-500 transition">
              <Mail className="text-purple-500 mr-3" />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="bg-transparent outline-none text-white w-full"
                onChange={handleChange}
                required
              />
            </div>

            {/* Subject Dropdown */}
            <div className="flex items-center bg-gray-900 p-3 rounded-lg border border-gray-600 focus-within:border-purple-500 transition">
              <select
                name="subject"
                className="bg-transparent outline-none text-white w-full"
                onChange={handleChange}
                required
              >
                <option value="">Select Subject</option>
                <option value="General Inquiry">General Inquiry</option>
                <option value="Support">Support</option>
                <option value="Collaboration">Collaboration</option>
              </select>
            </div>

            {/* Message Field */}
            <div className="flex items-start bg-gray-900 p-3 rounded-lg border border-gray-600 focus-within:border-purple-500 transition">
              <MessageSquare className="text-purple-500 mr-3 mt-1" />
              <textarea
                name="message"
                rows="4"
                placeholder="Your Message"
                className="bg-transparent outline-none text-white w-full resize-none"
                onChange={handleChange}
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="w-full bg-purple-500 hover:bg-purple-700 text-white font-semibold py-3 rounded-lg shadow-lg"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </LayoutWrapper>
  );
}
