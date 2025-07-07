"use client";

import { useState } from "react";
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa";
import Logo from "./Logo";

type MenuItem = {
  title: string;
  href: string;
  children?: MenuItem[];
};

const menuItems: MenuItem[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Our Services",
    href: "/#",
    children: [
      { title: "Our Services", href: "https://kompass.cc/service" },
      { title: "Admission Processing", href: "#" },
      { title: "Visa Processing", href: "#" },
      { title: "Evaluation with Spantran", href: "#" },
      { title: "International Education Evaluation (IEE)", href: "#" },
      { title: "Educational Credential Evaluators(ECE)", href: "#" },
      { title: "World Education Service (WEC)", href: "#" },
    ],
  },
  {
    title: "Countries",
    href: "#",
    children: [
      { title: "USA", href: "/#" },
      { title: "Canada", href: "#" },
      { title: "Australia", href: "#" },
      { title: "UK", href: "#" },
    ],
  },
  {
    title: "FAQ",
    href: "#",
    children: [
      { title: "USA", href: "/#" },
      { title: "Canada", href: "#" },
      { title: "Australia", href: "#" },
      { title: "UK", href: "#" },
    ],
  },
  {
    title: "Contact",
    href: "#",
    children: [
      { title: "Contact Us", href: "/#" },
      { title: "Feedback", href: "#" },
      { title: "Initial Assesment", href: "#" },
      { title: "Student initial Inquiry", href: "#" },
    ],
  },
  {
    title: "About",
    href: "#",
    children: [
      { title: "About us", href: "/#" },
      { title: "Gallery", href: "#" },
      { title: "Team Member", href: "#" },
    ],
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (title: string) => {
    if (openDropdown === title) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(title);
    }
  };

  return (
    <nav className="bg-white shadow fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Logo />

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <div key={item.title} className="relative group">
                <Link
                  href={item.href}
                  className="uppercase text-[13px] tracking-wider font-semibold text-gray-800 hover:text-blue-700 border-b-2 border-transparent hover:border-blue-700 py-5 inline-flex items-center"
                >
                  {item.title}
                  {item.children && (
                    <FaAngleDown className="ml-1 text-xs mt-[1px]" />
                  )}
                </Link>

                {/* Dropdown */}
                {item.children && (
                  <div
                    className="
                      absolute left-0  mt-0
                      bg-white
                      rounded-lg border border-gray-200
                      shadow-xl
                      opacity-0 group-hover:opacity-100 group-hover:translate-y-1 group-hover:visible invisible
                      transition-all duration-300 ease-out
                      min-w-[256px]
                      py-2
                    "
                  >
                    <div className="flex flex-col pr-4">
                      {item.children.map((child) => (
                        <Link
                          key={child.title}
                          href={child.href}
                          className="
    relative inline-block
    px-5 py-3
    text-sm text-gray-700
    hover:text-blue-700
    transition-colors duration-200
    before:absolute before:bottom-0 before:w-18
    before:h-[2px]
    before:bg-blue-700 before:opacity-0
    hover:before:opacity-100
  "
                        >
                          {child.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* LOGIN BUTTON */}
            <Link
              href="/login"
              className="uppercase text-[13px] tracking-wider font-semibold border border-blue-700 text-blue-700 px-4 py-2 rounded hover:bg-blue-700 hover:text-white transition"
            >
              Login
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-3">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-gray-700 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {!mobileOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          {menuItems.map((item) => (
            <div key={item.title} className="border-b border-gray-100">
              <div className="flex justify-between items-center px-4 py-3">
                <Link
                  href={item.href}
                  className="text-gray-700 font-medium hover:text-blue-700"
                >
                  {item.title}
                </Link>

                {item.children && (
                  <button
                    onClick={() => toggleDropdown(item.title)}
                    className="text-gray-700 hover:text-blue-700 focus:outline-none"
                  >
                    <FaAngleDown
                      className={`transform transition-transform duration-300 ${
                        openDropdown === item.title ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                )}
              </div>

              {/* Children */}
              {item.children && openDropdown === item.title && (
                <div className="pl-6 pb-2">
                  {item.children.map((child) => (
                    <Link
                      key={child.title}
                      href={child.href}
                      className="block py-2 text-gray-700 hover:text-blue-700 hover:border-b-2 hover:border-blue-700 border-b-2 border-transparent"
                    >
                      {child.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Mobile Login Button */}
          <div className="p-4 border-t border-gray-100">
            <Link
              href="/login"
              className="block w-full text-center uppercase text-sm px-4 py-2 border border-blue-700 text-blue-700 rounded hover:bg-blue-700 hover:text-white transition"
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
