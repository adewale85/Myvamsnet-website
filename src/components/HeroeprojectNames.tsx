"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

function HeroeprojectNames() {
  const [isPaused, setIsPaused] = useState(false);

  const projectNames = [
    "Miitas",
    "Eliad Investment",
    "SEI Africa",
    "AngyCare UK",
    "Mtrackr",
  ];

  // Duplicate for seamless infinite loop
  const duplicatedProjects = [
    ...projectNames,
    ...projectNames,
    ...projectNames,
    ...projectNames,
  ];

  return (
    <div className="overflow-hidden w-full">
      <motion.div
        className="flex w-max gap-12 items-center cursor-pointer"
        style={{ willChange: "transform" }}
        animate={{ x: isPaused ? undefined : ["-50%", "0%"] }}
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
        {duplicatedProjects.map((name, index) => (
          <div
            key={index}
            className="flex items-center justify-between"
          >
            <h1 className="text-[20px] lg:text-[24px] font-bold text-white/40 whitespace-nowrap">
              {name}
            </h1>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default HeroeprojectNames;