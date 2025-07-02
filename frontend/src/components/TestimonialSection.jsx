"use client";
import { useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    text: `I have been a client of AECC Global since 2010. From that time, they have been helping me for all visa and education related matters. I am very happy with their professional advice and friendly behaviour. So, I would like to recommend all to visit them for your migration pathway.`,
    author: "BINOD PATHAK, NEPAL",
  },
  {
    text: `I was looking for someone to help me with my visa situation and luckily a friend recommended me to AECC and its one recommendation I can’t thank enough. AECC Global assisted me from getting a letter of offer for my education, acquiring a student insurance coverage for my stay, and finally arranging my visa.`,
    author: "MERBEN GARCIA, PHILIPPINES",
  },
  {
    text: `AECC Global Indonesia has definitely been helping a lot with my children's application process to study abroad. The counselor, Ms Yenny is very friendly and helpful in aiding my kids throughout all the necessary steps for their journey to study in Australia. I really recommended other people to get support from AECC Global Indonesia since it is more effective than doing everything on your own.`,
    author: "MRS NISA HADI",
  },
];

export default function TestimonialSection() {
  const [current, setCurrent] = useState(0);

  return (
    <section className="bg-[#59f3dc] py-16 pb-2 px-4 md:px-12 relative overflow-hidden">
      <h2 className="text-3xl md:text-4xl font-bold text-[#1E0657] text-center mb-6">
        Hear from those who got there!
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* Left - Text + Slider */}
        <div>
          <Image
            src="/images/testimonials-quote.webp"
            alt="Chat Icon"
            width={100}
            height={80}
            className="mb-4"
          />

          <p className="text-[#0f0f0f] text-8xl sm:text-lg leading-relaxed mb-4 transition-all duration-300 ease-in-out">
            {testimonials[current].text}-
          </p>

          <h4 className="font-bold text-lg sm:text-xl text-[#1E0657] uppercase mb-2">
            {testimonials[current].author}
          </h4>

          {/* Dot Indicators */}
          <div className="flex gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  current === index
                    ? "w-10 bg-[#1E0657]"
                    : "w-6 bg-[#86f2e0] border border-[#1E0657]"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Right - Image */}
        <div className="relative flex justify-center">
          <Image
            src="/images/testimonials-global-2.png"
            alt="Student"
            width={500}
            height={500}
            className="object-contain w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl z-20"
          />
        </div>
      </div>
    </section>
  );
}
