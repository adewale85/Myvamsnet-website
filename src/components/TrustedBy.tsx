"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

function TrustedBy() {
  const [isPaused, setIsPaused] = useState(false);

  // Separated the label from the companies so the label doesn't move
  const label = "Trusted by:";
  const companies = ["Eliad Investment", "SEI Africa", "AngyCare UK", "3trive Lab"];

  // Duplicate the company items to make a seamless, infinite loop
  const duplicatedCompanies = [...companies, ...companies, ...companies, ...companies];

  return (
    <section className="bg-brand-lime ">
      
     <div className="Inner-wrapper  flex items-center w-full lg:h-[137px] py-6 px-6 lg:px-12 overflow-hidden gap-6 lg:gap-12">
      <div className="flex-shrink-0 z-10">
        <p className="font-bold text-[16px] lg:text-[24px] leading-15.5 text-[#13171C]">
          {label}
        </p>
      </div>

     
      <div className="w-full overflow-hidden mask-gradient">
        <motion.div 
          className="flex w-max gap-16 items-center cursor-pointer"
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
          {duplicatedCompanies.map((name, id) => (
            <div key={id} className="flex items-center justify-between">
              <p className="font-bold text-[16px] lg:text-[20px] leading-6 text-[#13171CBF]">
                {name}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
      </div>
    </section>
  );
}

export default TrustedBy;