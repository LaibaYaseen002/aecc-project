"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="bg-[#150048]
    text-gray-400
    px-4
    md:px-10
    lg:px-20
    xl:px-28
    py-18
    text-sm
  "
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-15">
        {/* ===== Left Column ===== */}
        <div className="max-w-xs">
          {/* Logo */}
          <div className="mb-6 ">
            <img
              src="/images/new-logo_white.png"
              alt="AECC Logo"
              width={500}
              height={60}
              className="w-[250px] md:w-[380px] lg:w-[500px] h-auto max-w-full"
            />
          </div>

          {/* Let’s get social */}
          <p className="text-[20px] font-semibold mb-3 text-white">
            Let's get social.
          </p>

          <div className="flex space-x-3 mb-6 text-xl text-gray-400">
            <i
              className="fa fa-facebook-official cursor-pointer hover:text-gray-300"
              aria-hidden="true"
            ></i>
            <i
              className="fa fa-linkedin-square cursor-pointer hover:text-gray-300"
              aria-hidden="true"
            ></i>
            <i
              className="fa fa-twitter cursor-pointer hover:text-gray-300"
              aria-hidden="true"
            ></i>
            <i
              className="fab fa-youtube-square cursor-pointer hover:text-gray-300"
              aria-hidden="true"
              title="youtube"
            ></i>
          </div>

          {/* About Us under social icons */}
          <div className="mt-6">
            <p className="text-[20px] font-semibold mb-3 text-white">
              About Us
            </p>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">Who We Are</li>
              <li className="hover:text-white cursor-pointer">Our Timeline</li>
              <li className="hover:text-white cursor-pointer">
                Our Leadership Team
              </li>
              <li className="hover:text-white cursor-pointer">
                Partner With Us
              </li>
              <li className="hover:text-white cursor-pointer">Careers</li>
            </ul>
          </div>
        </div>

        {/* ===== Columns 2–5 ===== */}
        <FooterLinks
          title="Our Services"
          links={[
            "Education Counselling",
            "Application Process",
            "Visa Documentation Guidance",
            "Scholarship Guidance",
            "Overseas Student Health Cover",
            "Personality Assessment Test",
          ]}
        />

        <FooterLinks
          title="English Coaching"
          links={["IELTS", "TOEFL", "PTE", "SAT", "OET"]}
        />

        <FooterLinks
          title="Scholarships"
          links={[
            "Scholarships in Australia",
            "Scholarships in New Zealand",
            "Scholarships in Canada",
            "Scholarships in USA",
            "Scholarships in United Kingdom",
          ]}
        />

        <FooterLinks
          title="Study Abroad"
          links={[
            "Study in Australia",
            "Study in Canada",
            "Study in USA",
            "Study in UK",
            "Study in New Zealand",
            "Study in Ireland FAQ's",
            "Study in Canada FAQ's",
            "Study in UK FAQ's",
            "Study in USA FAQ's",
          ]}
        />
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-xs space-y-2">
        <div>
          Australia | Bangladesh | India | Indonesia | Malaysia | Nepal |
          Nigeria | Philippines | Singapore | Sri Lanka | Thailand | Vietnam
        </div>
        <div>
          &copy; 2025 aecc.{" "}
          <Link href="#" className="hover:text-white">
            Useful Links
          </Link>{" "}
          |{" "}
          <Link href="#" className="hover:text-white">
            Glossary
          </Link>{" "}
          |{" "}
          <Link href="#" className="hover:text-white">
            Terms of Use
          </Link>{" "}
          |{" "}
          <Link href="#" className="hover:text-white">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}

/* ============================
 * FooterLinks Component
 * ============================ */

type FooterLinksProps = {
  title: string;
  links: string[];
};

function FooterLinks({ title, links }: FooterLinksProps) {
  return (
    <div>
      <p className="text-[15px] font-semibold mb-3 text-white">{title}</p>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link} className="hover:text-white cursor-pointer">
            {link}
          </li>
        ))}
      </ul>
    </div>
  );
}
