// WhatWeDoSection.jsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { staggerContainer, fadeInUp, slideInDirection } from "@/utils/animations";

const servicesData = [
  {
    badge: "PRODUCT & INNOVATION",
    heading: "Building and scaling Transformative tech solutions.",
    description: "We build web apps, mobile apps, custom software, and AI-powered solutions that solve real problems.",
    btnText: "Start a Project",
    btnLink: "/contact",
    imgSrc: "/ProductInovation_image.svg", 
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
    <section id="WhatWeDoSection" className="py-16 max-w-7xl Inner-wrapper lg:scroll-mt-22 scroll-mt-12 ">
      <header className="sticky lg:top-22  z-40 lg:pt-8 flex items-center justify-between gap-6 lg:mb-8">
        <p className="lg:text-[18px] text-[12px] font-heading font-normal leading-6 text-[#232B33] whitespace-nowrap">
          WHAT WE DO
        </p>
        <div className="lg:w-262 w-full h-1 bg-[#FFFFFF]"></div>
      </header>

      {/* CRITICAL STACKING CONTAINER:
        No `space-y` classes here! The padding-bottom creates room for cards to layer natively.
      */}
      <div className="relative py-6 space-y-6 lg:space-y-0">
        {servicesData.map((service, index) => {
          const isReversed = index % 2 !== 0;
          
         
          return (
            <motion.div 
              key={service.badge} 
              className={`w-full bg-[#FFFFFF] rounded-[32px] overflow-hidden flex flex-col-reverse lg:items-center justify-between border border-black/5
                lg:sticky lg:top-[200px] ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row' }`}
              style={{ 
                zIndex: 40 + index, // Adjusts where cards stack relative to your sticky navbar
              }}
              
              // Smooth initial viewport entrance as a card comes up from the bottom
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, ease: "easeOut"}}

              // Interaction: Slight scale up when mouse targets a specific layer
              whileHover={{ 
                scale: 1.005,
                borderColor: "rgba(0, 127, 255, 0.2)",
              }}
            >
              
              {/* Content Block Wrapper */}
              <motion.div
                variants={staggerContainer(0.12, 0.1)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }} 
                className="w-full lg:w-[600px] lg:h-[565px] min-h-[422px] h-auto flex items-center justify-center p-8 lg:p-0 bg-white"
              >
                <div className="w-full lg:w-[504px] space-y-3 lg:space-y-5">
                  <motion.div variants={fadeInUp(15, 0.5)} className="inline-block">
                    <span className="font-normal lg:text-[16px] text-[12px] leading-[100%] font-heading text-[#007FFF] bg-[#EEF6FF] rounded-full px-4 py-2">
                      {service.badge}
                    </span>
                  </motion.div>

                  <motion.h3 variants={fadeInUp(20, 0.5)} className="font-bold text-[28px] lg:text-[48px] lg:leading-17 leading-10 text-[#232B33] pt-5">
                    {service.heading}
                  </motion.h3>

                  <motion.p variants={fadeInUp(15, 0.5)} className="font-normal text-[16px] text-[#232B33BF] lg:text-[20px] lg:leading-9 leading-8">
                    {service.description}
                  </motion.p>

                  <motion.div variants={fadeInUp(10, 0.4)}>
                    <Link href={service.btnLink} className="block">
                      <motion.button 
                        className="w-full h-[52px] font-bold text-[16px] rounded-xl lg:text-[#ffffff] border border-[#C7FF01] text-brand-lime leading-[100%] bg-brand-blue lg:hover:bg-[#006fde]"
                        whileHover={{ scale: 1.02, backgroundColor: "#007FFF", color: "#C7FF01" }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {service.btnText}
                      </motion.button>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
              
              {/* Image Block Wrapper */}
              <motion.div 
                className="w-full lg:w-[600px] h-[300px] lg:h-[565px] relative "
                variants={slideInDirection(isReversed, 35, 0.6, 0.15)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false}}
              >
                <Image 
                  src={service.imgSrc} 
                  alt={service.imgAlt} 
                  fill
                  className="object-cover object-center"
                  sizes="w-full lg:w-[600px] h-auto lg:h-[565px]"
                />
              </motion.div>

            </motion.div>
          );
        })}
      </div>
    </section>
  );
}