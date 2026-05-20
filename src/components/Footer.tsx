import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaFacebook } from 'react-icons/fa6';
import { GrInstagram } from 'react-icons/gr';
import { TiSocialLinkedinCircular } from 'react-icons/ti';

// Moving static data outside component with precise asymmetrical design widths
const FOOTER_DATA = [
  {
    title: "MyVamsnet",
    subtitle: "MyVamsnet is an impact-driven technology company delivering tech-enabled growth for individuals and businesses across Africa and beyond.",
    imgSrc: "/myVamsnetLogo_white.svg",
    imgAlt: "We Understand You",
    widthClass: "lg:w-[425px]" // Wide description column
  },
  {
    title: "Opportunities",
    links: ["Join our team", "Training", "Tech Event"],
    widthClass: "lg:w-[232px]" // Middle spec width
  },
  {
    title: "Legal",
    links: ["Privacy Policy", "Terms of Service"],
    widthClass: "lg:w-[232px]" // Middle spec width
  },
  {
    title: "Company",
    links: ["FAQs", "Contact us"],
    widthClass: "lg:w-[85px]" // Narrower end column
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#004C99] text-white py-16 px-6 lg:px-16 border-t border-white/10">
      <div className="Wrapper max-w-7xl mx-auto">
        
        {/* Asymmetrical Layout using Flex & Justify-Between */}
        <div className="flex flex-col lg:flex-row lg:justify-between gap-12 lg:gap-0 mb-16">
          {FOOTER_DATA.map((item, index) => (
            <div 
              key={index} 
              className={`flex flex-col space-y-4 ${item.widthClass || 'w-full'}`}
            >
              {/* Heading Container */}
              <div className="flex gap-2 items-center">
                {item.imgSrc && (
                  <span>
                    <Image
                      src={item.imgSrc}
                      alt={item.imgAlt}
                      width={33}
                      height={40}
                    />
                  </span>
                )}
                <h3 className="font-heading font-normal text-[18px] leading-9 text-[#FFFFFF]">
                  {item.title}
                </h3>
              </div>
               
              {item.subtitle && ( 
                <p className="font-normal text-[16px] leading-7 text-[#FFFFFFBF]">
                  {item.subtitle}
                </p>
              )}

              {/* Links Column Wrapper */}
              <div className="flex flex-col">
                <ul className="flex flex-col gap-4">
                  {item.links?.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link 
                        href={"#"} 
                        className="text-[#FFFFFFBF] hover:text-[#D0B8AC] transition-colors text-[14px]"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            
            </div>
          ))}
        </div>

        {/* Bottom Socials & Support Row */}
        <div className="mt-8 py-8 border-t border-b border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 text-sm text-[#FFFFFFBF]">
          <p>© 2026 MyVamsnet Ltd. All rights reserved.</p>
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <p className="hover:text-white transition-colors cursor-pointer">Support@myvamsnet.com</p>
            <div className="flex items-center gap-4 text-xl">
              <a href="#" className="hover:text-[#D0B8AC] transition-colors"><FaFacebook /></a>
              <a href="#" className="hover:text-[#D0B8AC] transition-colors"><GrInstagram /></a>
              <a href="#" className="hover:text-[#D0B8AC] transition-colors text-2xl"><TiSocialLinkedinCircular /></a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}