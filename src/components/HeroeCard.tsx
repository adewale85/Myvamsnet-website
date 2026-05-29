"use client"
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react';


function HeroSlideImage() {

    const [isPaused, setIsPaused] = useState(false);

    const cardData = [
        {id: 1, img: "/card1.svg"},
        {id: 2, img: "/card2.svg"},
        {id: 3, img: "/card1.svg"},
        {id: 4, img: "/card2.svg"},
    ]
const duplicatedCards = [...cardData, ...cardData];
  return (
   <div className="overflow-hidden w-full lg:py-10 py-5 lg:mb-0 mb-6">
      <motion.div
        className="flex w-max lg:gap-6 gap-2 cursor-pointer"
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
          <div 
          key={index} className="flex-shrink lg:w-[541px] w-[315px] h-[256px] lg:h-[459px] relative">
            <Image 
              src={card.img} 
              alt={`Card ${card.id}`} 
              fill
              sizes="(max-width: 1024px) 280px, 541px"
              className="rounded-3xl object-contain"
            />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default HeroSlideImage
