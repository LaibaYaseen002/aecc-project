import ServiceCard from "./ServiceCard";

const services = [
  {
    title: "Free Counseling & Assessment!",
    description:
      "Providing professional counseling and comprehensive assessments for academic and career guidance.",
    imageUrl: "/images/edu-coun-global.webp",
    button: true,
  },
  {
    title: "Admission Processing!",
    description:
      "We assist you in the seamless processing of admissions, ensuring a smooth transition into your desired academic program.",
    imageUrl: "/images/application-process-global.webp",
    button: true,
  },
  {
    title: "Document Preparation!",
    description:
      "Our team helps you prepare all necessary documents, making the application process hassle-free and efficient.",
    imageUrl: "/images/scholarship-global.webp",
    button: true,
  },
  {
    title: "Student Visa Processing!",
    description:
      "We provide comprehensive assistance with the processing of student visas, ensuring you have the necessary documentation for a successful application.",
    imageUrl: "/images/visa-application.webp",
    button: true,
  },
  {
    title: "Tourist / Business Visa Processing!",
    description:
      "Whether you're planning a leisure trip or a business visit, we facilitate the processing of tourist and business visas to make your travel plans stress-free.",
    imageUrl: "/images/health-global.webp",
    button: true,
  },
  {
    title: "English Proficiency Test Support!",
    description:
      "We offer test preparation services for standardized exams like IELTS, TOEFL, GRE, or GMAT, both online and offline.",
    imageUrl: "/images/accommodation-global.webp",
    button: true,
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-12 bg-white">
      <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4 text-center">
        What We Offer
      </h2>
      <hr className="border-t-2 border-gray-300 w-40 mx-auto" />
      <div className="px-2 sm:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-4 place-items-center">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
