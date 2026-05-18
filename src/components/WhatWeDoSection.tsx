// WhatWeDoSection.jsx
import Image from "next/image";
import Link from "next/link";

const servicesData = [
  {
    badge: "PRODUCT & INNOVATION",
    heading: "Building and scaling Transformative tech solutions.",
    description: "We build web apps, mobile apps, custom software, and AI-powered solutions that solve real problems.",
    btnText: "Start a Project",
    btnLink: "/contact",
    imgSrc: "/traning_image.svg", // Double check if this should be dashboard_image or similar later!
    imgAlt: "Analytics dashboard showing tech solution metrics"
  },
  {
    badge: "ADVISORY & CONSULTANCY",
    heading: "Providing strategic guidance and growth advisory.",
    description: "We help individuals and businesses stay ahead with tech insights, integration, and support.",
    btnText: "Book a Consultation",
    btnLink: "/consult",
    imgSrc: "/consutancy_image.svg",
    imgAlt: "Two professionals in a meeting discussing strategy"
  },
  {
    badge: "TRAINING & INITIATIVES",
    heading: "Equipping you with skills & opportunities for growth.",
    description: "We empower you with practical skills, knowledge, and opportunities to thrive in the digital world.",
    btnText: "Check Opportunities",
    btnLink: "/academy",
    imgSrc: "/traning_image.svg",
    imgAlt: "Instructor pointing at a mobile application UI on a projector screen"
  }
];

export default function WhatWeDoSection() {
  return (
    <section className="py-16 px-4 max-w-7xl Inner-wrapper space-y-6">
      <header className="flex items-center justify-between lg:gap-4 gap-2">
        <p className="lg:text-[18px] text-[12px] font-heading font-normal leading-6 text-[#232B33]">What We Do</p>
        <div className="lg:w-262 w-60 h-1 bg-[#FFFFFF]"></div>
      </header>

      {/* Spacing between the rows matches the tighter Figma design blocks */}
      <div className="space-y-12 lg:space-y-8">
        {servicesData.map((service, index) => {
          // If index is odd (1), it returns true. This flips the middle card.
          const isReversed = index % 2 !== 0;

          return (
            <div 
              key={service.badge} 
              className={`w-full bg-[#FFFFFF] rounded-[32px] overflow-hidden shadow-sm flex flex-col-reverse lg:items-center justify-between
                ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row' }`}
            >
              {/* Content Block */}
              <div className="w-full lg:w-[600px] h-auto lg:h-[565px] flex items-center justify-center p-8 lg:p-0">
                <div className="w-full lg:w-[504px] space-y-8 lg:space-y-12">
                  <span className="font-normal lg:text-[16px] text-[12px] leading-[100%] font-heading text-[#007FFF] ">
                    {service.badge}
                  </span>
                  <h3 className="font-bold text-[28px] lg:text-[48px] lg:leading-17 leading-10 text-[#232B33] pt-5">
                    {service.heading}
                  </h3>
                  <p className="font-normal text-[16px] lg:text-[20px] lg:leading-9 leading-8">
                    {service.description}
                  </p>
                  <Link href={service.btnLink} className="block">
                    <button className="w-full h-[52px] font-bold text-[16px] rounded-xl text-[#007FFF] leading-[100%] border border-[#007FFF] bg-white hover:bg-[#007FFF] hover:text-brand-lime transition-colors">
                      {service.btnText}
                    </button>
                  </Link>
                </div>
              </div>

              {/* Image Block */}
              <div className="w-full lg:w-[600px] h-[300px] lg:h-[565px] relative">
                <Image 
                  src={service.imgSrc} 
                  alt={service.imgAlt} 
                  fill
                  className="object-cover object-center"
                  sizes="w-full lg:w-[600px] h-auto lg:h-[565px]"
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}