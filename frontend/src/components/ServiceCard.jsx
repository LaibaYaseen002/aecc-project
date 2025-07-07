import React from "react";

const ServiceCard = ({ title, description, imageUrl, button }) => {
  return (
    <div className=" relative flex flex-col items-start w-full max-w-[260px] sm:max-w-[280px]">
      {/* Top Image */}
      <div className="  pt-20">
        <img
          src={imageUrl}
          alt={title}
          className="w-70 h-70 object-contain -mb-12 z-10 self-center"
        />
      </div>
      {/* Card */}
      <div className="bg-[#54F0D1] rounded-3xl px-5 pt-10 pb-10 text-left shadow-lg relative w-full min-h-[280px] sm:min-h-[240px]">
        <h3 className="text-[#1E0657] text-lg sm:text-xl font-bold mb-2">
          {title}
        </h3>
        <p className="text- text-sm sm:text-base">{description}</p>
      </div>

      {/* Learn More Button - Touching card, placed outside */}
      {button && (
        <button className="absolute bottom-0 left-5 translate-y-1/2 bg-[#1E0657] text-white py-2 px-6 rounded-full font-semibold hover:bg-[#28097d] transition">
          Learn More
        </button>
      )}
    </div>
  );
};

export default ServiceCard;
