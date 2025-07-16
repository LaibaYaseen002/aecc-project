"use client";

import React, { JSX, useEffect, useState } from "react";
import {
  FaUserTie,
  FaPercent,
  FaAward,
  FaSmile,
  FaUser,
  FaHeadset,
} from "react-icons/fa";
import { fetchWhyChooseUs, WhyChooseUsData, IconType } from "../lib/choose";

const iconMap: Record<IconType, JSX.Element> = {
  userTie: <FaUserTie />,
  percent: <FaPercent />,
  award: <FaAward />,
  smile: <FaSmile />,
  user: <FaUser />,
  headset: <FaHeadset />,
};

const WhyChooseUs = () => {
  const [data, setData] = useState<WhyChooseUsData | null>(null);

  useEffect(() => {
    fetchWhyChooseUs().then((res) => {
      if (res) setData(res);
    });
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <section className="relative bg-[#1B0A4E] text-[#54F0D1] py-32 px-6 md:px-12 lg:px-32">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          {data.title}
          <div className="border-t-2 border-gray-300 w-40 mx-auto mt-2"></div>
        </h2>

        <p className="text-[#ffffffc4] text-sm md:text-base leading-relaxed mb-6">
          {data.description}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 pt-8 text-center">
          {data.features.map((feature) => (
            <div key={feature.id}>
              <div className="text-white bg-[#0a1a3b] w-20 h-20 mx-auto flex items-center justify-center rounded-full text-2xl mb-4">
                {iconMap[feature.icon]}
              </div>
              <h3 className="font-bold text-lg mb-1">{feature.title}</h3>
              <p className="text-sm text-[#ffffffc4]">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative mt-16">
        <div className="absolute left-1/2 -bottom-10 transform -translate-x-1/2">
          <button className="bg-[#54F0D1] text-[#1B0A4E] font-semibold text-base md:text-lg px-10 py-4 rounded-full shadow-lg hover:bg-gray-100 transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
