import Image from "next/image";

export default function ConsultationForm() {
  return (
    <section className="bg-white py-16 px-4 md:px-10">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#1E0657] mb-10">
        Hey, we’d like to know you better too!
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* Left Image */}
        <div className="flex justify-center">
          <Image
            src="/images/form-image.png"
            alt="Student"
            width={400}
            height={400}
            className="object-contain w-full max-w-xs sm:max-w-sm md:max-w-md"
          />
        </div>

        {/* Right Form */}
        <div className="w-full bg-white border border-[#cfc2f8] rounded-2xl p-6 sm:p-8 shadow-md">
          <h3 className="text-[#1E0657] font-semibold text-base sm:text-lg mb-4">
            Book your{" "}
            <span className="text-[#c9b5db] font-bold">FREE consultation</span>{" "}
            with Certified Counsellors
          </h3>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-500 outline-gray-300 focus:ring-2 focus:ring-[#9B51E0]"
            />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border  border-gray-300 rounded-lg px-4 py-2  text-gray-500 outline-none focus:ring-2 focus:ring-[#9B51E0]"
            />
            <div className="flex flex-col sm:flex-row gap-4">
              <select className="w-full sm:w-1/2 border  border-gray-300 text-gray-400 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-[#9B51E0]">
                <option>Country Code</option>
                <option>+92</option>
                <option>+91</option>
                <option>+61</option>
              </select>
              <input
                type="text"
                placeholder="Mobile Number"
                className="w-full sm:w-1/2 border  border-gray-300 text-gray-500 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-[#9B51E0]"
              />
            </div>
            <select className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-400 outline-none focus:ring-2 focus:ring-[#9B51E0]">
              <option>Choose your nearest AECC office</option>
              <option>Lahore</option>
              <option>Karachi</option>
              <option>Islamabad</option>
            </select>
            <select className="w-full border  border-gray-300 rounded-lg px-4 py-2 text-gray-400 outline-none focus:ring-2 focus:ring-[#9B51E0]">
              <option>Choose your preferred study destination</option>
              <option>Australia</option>
              <option>UK</option>
              <option>Canada</option>
              <option>USA</option>
            </select>
            <select className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-400 outline-none focus:ring-2 focus:ring-[#9B51E0]">
              <option>Choose your preferred study year</option>
              <option>2025</option>
              <option>2026</option>
              <option>2027</option>
              <option>2028</option>
            </select>
            <select className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-400 outline-none focus:ring-2 focus:ring-[#9B51E0]">
              <option>Choose your preferred study intake</option>
              <option>Q1(Jan-Mar)</option>
              <option>Q2(Apr-Jun)</option>
              <option>Q3(Jul-Sep)</option>
              <option>Q4(Oct-Dec)</option>
            </select>
            <p className="p-2 text-xs text-bold">
              By submitting this form, you agree to our{" "}
              <span className="text-blue-600 cursor-pointer hover:underline">
                Privacy Policy
              </span>{" "}
              and{" "}
              <span className="text-blue-600 cursor-pointer hover:underline">
                Terms & Conditions
              </span>
            </p>

            <button
              type="submit"
              className="w-full bg-[#1E0657] text-white font-semibold py-2 rounded-lg hover:bg-[#28097d] transition"
            >
              Request a Consultation!
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
