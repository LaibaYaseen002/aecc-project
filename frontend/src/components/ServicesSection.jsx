import ServiceCard from "./ServiceCard";

const services = [
  {
    title: "Education Counselling",
    description:
      "Our Education Counsellors will learn about your career aspirations, lifestyle and study goals so that we can offer tailored advice.",
    imageUrl: "/images/edu-coun-global.webp",
    button: true,
  },
  {
    title: "Application Process",
    description:
      "Our counsellor will assist you in shortlisting and applying to the institutions and courses in which you are eligible to apply.",
    imageUrl: "/images/application-process-global.webp",
    button: true,
  },
  {
    title: "Scholarship Guidance",
    description:
      "There are a wide variety of scholarships available across many of our partner institutions. Our education consultants can help find the right one for you.",
    imageUrl: "/images/scholarship-global.webp",
    button: true,
  },
  {
    title: "Visa Application",
    description:
      "We’ve got years of experience handling every type of visa. Our visa experts will guide and support you throughout the entire visa application process.",
    imageUrl: "/images/visa-application.webp",
    button: true,
  },
  {
    title: "Student Health Insurance",
    description:
      "From finding the best health cover policies to ensuring the insurance benefits for you, we have got you covered.",
    imageUrl: "/images/health-global.webp",
    button: true,
  },
  {
    title: "Student Accommodation",
    description:
      "Explore one of the world’s largest student accommodation portals to plan your study abroad accommodation cost-effectively.",
    imageUrl: "/images/accommodation-global.webp",
    button: true,
  },
];

const ServicesSection = () => {
  return (
    <section className="py-16 px-4">
      <h2 className="text-3xl sm:text-4xl font-bold text-[#1E0657] mb-12 text-center">
        With you at every step – from one point to another
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-18">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
