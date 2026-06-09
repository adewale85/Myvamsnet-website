import Image from 'next/image';
import Link from 'next/link';
import { IoLogoFacebook } from 'react-icons/io5';
import { PiInstagramLogoFill } from 'react-icons/pi';


const FOOTER_DATA = [
  {
    subtitle: "MyVamsnet is an impact-driven technology company delivering tech-enabled growth for individuals and businesses across Africa and beyond.",
    imgSrc: "/MyVamsnet_Logo.svg",
    imgAlt: "MyVamsnet-Logo.svg",
    // RESTORED: Spans full width across rows on mobile just like your original code
    widthClass: "col-span-2 lg:col-span-1 lg:w-[497px]" 
  },
  {
    title: "Opportunities",
    links: ["Join our team", "Training", "Tech Event"],
    widthClass: "col-span-1 w-full lg:w-[232px]"
  },
  {
    title: "Legal",
    links: ["Privacy Policy", "Terms of Service", "Terms of Service"],
    widthClass: "col-span-1 w-full lg:w-[232px]"
  },
  {
    title: "Company",
    links: ["FAQs", "Contact us", "Contact us"],
    widthClass: "col-span-1 w-full lg:w-[85px]"
  },
];

export default function Footer() {
  return (
    <footer className="bg-[radial-gradient(circle_at_center,#151B2F_0%,_#004C99_100%,_#004C99_100%)] text-white lg:py-16 py-8">
      <div className="Inner-wrapper">
        
        {/* FIXED: Maintains 2-column layout on mobile, uses justify-between natively, and locks desktop alignment with lg:items-start */}
       <div className="grid grid-cols-2 lg:flex lg:flex-row lg:justify-between gap-y-12 gap-x-6 lg:gap-0 items-start">
          {FOOTER_DATA.map((item, index) => (
            <div 
              key={index} 
              className={`flex flex-col space-y-4  ${item.widthClass || 'col-span-1 w-full'}`}
            >
              {/* Heading Container */}
              <div className="flex flex-col gap-4 w-full lg:mt-0 mt-6">
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
                  <span className='flex justify-center w-full lg:hidden'>
                    <Image
                      src={item.imgSrc}
                      alt={item.imgAlt}
                      width={211}
                      height={37.33}
                    />
                  </span>
                )}

                {item.title && (
                  <h3 className="font-heading font-normal text-[18px] leading-9 text-[#FFFFFF]">
                    {item.title}
                  </h3>
                )}
              
                {item.subtitle && ( 
                  <p className="font-normal text-[16px] text-center lg:text-start flex leading-7 text-[#FFFFFFBF] lg:w-[325px] w-full px-4 lg:px-0">
                    {item.subtitle}
                  </p>
                )}
              </div>
              
              {/* Links Column Wrapper */}
              <div className="flex flex-col">
                <ul className="flex flex-col gap-4">
                  {item.links?.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link 
                        href={"#"} 
                        className="text-[#FFFFFFBF] hover:text-brand-lime transition-colors text-[16px]"
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
        <div className="lg:my-8 mt-12 py-8 border-y border-white/10 flex flex-col lg:flex-row items-center justify-between gap-6 text-sm text-[#FFFFFFBF]">
          <p>© 2026 MyVamsnet Ltd. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <p className="hover:text-white transition-colors cursor-pointer">Support@myvamsnet.com</p>
            <div className="flex items-center gap-4 text-xl">
              <a href="#" className="hover:text-[#D0B8AC] transition-colors"><Image src="/Facebook.svg" alt="Facebook" width={25} height={25} /></a>
              <a href="#" className="hover:text-[#D0B8AC] transition-colors"><Image src="/Instagram.svg" alt="Instagram" width={30} height={30} /></a>
              <a href="#" className="hover:text-[#D0B8AC] transition-colors "><Image src="/LinkedIn.svg" alt="LinkedIn" width={30} height={30} /></a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}