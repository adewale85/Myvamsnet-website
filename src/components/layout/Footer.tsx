import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaFacebook } from 'react-icons/fa6';
import { GrInstagram } from 'react-icons/gr';
import { TiSocialLinkedinCircular } from 'react-icons/ti';

const FOOTER_DATA = [
  {
    
    subtitle: "MyVamsnet is an impact-driven technology company delivering tech-enabled growth for individuals and businesses across Africa and beyond.",
    imgSrc: "/MyVamsnet_Logo.svg",
    imgAlt: "MyVamsnet-Logo.svg",
    // Takes full width on mobile grid rows, then scales to 497px on desktop
    widthClass: "col-span-2 lg:col-span-1 lg:w-[497px]" 
  },
  {
    title: "Opportunities",
    links: ["Join our team", "Training", "Tech Event"],
    widthClass: "col-span-1 lg:w-[232px]" // 1 column wide on mobile grid
  },
  {
    title: "Legal",
    links: ["Privacy Policy", "Terms of Service", "Terms of Service"],
    widthClass: "col-span-1 lg:w-[232px]" // 1 column wide on mobile grid
  },
  {
    title: "Company",
    links: ["FAQs", "Contact us", "Contact us"],
    widthClass: "col-span-1 lg:w-[85px]" // 1 column wide on mobile grid
  },
];

export default function Footer() {
  return (
    <footer className="bg-[radial-gradient(circle_at_center,#151B2F_0%,_#004C99_100%,_#004C99_100%)] text-white py-16 px-6 lg:px-16 border-t border-white/10">
      <div className="Inner-wrapper">
        
        {/* Mobile: 2-column Grid | Desktop: Balanced Custom Flex Row */}
        <div className="grid grid-cols-2 lg:flex lg:flex-row lg:justify-between gap-12 lg:gap-0 mb-16">
          {FOOTER_DATA.map((item, index) => (
            <div 
              key={index} 
              className={`flex flex-col space-y-4 ${item.widthClass || 'w-full'}`}
            >
              {/* Heading Container */}
              <div className="flex gap-2 items-center">
                {item.imgSrc && (
                  <span className='lg:flex hidden'>
                    <Image
                      src={item.imgSrc}
                      alt={item.imgAlt}
                      width={180}
                      height={32}
                    />
                  </span>
                )}
                {item.imgSrc && (
                  <span className='lg: hidden'>
                    <Image
                      src={item.imgSrc}
                      alt={item.imgAlt}
                      width={137}
                      height={24}
                    />
                  </span>
                )}
                <h3 className="font-heading font-normal text-[18px] leading-9 text-[#FFFFFF]">
                  {item.title}
                </h3>
              </div>
               
              {item.subtitle && ( 
                <p className="font-normal text-[16px] leading-7 text-[#FFFFFFBF] w-[425px]">
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
        <div className="my-8 py-8 border-y border-white/10 flex flex-col lg:flex-row items-center justify-between gap-6 text-sm text-[#FFFFFFBF]">
          <p>© 2026 MyVamsnet Ltd. All rights reserved.</p>
          <div className="flex items-center gap-6">
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