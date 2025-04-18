"use client";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Switch } from "@headlessui/react";
import dynamic from "next/dynamic";
const SignatureCanvas = dynamic(() => import("react-signature-canvas"), {
  ssr: false, // important for Vercel
});
import LayoutWrapper from "../../../components/Layout/LayoutWrapper";
import { Plus } from "lucide-react";
import { createClient } from "@supabase/supabase-js";
import { useParams } from "next/navigation";
import { v4 as uuidv4 } from "uuid";

export default function VideoSubmissionForm() {
  const [title, setTitle] = useState("");
  const [videoURL, setVideoURL] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [socialHandle, setSocialHandle] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [videoFiles, setVideoFiles] = useState([]);
  const [rawVideo, setRawVideo] = useState("");
  const [recordedVideo, setRecordedVideo] = useState(false);
  const [notUploadedElsewhere, setNotUploadedElsewhere] = useState(false);
  const [agreed18, setAgreed18] = useState(false);
  const [agreedTerms, setAgreedTerms] = useState(false);
  const [exclusiveRights, setExclusiveRights] = useState(false);
  const [loading, setLoading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploading, setUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(null);
  const [sign, setSign] = useState();
  const { id } = useParams();
  const signRef = useRef(null);
  console.log("Sign ref:", signRef);


  const handleClear = () => {
    // sign.clear();
    console.log("sign clear");
  };


  const supabaseUrl = "https://xqgoqxnboybqjaqjeliq.supabase.co";
  const supabaseAnonKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhxZ29xeG5ib3licWphcWplbGlxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA5MTM2MTQsImV4cCI6MjA1NjQ4OTYxNH0.g6zofzjCa1vzTm6Tnh0V8m3mkqqPCE1jbJ5uSlIb_is";
  const CDNURL =
    "https://xqgoqxnboybqjaqjeliq.supabase.co/storage/v1/object/public/videos";

  const supabase = createClient(supabaseUrl, supabaseAnonKey);

  const handleFileUpload = async (e) => {
    const videoFile = e.target.files[0];

    if (!videoFile) {
      console.error("No file selected");
      return;
    }

    setUploading(true);
    setUploadProgress(0);
    console.log("Uploading video...");

    const fileName = uuidv4() + ".mp4";

    const { data, error } = await supabase.storage
      .from("videos")
      .upload(fileName, videoFile, {
        contentType: videoFile.type,
        upsert: true,
        onUploadProgress: (progressEvent) => {
          const percentCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          setUploadProgress(percentCompleted);
        },
      });

    if (error) {
      console.log("Error uploading video:", error);
      setUploading(false);
      setUploadSuccess(false);
      return;
    }

    const CDNLink = `${CDNURL}/${data.path}`;
    setRawVideo(CDNLink);
    setUploading(false);
    setUploadProgress(100);
    setUploadSuccess(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Submit triggered");

    if (!agreed18 || !agreedTerms || !exclusiveRights) {
      alert("Please agree to all required checkboxes.");
      return;
    }

    console.log("All required checkboxes are agreed");

    setLoading(true);

    try {
      console.log("Signature ref:", signRef);

      const trimmedCanvas = signRef.current?.getTrimmedCanvas();
      if (trimmedCanvas) {
        const base64Image = trimmedCanvas.toDataURL("image/png");
       return base64Image
      }
      console.log("base64Image:", base64Image);

      // const signatureImage = canvas.toDataURL("image/png");
      // console.log("Signature Image:", signatureImage);

      // const trimmedCanvas = signRef.current?.getTrimmedCanvas();
      // console.log("Trimmed canvas:", trimmedCanvas);
      // const signatureImage = trimmedCanvas?.toDataURL("image/png");
      // console.log("Signature Image:", signatureImage);

      const formData = {
        empRef: id,
        title,
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
        signature: base64Image,
      };

      console.log("Form Data ready to be sent:", formData);

      const response = await fetch(
        "https://clipflicks-admin-fe.vercel.app/api/submissions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      console.log("Server response:", response);

      if (response.status !== 200) {
        throw new Error("Failed to submit video");
      }

      alert("Video submitted successfully!");

      // Clear fields
      setTitle("");
      setVideoURL("");
      setFirstName("");
      setLastName("");
      setSocialHandle("");
      setCountry("");
      setEmail("");
      setVideoFiles([]);
      setVideoURL("");
      setRecordedVideo(false);
      setNotUploadedElsewhere(false);
      setAgreed18(false);
      setAgreedTerms(false);
      setExclusiveRights(false);

      if (signRef && typeof signRef.clear === "function") {
        signRef.clear();
        console.log("Signature cleared");
      }

      setUploadSuccess(null);
    } catch (error) {
      console.error("Submission error:", error);
      alert("Failed to submit the form. Please try again.");
    } finally {
      setLoading(false);
    }
  };

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
              <label className="text-gray-300 font-medium">Video Title *</label>
              <div className="relative mt-2">
                <input
                  type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Paste your video link"
                  className="w-full p-3 bg-gray-900 text-white rounded-xl outline-none border border-gray-700 focus:ring-2 focus:ring-purple-500"
                />
              </div>
            </div>
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
            <div
              className="flex flex-col items-center justify-center border-2 border-dashed border-gray-700 rounded-xl p-6 cursor-pointer hover:border-purple-500"
              onClick={() => document.getElementById("videoUpload").click()}
            >
              <Plus className="text-gray-300 text-3xl" />
              <p className="text-gray-400 mt-2">Click to upload video</p>
              <input
                id="videoUpload"
                type="file"
                accept="video/mp4, video/mov, video/avi, video/mkv, video/webm, video/ogg"
                multiple
                className="hidden"
                onChange={(e) => handleFileUpload(e)}
              />
            </div>

            {uploading && (
              <div className="w-full bg-gray-700 rounded-lg mt-3">
                <div
                  className="bg-purple-500 text-xs font-medium text-center p-1 leading-none rounded-lg"
                  style={{ width: `${uploadProgress}%` }}
                >
                  {uploadProgress}%
                </div>
              </div>
            )}
            {uploadSuccess !== null && (
              <div
                className={`text-sm font-medium text-start ${
                  uploadSuccess ? "text-green-500" : "text-red-500"
                }`}
              >
                {uploadSuccess
                  ? "Video Uploaded Successfully"
                  : "Failed to upload the video"}
              </div>
            )}

            {videoFiles.length > 0 && (
              <ul className="text-gray-300 mt-3">
                {videoFiles.map((file, index) => (
                  <li key={index} className="text-sm">
                    {file.name}
                  </li>
                ))}
              </ul>
            )}

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
                  placeholder="Enter Your First Name"
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
                  placeholder="Enter Your Last Name"
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
                  placeholder="Enter Your Social Handle"
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
                  placeholder="Select Your Country"
                  className="w-full mt-2 p-3 bg-gray-900 text-white rounded-xl border border-gray-700 outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="">Select a country</option>
                  {countries.map((c, index) => (
                    <option key={index} value={c.name}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            {/* Video Upload */}

            {/* Email */}
            <div>
              <label className="text-gray-300 font-medium">Email *</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
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
                  ref={signRef}
                  penColor="black"
                  canvasProps={{
                    width: 500,
                    height: 250,
                    className: "rounded-lg sigCanvas",
                  }}
                />
              </div>
              <button
                type="button"
                className="p-4 bg-black text-white rounded-full mt-2"
                onClick={handleClear}
              >
                Clear
              </button>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={loading}
              className="w-full py-3 bg-purple-500 hover:from-purple-700 hover:to-blue-600 text-white font-semibold rounded-xl transition shadow-lg"
            >
              {loading ? "Submitting..." : "Please Submit Video"}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </LayoutWrapper>
  );
}
