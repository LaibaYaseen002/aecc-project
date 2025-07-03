import React from "react";
import {
  FaUserTie,
  FaPercent,
  FaAward,
  FaSmile,
  FaUser,
  FaHeadset,
} from "react-icons/fa";

const WhyAecc = () => {
  return (
    <section className="relative bg-[#1B0A4E] text-[#54F0D1] py-32 px-6 md:px-12 lg:px-32">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Why Choose Us!!!
          <div className="border-t-2 border-gray-300 w-40 mx-auto mt-2"></div>
        </h2>

        <p className="text-[#ffffffc4] text-sm md:text-base leading-relaxed mb-6">
          Experience tailored support for academic success and career guidance.
          Benefit from our proven track record, industry recognition, and expert
          advice available 24/7 for your educational journey.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 pt-8 text-center">
          <div>
            <div className="text-white bg-[#0a1a3b] w-20 h-20 mx-auto flex items-center justify-center rounded-full text-2xl mb-4">
              <FaUserTie />
            </div>
            <h3 className="font-bold text-lg mb-1">Excellence</h3>
            <p className="text-sm text-[#ffffffc4]">
              Our aim is to provide exceptional support and guidance tailored to
              meet your educational and career needs.
            </p>
          </div>

          <div>
            <div className="text-white bg-[#0a1a3b] w-20 h-20 mx-auto flex items-center justify-center rounded-full text-2xl mb-4">
              <FaPercent />
            </div>
            <h3 className="font-bold text-lg mb-1">Success Rate</h3>
            <p className="text-sm text-[#ffffffc4]">
              Our impressive track record is a testament to our effectiveness,
              with a history of helping individuals achieve their goals and
              aspirations.
            </p>
          </div>

          <div>
            <div className="text-white bg-[#0a1a3b] w-20 h-20 mx-auto flex items-center justify-center rounded-full text-2xl mb-4">
              <FaAward />
            </div>
            <h3 className="font-bold text-lg mb-1">Award Winning</h3>
            <p className="text-sm text-[#ffffffc4]">
              Acknowledged for our outstanding contributions, we are proud
              recipients of industry-recognized awards.
            </p>
          </div>

          <div>
            <div className="text-white bg-[#0a1a3b] w-20 h-20 mx-auto flex items-center justify-center rounded-full text-2xl mb-4">
              <FaSmile />
            </div>
            <h3 className="font-bold text-lg mb-1">Happy Client</h3>
            <p className="text-sm text-[#ffffffc4]">
              Guiding students with excellence, we provide expert advice to
              enhance your educational journey.
            </p>
          </div>

          <div>
            <div className="text-white bg-[#0a1a3b] w-20 h-20 mx-auto flex items-center justify-center rounded-full text-2xl mb-4">
              <FaUser />
            </div>
            <h3 className="font-bold text-lg mb-1">Professional Advisors</h3>
            <p className="text-sm text-[#ffffffc4]">
              Our professional team offers personalized guidance to help you
              make informed decisions about your academic path.
            </p>
          </div>

          <div>
            <div className="text-white bg-[#0a1a3b] w-20 h-20 mx-auto flex items-center justify-center rounded-full text-2xl mb-4">
              <FaHeadset />
            </div>
            <h3 className="font-bold text-lg mb-1">24/7 Customer Support</h3>
            <p className="text-sm text-[#ffffffc4]">
              With 24/7 availability, our team is committed to assisting you at
              every step of your educational pursuits.
            </p>
          </div>
        </div>
      </div>

      {/* Overlapping Button */}
      <div className="relative mt-16">
        <div className="absolute left-1/2 -bottom-10 transform -translate-x-1/2">
          <button className="bg-[#54F0D1] text-[#1B0A4E] font-semibold text-base md:text-lg px-10 py-4 rounded-full shadow-lg hover:bg-gray-100 transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyAecc;
