"use client";

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

  // Duplicate multiple times like TrustedBy
  const duplicatedData = [
    ...testimonialsData,
    ...testimonialsData,
    ...testimonialsData,
    ...testimonialsData,
  ];

  return (
    <section className="overflow-hidden w-full py-10">
      <motion.div
        className="flex w-max gap-6 lg:gap-8 items-center cursor-pointer"
        style={{ willChange: "transform" }}
        animate={{ x: isPaused ? undefined : ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear",
        }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        {duplicatedData.map((data, id) => (
          <div
            key={id}
            className="bg-[#FFFFFF] lg:w-[380px] w-[343px] h-[324px] rounded-b-4xl border-2 border-[#FFFFFF] rounded-3xl flex items-center justify-center shrink-0"
          >
            <div className="w-[316px] h-[260px] space-y-4 flex flex-col lg:px-0 px-8">
              {/* Desktop Stars */}
              <div className="flex gap-2 text-amber-500 lg:flex hidden">
                {Array.from({ length: data.stars }).map((_, index) => (
                  <span key={index}>
                    <Image
                      src="/Rate_Icon.svg"
                      alt=""
                      width={24}
                      height={24}
                    />
                  </span>
                ))}
              </div>

              {/* Mobile Stars */}
              <div className="flex gap-2 text-amber-500 lg:hidden w-full items-center">
                {Array.from({ length: data.stars }).map((_, index) => (
                  <span key={index}>
                    <Image
                      src="/Rate_Icon.svg"
                      alt=""
                      width={20}
                      height={20}
                    />
                  </span>
                ))}
              </div>

              <p className="w-[236px] lg:w-[316px] lg:text-[20px] text-[16px] leading-9 font-normal">
                "{data.quote}"
              </p>

              <div className="flex lg:flex-row gap-3 lg:gap-6 justify-start w-full">
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
                  className="w-12 h-12 rounded-full object-cover lg:hidden"
                />

                <div className="text-center lg:text-left">
                  <h4 className="font-normal lg:text-[20px] text-[16px] text-[#232B33] font-heading">
                    {data.name}
                  </h4>
                  <p className="lg:text-[20px] text-[16px] leading-[26px] font-normal text-[#232B33BF]">
                    {data.role}
                  </p>
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