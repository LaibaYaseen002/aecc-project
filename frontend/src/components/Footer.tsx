import { FaFacebookF, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-[#0e2258] text-white text-base">
      {/* Newsletter Section */}
      <div className="text-center py-10 px-4 ">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Stay Updated!!!</h2>
        <form className="max-w-xl mx-auto flex flex-col sm:flex-row items-center">
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-4.5 rounded-l border bg-white sm:rounded-none sm:rounded-l-md  outline-none text-gray-700"
          />
          <button
            type="submit"
            className="bg-gray-400 text-white px-6 py-1.5 rounded-r sm:rounded-none sm:rounded-r-md mt-4 sm:mt-0"
          >
            Sign Up
          </button>
        </form>
      </div>

      {/* Links & Contact Section */}
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 border-t border-slate-700">
        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-bold mb-4 text-white">Quick Links</h4>
          <ul className="space-y-2">
            {["Home", "About Us", "Our Services", "Contact Us"].map((link) => (
              <li
                key={link}
                className="text-gray-500 text-base hover:underline cursor-pointer"
              >
                {link}
              </li>
            ))}
          </ul>
        </div>

        {/* Popular Links */}
        <div>
          <h4 className="text-lg font-bold mb-4 text-white">Popular Links</h4>
          <ul className="space-y-2">
            {["USA", "Canada", "Australia", "UK"].map((link) => (
              <li
                key={link}
                className="text-gray-500 text-base hover:underline cursor-pointer"
              >
                {link}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-bold mb-4 text-white">Get In Touch</h4>
          <div className="space-y-2 text-base">
            <p className="flex items-start gap-2 text-gray-500">
              <MdLocationOn className="text-[#20c997]" /> 56 Siddeshwari road
              <br />
              2nd floor, Dhaka 1217
            </p>
            <p className="flex items-center gap-2 text-gray-500">
              <MdEmail className="text-[#20c997]" /> info@kompass.cc
            </p>
            <p className="flex items-center gap-2 text-gray-500">
              <MdPhone className="text-[#20c997]" /> 01877424034, 01736720908
            </p>
          </div>
        </div>

        {/* Social Links */}
        <div>
          <h4 className="text-lg font-bold mb-4">Follow Us</h4>
          <div className="flex gap-4 text-base">
            {[FaWhatsapp, FaFacebookF, FaLinkedinIn].map((Icon, index) => (
              <div
                key={index}
                className="text-gray-300 p-2 rounded-full cursor-pointer hover:text-white transition-colors"
              >
                <Icon size={30} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-slate-700 text-center py-4 text-sm md:text-base">
        ©{" "}
        <span className="text-blue-300 cursor-pointer hover:underline">
          Kompass 2025
        </span>
        . All Rights Reserved. Designed by{" "}
        <span className="text-blue-300 cursor-pointer hover:underline">
          Technocrats
        </span>
      </div>
    </footer>
  );
}
