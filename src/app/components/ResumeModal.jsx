"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const ResumeModal = ({ isOpen, onClose }) => {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Set your secret code here - you can change this anytime
  const SECRET_CODE = "2025"; // Change this to your preferred code

  const handleViewResume = () => {
    // Open resume in new tab for viewing
    window.open("/resume.pdf", "_blank");
    onClose();
    setCode("");
    setError("");
  };

  const handleDownloadResume = () => {
    // Create download link
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Annabel_Zhuang_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    onClose();
    setCode("");
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate a small delay for better UX
    setTimeout(() => {
      if (code.toUpperCase() === SECRET_CODE) {
        setIsLoading(false);
        // Show success state - we'll handle the view/download choice in the UI
        setError("");
      } else {
        setError("Invalid access code. Please contact me for the correct code.");
        setIsLoading(false);
      }
    }, 800);
  };

  const handleClose = () => {
    setCode("");
    setError("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        className="bg-[#121212] border border-[#33353F] rounded-lg p-8 max-w-md w-full"
      >
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-white">Resume Access</h3>
          <button
            onClick={handleClose}
            className="text-[#ADB7BE] hover:text-white text-2xl"
          >
            ×
          </button>
        </div>

        <div className="mb-6">
          <p className="text-[#ADB7BE] mb-4">
            To view my resume, please enter the access code. If you don&apos;t have it, 
            feel free to contact me and I&apos;ll provide it to you.
          </p>
          
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="accessCode" className="text-white block mb-2 text-sm font-medium">
                Access Code
              </label>
              <input
                type="text"
                id="accessCode"
                value={code}
                onChange={(e) => {
                  setCode(e.target.value);
                  setError(""); // Clear error when user types
                }}
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Enter access code"
                required
              />
            </div>

            {error && (
              <p className="text-red-500 text-sm mb-4">{error}</p>
            )}

            {/* Show verification button if code hasn't been verified */}
            {code.toUpperCase() !== SECRET_CODE && (
              <div className="flex gap-3">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="flex-1 bg-primary-500 hover:bg-primary-600 disabled:bg-gray-600 text-white font-semibold py-2.5 px-5 rounded-lg transition-colors"
                >
                  {isLoading ? "Verifying..." : "Verify Code"}
                </button>
                <button
                  type="button"
                  onClick={handleClose}
                  className="flex-1 border border-[#33353F] text-[#ADB7BE] hover:text-white hover:border-white font-semibold py-2.5 px-5 rounded-lg transition-colors"
                >
                  Cancel
                </button>
              </div>
            )}

            {/* Show view/download options if code is correct */}
            {code.toUpperCase() === SECRET_CODE && !error && (
              <div className="space-y-3">
                <p className="text-green-500 text-sm text-center mb-4">
                  ✅ Access granted! Choose an option:
                </p>
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={handleViewResume}
                    className="flex-1 bg-primary-500 hover:bg-primary-600 text-white font-semibold py-2.5 px-5 rounded-lg transition-colors"
                  >
                    View Resume
                  </button>
                  <button
                    type="button"
                    onClick={handleDownloadResume}
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-2.5 px-5 rounded-lg transition-colors"
                  >
                    Download
                  </button>
                </div>
                <button
                  type="button"
                  onClick={handleClose}
                  className="w-full border border-[#33353F] text-[#ADB7BE] hover:text-white hover:border-white font-semibold py-2.5 px-5 rounded-lg transition-colors"
                >
                  Cancel
                </button>
              </div>
            )}
          </form>
        </div>

        <div className="text-center">
          <p className="text-[#ADB7BE] text-sm">
            Don&apos;t have the code? 
            <button
              onClick={() => {
                handleClose();
                // Scroll to contact section
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                // Pre-fill contact form after a short delay
                setTimeout(() => {
                  const subjectField = document.getElementById('subject');
                  const messageField = document.getElementById('message');
                  if (subjectField) subjectField.value = 'Resume Access Code Request';
                  if (messageField) messageField.value = 'Hello Annabel,\n\nI would like to request the access code to view your resume.';
                }, 500);
              }}
              className="text-primary-500 hover:text-primary-400 ml-1 underline"
            >
              Contact me to get it
            </button>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default ResumeModal;
