"use client";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Switch } from "@headlessui/react";
import SignatureCanvas from "react-signature-canvas";
import LayoutWrapper from "../../components/Layout/LayoutWrapper";
import { Plus } from "lucide-react";
import { createClient } from "@supabase/supabase-js";
import { v4 as uuidv4 } from "uuid";

export default function VideoSubmissionForm() {
  const [videoURL, setVideoURL] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [socialHandle, setSocialHandle] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [videoFiles, setVideoFiles] = useState([]);
  const [recordedVideo, setRecordedVideo] = useState(false);
  const [rawVideo, setRawVideo] = useState("");
  const [notUploadedElsewhere, setNotUploadedElsewhere] = useState(false);
  const [agreed18, setAgreed18] = useState(false);
  const [agreedTerms, setAgreedTerms] = useState(false);
  const [signature, setSignature] = useState("");
  const [exclusiveRights, setExclusiveRights] = useState(false);
  const [loading, setLoading] = useState(false);

  const signatureRef = useRef(null);
  useEffect(() => {
    console.log(signatureRef.current); // ✅ This is correct
  }, []);
  const countries = [
    { name: "Pakistan" },
    { name: "India" },
    { name: "USA" },
    { name: "UK" },
    { name: "UAE" },
    { name: "Australia" },
    { name: "Canada" },
    { name: "China" },
    { name: "Japan" },
    { name: "Russia" },
  ];

  const supabaseUrl = "https://xqgoqxnboybqjaqjeliq.supabase.co";
  const supabaseAnonKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhxZ29xeG5ib3licWphcWplbGlxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA5MTM2MTQsImV4cCI6MjA1NjQ4OTYxNH0.g6zofzjCa1vzTm6Tnh0V8m3mkqqPCE1jbJ5uSlIb_is";

  const supabase = createClient(supabaseUrl, supabaseAnonKey);
  const CDNURL =
    "https://xqgoqxnboybqjaqjeliq.supabase.co/storage/v1/object/public/videos";

  const handleFileUpload = async (e) => {
    const videoFile = e.target.files[0];

    if (!videoFile) {
      console.error("No file selected");
      return;
    }

    console.log("Uploading video...");

    const fileName = uuidv4() + ".mp4";

    const { data, error } = await supabase.storage
      .from("videos")
      .upload(fileName, videoFile, {
        contentType: videoFile.type,
      });

    if (error) {
      console.log("Error uploading video:", error);
      return;
    }
    const CDNLink = `${CDNURL}/${data.path}`;
    setRawVideo(CDNLink);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!agreed18 || !agreedTerms || !exclusiveRights) {
      alert("Please agree to all required checkboxes.");
      return;
    }

    // if (!videoFiles.length) {
    //   alert("Please upload at least one video.");
    //   return;
    // }

    setLoading(true);

    const formData = {
      videoURL,
      firstName,
      lastName,
      socialHandle,
      country,
      email,
      recordedVideo,
      rawVideo: rawVideo,
      notUploadedElsewhere,
      agreed18,
      agreedTerms,
      exclusiveRights,
      signature: signatureRef.current.toDataURL(),
    };

    console.log("form data", formData);

    try {
      const response = await fetch("http://localhost:5000/api/submit-video", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit video");
      }

      alert("Video submitted successfully!");
      setVideoURL("");
      setFirstName("");
      setLastName("");
      setSocialHandle("");
      setCountry("");
      setEmail("");
      setVideoFiles([]);
      setRecordedVideo(false);
      setNotUploadedElsewhere(false);
      setAgreed18(false);
      setAgreedTerms(false);
      setExclusiveRights(false);
      signatureRef.current.clear();
    } catch (error) {
      alert("Failed to submit the form. Please try again.");
    } finally {
      setLoading(false);
    }
  };

