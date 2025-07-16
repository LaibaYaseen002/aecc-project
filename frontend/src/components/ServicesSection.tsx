"use client";
import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import { getServices, Service } from "../lib/getServices";

const ServicesSection = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const servicesData = await getServices();
      setServices(servicesData);
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-12 bg-white">
      <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4 text-center">
        What We Offer
      </h2>
      <hr className="border-t-2 border-gray-300 w-40 mx-auto" />

      {loading ? (
        <p className="text-center">Loading services...</p>
      ) : (
        <div className="px-2 sm:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-4 place-items-center">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      )}
    </section>
  );
};

export default ServicesSection;
