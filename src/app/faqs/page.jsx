"use client"
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import LayoutWrapper from "../../components/Layout/LayoutWrapper";

const faqs = [
  {
    question: "How does ClipsFlick work?",
    answer:
      "ClipsFlick helps content creators make money from their videos by monetizing on ad-supported platforms, protecting copyrights, and licensing content to third parties.",
  },
  {
    question: "How does ClipsFlick protect my content?",
    answer:
      "We use powerful copyright tools from platforms like YouTube and Facebook to detect and remove stolen content. If someone uses your video without permission, we make sure you get paid for it!",
  },
  {
    question: "Can you predict how much my video will earn?",
    answer:
      "Not exactly! Your earnings depend on various factors like video content, viewer location, device used, video length, and licensing terms. Our team works hard to maximize your revenue!",
  },
  {
    question: "How much does your service cost?",
    answer: "It's 100% FREE—no hidden charges!",
  },
  {
    question: "Someone wants to use my video—what should I do?",
    answer:
      "Direct them to our licensing team at licensing@clipsflick.com. We'll handle the negotiations and make sure you get a fair deal!",
  },
  {
    question: "What if my video is used without my consent?",
    answer:
      "No worries! Just contact our copyright team at copyright@clipsflick.com. We'll investigate and take action!",
  },
  {
    question: "When should I expect earnings?",
    answer:
      "Your earnings depend on where your video is shared and how well it performs. Once your payment is ready, we'll send you a statement with all the details!",
  },
  {
    question: "How can I check my video's status?",
    answer:
      "Want to know if your video is earning money? Reach out to us through our website, and we'll give you an update!",
  },
  {
    question: "Which payment methods does ClipsFlick use?",
    answer: "We pay according to your preferred payment method—easy and hassle-free!",
  },
  {
    question: "Can we set up a phone call?",
    answer:
      "Absolutely! Drop your contact details in chat, and we'll schedule a call. Let's talk!",
  },
  {
    question: "What is the duration of the contract?",
    answer:
      "The agreement is perpetual, meaning no expiry date unless you decide otherwise. You're in control!",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

  return (<LayoutWrapper>
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-6 py-20">
      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold">
            <span className="text-white">Frequently </span>
            <span className="text-[#712f8e]">Asked Questions</span>
          </h1>
          <div className="h-1 w-20 bg-[#712f8e] mx-auto mt-4 rounded-full"></div>
        </motion.div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="border border-gray-800 rounded-lg overflow-hidden bg-black"
            >
              <button
                className="w-full text-left p-5 bg-[#712f8e]/10 text-white font-semibold focus:outline-none flex justify-between items-center hover:bg-[#712f8e]/20 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span>{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-[#712f8e]" />
                </motion.div>
              </button>
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="p-5 bg-black/90 text-gray-200 leading-relaxed"
                >
                  {faq.answer}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div></LayoutWrapper>
  );
}
