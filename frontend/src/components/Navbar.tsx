"use client";

import { useState, useEffect } from "react";
import { FaBars, FaAngleDown, FaAngleRight } from "react-icons/fa";
import Logo from "./Logo";
import Link from "next/link";

export interface MenuItem {
  label: string;
  href?: string;
  children?: MenuItem[];
}

const menu: MenuItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Student Services",
    children: [
      {
        label: "International Education Counselling",
        href: "https://www.aeccglobal.com/student-services/education-counselling",
      },
      {
        label: "Health Insurance",
        children: [
          {
            label: "Health Insurance in Australia",
            href: "/student-services/health-insurance/health-insurance-in-australia",
          },
          {
            label: "Health Insurance in Canada",
            href: "/student-services/health-insurance/health-insurance-in-canada",
          },
          {
            label: "Health Insurance in the UK",
            href: "/student-services/health-insurance/health-insurance-in-uk",
          },
          {
            label: "Health Insurance in the USA",
            href: "/student-services/health-insurance/health-insurance-in-usa",
          },
          {
            label: "Health Insurance in New Zealand",
            href: "/student-services/health-insurance/health-insurance-in-new-zealand",
          },
        ],
      },
      {
        label: "University Application Process",
        href: "/student-services/application-process",
      },
      {
        label: "International Student Visa Assistance",
        href: "/student-services/visa-assistance",
      },
      {
        label: "University Scholarship Guidance",
        href: "/student-services/scholarship-guidance",
      },
      {
        label: "Personality Assessment Test",
        href: "/student-services/personality-assessment",
      },
      {
        label: "Virtual Internship",
        href: "/student-services/virtual-internship",
      },
      {
        label: "Student Accommodation",
        href: "/student-services/student-accommodation",
      },
    ],
  },
  {
    label: "Study Abroad",
    children: [
      { label: "Study in Australia", href: "/study-in-australia" },
      {
        label: "Study in Europe",
        children: [
          { label: "France", href: "/study-in-europe/france" },
          { label: "Germany", href: "/study-in-europe/germany" },
        ],
      },
      { label: "Study in Canada", href: "/study-in-canada" },
      { label: "Study in the USA", href: "/study-in-usa" },
      { label: "Study in the UK", href: "/study-in-uk" },
      { label: "Study in New Zealand", href: "/study-in-new-zealand" },
      { label: "Study in Singapore", href: "/study-in-singapore" },
      { label: "Study in Ireland", href: "/study-in-ireland" },
      { label: "Study in Japan", href: "/study-in-japan" },
      { label: "Study in South Korea", href: "/study-in-south-korea" },
    ],
  },
  {
    label: "English Coaching",
    children: [
      { label: "IELTS", href: "/english-proficiency-coaching/ielts" },
      { label: "TOEFL", href: "/english-proficiency-coaching/toefl" },
      { label: "PTE", href: "/english-proficiency-coaching/pte" },
      { label: "SAT", href: "/english-proficiency-coaching/sat" },
      { label: "OET", href: "/english-proficiency-coaching/oet" },
    ],
  },
  {
    label: "Scholarships",
    children: [
      { label: "Scholarships in Australia", href: "/scholarships/australia" },
      { label: "Scholarships in Canada", href: "/scholarships/canada" },
      { label: "Scholarships in the USA", href: "/scholarships/usa" },
      { label: "Scholarships in the United Kingdom", href: "/scholarships/uk" },
      {
        label: "Scholarships in New Zealand",
        href: "/scholarships/new-zealand",
      },
    ],
  },
  {
    label: "About Us",
    children: [
      { label: "Who We Are", href: "/about/who-we-are" },
      {
        label: "Our Partners",
        href: "/about/our-partners",
        children: [
          { label: "Australia", href: "/about/our-partners/australia" },
          { label: "Canada", href: "/about/our-partners/canada" },
          { label: "New Zealand", href: "/about/our-partners/new-zealand" },
          {
            label: "United Kingdom",
            href: "/about/our-partners/united-kingdom",
          },
          {
            label: "United States of America",
            href: "/about/our-partners/united-states-of-america",
          },
          { label: "Ireland", href: "/about/our-partners/ireland" },
          {
            label: "Other Study Destinations",
            href: "/about/our-partners/other-study-destinations",
          },
        ],
      },
      { label: "Our Timeline", href: "/about/our-timeline" },
      { label: "Our Leadership Team", href: "/about/our-leadership-team" },
      { label: "Awards Recognition", href: "/about/awards-recognition" },
      { label: "Partner With Us", href: "/about/partner-with-us" },
      { label: "Careers", href: "/about/careers" },
    ],
  },
  {
    label: "Resources",
    children: [
      { label: "Blog", href: "/resources/blog" },
      { label: "Pathfinder-YouTube", href: "/resources/pathfinder-youtube" },
      { label: "Pathfinder-Podcast", href: "/resources/pathfinder-podcast" },
      {
        label: "International Study Guides",
        href: "/resources/international-study-guides",
      },
      {
        label: "Frequently Asked Questions",
        href: "/resources/frequently-asked-questions",
      },
    ],
  },
  { label: "Contact Us", href: "/contact-us" },
];

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      if (!mobile) {
        setMobileOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="bg-white fixed top-0 left-0 w-full z-[99] px-[40px] lg:px-[55px] h-[80px] border-b border-b-[#E8D4FF] shadow-md">
      <div className="max-w-[1320px] mx-auto flex items-center justify-between h-full">
        <Logo />

        {isMobile && (
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 text-2xl text-[#1A1246]"
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            <FaBars />
          </button>
        )}

        {!isMobile && (
          <nav className="flex items-center gap-0.5 text-[#313033] text-bold font-sans tracking-wide text-[15px]">
            {menu.map((item, idx) => (
              <div className="relative group" key={idx}>
                {item.children ? (
                  <>
                    <div className="inline-flex items-center gap-1 px-1 py-4 hover:text-[#6A4EFF] relative group">
                      {item.label}
                      <FaAngleDown className="text-sm mt-1" />
                      <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#6A4EFF] transition-all group-hover:w-full"></span>
                    </div>
                    <div className="absolute left-0 top-full mt-2 bg-white shadow-lg flex-col min-w-[320px] z-50 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-300">
                      {item.children.map((sub, subIdx) => (
                        <div
                          key={subIdx}
                          className="group relative inline  w-full justify-center"
                        >
                          {sub.children ? (
                            <>
                              <div className="flex justify-between items-center p-2 hover:bg-gray-100 bg-gray-50 cursor-pointer">
                                {sub.label}
                                <FaAngleRight className="text-base" />
                              </div>
                              <div className="absolute top-0 right-full lg:right-full lg:left-auto hidden group-hover:flex flex-col bg-gray-300  shadow-lg min-w-[200px] z-50">
                                {sub.children.map((child, childIdx) => (
                                  <Link
                                    key={childIdx}
                                    href={child.href || "#"}
                                    className="block px-4 py-2 hover:bg-gray-100 whitespace-nowrap"
                                  >
                                    {child.label}
                                  </Link>
                                ))}
                              </div>
                            </>
                          ) : (
                            <Link
                              href={sub.href || "#"}
                              className="block px-4 py-2 hover:bg-gray-100"
                            >
                              {sub.label}
                            </Link>
                          )}
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href || "#"}
                    className={`relative hover:text-[#6A4EFF] after:content-[''] after:block after:h-[2px] after:bg-[#6A4EFF] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>
        )}
      </div>

      {isMobile && mobileOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/40 z-40"
            onClick={() => setMobileOpen(false)}
          ></div>

          {/* Sidebar */}
          <div className="fixed top-0 left-0 w-[280px] h-full bg-white z-50 flex flex-col">
            {/* Header with logo and close */}
            <div className="flex items-center justify-between px-4 py-4 border-b">
              <Logo />
              <button
                onClick={() => setMobileOpen(false)}
                className="text-xl font-bold text-[#1A1246]"
              >
                ×
              </button>
            </div>

            {/* Menu Items */}
            <nav className="flex-1 px-4 py-6 space-y-3 text-[#313033] text-[15px] font-medium">
              {menu.map((item, idx) => (
                <div key={idx}>
                  {item.children ? (
                    <details className="group">
                      <summary className="flex items-center justify-between cursor-pointer px-1 py-2 hover:text-[#6A4EFF]">
                        {item.label}
                        <span className="text-sm">&#8250;</span>{" "}
                        {/* Unicode right arrow › */}
                      </summary>
                      <div className="pl-4 mt-1 space-y-1">
                        {item.children.map((child, cIdx) => (
                          <div key={cIdx}>
                            {child.children ? (
                              <details className="group">
                                <summary className="flex items-center justify-between cursor-pointer py-1 hover:text-[#6A4EFF]">
                                  {child.label}
                                  <span className="text-xs">&#8250;</span>
                                </summary>
                                <div className="pl-4 mt-1 space-y-1">
                                  {child.children.map((subChild, scIdx) => (
                                    <Link
                                      key={scIdx}
                                      href={subChild.href || "#"}
                                      className="block text-sm hover:text-[#6A4EFF]"
                                    >
                                      {subChild.label}
                                    </Link>
                                  ))}
                                </div>
                              </details>
                            ) : (
                              <Link
                                href={child.href || "#"}
                                className="block text-sm hover:text-[#6A4EFF]"
                              >
                                {child.label}
                              </Link>
                            )}
                          </div>
                        ))}
                      </div>
                    </details>
                  ) : (
                    <Link
                      href={item.href || "#"}
                      className="block px-1 py-2 hover:text-[#6A4EFF]"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Footer Contact Us link with icon */}
            <div className="items-center px-4 pb-4 mt-auto">
              <Link
                href="/contact-us"
                className="flex items-center gap-2 text-[#1A1246] hover:text-[#6A4EFF] font-semibold text-sm"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#1A1246"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Contact Us
              </Link>
            </div>
            <div className="px-4 pb-4">
              <Link
                href="/book-appointment"
                className="flex items-center gap-2 text-[#1A1246] hover:text-[#6A4EFF] font-semibold text-sm"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#1A1246"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                Book an Appointment
              </Link>
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default Navbar;
