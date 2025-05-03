import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Globe, DollarSign, Zap, Upload, Headset } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <Globe size={28} />,
      title: "Global Network",
      description: "Connect seamlessly with trusted media buyers and content distributors worldwide."
    },
    {
      icon: <DollarSign size={28} />,
      title: "Fair Compensation",
      description: "Receive fair and transparent payment for the true value of your content."
    },
    {
      icon: <ShieldCheck size={28} />,
      title: "Copyright Protection",
      description: "Safeguard your rights — we actively protect your content across all major digital platforms."
    },
    {
      icon: <Zap size={28} />,
      title: "Quick Payments",
      description: "Get paid faster with our streamlined and reliable payment system."
    },
    {
      icon: <Upload size={28} />,
      title: "Easy Submission",
      description: "Use our simple, user-friendly platform to submit your videos effortlessly."
    },
    {
      icon: <Headset size={28} />,
      title: "Dedicated Support",
      description: "Our expert team is available to assist and guide you throughout every step of the process."
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#712f8e]/10 rounded-full blur-[100px] transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-[#d601db]/10 rounded-full blur-[100px] transform -translate-x-1/2 translate-y-1/2"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-5"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 relative inline-block"
          >
            <span className="text-white">Why </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#712f8e] to-[#d601db]">Choose Us</span>
          </motion.h2>
          
          <div className="h-1 w-24 bg-gradient-to-r from-[#712f8e] to-[#d601db] mx-auto rounded-full mb-6"></div>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-gray-300 max-w-2xl mx-auto text-lg"
          >
            We provide industry-leading solutions to help creators maximize their content's value
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ 
                y: -5,
                boxShadow: "0 10px 30px -10px rgba(113, 47, 142, 0.2)",
                borderColor: "#712f8e"
              }}
              className="bg-gradient-to-b from-gray-900 to-black p-8 rounded-2xl border border-gray-800 backdrop-blur-sm shadow-lg transition-all duration-300 group"
            >
              <div className="relative mb-6 inline-flex">
                <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-[#712f8e] to-[#d601db] opacity-0 blur-xl group-hover:opacity-20 transition-opacity duration-500"></div>
                <div className="relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-[#712f8e]/20 to-transparent">
                  <div className="text-[#d601db] group-hover:text-white transition-colors duration-300">
                    {feature.icon}
                  </div>
                </div>
              </div>
              
              <h3 className="text-white text-xl font-bold mb-3 group-hover:text-[#d601db] transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
        
        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <motion.a
            href="/submit-video"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block px-8 py-4 bg-gradient-to-r from-[#712f8e] to-[#d601db] text-white font-semibold rounded-xl shadow-lg shadow-[#712f8e]/20 hover:shadow-xl hover:shadow-[#712f8e]/30 transition-all"
          >
            Start Monetizing Your Videos
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
