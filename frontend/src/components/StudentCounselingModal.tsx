"use client";
import { useEffect, useState } from "react";

export default function StudentCounselingModal() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const isModalClosed = localStorage.getItem("counselingModalClosed");
    if (!isModalClosed) {
      setShowModal(true);
    }
  }, []);

  const handleClose = () => {
    localStorage.setItem("counselingModalClosed", "true");
    setShowModal(false);
  };

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-lg max-w-xl w-full p-6 relative">
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black text-2xl font-bold"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold text-center mb-4">
          Student Counseling
        </h2>
        <div className="flex justify-center mb-6">
          <img
            src="/kompass-logo.png" // Make sure to place this image in public folder
            alt="Kompass Logo"
            className="h-12"
          />
        </div>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <div className="flex gap-2 mt-1">
              <input
                type="text"
                placeholder="First Name"
                className="w-1/2 border border-gray-300 rounded-md p-2"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-1/2 border border-gray-300 rounded-md p-2"
              />
            </div>
            <p className="text-xs text-gray-500 mt-1">
              আপনার সম্পূর্ণ নাম লিখুন।
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              How old are you?
            </label>
            <input
              type="number"
              placeholder="e.g., 23"
              className="w-full border border-gray-300 rounded-md p-2 mt-1"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              placeholder="example@example.com"
              className="w-full border border-gray-300 rounded-md p-2 mt-1"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
