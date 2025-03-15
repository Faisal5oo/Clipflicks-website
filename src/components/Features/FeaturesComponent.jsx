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

const WhyChooseUs = () => {
  return (
    <section className="bg-gradient-to-b from-black via-gray-900 to-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold text-purple-500"
        >
          Why Choose <span className="text-white">Us?</span>
        </motion.h2>
        <p className="text-gray-300 mt-4 text-lg">
          We provide the best platform for content creators to monetize their work.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: index * 0.2 }}
            className="bg-gray-800 bg-opacity-60 p-6 rounded-2xl shadow-lg flex flex-col items-center text-center hover:bg-purple-500 transition-all duration-300"
          >
            <div className="text-white">{feature.icon}</div>
            <h3 className="text-2xl font-semibold mt-4">{feature.title}</h3>
            <p className="text-gray-300 mt-2">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
