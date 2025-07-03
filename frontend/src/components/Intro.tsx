import React from "react";
import { FaUser, FaFileAlt, FaFile } from "react-icons/fa";
export default function KompassIntroComponent() {
  return (
    <section className="w-full flex flex-col lg:flex-row bg-white px-4 md:px-8 lg:px-12 pt-10 md:pt-14 lg:pt-20 pb-12">
      {/* Left Section */}
      <div className="w-full lg:w-1/2 p-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Welcome To <span className="text-[#152440]">KOMPASS</span>
        </h1>

        <p className="text-gray-500 font-semibold text-lg mb-4">
          Since 2018, Kompass has been one of the most popular education
          consultancies for Bangladeshi students seeking admission to some of
          the best universities in the USA, Canada, Malaysia,Malaysia ,China and
          Finland, under the leadership of Tamzidul Islam, a graduate of a
          famous US university and postgraduate with a 100% scholarship from the
          most prestigious university in Bangladesh.
        </p>

        <p className="text-gray-700 mb-6">
          Kompass provides guidance, advice, and recruitment services to
          students aspiring to study abroad. Our experienced team consistently
          delivers high-quality services following global standards. It has
          garnered recognition and a strong reputation among all in this
          industry, building networks with 300+ universities and demonstrating
          its best exponentially.
        </p>

        <button className="bg-gray-500 text-white px-6 py-2 rounded-full hover:bg-red-700 transition">
          About Us
        </button>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2 bg-[#150048] text-white p-8 space-y-8">
        {/* Counseling */}
        <div className="flex items-start gap-4">
          <div className="bg-white text-gray-500 p-2 rounded-full">
            <div className="bg-white text-gray-500 p-3 rounded-full text-xl">
              <FaUser />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold">Free Counseling & Assessment!</h3>
            <p className="text-gray-500 text-sans">
              Providing professional counseling and comprehensive assessments
              for academic and career guidance. Our experienced team is
              dedicated to helping you achieve your educational goals.
            </p>
          </div>
        </div>

        {/* English Test */}
        <div className="flex items-start gap-4">
          <div className="bg-white text-gray-500 p-2 rounded-full">
            <div className="bg-white text-gray-500 p-3 rounded-full text-xl">
              <FaFileAlt />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold">
              English Proficiency Test Support!
            </h3>
            <p className="text-gray-500 text-sans">
              We offer test preparation services for standardized exams like
              IELTS, TOEFL, GRE, or GMAT, both online and offline.
            </p>
          </div>
        </div>

        {/* Document Prep */}
        <div className="flex items-start gap-4">
          <div className="bg-white text-gray-500 p-2 rounded-full">
            <div className="bg-white text-gray-500 p-3 rounded-full text-xl">
              <FaFile />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold">Document Preparation!</h3>
            <p className="text-gray-500 text-sans">
              Assisting you with document preparation to ensure a seamless
              application process. Our team is committed to guiding you through
              every step of your educational journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
