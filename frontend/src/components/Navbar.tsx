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
        href: "/student-services/education-counselling",
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
          {
            label: "Canada",
            href: "/about/our-partners/canada",
          },
          {
            label: "New Zealand",
            href: "/about/our-partners/new-zealand",
          },
          {
            label: "United Kingdom",
            href: "/about/our-partners/united-kingdom",
          },
          {
            label: "United States of America",
            href: "/about/our-partners/united-states-of-america",
          },
          {
            label: "Ireland",
            href: "/about/our-partners/ireland",
          },
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

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 1024; // 1024px breakpoint for mobile
      setIsMobile(mobile);
      if (!mobile) {
        setMobileOpen(false); // close menu on desktop
      }
    };

    handleResize(); // on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="bg-white fixed top-0 left-0 w-full z-[99] px-[40px] lg:px-[55px] h-[90px] border-b shadow-md">
      <div className="max-w-[1320px] mx-auto flex items-center justify-between h-full">
        <Logo />

        {/* Mobile Toggle */}
        {isMobile && (
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 text-2xl text-[#1A1246]"
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            <FaBars />
          </button>
        )}

        {/* Desktop Menu */}
        {!isMobile && (
          <nav className=" flex items-center justify-end h-full gap-8 text-[#1A1246] font-semibold text-sm">
            {menu.map((item, idx) => (
              <div className="relative group" key={idx}>
                {item.children ? (
                  <>
                    <div className="inline-flex w-full justify-center gap-x-1.5 rounded-md items-center gap-8 hover:text-[#6A4EFF] p-8">
                      {item.label} <FaAngleDown className="ml-1 text-xs" />
                    </div>
                    <div className="absolute p-8 left-0 top-full mt-2 bg-white border shadow-lg hidden group-hover:flex flex-col min-w-[220px] z-50">
                      {item.children.map((sub, subIdx) => (
                        <div
                          key={subIdx}
                          className="group relative inline block w-full justify-center"
                        >
                          {sub.children ? (
                            <>
                              <div className="flex justify-between items-center p-8 hover:bg-gray-100 bg-gray-50">
                                {sub.label}
                                <FaAngleRight className="text-xs" />
                              </div>
                              <div className="absolute top-0 left-full hidden group-hover:flex flex-col bg-white border shadow-lg min-w-[200px] z-50">
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
                    className="hover:text-[#6A4EFF]"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>
        )}
      </div>

      {/* Mobile Menu */}
      {isMobile && mobileOpen && (
        <div className="xl:hidden px-4 py-4 bg-white border-t text-[#1A1246] space-y-2">
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setMobileOpen(false)}
          ></div>

          {/* Slide-in Sidebar */}
          <div className="fixed top-0 left-0 w-[270px] h-full bg-white shadow-lg z-50 p-6 overflow-y-auto flex flex-col justify-between">
            {/* Top: Logo + Close */}
            <div className="flex justify-between items-center mb-6">
              <Logo />
              <button onClick={() => setMobileOpen(false)}>
                <span className="text-xl font-bold text-[#1A1246]">
                  &times;
                </span>
              </button>
            </div>

            {/* Menu Items */}
            <nav className="space-y-4 text-[#1A1246] text-sm">
              {menu.map((item, idx) => (
                <div key={idx}>
                  {item.children ? (
                    <details>
                      <summary className="font-semibold cursor-pointer hover:text-[#6A4EFF]">
                        {item.label}
                      </summary>
                      <div className="pl-4 mt-1 space-y-1">
                        {item.children.map((child, cIdx) => (
                          <div key={cIdx}>
                            {child.children ? (
                              <details>
                                <summary className="font-medium cursor-pointer hover:text-[#6A4EFF]">
                                  {child.label}
                                </summary>
                                <div className="pl-4 mt-1 space-y-1">
                                  {child.children.map((subChild, scIdx) => (
                                    <Link
                                      key={scIdx}
                                      href={subChild.href || "#"}
                                      className="block hover:underline"
                                    >
                                      {subChild.label}
                                    </Link>
                                  ))}
                                </div>
                              </details>
                            ) : (
                              <Link
                                href={child.href || "#"}
                                className="block hover:underline"
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
                      className="block font-semibold hover:text-[#6A4EFF]"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Bottom: Contact Us */}
            <div className="pt-6 border-t mt-6 text-center">
              <Link
                href="/contact-us"
                className="text-xs text-[#1A1246] font-semibold flex justify-center items-center gap-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 12H8m8 0a4 4 0 11-8 0 4 4 0 018 0zm-4-6v.01M12 18v.01"
                  />
                </svg>
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
