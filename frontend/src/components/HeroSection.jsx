import Image from "next/image";

export default function HeroSection() {
  return (
    <section className=" fixed w-full bg-white text-center py-10 px-4">
      <h1 className="font-bold text-lg md:text-xl text-cyan-300 mb-4">
        We don’t just guide. We get you there.
      </h1>
      <h2 className="text-2xl md:text-4xl font-semibold text-gray-900 mb-6 max-w-3xl mx-auto">
        Courses, scholarships, study visa and 2025 deadlines — all in one place
      </h2>
      <a
        href="https://www.aeccglobal.com/apply-for-upcoming-intakes?utm_content=Homepage"
        className="inline-flex items-center gap-2 px-6 py-2 rounded-full text-white text-sm font-semibold bg-gradient-to-r from-purple-500 to-indigo-600 shadow-lg hover:from-purple-600 hover:to-indigo-700 transition-all duration-200 group"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="whitespace-nowrap">Book Free Consultation</span>
        <svg
          className="h-3.5 w-3.5 text-[#1d0057] transition-transform duration-200 transform group-hover:translate-x-0.5"
          fill="none"
          stroke="currentColor"
          strokeWidth={2.5}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </a>

      <div className="mt-12 max-w-6xl mx-auto px-4">
        {/* Desktop Image */}
        <div className="hidden sm:block">
          <Image
            src="/images/hero/website-2.webp"
            alt="Students booking consultation"
            width={1200}
            height={800}
            className="w-full h-auto rounded-lg"
            priority
          />
        </div>
        {/* Mobile Image */}
        <div className="sm:hidden">
          <Image
            src="/images/hero/website-mobile.webp"
            alt="Students booking consultation mobile view"
            width={600}
            height={400}
            className="w-full h-auto rounded-lg"
            priority
          />
        </div>
      </div>
    </section>
  );
}
