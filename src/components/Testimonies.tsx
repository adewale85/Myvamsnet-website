"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";

function Testimonies() {
  const [isPaused, setIsPaused] = useState(false);

  const testimonialsData = [
    {
      stars: 5,
      quote:
        "Wapx makes trading crypto and paying bills incredibly easy. I don't need multiple apps anymore.",
      name: "Joshua Idowu",
      role: "Founder, SEI Africa",
      avatarSrc: "/joshua-idowu.svg",
    },
    {
      stars: 4,
      quote:
        "The social media boost and SMS verification features save me hours every week. It was an awesome experience.",
      name: "John Bamikefa",
      role: "Back-end Developer",
      avatarSrc: "/john-bamikefa.svg",
    },
    {
      stars: 5,
      quote:
        "Everything I need in one fintech app. The virtual cards and eSIM features are game-changers.",
      name: "Fredrick Omoniyi",
      role: "Founder, Angycare Uk",
      avatarSrc: "/fredrick_omoniyi.svg",
    },
  ];

  // Duplicate the array so that the horizontal carousel has enough elements to loop seamlessly
  const duplicatedData = [...testimonialsData, ...testimonialsData];

  return (
    <section className="overflow-hidden w-full py-10">
      
      {/* Moving Track Wrapper Container */}
      <motion.div
        className="flex w-max gap-6 lg:gap-8 cursor-pointer"
        style={{ willChange: "transform" }}
        animate={{ x: isPaused ? undefined : ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          duration: 20, // Lower numbers = faster slide
          ease: "linear",
        }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)} // Added touch support for mobile pause interaction
        onTouchEnd={() => setIsPaused(false)}
      >
        {duplicatedData.map((data, id) => (
        
          <div
            key={id}
            className="bg-[#FFFFFF] lg:w-[380px] w-[343px] h-[324px] rounded-b-4xl border-2 border-[#FFFFFF] rounded-3xl flex flex-shrink-0 items-center justify-center"
          >
            <div className="w-[316px] h-[260px] space-y-4 flex-col items-center ">
              <div className="flex gap-2 text-amber-500 lg:flex hidden">
                {Array.from({ length: data.stars }).map((_, index) => (
                  <span key={index}>
                    <Image
                      src={"Rate_Icon.svg"}
                      alt=""
                      width={24}
                      height={24}
                    />
                  </span> 
                ))}
              </div>
              <div className="flex gap-2 text-amber-500 lg:hidden">
                {Array.from({ length: data.stars }).map((_, index) => (
                  <span key={index}>
                    <Image
                      src="Rate_Icon.svg"
                      alt=""
                      width={20}
                      height={20}
                    />
                  </span> 
                ))}
              </div>
              <p className="lg:w-[316px] w-[236px] lg:text-[20px] text-[16px] leading-9 font-normal">"{data.quote}"</p>
              <div className="flex gap-6 items-center ">
                <Image
                  src={data.avatarSrc}
                  alt={data.name}
                  width={60}
                  height={60}
                  className="w-16 h-16 rounded-full object-cover lg:block hidden"
                />
                <Image
                  src={data.avatarSrc}
                  alt={data.name}
                  width={20}
                  height={20}
                  className="w-16 h-16 rounded-full object-cover lg:hidden"
                />
                <div>
                  <h4 className="font-normal lg:text-[20px] text-[16px] leading-100% text-[#232B33] font-heading">{data.name}</h4>
                  <p className="lg:text-[20px] text-[16px] leading-[26px] font-normal text-[#232B33BF]">{data.role}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

export default Testimonies;