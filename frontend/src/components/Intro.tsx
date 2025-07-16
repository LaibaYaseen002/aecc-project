"use client";

import React, { useEffect, useState } from "react";
import { FaUser, FaFileAlt, FaFile } from "react-icons/fa";
import { fetchIntroData, IntroData } from "@/lib/intro";

export default function KompassIntroComponent() {
  const [data, setData] = useState<IntroData | null>(null);

  useEffect(() => {
    async function loadIntro() {
      const introData = await fetchIntroData();
      setData(introData);
    }
    loadIntro();
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <section className="w-full flex flex-col lg:flex-row bg-white px-4 md:px-8 lg:px-12 pt-10 md:pt-14 lg:pt-20 pb-12">
      {/* Left Section */}
      <div className="w-full lg:w-1/2 p-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          {data.title.split(" ").map((word, i) =>
            word === "KOMPASS" ? (
              <span key={i} className="text-[#152440]">
                {word}{" "}
              </span>
            ) : (
              word + " "
            )
          )}
        </h1>

        <p className="text-gray-500 font-semibold text-lg mb-4">
          {data.description1}
        </p>

        <p className="text-gray-700 mb-6">{data.description2}</p>

        <button className="bg-gray-500 text-white px-6 py-2 rounded-full hover:bg-[#150048] transition">
          {data.buttonText}
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
            <h3 className="text-xl font-bold">{data.counselingTitle}</h3>
            <p className="text-gray-500 text-sans">{data.counselingText}</p>
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
            <h3 className="text-xl font-bold">{data.englishTestTitle}</h3>
            <p className="text-gray-500 text-sans">{data.englishTestText}</p>
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
            <h3 className="text-xl font-bold">{data.documentTitle}</h3>
            <p className="text-gray-500 text-sans">{data.documentText}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
