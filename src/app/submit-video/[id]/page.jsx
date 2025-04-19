"use client";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
const SignatureCanvas = dynamic(() => import("react-signature-canvas"), {
  ssr: false,
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
  const signRef = useRef(null);
  const { id } = useParams();
  console.log("Sign ref:", signRef);
  // const base64Image = signRef.current?.toDataURL();

  const countries = [
    { name: "Afghanistan" },
    { name: "Albania" },
    { name: "Algeria" },
    { name: "Andorra" },
    { name: "Angola" },
    { name: "Antigua and Barbuda" },
    { name: "Argentina" },
    { name: "Armenia" },
    { name: "Australia" },
    { name: "Austria" },
    { name: "Azerbaijan" },
    { name: "Bahamas" },
    { name: "Bahrain" },
    { name: "Bangladesh" },
    { name: "Barbados" },
    { name: "Belarus" },
    { name: "Belgium" },
    { name: "Belize" },
    { name: "Benin" },
    { name: "Bhutan" },
    { name: "Bolivia" },
    { name: "Bosnia and Herzegovina" },
    { name: "Botswana" },
    { name: "Brazil" },
    { name: "Brunei" },
    { name: "Bulgaria" },
    { name: "Burkina Faso" },
    { name: "Burundi" },
    { name: "Cabo Verde" },
    { name: "Cambodia" },
    { name: "Cameroon" },
    { name: "Canada" },
    { name: "Central African Republic" },
    { name: "Chad" },
    { name: "Chile" },
    { name: "China" },
    { name: "Colombia" },
    { name: "Comoros" },
    { name: "Congo (Congo-Brazzaville)" },
    { name: "Congo (Congo-Kinshasa)" },
    { name: "Costa Rica" },
    { name: "Croatia" },
    { name: "Cuba" },
    { name: "Cyprus" },
    { name: "Czechia" },
    { name: "Denmark" },
    { name: "Djibouti" },
    { name: "Dominica" },
    { name: "Dominican Republic" },
    { name: "Ecuador" },
    { name: "Egypt" },
    { name: "El Salvador" },
    { name: "Equatorial Guinea" },
    { name: "Eritrea" },
    { name: "Estonia" },
    { name: "Eswatini" },
    { name: "Ethiopia" },
    { name: "Fiji" },
    { name: "Finland" },
    { name: "France" },
    { name: "Gabon" },
    { name: "Gambia" },
    { name: "Georgia" },
    { name: "Germany" },
    { name: "Ghana" },
    { name: "Greece" },
    { name: "Grenada" },
    { name: "Guatemala" },
    { name: "Guinea" },
    { name: "Guinea-Bissau" },
    { name: "Guyana" },
    { name: "Haiti" },
    { name: "Honduras" },
    { name: "Hungary" },
    { name: "Iceland" },
    { name: "India" },
    { name: "Indonesia" },
    { name: "Iran" },
    { name: "Iraq" },
    { name: "Ireland" },
    { name: "Israel" },
    { name: "Italy" },
    { name: "Jamaica" },
    { name: "Japan" },
    { name: "Jordan" },
    { name: "Kazakhstan" },
    { name: "Kenya" },
    { name: "Kiribati" },
    { name: "Kuwait" },
    { name: "Kyrgyzstan" },
    { name: "Laos" },
    { name: "Latvia" },
    { name: "Lebanon" },
    { name: "Lesotho" },
    { name: "Liberia" },
    { name: "Libya" },
    { name: "Liechtenstein" },
    { name: "Lithuania" },
    { name: "Luxembourg" },
    { name: "Madagascar" },
    { name: "Malawi" },
    { name: "Malaysia" },
    { name: "Maldives" },
    { name: "Mali" },
    { name: "Malta" },
    { name: "Mauritania" },
    { name: "Mauritius" },
    { name: "Mexico" },
    { name: "Moldova" },
    { name: "Monaco" },
    { name: "Mongolia" },
    { name: "Montenegro" },
    { name: "Morocco" },
    { name: "Mozambique" },
    { name: "Myanmar (Burma)" },
    { name: "Namibia" },
    { name: "Nauru" },
    { name: "Nepal" },
    { name: "Netherlands" },
    { name: "New Zealand" },
    { name: "Nicaragua" },
    { name: "Niger" },
    { name: "Nigeria" },
    { name: "North Korea" },
    { name: "North Macedonia" },
    { name: "Norway" },
    { name: "Oman" },
    { name: "Pakistan" },
    { name: "Palau" },
    { name: "Palestine" },
    { name: "Panama" },
    { name: "Papua New Guinea" },
    { name: "Paraguay" },
    { name: "Peru" },
    { name: "Philippines" },
    { name: "Poland" },
    { name: "Portugal" },
    { name: "Qatar" },
    { name: "Romania" },
    { name: "Russia" },
    { name: "Rwanda" },
    { name: "Saint Kitts & Nevis" },
    { name: "Saint Lucia" },
    { name: "Saint Vincent & Grenadines" },
    { name: "Samoa" },
    { name: "San Marino" },
    { name: "Sao Tome & Principe" },
    { name: "Saudi Arabia" },
    { name: "Senegal" },
    { name: "Serbia" },
    { name: "Seychelles" },
    { name: "Sierra Leone" },
    { name: "Singapore" },
    { name: "Slovakia" },
    { name: "Slovenia" },
    { name: "Solomon Islands" },
    { name: "Somalia" },
    { name: "South Africa" },
    { name: "South Korea" },
    { name: "South Sudan" },
    { name: "Spain" },
    { name: "Sri Lanka" },
    { name: "Sudan" },
    { name: "Suriname" },
    { name: "Sweden" },
    { name: "Switzerland" },
    { name: "Syria" },
    { name: "Tajikistan" },
    { name: "Tanzania" },
    { name: "Thailand" },
    { name: "Timor-Leste" },
    { name: "Togo" },
    { name: "Tonga" },
    { name: "Trinidad & Tobago" },
    { name: "Tunisia" },
    { name: "Turkey" },
    { name: "Turkmenistan" },
    { name: "Tuvalu" },
    { name: "Uganda" },
    { name: "Ukraine" },
    { name: "United Arab Emirates" },
    { name: "United Kingdom" },
    { name: "United States" },
    { name: "Uruguay" },
    { name: "Uzbekistan" },
    { name: "Vanuatu" },
    { name: "Vatican City" },
    { name: "Venezuela" },
    { name: "Vietnam" },
    { name: "Yemen" },
    { name: "Zambia" },
    { name: "Zimbabwe" },
  ];

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

    if (!agreed18 || !agreedTerms || !exclusiveRights) {
      alert("Please agree to all required checkboxes.");
      return;
    }

    // ✅ Check if signature is drawn
    if (signRef.current?.isEmpty()) {
      alert("Please draw your signature before submitting.");
      return;
    }

    setLoading(true);

    try {
      let signatureImage = "";

      if (signRef.current && !signRef.current.isEmpty()) {
        signatureImage = signRef.current.toDataURL("image/png");
      }

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
        rawVideo,
        notUploadedElsewhere,
        agreed18,
        agreedTerms,
        exclusiveRights,
        signature: signatureImage,
      };

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

      if (response.status !== 200) throw new Error("Failed to submit video");

      alert("Video submitted successfully!");

      // Clear signature pad after submission
      if (signRef.current) signRef.current.clear();
    } catch (err) {
      console.error("Submission error:", err);
      alert("Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    if (signRef.current) {
      signRef.current.clear();
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
