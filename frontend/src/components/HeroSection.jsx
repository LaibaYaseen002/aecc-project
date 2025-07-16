"use client";

import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { fetchHeroSlides, HeroSlide } from "../lib/hero";

export default function HeroSection() {
  const [slides, setSlides] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    async function loadSlides() {
      const slides = await fetchHeroSlides();
      setSlides(slides);
    }

    loadSlides();
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <section className="relative w-full h-[80vh] md:h-[90vh] overflow-hidden mt-8">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          {slide.image && (
            <img
              src={slide.image}
              alt={slide.heading}
              className="w-full h-full object-cover"
            />
          )}

          <div className="absolute inset-0 bg-blue-950/50 flex justify-center items-center px-4">
            <div className="text-center max-w-xl">
              {slide.heading && (
                <h1 className="text-2xl md:text-4xl font-bold text-white mb-8 tracking-wide font-sans">
                  {slide.heading}
                </h1>
              )}

              {slide.subheading && (
                <h3 className="text-base sm:text-lg md:text-3xl font-semibold text-white leading-snug mb-6 max-w-3xl mx-auto">
                  {slide.subheading}
                </h3>
              )}
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-2xl md:text-4xl bg-black/50 hover:bg-black/70 p-2 rounded-full"
      >
        <FaArrowLeft />
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-2xl md:text-4xl bg-black/50 hover:bg-black/70 p-2 rounded-full"
      >
        <FaArrowRight />
      </button>
    </section>
  );
}
