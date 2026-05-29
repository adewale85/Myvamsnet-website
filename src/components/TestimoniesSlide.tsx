"use client"
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react';
import Testimonies from './Testimonies';



function TestimoniesSlide() {

    const [isPaused, setIsPaused] = useState(false);

    const cardData = [
       {Testimonies}
    ]
const duplicatedCards = [...cardData, ...cardData];
  return (
   <div className="overflow-hidden w-full "> m,
      <motion.div
        className="flex w-max gap-6 cursor-pointer"
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
        {duplicatedCards.map((card, index) => (
          <div key={index} className="flex-shrink-0 rounded-3xl">
           <card.Testimonies/>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default TestimoniesSlide