console.log("signature", signature);

  return (
    <LayoutWrapper>
      {/* Background with subtle gradient */}
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black px-6 py-20 relative overflow-hidden">
        {/* Floating Gradient Text */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="absolute top-10 text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-white text-center w-full"
        >
          Submit Your Creative Video
        </motion.h2>

        {/* Animated Form Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="bg-black/80 backdrop-blur-md p-8 rounded-3xl shadow-2xl w-full max-w-3xl border border-gray-800 mt-14"
        >
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Video URL */}
            <div>
              <label className="text-gray-300 font-medium">Video URL *</label>
              <div className="relative mt-2">
                <input
                  type="text"
                  required
                  value={videoURL}
                  onChange={(e) => setVideoURL(e.target.value)}
                  placeholder="Paste your video link"
                  className="w-full p-3 bg-gray-900 text-white rounded-xl outline-none border border-gray-700 focus:ring-2 focus:ring-purple-500"
                />
              </div>
            </div>

            {/* Name Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-gray-300 font-medium">
                  First Name *
                </label>
                <input
                  type="text"
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="John"
                  className="w-full mt-2 p-3 bg-gray-900 text-white rounded-xl border border-gray-700 outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div>
                <label className="text-gray-300 font-medium">Last Name *</label>
                <input
                  type="text"
                  required
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Doe"
                  className="w-full mt-2 p-3 bg-gray-900 text-white rounded-xl border border-gray-700 outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-gray-300 font-medium">
                  Social Handle
                </label>
                <input
                  type="text"
                  value={socialHandle}
                  onChange={(e) => setSocialHandle(e.target.value)}
                  className="w-full mt-2 p-3 bg-gray-900 text-white rounded-xl border border-gray-700 outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div>
                <label className="text-gray-300 font-medium">Country *</label>
                <select
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  required
                  className="w-full mt-2 p-3 bg-gray-900 text-white rounded-xl border border-gray-700 outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="">Select a country</option>
                  {countries.map((c, index) => (
                    <option key={index} value={c}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            {/* Video Upload */}
            <div
              className="flex flex-col items-center justify-center border-2 border-dashed border-gray-700 rounded-xl p-6 cursor-pointer hover:border-purple-500"
              onClick={() => document.getElementById("videoUpload").click()}
            >
              <Plus className="text-gray-300 text-3xl" />
              <p className="text-gray-400 mt-2">Click to upload video</p>
              <input
                id="videoUpload"
                type="file"
                accept="video/mp4"
                className="hidden"
                onChange={(e) => handleFileUpload(e)}
              />
            </div>
            {/* Display uploaded files */}
            {videoFiles.length > 0 && (
              <ul className="text-gray-300 mt-3">
                {videoFiles.map((file, index) => (
                  <li key={index} className="text-sm">
                    {file.name}
                  </li>
                ))}
              </ul>
            )}

            {/* Email */}
            <div>
              <label className="text-gray-300 font-medium">Email *</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@email.com"
                className="w-full mt-2 p-3 bg-gray-900 text-white rounded-xl border border-gray-700 outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Checkboxes */}
            <div className="space-y-3 text-gray-300">
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={agreed18}
                  onChange={() => setAgreed18(!agreed18)}
                  className="w-5 h-5 text-purple-500 bg-gray-900 border border-gray-700 rounded"
                />
                <span>I verify that I am at least 18 years old *</span>
              </label>

              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={agreedTerms}
                  onChange={() => setAgreedTerms(!agreedTerms)}
                  className="w-5 h-5 text-purple-500 bg-gray-900 border border-gray-700 rounded"
                />
                <span>
                  I acknowledge and consent to the Terms of Submission and
                  Privacy Agreement *
                </span>
              </label>

              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={exclusiveRights}
                  onChange={() => setExclusiveRights(!exclusiveRights)}
                  className="w-5 h-5 text-purple-500 bg-gray-900 border border-gray-700 rounded"
                />
                <span>
                  I have not given exclusive rights to this video to anyone *
                </span>
              </label>
            </div>

            {/* Signature Section */}
            <div>
              <label className="text-gray-300 font-medium">Signature *</label>
              <div className="mt-2 bg-white rounded-lg p-3">
                <SignatureCanvas
                  ref={signatureRef}
                  penColor="black"
                  value={signature}
                  onEnd={() => setSignature(signatureRef.current.toDataURL())}
                  canvasProps={{ className: "w-full h-32 rounded-lg" }}
                />
              </div>
            </div>
            <img src={signature} className="border bg-white" />
            <button className="bg-white text-black px-4 py-2 rounded-md" onClick={() => setSignature("")}>Clear</button>


            {/* Submit Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-3 bg-purple-500 hover:from-purple-700 hover:to-blue-600 text-white font-semibold rounded-xl transition shadow-lg"
            >
              {loading ? "Submitting..." : "Please Submit Video"}{" "}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </LayoutWrapper>
  );
}
