import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./globals.css";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
export default function Home() {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
    </div>
  );
}
