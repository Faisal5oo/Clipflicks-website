import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Globe, DollarSign, Zap } from "lucide-react";

const features = [
  {
    icon: <ShieldCheck size={40} />,
    title: "Secure Transactions",
    description: "Your videos are protected with end-to-end encryption.",
  },
  {
    icon: <DollarSign size={40} />,
    title: "Instant Payments",
    description: "Receive payments immediately after a successful sale.",
  },
  {
    icon: <Globe size={40} />,
    title: "Global Marketplace",
    description: "Sell your videos to a worldwide audience in one click.",
  },
  {
    icon: <Zap size={40} />,
    title: "Seamless Experience",
    description: "Upload, manage, and sell videos effortlessly.",
  },
];

export default function WhyChooseUs() {
  // Using the client's original content
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-white">Why </span>
            <span className="text-[#712f8e]">Choose Us</span>
          </h2>
          <div className="h-1 w-20 bg-[#712f8e] mx-auto rounded-full"></div>
        </div>
        
        {/* Original client content for WhyChooseUs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Global Network",
              description: "Connect with media buyers and content distributors from around the world"
            },
            {
              title: "Fair Compensation",
              description: "Get paid what your content is worth with transparent pricing"
            },
            {
              title: "Copyright Protection",
              description: "We actively protect your content rights across digital platforms"
            },
            {
              title: "Quick Payments",
              description: "Receive payments faster with our streamlined processing system"
            },
            {
              title: "Easy Submission",
              description: "Submit your videos with our simple, user-friendly platform"
            },
            {
              title: "Dedicated Support",
              description: "Our team is available to assist you throughout the process"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-black/60 p-6 rounded-lg border border-gray-800"
            >
              <h3 className="text-[#712f8e] text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
