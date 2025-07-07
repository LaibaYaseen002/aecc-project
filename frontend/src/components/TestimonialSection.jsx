"use client";
import { useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    text: `The Best Agency In Bangladesh In My POV! They helped me 24/7 anytime i want & processed my file smoothly without any corruption! I strongly recommend this Agency who want to study In Abroad. The Man Tamzidul Islam Is So kind! Literally i don't have any word to explain about him! Thanks a lot brother You deserve lots of Dua
`,
    author: "Mehedi Hasan Munna",
  },
  {
    text: `I feel delighted to share that I worked for the American Center, U.S. Embassy-Dhaka for over 20 years, and I strongly endorse this education consultancy Center. I extend my full back support for Mr. Tamzid. All glory be to Allah that Tamzid completed his graduation in the USA with an excellent GPA as well as lived in there for over 12 years. I firmly believe that he can provide the best academic career solution to the potential/interested students genuinely that would be remarkably accurate!`,
    author: "Mahbuba Khanam",
  },
  {
    text: `Owner is very helpful to students and compassionate about their goal for higher education. It could be the best consultancy company for pursuing higher education in Bangladesh one day. Best value for money. good luck and go ahead.`,
    author: "Md Arif",
  },
  {
    text: `I recommend Kompass Education Consultancy, they are authentic and provide accurate information to students.`,
    author: "MRS NISA HADI",
  },
];

export default function TestimonialSection() {
  const [current, setCurrent] = useState(0);

  return (
    <section className="bg-[#59f3dc] py-16 pb-2 px-4 md:px-12 relative overflow-hidden">
      <h2 className="text-5xl md:text-4xl font-bold text-[#1E0657] text-center mb-6">
        What our clients say!!!
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

          <p className="text-[#0f0f0f] text-sm sm:text-base md:text-lg leading-relaxed mb-4 transition-all duration-300 ease-in-out">
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
