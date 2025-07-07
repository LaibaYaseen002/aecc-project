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
          <hr className="my-4 border-gray-300" />
          <div className="flex justify-center my-4">
            <Logo />
          </div>
        </div>

        {/* Form */}
        <form className="space-y-4 text-sm text-gray-500">
          {/* Full Name */}
          <div>
            <label className="block font-semibold mb-1">Full Name</label>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="First Name"
                className="w-1/2 border border-gray-300 rounded-md p-2"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-1/2 border border-gray-300 rounded-md p-2"
              />
            </div>
          </div>

          {/* Age */}
          <div>
            <label className="block font-semibold mb-1">How old are you?</label>
            <input
              type="number"
              placeholder="e.g., 23"
              className="w-full border border-gray-300 rounded-md p-2"
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
              className="w-full border border-gray-300 rounded-md p-2"
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
                  className="w-full border border-gray-300 rounded-md p-2"
                />
              </div>

              {/* Visa Status */}
              <div>
                <label className="block font-semibold mb-1">
                  Do you currently hold a US visa?
                </label>
                <select className="w-full border border-gray-300 rounded-md p-2">
                  <option>Please Select</option>
                  <option>Yes</option>
                  <option>No</option>
                  <option>Other</option>
                </select>
              </div>

              {/* Occupation */}
              <div>
                <label className="block font-semibold mb-1">Occupation</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md p-2"
                />
              </div>

              {/* SSC & HSC GPA */}
              <div className="flex gap-4">
                <div className="w-1/2">
                  <label className="block font-semibold mb-1">SSC GPA</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md p-2"
                  />
                </div>
                <div className="w-1/2">
                  <label className="block font-semibold mb-1">HSC GPA</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md p-2"
                  />
                </div>
              </div>

              {/* Bachelor's Details */}
              <div>
                <label className="block font-semibold mb-1">
                  Bachelor’s University
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md p-2"
                />
              </div>
              <div className="flex gap-4">
                <div className="w-2/3">
                  <label className="block font-semibold mb-1">Major</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md p-2"
                  />
                </div>
                <div className="w-1/3">
                  <label className="block font-semibold mb-1">CGPA</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md p-2"
                  />
                </div>
              </div>

              {/* Master's Details */}
              <div>
                <label className="block font-semibold mb-1">
                  Master’s University
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md p-2"
                />
              </div>
              <div className="flex gap-4">
                <div className="w-2/3">
                  <label className="block font-semibold mb-1">Major</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md p-2"
                  />
                </div>
                <div className="w-1/3">
                  <label className="block font-semibold mb-1">CGPA</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md p-2"
                  />
                </div>
              </div>

              {/* English Proficiency */}
              <div>
                <label className="block font-semibold mb-1">
                  English Proficiency
                </label>
                <select className="w-full border border-gray-300 rounded-md p-2">
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
                  English Score
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md p-2"
                />
              </div>

              {/* Field of Interest */}
              <div>
                <label className="block font-semibold mb-1">
                  What do you want to study in the USA?
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md p-2"
                />
              </div>

              {/* Budget */}
              <div>
                <label className="block font-semibold mb-1">
                  Annual Budget
                </label>
                <input
                  type="text"
                  placeholder="$15,000 USD"
                  className="w-full border border-gray-300 rounded-md p-2"
                />
              </div>

              {/* Referral */}
              <div>
                <label className="block font-semibold mb-1">
                  How did you hear about us?
                </label>
                <select className="w-full border border-gray-300 rounded-md p-2">
                  <option>Please Select</option>
                  <option>Friend</option>
                  <option>Relative</option>
                  <option>Facebook Group</option>
                  <option>Google Map</option>
                  <option>Facebook Advertisement</option>
                  <option>Tamzidul Islam</option>
                  <option>Youtube</option>
                  <option>Others</option>
                </select>
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
            className="text-sm px-3 py-1.5 border border-gray-400 rounded-md hover:bg-gray-100"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
