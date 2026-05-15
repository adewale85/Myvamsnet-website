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
   <div className="overflow-hidden w-full py-10">
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
          <div key={index} className="flex-shrink-0">
            <Image 
              src={card.img} 
              alt={`Card ${card.id}`} 
              width={441} 
              height={359} 
              className="rounded-3xl"
            />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default HeroSlideImage
