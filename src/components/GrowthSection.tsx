"use client";

import Image from "next/image";
import { motion } from "framer-motion";
export default function GrowthSection() {
  return (
    <div className="Inner-wrapper flex lg:flex-row flex-col gap-12 lg:gap-24 py-20 px-4 lg:px-0 ">
      {/* Desktop Left Decorative Box */}
      <div className="w-[291px] h-[576px] hidden lg:flex relative ">
        <Image
          src="/grow_image2.svg"
          alt="Ready To Grow"
          width={291}
          height={576}
          className=""
        />

      <motion.div
      className="absolute bottom-10 left-30 z-10"
        animate={{
          x: [0, 50, 0], 
        }}
        transition={{
          duration: 1,       
          repeat: Infinity,    
          ease: "easeInOut"    
        }}
        >
      
          <Image
            src="/GrowthArrow.svg"
            alt="Arrow_icon"
            width={126}
            height={126}
            className=""
          /> 
</motion.div>
      </div>

      {/* Middle Text Container - FIXED: Changed h-[576px] to lg:h-[576px] h-auto */}
      <div className="lg:w-[520px] w-full h-auto lg:h-[576px] text-[#232B33] space-y-5">
        <h2 className="font-bold text-[32px] text-[28px] leading-tight lg:leading-[68px]">
          Growth Shouldn’t Be This Hard...
        </h2>
        <p className="font-normal text-[16px] lg:text-[20px] leading-relaxed lg:leading-9">
          Many individuals and businesses struggle with growth, not because of
          lack of potential, but lack of the right structure, tools, and
          guidance.
        </p>
        <p className="font-normal text-[16px] lg:text-[20px] leading-relaxed lg:leading-9">
          Opportunities disappears, direction is vague. execution is unclear,
          and growth feels harder.
        </p>
        <p className="font-normal text-[16px] sm:text-[20px] leading-relaxed lg:leading-9">
          At{" "}
          <span className="text-[#007FFF] font-bold text-[16px] sm:text-[20px]">
            MyVamsnet
          </span>
          , we exist to change that.
        </p>
        <p className="font-normal text-[16px] sm:text-[20px] leading-relaxed lg:leading-9">
          We are building an ecosystem where technology unlocks opportunity,
          simplifies growth, and creates real impact for people, businesses, and
          communities.
        </p>
      </div>

      {/* Desktop Right Decorative Box */}
      <div className="w-[291px] h-[576px] hidden lg:flex ">
        <Image
          src="/grow_image1.svg"
          alt="Ready To Grow"
          width={291}
          height={576}
          className="lg:block hidden"
        />
      </div>

      <div className="flex lg:hidden w-full h-auto justify-between items-center ">
        <Image
          src="/growth_mobile.svg"
          alt="Ready To Grow"
          width={343}
          height={242}
          className=""
        />
      </div>
    </div>
  );
}
