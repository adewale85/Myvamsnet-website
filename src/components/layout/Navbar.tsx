"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const Navlinks = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/Projects" },
    { name: "Solutions", href: "/Solutions" },
    { name: "Studio", href: "/Studio" },
    { name: "Opportunities", href: "/Opportunities" },
    { name: "About us", href: "/About-us" },
  ];

  return (
    <main className=" h-22 relative lg:mb-6 mb-0">
      <div className="Inner-wrapper flex items-center justify-between gap-6 h-full">
        
          <Image src="/MyVamsnet_Logo.svg" alt="logo" width={190} height={32} />

        {/* Desktop menu */}
        <ul className="items-center justify-center list-none gap-10 text-[16px] font-normal text-white leading-[100%] lg:flex hidden">
          {Navlinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="text-white hover:text-[#007FFF]"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="lg:block hidden">
          <button className="bg-[#007FFF] px-8 py-3.5 rounded-lg text-[#C7FF01] text-sm font-normal hover:opacity-90 transition font-heading">
            Contact us
          </button>
        </div>

        {/* Mobile Menu */}
       
         
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-center lg:hidden"
          >
            {isOpen ? (
              <FaXmark className="text-white" />
            ) : (
             <FaBarsStaggered className="text-white"/>
            )}
          </button>
 
          {isOpen && (
            <div className="absolute top-20 left-0 w-full bg-[#F5F5F5] flex flex-col items-center gap-6 py-4 lg:hidden">
              {Navlinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-black hover:text-[#007FFF]"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          )}
        </div>
     
    </main>
  );
}

export default Navbar;
