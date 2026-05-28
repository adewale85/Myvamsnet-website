"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState, useEffect } from "react";

function Testimonies() {
  const [isPaused, setIsPaused] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const testimonialsData = [
    {
      stars: 5,
      quote: "Wapx makes trading crypto and paying bills incredibly easy. I don't need multiple apps anymore.",
      name: "Joshua Idowu",
      role: "Founder, SEI Africa",
      avatarSrc: "/joshua-idowu.svg",
    },
    {
      stars: 4,
      quote: "The social media boost and SMS verification features save me hours every week. It was an awesome experience.",
      name: "John Bamikefa",
      role: "Back-end Developer",
      avatarSrc: "/john-bamikefa.svg",
    },
    {
      stars: 5,
      quote: "Everything I need in one fintech app. The virtual cards and eSIM features are game-changers.",
      name: "Fredrick Omoniyi",
      role: "Founder, Angycare Uk",
      avatarSrc: "/fredrick_omoniyi.svg",
    },
  ];

  useEffect(() => {
    const checkViewport = () => setIsMobile(window.innerWidth < 1024);
    checkViewport();
    window.addEventListener("resize", checkViewport);
    return () => window.removeEventListener("resize", checkViewport);
  }, []);

  // FIXED DUPLICATION STACK: Duplicating exactly once gives a perfect clean half-split match
  const duplicatedData = [
  ...testimonialsData,
  ...testimonialsData,
  ...testimonialsData,
  ...testimonialsData,
];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const handleDragEnd = (event, info) => {
    if (info.offset.x < -50) {
      handleNext();
    } else if (info.offset.x > 50) {
      handlePrev();
    }
  };

  return (
    // FIXED CONTAINER: Added layout constraints (max-w-full) to keep the wrapper locked tightly
    <section className="overflow-hidden w-full max-w-full py-10 flex flex-col items-start lg:items-center">
      
      {/* 1. DESKTOP INFINITE TICKER */}
      {!isMobile && (
        <div className="w-full overflow-hidden flex lg:flex hidden">
          <motion.div
            // FIXED CLASSES: Used select layout restrictions (inline-flex) with clear flex-nowrap to squeeze out all extra whitespace boundaries
            className="flex flex-nowrap gap-8 items-center cursor-pointer select-none"
            style={{ willChange: "transform" }}
            animate={{ x: isPaused ? undefined : ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "linear",
            }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {duplicatedData.map((data, id) => (
              <div
                key={`desktop-${id}`}
                className="bg-[#FFFFFF] lg:w-[380px] w-[276px] lg:h-[324px] h-[256px] border-2 border-[#FFFFFF] rounded-3xl flex items-center justify-center shrink-0 shadow-sm"
              >
                <div className="w-[316px] h-[260px] space-y-4 flex flex-col justify-center">
                  <div className="flex gap-2 text-amber-500">
                    {Array.from({ length: data.stars }).map((_, index) => (
                      <span key={index}>
                        <Image src="/Rate_Icon.svg" alt="" width={24} height={24} />
                      </span>
                    ))}
                  </div>

                  <p className="w-full text-[20px] leading-9 font-normal text-[#232B33]">
                    "{data.quote}"
                  </p>

                  <div className="flex gap-6 justify-start w-full items-center">
                    <Image
                      src={data.avatarSrc}
                      alt={data.name}
                      width={60}
                      height={60}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="text-left">
                      <h4 className="font-normal text-[20px] text-[#232B33] font-heading">
                        {data.name}
                      </h4>
                      <p className="text-[20px] leading-[26px] font-normal text-[#232B33BF]">
                        {data.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      )}

      {/* 2. MOBILE HAND-SWAP SLIDER */}
      {isMobile && (
        <motion.div
          className="flex w-max gap-4 items-center cursor-pointer lg:hidden px-4"
          style={{ willChange: "transform" }}
          animate={{ x: `calc(-${currentIndex * 84}% - ${currentIndex * 16}px)` }}
          transition={{ type: "spring", stiffness: 300, damping: 32 }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={handleDragEnd}
        >
          {testimonialsData.map((data, id) => (
            <div
              key={`mobile-${id}`}
              className="bg-[#FFFFFF] w-[84vw] h-[256px] border-2 border-[#FFFFFF] rounded-3xl flex items-center justify-center shrink-0 shadow-sm"
            >
              <div className="w-full max-w-[316px] h-[260px] space-y-4 flex flex-col justify-center px-4">
                <div className="flex gap-2 text-amber-500 w-full items-center">
                  {Array.from({ length: data.stars }).map((_, index) => (
                    <span key={index}>
                      <Image src="/Rate_Icon.svg" alt="" width={20} height={20} />
                    </span>
                  ))}
                </div>

                <p className="w-full text-[15px] leading-6 font-normal text-[#232B33]">
                  "{data.quote}"
                </p>

                <div className="flex gap-3 justify-start w-full items-center">
                  <Image
                    src={data.avatarSrc}
                    alt={data.name}
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="text-left">
                    <h4 className="font-normal text-[16px] text-[#232B33] font-heading">
                      {data.name}
                    </h4>
                    <p className="text-[14px] font-normal text-[#232B33BF]">
                      {data.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      )}

      {/* Mobile Pagination Dots */}
      {isMobile && (
        <div className="flex gap-2 mt-6 lg:hidden self-center">
          {testimonialsData.map((_, idx) => (
            <div 
              key={idx} 
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex ? "w-6 bg-[#007FFF]" : "w-2 bg-[#007FFF]/30"
              }`}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default Testimonies;