"use client";

import { PanInfo, motion } from "framer-motion";
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

  const getActiveDataIndex = (index: number) => {
    const len = testimonialsData.length;
    return ((index % len) + len) % len;
  };

  const handleNext = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => prev - 1);
  };

  const handleDragEnd = (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (info.offset.x < -40 || info.velocity.x < -200) {
      handleNext();
    } else if (info.offset.x > 40 || info.velocity.x > 200) {
      handlePrev();
    }
  };

  return (
    <section className="overflow-hidden w-full max-w-full py-10 flex flex-col items-start lg:items-center">
      
      {/* 1. DESKTOP INFINITE TICKER */}
      {!isMobile && (
        <div className="w-full overflow-hidden lg:flex hidden">
          <motion.div
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
            {[...testimonialsData, ...testimonialsData].map((data, id) => (
              <div
                key={`desktop-${id}`}
                className="bg-[#FFFFFF] lg:w-[380px] w-[276px] lg:h-[324px] h-[256px] border-2 border-[#FFFFFF] rounded-[20px] flex items-center justify-center shrink-0"
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

      {/* 2. MOBILE TRUE UNENDING MANUAL CAROUSEL WITH 10% RIGHT PEEK */}
      {isMobile && (
        <div className="w-full overflow-hidden px-4 relative min-h-[260px] flex items-center justify-start">
          <motion.div
            // Width is set to 86vw so the card size leaves exactly enough screen estate on the right edge
            className="relative w-[86vw] h-[256px] cursor-grab active:cursor-grabbing lg:hidden"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleDragEnd}
          >
            {testimonialsData.map((data, id) => {
              let offsetIndex = id - getActiveDataIndex(currentIndex);
              
              // Wrapping structure logic loop
              if (offsetIndex < -1) offsetIndex += testimonialsData.length;
              if (offsetIndex > 1) offsetIndex -= testimonialsData.length;

              // CUSTOM POSITIONAL PEAK MATH: 
              // If it's the previous card (offsetIndex === -1), hide it off-screen to the left completely (-120%)
              // If it's the next card (offsetIndex === 1), set it to 104% so it subtly peeks onto the screen by ~10%
              let translateX = `${offsetIndex * 104}%`;
              if (offsetIndex === -1) {
                translateX = "-130%"; 
              }

              return (
                <motion.div
                  key={`mobile-infinite-${id}`}
                  style={{ position: "absolute", top: 0, left: 0 }}
                  animate={{
                    x: translateX,
                    opacity: offsetIndex === -1 ? 0 : 1, // Completely hides the left card visually to clean up the edge
                    zIndex: offsetIndex === 0 ? 10 : 1,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 32 }}
                  className="bg-[#FFFFFF] w-[86vw] h-[256px] border-2 border-[#FFFFFF] rounded-[20px] flex items-center justify-center shrink-0 pointer-events-none"
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
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      )}


   
    {isMobile && (
        <div className="flex gap-2 mt-6 lg:hidden self-center">
          {testimonialsData.map((_, idx) => (
            <div 
              key={idx} 
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === getActiveDataIndex(currentIndex) ? "w-6 bg-[#007FFF]" : "w-2 bg-[#007FFF]/30"
              }`}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default Testimonies;