import React from "react";

const ServiceCard = ({ title, description, imageUrl, button }) => {
  return (
    <div className="p-6">
      <img
        src={imageUrl}
        alt={title}
        className="h-70 w-full mb-4 object-contain"
      />
      <div className="bg-[#7ef7dc] rounded-2xl p-6 flex flex-col shadow-lg min-h-[256px] -mt-7 mr-10">
        <h3 className="font-bold text-[#1E0657] mb-2 text-left text-3xl">
          {title}
        </h3>
        <p className="text-[#0e0e0f] text-sm mb-4 mt-2">{description}</p>
      </div>
      {button && (
        <button className="bg-[#1E0657] text-white rounded-full py-2 px-10 font-semibold hover:bg-[#28097d] transition duration-200 -mt-4 ml-7">
          Learn More
        </button>
      )}
    </div>
  );
};

export default ServiceCard;
