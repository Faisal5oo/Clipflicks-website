"use client"
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Search, X } from "lucide-react";
import LayoutWrapper from "../../components/Layout/LayoutWrapper";

const faqs = [
  {
    question: "How does ClipsFlick work?",
    answer:
      "ClipsFlick helps content creators make money from their videos by monetizing on ad-supported platforms, protecting copyrights, and licensing content to third parties.",
    category: "general"
  },
  {
    question: "How does ClipsFlick protect my content?",
    answer:
      "We use powerful copyright tools from platforms like YouTube and Facebook to detect and remove stolen content. If someone uses your video without permission, we make sure you get paid for it!",
    category: "copyright"
  },
  {
    question: "Can you predict how much my video will earn?",
    answer:
      "Not exactly! Your earnings depend on various factors like video content, viewer location, device used, video length, and licensing terms. Our team works hard to maximize your revenue!",
    category: "earnings"
  },
  {
    question: "How much does your service cost?",
    answer: "It's 100% FREE—no hidden charges!",
    category: "general"
  },
  {
    question: "Someone wants to use my video—what should I do?",
    answer:
      "Direct them to our licensing team at licensing@clipsflick.com. We'll handle the negotiations and make sure you get a fair deal!",
    category: "licensing"
  },
  {
    question: "What if my video is used without my consent?",
    answer:
      "No worries! Just contact our copyright team at copyright@clipsflick.com. We'll investigate and take action!",
    category: "copyright"
  },
  {
    question: "When should I expect earnings?",
    answer:
      "Your earnings depend on where your video is shared and how well it performs. Once your payment is ready, we'll send you a statement with all the details!",
    category: "earnings"
  },
  {
    question: "How can I check my video's status?",
    answer:
      "Want to know if your video is earning money? Reach out to us through our website, and we'll give you an update!",
    category: "general"
  },
  {
    question: "Which payment methods does ClipsFlick use?",
    answer: "We pay according to your preferred payment method—easy and hassle-free!",
    category: "payments"
  },
  {
    question: "Can we set up a phone call?",
    answer:
      "Absolutely! Drop your contact details in chat, and we'll schedule a call. Let's talk!",
    category: "support"
  },
  {
    question: "What is the duration of the contract?",
    answer:
      "The agreement is perpetual, meaning no expiry date unless you decide otherwise. You're in control!",
    category: "legal"
  },
];

const categories = [
  { name: "All", value: "all" },
  { name: "General", value: "general" },
  { name: "Copyright", value: "copyright" },
  { name: "Earnings", value: "earnings" },
  { name: "Licensing", value: "licensing" },
  { name: "Payments", value: "payments" },
  { name: "Legal", value: "legal" },
  { name: "Support", value: "support" },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "all" || faq.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <LayoutWrapper>
      <div className="min-h-screen bg-black text-white py-32 px-6 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')] bg-center opacity-[0.03]"></div>
          <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-[#712f8e]/10 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-1/4 left-1/3 w-60 h-60 bg-[#d601db]/10 rounded-full blur-[80px]"></div>
        </div>
        
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <motion.span 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block py-1.5 px-4 rounded-full bg-[#712f8e]/10 text-[#d601db] text-sm font-medium mb-4"
            >
              Got Questions?
            </motion.span>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Frequently </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#712f8e] to-[#d601db]">Asked Questions</span>
            </h1>
            
            <div className="h-1 w-24 bg-gradient-to-r from-[#712f8e] to-[#d601db] mx-auto rounded-full mb-6"></div>
            
            <p className="text-gray-300 max-w-2xl mx-auto mb-10 text-lg">
              Find answers to the most common questions about our platform and services
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto mb-14">
              <div className="absolute inset-y-0 left-4 flex items-center text-gray-400">
                <Search size={18} />
              </div>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search for questions..."
                className="w-full py-4 pl-12 pr-10 bg-black/60 border border-gray-800 rounded-xl text-white focus:outline-none focus:border-[#712f8e] transition-all"
              />
              {searchTerm && (
                <button 
                  onClick={() => setSearchTerm("")}
                  className="absolute inset-y-0 right-4 flex items-center text-gray-400 hover:text-white"
                >
                  <X size={18} />
                </button>
              )}
            </div>
            
            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category) => (
                <motion.button
                  key={category.value}
                  onClick={() => setActiveCategory(category.value)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === category.value
                      ? "bg-gradient-to-r from-[#712f8e] to-[#d601db] text-white"
                      : "bg-gray-900 text-gray-400 hover:text-white border border-gray-800"
                  }`}
                >
                  {category.name}
                </motion.button>
              ))}
            </div>
          </motion.div>
          
          {filteredFaqs.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16 bg-gray-900/30 rounded-2xl border border-gray-800"
            >
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold mb-2">No results found</h3>
              <p className="text-gray-400">Try adjusting your search terms or filters</p>
            </motion.div>
          ) : (
            <div className="space-y-4">
              {filteredFaqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className={`border border-gray-800 rounded-xl overflow-hidden ${
                    openIndex === index ? "bg-gradient-to-b from-gray-900 to-black" : "bg-black/80"
                  } backdrop-blur-sm transition-colors duration-300`}
                >
                  <motion.button
                    className="w-full text-left p-5 text-white font-semibold focus:outline-none flex justify-between items-center"
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    whileHover={{ backgroundColor: "rgba(113, 47, 142, 0.05)" }}
                  >
                    <span className="pr-8">{faq.question}</span>
                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={`flex-shrink-0 ${openIndex === index ? "text-[#d601db]" : "text-gray-400"}`}
                    >
                      <ChevronDown className="w-5 h-5" />
                    </motion.div>
                  </motion.button>
                  
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="relative overflow-hidden">
                          <div className="absolute top-0 left-0 w-0.5 h-full bg-gradient-to-b from-[#712f8e] to-[#d601db]"></div>
                          <div className="p-5 pl-6 bg-[#712f8e]/5 text-gray-300 leading-relaxed">
                            {faq.answer}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          )}
          
          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-16 text-center bg-gradient-to-br from-gray-900 to-black p-10 rounded-2xl border border-gray-800 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#712f8e]/10 rounded-full blur-[100px] transform translate-x-1/2 -translate-y-1/2"></div>
            
            <h3 className="text-2xl font-bold mb-4 relative z-10">Still have questions?</h3>
            <p className="text-gray-300 mb-8 max-w-xl mx-auto relative z-10">
              If you couldn't find the answer to your question, feel free to reach out to our support team
            </p>
            
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-3.5 bg-gradient-to-r from-[#712f8e] to-[#d601db] text-white font-medium rounded-xl shadow-lg shadow-[#712f8e]/20 relative z-10"
            >
              Contact Support
            </motion.a>
          </motion.div>
        </div>
      </div>
    </LayoutWrapper>
  );
}
