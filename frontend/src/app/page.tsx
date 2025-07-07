import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./globals.css";
import HeroSection from "@/components/HeroSection";
import Intro from "@/components/Intro";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import ConsultationForm from "@/components/ConsultationForm";
import TeamSection from "@/components/TeamSection";
import TestimonialSection from "@/components/TestimonialSection";
import LatestNews from "@/components/LatestNews";
import Footer from "@/components/Footer";
import FormModal from "@/components/FormModal";
export default function Home() {
  return (
    <div>
      <HeroSection />
      <Intro />
      <ServicesSection />
      <WhyChooseUs />
      <ConsultationForm />
      <TeamSection />
      <TestimonialSection />
      <LatestNews />
      <Footer />
      <FormModal />
    </div>
  );
}
