"use client";
import { useState, useEffect } from "react";
import Logo from "./Logo";

export default function CustomFormModal() {
  const [showModal, setShowModal] = useState(true);

  // form inputs
  const [firstName, setFirstName] = useState("");
  const [age, setAge] = useState("");

  // show remaining form
  const showFullForm = firstName.trim() !== "" && age.trim() !== "";

  const handleClose = () => {
    setShowModal(false);
  };

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 transparent flex items-center justify-center z-50 px-2">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-4 sm:p-6 relative overflow-y-auto max-h-[95vh]">
        {/* Top Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black text-2xl"
        >
          &times;
        </button>

        {/* Heading + Logo */}
        <div className="mb-3">
          <h2 className="text-lg sm:text-xl font-semibold text-left text-gray-500">
            Student Counseling
          </h2>
          <hr className="mb-10 mt-6 border-gray-300" />
          <div className="flex justify-center mb-6">
            <img
              src="/images/kompass-form-logo.jpg"
              alt="Company Logo"
              className="w-72 h-28 sm:w-80 sm:h-32 object-contain"
            />
          </div>
        </div>

        {/* Form */}
        <form className="space-y-10 text-sm text-gray-500">
          {/* Full Name */}
          <div>
            <label className="block font-semibold mb-1">Full Name</label>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="First Name"
                className="w-1/2 border border-gray-300 rounded-md p-2 
             focus:outline-none focus:border-cyan-600 text-gray-700"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-1/2 border border-gray-300 rounded-md p-2 
             focus:outline-none focus:border-cyan-600 text-gray-700"
              />
            </div>
          </div>

          {/* Age */}
          <div>
            <label className="block font-semibold mb-1">How old are you?</label>
            <input
              type="number"
              placeholder="e.g., 23"
              className="w-full border border-gray-300 rounded-md p-2 
             focus:outline-none focus:border-cyan-600 text-gray-700"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>

          {/* Email */}
          <div>
            <label className="block font-semibold mb-1">Email</label>
            <input
              type="email"
              placeholder="example@example.com"
              className="w-full border border-gray-300 rounded-md p-2 
             focus:outline-none focus:border-cyan-600 text-gray-700"
            />
          </div>

          {/* Show remaining form only if name and age filled */}
          {showFullForm && (
            <>
              {/* Phone Number */}
              <div>
                <label className="block font-semibold mb-1">Phone Number</label>
                <input
                  type="tel"
                  placeholder="03XX-XXXXXXX"
                  className="w-full border border-gray-300 rounded-md p-2 
             focus:outline-none focus:border-cyan-600 text-gray-700"
                />
              </div>

              {/* Visa Status */}
              <div>
                <label className="block font-semibold mb-1">
                  Do you currently hold a US visa in any category?
                </label>
                <select
                  className="w-full border border-gray-300 rounded-md p-2 
             focus:outline-none focus:border-cyan-600 text-gray-700"
                >
                  <option>Please Select</option>
                  <option>Yes</option>
                  <option>No</option>
                  <option>Other</option>
                </select>
              </div>

              {/* Occupation */}
              <div>
                <label className="block font-semibold mb-1">
                  What do you currently do? (Occupation)
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md p-2 
             focus:outline-none focus:border-cyan-600 text-gray-700"
                />
              </div>

              {/* SSC & HSC GPA */}

              <div className="w-full">
                <label className="block font-semibold mb-1">
                  SSC/O'Level GPA
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md p-2 
             focus:outline-none focus:border-cyan-600 text-gray-700"
                />
              </div>
              <div className="w-full">
                <label className="block font-semibold mb-1">
                  HSC/A' Level GPA
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md p-2 
             focus:outline-none focus:border-cyan-600 text-gray-700"
                />
              </div>

              {/* Bachelor's Details */}
              <div>
                <label className="block font-semibold mb-1">
                  Which university did you attend for your bachelor's degree?
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md p-2 
             focus:outline-none focus:border-cyan-600 text-gray-700"
                />
              </div>

              <div className="w-full">
                <label className="block font-semibold mb-1">
                  Bachelor's Major?
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md p-2 
             focus:outline-none focus:border-cyan-600 text-gray-700"
                />
              </div>
              <div className="w-full">
                <label className="block font-semibold mb-1">
                  Bachelor's CGPA?
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md p-2 
             focus:outline-none focus:border-cyan-600 text-gray-700"
                />
              </div>

              {/* Master's Details */}
              <div>
                <label className="block font-semibold mb-1">
                  Which university did you attend for your Master's degree?
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md p-2 
             focus:outline-none focus:border-cyan-600 text-gray-700"
                />
              </div>

              <div className="w-full">
                <label className="block font-semibold mb-1">
                  Master's Major?
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md p-2 
             focus:outline-none focus:border-cyan-600 text-gray-700"
                />
              </div>
              <div className="w-full">
                <label className="block font-semibold mb-1">
                  Master's CGPA?
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md p-2 
             focus:outline-none focus:border-cyan-600 text-gray-700"
                />
              </div>

              {/* English Proficiency */}
              <div>
                <label className="block font-semibold mb-1">
                  English Proficiency?
                </label>
                <select
                  className="w-full border border-gray-300 rounded-md p-2 
             focus:outline-none focus:border-cyan-600 text-gray-700"
                >
                  <option>Please Select</option>
                  <option>IELTS</option>
                  <option>TOEFL</option>
                  <option>DUOLINGO</option>
                  <option>PTE</option>
                  <option>MOI</option>
                  <option>NO</option>
                  <option>OTHER</option>
                </select>
              </div>

              {/* Score */}
              <div>
                <label className="block font-semibold mb-1">
                  What's your english proficiency score?
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md p-2 
             focus:outline-none focus:border-cyan-600 text-gray-700"
                />
              </div>

              {/* Field of Interest */}
              <div>
                <label className="block font-semibold mb-1">
                  What do you want to study in the USA?
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md p-2 
             focus:outline-none focus:border-cyan-600 text-gray-700"
                />
              </div>

              {/* Budget */}
              <div>
                <label className="block font-semibold mb-1">
                  What is your annual budget to study abroad?
                </label>
                <input
                  type="text"
                  placeholder="$15,000 USD"
                  className="w-full border border-gray-300 rounded-md p-2 
             focus:outline-none focus:border-cyan-600 text-gray-700"
                />
              </div>

              {/* Referral */}
              <div>
                <label className="block font-semibold mb-2">
                  How did you hear about us?
                </label>
                <div className="space-y-2">
                  {[
                    "Friend",
                    "Relative",
                    "Facebook Group",
                    "Google Map",
                    "Facebook Advertisement",
                    "Tamzidul Islam",
                    "Youtube",
                    "Others",
                  ].map((option) => (
                    <label key={option} className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="referral"
                        value={option}
                        className="accent-blue-500"
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Upload CV */}
              <div>
                <label className="block font-semibold mb-2">
                  Upload Your CV Here (Optional)
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-md p-6 flex flex-col items-center text-center text-sm text-gray-500 bg-gray-50 hover:bg-gray-100 transition">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-gray-400 mb-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M12 12v9m0 0l-3-3m3 3l3-3m0-6a4 4 0 10-8 0 4 4 0 008 0z"
                    />
                  </svg>
                  <span className="font-semibold">Browse Files</span>
                  <span className="text-xs text-gray-400">Choose a file</span>
                  <input
                    type="file"
                    name="cv"
                    className="absolute opacity-0 inset-0 cursor-pointer"
                  />
                </div>
              </div>
            </>
          )}

          {/* Submit Button */}
          <div className="flex justify-center pt-4">
            <button
              type="submit"
              className="bg-green-600 text-white px-6 py-1.5 rounded-md text-sm hover:bg-green-700 transition"
            >
              Submit
            </button>
          </div>
        </form>

        <hr className="my-5 border-gray-300" />
        <div className="flex justify-end">
          <button
            onClick={handleClose}
            className="text-sm px-3 py-1.5 bg-orange-400 border border-gray-400 rounded-md hover:bg-gray-100"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
