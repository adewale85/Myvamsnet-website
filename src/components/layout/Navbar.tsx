"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
import { isExternal } from "util/types";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const Navlinks = [
    { name: "Home", href: "/", isExternal: false },
    { name: "Projects", href: "#OurRecentProject", isExternal: false  },
    { name: "Solutions", href: "#WhatWeDoSection", isExternal: false },
    { name: "Studio", href: "https://www.myvamsnet.com/", isExternal: true },
    { name: "Opportunities", href: "#RecommendedForYou", isExternal: false },
    { name: "About us", href: "#GrowthSection", isExternal: false  },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 20;
      setIsScrolled(scrolled);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`lg:h-22 h-15.5 fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="Inner-wrapper flex items-center justify-between gap-6 h-full lg:mb-0 mb-22">
        
        {/* Logo */}
        <div className="relative lg:w-[190px] lg:h-[32px] w-[150px] h-[30px]">
          <Image
            src="/MyVamsnet_Logo.svg"
            alt="logo"
            fill
            className={`absolute inset-0 transition-opacity duration-300 ${
              isScrolled ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
          />
          <Image
            src="/myVamsnetLogo_blue.svg"
            alt="logo"
            fill
            className={`absolute inset-0 transition-opacity duration-300 ${
              isScrolled ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          />
        </div>

        {/* Desktop menu */}
        <ul className="items-center justify-center list-none gap-10 text-[16px] font-normal leading-[100%] lg:flex hidden">
          {Navlinks.map((link) => (
            <li key={link.name}>
              {/* FIXED HERE: Swapped <Link> to <a> for proper single-page section tracking */}
              <a
                href={link.href}
                className={`hover:text-[#007FFF] transition-colors ${
                  isScrolled ? "text-[#232B33]" : "text-white"
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Button */}
        <div className="lg:block hidden">
          <button className="bg-[#007FFF] px-8 py-3.5 rounded-lg text-[#C7FF01] text-sm font-normal hover:opacity-90 transition font-heading">
            Contact us
          </button>
        </div>

        {/* Mobile Menu Button Container */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-center lg:hidden z-50"
        >
          {isOpen ? (
            <FaXmark className={isScrolled ? "text-brand-blue" : "text-white"} size={18} />
          ) : (
            <FaBarsStaggered className={isScrolled ? "text-brand-blue" : "text-white"} size={18} />
          )}
        </button>

        {/* Mobile Menu Box Dropdown Layer */}
        {isOpen && (
          <div className="absolute top-22 left-0 w-full bg-[#F5F5F5] flex flex-col items-center gap-6 py-8 lg:hidden shadow-xl border-b border-black/5 animate-fadeIn">
            {Navlinks.map((link) => (
              /* FIXED HERE: Swapped <Link> to <a> here as well */
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-black text-lg font-medium hover:text-[#007FFF] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;