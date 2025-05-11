"use client";
import { motion } from "framer-motion";
import { Mail, User, MessageSquare, MapPin, ArrowUpRight, Send, Phone } from "lucide-react";
import { useState } from "react";
import LayoutWrapper from "../../components/Layout/LayoutWrapper";

export default function ContactUs() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [formStatus, setFormStatus] = useState(null); // null, 'sending', 'success', 'error'
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    
    // Clear error when user is typing
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: null
      });
    }
  };
  
  const validateForm = () => {
    const newErrors = {};
    
    // Validate name
    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    // Validate email
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      newErrors.email = "Email is invalid";
    }
    
    // Validate subject
    if (!form.subject.trim()) {
      newErrors.subject = "Subject is required";
    }
    
    // Validate message
    if (!form.message.trim()) {
      newErrors.message = "Message is required";
    } else if (form.message.trim().length < 10) {
      newErrors.message = "Message is too short";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form
    if (!validateForm()) {
      return;
    }
    
    setFormStatus('sending');
    
    // Simulate form submission - in real app, replace with actual API call
    setTimeout(() => {
      setFormStatus('success');
      setForm({ name: "", email: "", subject: "", message: "" });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormStatus(null);
      }, 5000);
    }, 1500);
  };

  return (
    <LayoutWrapper>
      <div className="min-h-screen flex items-center justify-center bg-black py-32 px-6 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')] bg-center opacity-[0.03]"></div>
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#712f8e]/10 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-60 h-60 bg-[#d601db]/10 rounded-full blur-[80px]"></div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-5xl relative z-10"
        >
          <div className="text-center mb-16">
            <motion.span 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block py-1.5 px-4 rounded-full bg-[#712f8e]/10 text-[#d601db] text-sm font-medium mb-4"
            >
              Get In Touch
            </motion.span>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Contact </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#712f8e] to-[#d601db]">Us</span>
            </h2>
            
            <div className="h-1 w-24 bg-gradient-to-r from-[#712f8e] to-[#d601db] mx-auto rounded-full mb-6"></div>
            
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              Have questions about our services or need assistance with your account? 
              We're here to help you maximize the value of your content.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
            {/* Contact Information */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="lg:col-span-2 space-y-8"
            >
              {/* Primary Contact Card */}
              <div className="bg-gradient-to-b from-gray-900 to-black p-8 rounded-2xl border border-gray-800 overflow-hidden relative group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#712f8e]/20 rounded-full blur-[60px] transform translate-x-1/2 -translate-y-1/2 opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="flex flex-col relative z-10">
                  <div className="p-3 rounded-xl bg-[#712f8e]/10 inline-flex items-center justify-center mb-5 w-14 h-14">
                    <Mail className="text-[#d601db]" size={24} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
                  <p className="text-gray-400 mb-4">Our team will respond to your inquiry as soon as possible</p>
                  
                  <a 
                    href="mailto:Support@clipsflick.com" 
                    className="text-lg text-white font-medium flex items-center group/link hover:text-[#d601db] transition-colors"
                  >
                    Support@clipsflick.com
                    <ArrowUpRight size={16} className="ml-2 opacity-0 group-hover/link:opacity-100 transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all" />
                  </a>
                </div>
              </div>
              
              {/* Additional Contact Info Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gradient-to-b from-gray-900 to-black p-6 rounded-xl border border-gray-800 hover:border-[#712f8e]/50 transition-colors duration-300">
                  <div className="p-2.5 rounded-lg bg-[#712f8e]/10 inline-flex items-center justify-center mb-4">
                    <Phone className="text-[#d601db]" size={18} />
                  </div>
                  <h4 className="text-white font-semibold mb-1">Phone Support</h4>
                  <p className="text-gray-400 text-sm">Available for premium clients</p>
                </div>
                
                <div className="bg-gradient-to-b from-gray-900 to-black p-6 rounded-xl border border-gray-800 hover:border-[#712f8e]/50 transition-colors duration-300">
                  <div className="p-2.5 rounded-lg bg-[#712f8e]/10 inline-flex items-center justify-center mb-4">
                    <MapPin className="text-[#d601db]" size={18} />
                  </div>
                  <h4 className="text-white font-semibold mb-1">Global Reach</h4>
                  <p className="text-gray-400 text-sm">Supporting creators worldwide</p>
                </div>
              </div>
              
              {/* Response Time Card */}
              <div className="bg-black/60 p-6 rounded-xl border border-gray-800">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-white font-semibold">Response Time</h4>
                  <span className="bg-green-500/20 text-green-400 text-xs font-medium px-2.5 py-1 rounded-full">Fast</span>
                </div>
                <p className="text-gray-400 text-sm">
                  We typically respond to all inquiries within 24-48 hours during business days.
                </p>
              </div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="lg:col-span-3"
            >
              <div className="bg-gradient-to-b from-gray-900 to-black p-8 rounded-2xl border border-gray-800 relative">
                <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-[#d601db]/10 rounded-full blur-[80px] transform -translate-x-1/2 -translate-y-1/2 opacity-60"></div>
                
                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  <h3 className="text-xl font-bold text-white mb-6">Send us a message</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name Field */}
                    <div>
                      <label className="block text-gray-300 mb-2 text-sm">Your Name</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                          <User size={16} />
                        </div>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          required
                          className={`w-full pl-10 pr-4 py-3 bg-black/60 text-white rounded-lg border ${errors.name ? 'border-red-500' : 'border-gray-800'} focus:border-[#712f8e] focus:outline-none transition-colors`}
                        />
                      </div>
                      {errors.name && (
                        <p className="mt-1 text-red-500 text-xs">{errors.name}</p>
                      )}
                    </div>
                    
                    {/* Email Field */}
                    <div>
                      <label className="block text-gray-300 mb-2 text-sm">Email Address</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                          <Mail size={16} />
                        </div>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          required
                          className={`w-full pl-10 pr-4 py-3 bg-black/60 text-white rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-800'} focus:border-[#712f8e] focus:outline-none transition-colors`}
                        />
                      </div>
                      {errors.email && (
                        <p className="mt-1 text-red-500 text-xs">{errors.email}</p>
                      )}
                    </div>
                  </div>
                  
                  {/* Subject Field */}
                  <div>
                    <label className="block text-gray-300 mb-2 text-sm">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      required
                      className={`w-full px-4 py-3 bg-black/60 text-white rounded-lg border ${errors.subject ? 'border-red-500' : 'border-gray-800'} focus:border-[#712f8e] focus:outline-none transition-colors`}
                    />
                    {errors.subject && (
                      <p className="mt-1 text-red-500 text-xs">{errors.subject}</p>
                    )}
                  </div>
                  
                  {/* Message Field */}
                  <div>
                    <label className="block text-gray-300 mb-2 text-sm">Message</label>
                    <div className="relative">
                      <div className="absolute top-3 left-3 flex items-start pointer-events-none text-gray-500">
                        <MessageSquare size={16} />
                      </div>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Tell us what you need help with..."
                        required
                        className={`w-full pl-10 pr-4 py-3 bg-black/60 text-white rounded-lg border ${errors.message ? 'border-red-500' : 'border-gray-800'} focus:border-[#712f8e] focus:outline-none transition-colors`}
                      ></textarea>
                    </div>
                    {errors.message && (
                      <p className="mt-1 text-red-500 text-xs">{errors.message}</p>
                    )}
                  </div>
                  
                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={formStatus === 'sending'}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className={`w-full py-3.5 rounded-lg font-semibold flex items-center justify-center ${
                      formStatus === 'sending'
                        ? 'bg-gray-700 text-gray-300 cursor-not-allowed'
                        : 'bg-gradient-to-r from-[#712f8e] to-[#d601db] text-white shadow-lg shadow-[#712f8e]/20'
                    }`}
                  >
                    {formStatus === 'sending' ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message <Send size={16} className="ml-2" />
                      </>
                    )}
                  </motion.button>
                  
                  {/* Success Message */}
                  {formStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-4 p-6 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 text-white rounded-lg flex items-center gap-4"
                    >
                      <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-green-400">Message Sent Successfully!</h4>
                        <p className="text-gray-300">Thank you for reaching out. We'll get back to you as soon as possible.</p>
                      </div>
                    </motion.div>
                  )}
                </form>
              </div>
            </motion.div>
          </div>
          
          {/* FAQ Teaser */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <p className="text-gray-400 mb-4">Need quick answers?</p>
            <motion.a
              href="/faqs"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-3 bg-black/60 border border-gray-800 text-white rounded-lg hover:border-[#712f8e] transition-colors"
            >
              Check our FAQ Section
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </LayoutWrapper>
  );
}
