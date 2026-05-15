"use client";
import React from 'react';
import { motion } from 'framer-motion';

function HeroeprojectNames() {
  const projectNames = [
    { name: "Miitas" },
    { name: "Eliad Investment" },
    { name: "SEI Africa" },
    { name: "AngyCare UK" },
    { name: "Mtrackr" },
  ];

  // Double the array for a seamless loop
  const duplicatedNames = [...projectNames, ...projectNames];

  return (
    <div className="overflow-hidden w-full">
      <motion.div
        className="flex w-max gap-12 items-center"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          duration: 20, 
          ease: "linear",
        }}
      >
        {duplicatedNames.map((project, index) => (
          <div key={index} className="flex items-center gap-6">
            <h1 className="text-[20px] lg:text-[24px] font-bold text-white whitespace-nowrap opacity-60 hover:opacity-100 transition-opacity">
              {project.name}
            </h1>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default HeroeprojectNames;