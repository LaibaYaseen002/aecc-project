"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { fetchTestimonials, Testimonial } from "@/lib/testimonial";

export default function TestimonialSection() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const getTestimonials = async () => {
      const data = await fetchTestimonials();
      setTestimonials(data);
    };

    getTestimonials();
  }, []);

  if (testimonials.length === 0) {
    return (
      <section className="py-16 px-4 md:px-12 text-center">
        <p>Loading testimonials...</p>
      </section>
    );
  }

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
            {testimonials[current].text} -
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
