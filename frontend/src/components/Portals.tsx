"use client";

import Image from "next/image";
import Link from "next/link";

const portals = [
  {
    title: "AECC Search",
    description:
      "Explore and shortlist courses easily based on your preferences.",
    buttonText: "Select Courses",
    link: "/search",
    imageSrc: "/images/aecc-search.png",
  },
  {
    title: "AECC Student",
    description:
      "Apply and track your university applications hassle-free in one place.",
    buttonText: "Submit Documents",
    link: "/student",
    imageSrc: "/images/aecc-student.png",
  },
  {
    title: "AECC Skills",
    description:
      "Find out what personality test can tell about your ideal career path.",
    buttonText: "Personality Test",
    link: "/skills",
    imageSrc: "/images/aecc-skills.png",
  },
  {
    title: "Abroad View",
    description:
      "Watch exclusive, informational videos about top global universities.",
    buttonText: "Watch Videos",
    link: "/abroad-view",
    imageSrc: "/images/abroad-view.png",
  },
];

export default function Portals() {
  return (
    <section className="bg-[#B5A7F5] py-12 px-28">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-[#0A0A3C] mb-12">
        Explore these portals to your future
      </h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
        {portals.map((portal, idx) => (
          <div
            key={idx}
            className="bg-[#6FF6CB] rounded-4xl flex flex-col items-center text-center p-8 h-[475px] justify-between"
          >
            <div className="relative w-52 h-52 ">
              {/* Image on top of the circle */}
              <Image
                src={portal.imageSrc}
                alt={portal.title}
                fill
                className="object-contain "
              />
            </div>
            <div>
              <h3 className=" text-2xl font-normal text-[#0A0A3C] mb-3">
                {portal.title}
              </h3>
              <p className="text-[#55555c] text-sm mb-4">
                {portal.description}
              </p>
              <Link
                href={portal.link}
                className="bg-[#0A0A3C] hover:bg-[#1c1c6c] text-white font-semibold px-6 py-2 rounded-full transition-colors duration-300 text-sm inline-block"
              >
                {portal.buttonText}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
