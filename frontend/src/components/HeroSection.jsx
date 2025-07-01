import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="bg-white pt-[80px] pb-12 px-4 md:px-8 text-center">
      {/* Top Tagline */}
      <h1 className="text-2xl md:text-4xl font-bold text-gray-600 mb-6 tracking-wide font-sans">
        We don’t just guide. We get you there.
      </h1>

      {/* Main Heading */}
      <h3 className="text-base sm:text-lg md:text-2xl font-semibold text-[#151516] leading-snug mb-6 max-w-3xl mx-auto">
        Courses, scholarships, study visa and 2025 deadlines — all in one place
      </h3>

      {/* CTA Button */}
      <a
        href="https://www.aeccglobal.com/apply-for-upcoming-intakes?utm_content=Homepage"
        className="inline-flex items-center gap-2 px-5 py-3 bg-white text-black rounded-full font-medium text-sm md:text-base border border-blue-200 shadow-md hover:opacity-90 transition duration-200"
        target="_blank"
        rel="noopener noreferrer"
      >
        Book Free Consultation
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13 7l5 5m0 0l-5 5m5-5H6"
          />
        </svg>
      </a>

      {/* Hero Image */}
      <div className="mt-10 max-w-6xl mx-auto">
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
            className="w-full h-full rounded-lg object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
