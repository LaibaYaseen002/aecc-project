"use client";

import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const slides = [
  {
    image: "/images/carousel-1.jpg",
    heading: "Educational Consultancy",
    subheading: "We Provide Solution On Your Higher Education",
  },
  {
    image: "/images/carousel-2.jpg",
    heading: "Educational Consultancy",
    subheading: "Take Our Help To Reach The Top Level",
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 30000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <section className="relative w-full h-[80vh] md:h-[90vh] overflow-hidden mt-8">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={`Slide ${index}`}
            className="w-full h-full object-cover"
          />

          {/* Full transparent overlay */}
          <div className="absolute inset-0 bg-blue-950/50 flex justify-center items-center px-4">
            <div className="text-center max-w-xl">
              <h1 className="text-2xl md:text-4xl font-bold text-white mb-8 tracking-wide font-sans">
                {slide.heading}
              </h1>
              <h3 className="text-base sm:text-lg md:text-3xl font-semibold text-white leading-snug mb-6 max-w-3xl mx-auto">
                {slide.subheading}
              </h3>
            </div>
          </div>
        </div>
      ))}

      {/* Left arrow */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-2xl md:text-4xl bg-black/50 hover:bg-black/70 p-2 rounded-full"
      >
        <FaArrowLeft />
      </button>

      {/* Right arrow */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-2xl md:text-4xl bg-black/50 hover:bg-black/70 p-2 rounded-full"
      >
        <FaArrowRight />
      </button>
    </section>
  );
}
