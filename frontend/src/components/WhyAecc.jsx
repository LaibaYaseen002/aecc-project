import React from "react";

const WhyAecc = () => {
  return (
    <section className="bg-[#1B0A4E] text-[#54F0D1] py-32 px-12 lg:px-32 gap-12">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between">
        {/* Left Content */}
        <div className="flex-1 lg:text-4xl text-center lg:text-left space-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">WHY </h2>
          <img
            src="/images/why-aecc-image.webp"
            alt="aecc logo"
            className="h-12 lg:h-24 "
          />
        </div>

        {/* Right Content */}
        <div className="flex-1 text-white text-sm lg:text-base space-y-4">
          <p className="text-[#ffffffc4] leading-relaxed">
            Like you, a remarkable number of international students from across
            the world, from diverse backgrounds, have achieved their
            international education goals successfully through us. Our ethical,
            accurate & friendly guidance in the last 15 years has been the
            recipe. Now, it's your turn. Tell us your dreams, we will get you
            there.
          </p>

          {/* Features */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 text-center">
            <div>
              <img
                src="/images/location-icon.webp"
                alt="Located in 15 Countries"
                className="w-28 h-28 mx-auto mb-2 object-contain"
              />
              <p className="font-semibold text-sm">
                Located in 15
                <br />
                Countries
              </p>
            </div>
            <div>
              <img
                src="/images/end-icon.webp"
                alt="End to End Services"
                className="w-28 h-28 mx-auto mb-2 object-contain"
              />
              <p className="font-semibold text-sm">
                End to End
                <br />
                Services
              </p>
            </div>
            <div>
              <img
                src="/images/partners-icon.webp"
                alt="750+ Partner Institutions"
                className="w-28 h-28 mx-auto mb-2 object-contain"
              />
              <p className="font-semibold text-sm">
                750+ Partner
                <br />
                Institutions
              </p>
            </div>
            <div>
              <img
                src="/images/visa-success-icon.webp"
                alt="High Visa Success Rate"
                className="w-28 h-28 mx-auto mb-2 object-contain"
              />
              <p className="font-semibold text-sm">
                High Visa
                <br />
                Success Rate
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyAecc;
