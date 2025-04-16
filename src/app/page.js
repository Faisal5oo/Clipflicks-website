"use client";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import LayoutWrapper from "../components/Layout/LayoutWrapper";
// import VideoSlider from "@/components/Slider/VideoSlider";
// import ReactPlayer from "react-player";
import WhyChooseUs from "@/components/Features/FeaturesComponent";
import VisualShowcase from "@/components/Features/VisualShowCase";
import TextTransition, { presets } from "react-text-transition";
import Link from "next/link";

export default function Home() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((prev) => (prev + 1) % TEXTS.length),
      2000
    );
    return () => clearInterval(intervalId);
  }, []);

  const step1Ref = useRef(null);
  const step2Ref = useRef(null);

  const step1InView = useInView(step1Ref, {
    triggerOnce: true,
    threshold: 0.2,
  });
  const step2InView = useInView(step2Ref, {
    triggerOnce: true,
    threshold: 0.2,
  });
  const TEXTS = ["Sell Your Videos", "Earn Instantly!", "Get Paid Now!"];
  return (
    <LayoutWrapper>
      {/* Hero Section */}
      <div className="relative min-h-screen bg-black flex items-center justify-center">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover rounded-b-[60px]"
        >
          <source src="/placeholder.mp4" type="video/mp4" />
        </video>

        <div className="absolute top-0 left-0 w-full h-full bg-black/60"></div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-white max-w-2xl p-6 text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-5xl font-bold text-purple-500"
          >
            <TextTransition
              springConfig={presets.wobbly}
              className="inline-block"
            >
              {TEXTS[index]}
            </TextTransition>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-lg text-gray-300 mt-4"
          >
            Upload and sell your creative video content to buyers worldwide.
          </motion.p>

          <Link href={"/submit-video"}>
            <motion.button
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className="inline-block mt-6 px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white font-semibold rounded-lg shadow-lg"
            >
              Submit Your Video
            </motion.button>
          </Link>
        </motion.div>
      </div>

      {/* Steps Section */}
      <section className="bg-black py-20 px-6">
        <div className="max-w-6xl mx-auto space-y-20">
          {/* Step 1 */}
          <motion.div
            ref={step1Ref}
            initial={{ opacity: 0, y: 50 }}
            animate={step1InView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div className="text-white">
              <h2 className="text-4xl font-bold text-purple-500">
                What Makes Clipsflick the Best Choice?
              </h2>
              <p className="text-gray-300 mt-4">
                We are leading the way in the user-generated content sector,
                connecting creators and distributors globally. Some of the most
                shared and copied footage on the internet may be found in our
                vast video archive
              </p>
            </div>

            {/* <div className="w-full rounded-lg shadow-lg border-2 border-white-500 overflow-hidden">
              <ReactPlayer
                url="https://www.youtube.com/watch?v=JQbjS0_ZfJ0"
                width="100%"
                height="350px"
                controls
              />
            </div> */}
          </motion.div>

          {/* Step 2 */}
          <motion.div
            ref={step2Ref}
            initial={{ opacity: 0, y: 50 }}
            animate={step2InView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end"
          >
            {/* Empty div for layout adjustment on larger screens */}
            <div className="hidden md:block"></div>

            {/* Water Puddle Shape */}
            
            <div className="flex justify-center md:justify-end">
              
              <img
                src="/section-2.jpg"
                alt="Sell Your Videos"
                className="w-[600px] h-[400px] rounded-lg shadow-lg"
              />
            </div>
          </motion.div>
        </div>

        {/* Other Sections */}
        {/* <div><VideoSlider /></div> */}
        <div>
          <WhyChooseUs />
        </div>
        <div>
          <VisualShowcase />
        </div>
      </section>
    </LayoutWrapper>
  );
}
