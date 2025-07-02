import React from "react";
import Link from "next/link";

const resources = [
  {
    title: "Explore Blogs",
    description:
      "An extensive library of content backed by research and updated with the latest information on diverse study abroad topics.",
    bgColor: "bg-pink-200",
    textColor: "text-[#1E0657]",
    sideLabel: "Read",
    href: "/resources/blogs",
  },
  {
    title: "Explore Videos",
    description:
      "From campus tours to visa updates to student life, watch exclusive videos to discover and learn more about student life at the top study destinations in the world.",
    bgColor: "bg-sky-300",
    textColor: "text-[#1E0657]",
    sideLabel: "Watch",
    href: "/resources/videos",
  },
  {
    title: "Explore Podcast",
    description:
      "Now, you can listen to our study abroad experts, international students and the world's best universities on the go as they share interesting facts and tips.",
    bgColor: "bg-yellow-200",
    textColor: "text-[#1E0657]",
    sideLabel: "Listen",
    href: "/resources/podcast",
  },
];

const ResourcesSection: React.FC = () => {
  return (
    <section className="w-full py-16 bg-[#f5f5f5]">
      <div className="flex flex-col lg:flex-row">
        {resources.map((res, index) => (
          <div
            key={index}
            className={`${res.bgColor} ${res.textColor} flex-1 relative flex items-center px-4 sm:px-8 lg:px-0 py-12`}
          >
            {/* Left Content */}
            <div className="px-6 sm:px-10 max-w-lg">
              <p className="text-base sm:text-lg font-semibold mb-6 leading-relaxed">
                {res.description}
              </p>
              <Link
                href={res.href}
                className="inline-flex items-center bg-[#16005C] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#220d91] transition duration-200 text-sm"
              >
                {res.title}
                <span className="ml-2 text-xl">&rarr;</span>
              </Link>
            </div>

            {/* Right Side Label */}
            <div className="hidden lg:flex absolute top-1/3 right-0 -translate-y-1/2 z-10 origin-right">
              <span className="text-white text-5xl font-extrabold -rotate-90 tracking-wide justify-end">
                {res.sideLabel}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ResourcesSection;
