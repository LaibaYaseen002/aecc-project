import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./globals.css";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import WhyAecc from "@/components/WhyAecc";
import ConsultationForm from "@/components/ConsultationForm";
import Portals from "@/components/Portals";
import TestimonialSection from "@/components/TestimonialSection";
import ResourcesSection from "@/components/ResourcesSection";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <WhyAecc />
      <ConsultationForm />
      <Portals />
      <TestimonialSection />
      <ResourcesSection />
      <Footer />
    </div>
  );
}
