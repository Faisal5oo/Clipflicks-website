"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import LayoutWrapper from "../../components/Layout/LayoutWrapper";
import Link from "next/link";

export default function AboutUs() {
  return (
    <LayoutWrapper>
      <div className="min-h-screen bg-black text-white">
        {/* 🚀 Hero Section */}
        <section className="relative h-screen flex items-center justify-center text-center">
          <Image
            src="https://images.pexels.com/photos/1146134/pexels-photo-1146134.jpeg"
            layout="fill"
            objectFit="cover"
            alt="Futuristic Background"
            className="opacity-50"
          />
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="z-10 px-6"
          >
            <h1 className="text-5xl font-extrabold tracking-wide text-purple-500"><span className="text-white">About</span> Us</h1>
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
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="mt-6 bg-purple-500 px-6 py-3 rounded-full text-lg font-semibold shadow-lg"
              >
                Submit Video
              </motion.button>
            </Link>
          </motion.div>
        </section>

        {/* 🌍 How It Works */}
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

        {/* 🔮 Why Sell Your Videos? */}
        {/* <section className="py-20 flex flex-col md:flex-row items-center gap-10 max-w-6xl mx-auto">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="md:w-1/2"
          >
            <Image
              src="https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg"
              width={600}
              height={400}
              alt="Why Sell?"
              className="rounded-lg shadow-lg"
            />
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="md:w-1/2"
          >
            <h2 className="text-4xl font-bold">Why Sell Your Videos?</h2>
            <p className="mt-4 text-lg text-gray-300">
              Brands, media companies, and content creators are always looking
              for high-quality, original footage. By selling your videos on our
              platform, you get exposure to a **global market** and **earn
              revenue effortlessly**.
            </p>
          </motion.div>
        </section> */}

        {/* ⚡ Features */}
        {/* <section className="py-20 bg-gray-900">
          <h2 className="text-4xl font-bold text-center">Platform Features</h2>
          <div className="flex flex-wrap justify-center mt-10 gap-6">
            {[
              { title: "Earn Instantly", desc: "Sell your videos and get paid quickly with secure transactions." },
              { title: "AI Video Matching", desc: "Our AI recommends your videos to the right buyers." },
              { title: "No Hidden Fees", desc: "We provide transparent pricing with no extra charges." }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-gray-800 p-6 rounded-lg shadow-lg text-center w-80"
              >
                <h3 className="text-2xl font-semibold text-purple-400">{feature.title}</h3>
                <p className="mt-2 text-gray-300">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </section> */}

        {/* 🎥 Our Video Creators */}
        {/* <section className="py-20 max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center">
            Meet Our Top Creators
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
            {[1, 2, 3].map((id) => (
              <motion.div
                key={id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: id * 0.2 }}
                className="bg-gray-800 p-6 rounded-lg shadow-lg text-center"
              >
                <Image
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
                  width={150}
                  height={150}
                  alt="Creator"
                  className="rounded-full mx-auto"
                />
                <h3 className="text-xl font-semibold mt-4">John Doe</h3>
                <p className="text-gray-400">Top Earning Creator</p>
              </motion.div>
            ))}
          </div>
        </section> */}
      </div>
    </LayoutWrapper>
  );
}
