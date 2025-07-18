"use client";
import { useEffect, useState } from "react";
import { fetchFooterData } from "@/lib/footer";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import {
  MdLocationOn,
  MdEmail,
  MdPhone,
} from "react-icons/md";

export default function Footer() {
  const [footer, setFooter] = useState<any>(null);

  useEffect(() => {
    const load = async () => {
      const data = await fetchFooterData();
      console.log("Fetched footer data:", data);
      setFooter(data);
    };

    load();
  }, []);

  if (!footer) return <div className="text-white p-4">Loading footer...</div>;

  return (
    <footer className="bg-[#0e2258] text-white text-base">
      {/* Newsletter Section */}
      <div className="text-center py-10 px-4 ">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          {footer.newsletter_title}
        </h2>
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

      {/* Footer Links and Info */}
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 border-t border-slate-700">
        <div>
          <h4 className="text-lg font-bold mb-4 text-white">Quick Links</h4>
          <ul className="space-y-2">
            {footer.quick_links?.map((link: any) => (
              <li
                key={link.id}
                className="text-gray-500 text-base hover:underline cursor-pointer"
              >
                {link.title}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-4 text-white">Popular Links</h4>
          <ul className="space-y-2">
            {footer.popular_links?.map((link: any) => (
              <li
                key={link.id}
                className="text-gray-500 text-base hover:underline cursor-pointer"
              >
                {link.title}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-4 text-white">Get In Touch</h4>
          <div className="space-y-2 text-base text-gray-500">
            <p className="flex items-start gap-2">
              <MdLocationOn className="text-[#20c997]" /> {footer.address}
            </p>
            <p className="flex items-center gap-2">
              <MdEmail className="text-[#20c997]" /> {footer.email}
            </p>
            {footer.phones?.map((phone: any) => (
              <p key={phone.id} className="flex items-center gap-2">
                <MdPhone className="text-[#20c997]" /> {phone.number}
              </p>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-4">Follow Us</h4>
          <div className="flex gap-4 text-base">
            {footer.social_links?.map((social: any) => {
              const iconMap: Record<string, any> = {
                facebook: FaFacebookF,
                linkedin: FaLinkedinIn,
                whatsapp: FaWhatsapp,
              };
              const Icon = iconMap[social.platform.toLowerCase()] || FaFacebookF;
              return (
                <div
                  key={social.id}
                  className="text-gray-300 p-2 rounded-full cursor-pointer hover:text-white transition-colors"
                >
                  <Icon size={30} />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="border-t border-slate-700 text-center py-4 text-sm md:text-base">
        ©{" "}
        <span className="text-blue-300 cursor-pointer hover:underline">
          {footer.copyright}
        </span>
        . All Rights Reserved. Designed by{" "}
        <span className="text-blue-300 cursor-pointer hover:underline">
          {footer.designer_name}
        </span>
      </div>
    </footer>
  );
}
