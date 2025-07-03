import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./globals.css";
import HeroSection from "@/components/HeroSection";
import Intro from "@/components/Intro";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import ConsultationForm from "@/components/ConsultationForm";
export default function Home() {
  return (
    <div>
      <HeroSection />
      <Intro />
      <ServicesSection />
      <WhyChooseUs />
      <ConsultationForm />
    </div>
  );
}
