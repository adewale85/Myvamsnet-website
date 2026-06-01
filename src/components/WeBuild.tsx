"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp,  } from "@/utils/animations";



function WeBuild() {
  return (
    <section className="">
      <div className="Inner-wrapper flex lg:flex-row flex-col items-center justify-center">
        <div className=" lg:w-[893px] w-[327px] space-y-10 flex flex-col items-center justify-center">
          <Image
            src="/myVamsnetLogo_white.svg"
            alt="We Build Image"
            width={62}
            height={62}
            className="lg:block hidden"
          />
          <Image
            src="/myVamsnetLogo_white.svg"
            alt="We Build Image"
            width={37}
            height={44}
            className="lg:hidden"
          />
          <div className="lg:w-[893px] w-[279px] flex flex-col items-center justify-center space-y-8">
            <motion.h2 variants={fadeInUp(15, 2)} 
            initial="hidden"
            whileInView="visible"
            viewport={{once: false}}
            className=" lg:text-[58px] text-[32px] font-normal text-center text-[#FFFFFF] lg:leading-17 leading-12.5 font-heading">
              We Build, Guide, and Empower
            </motion.h2>
            <motion.p variants={fadeInUp(15, 2)} 
             initial = "hidden"
             whileInView="visible"
             viewport={{once: false}}
            className="lg:w-[587px] w-[279px] tracking-[5%] text-center font-normal lg:text-[20px] text-[14px] lg:leading-9 leading-9 text-[#FFFFFFCC]">
              We build solutions that empower businesses, support individuals,
              and contribute to economic growth.
            </motion.p>
          </div>

          <div className="flex lg:flex-row flex-col gap-6 items-center justify-center w-full">
  <button 
 
  className="lg:w-73 w-full h-14.75 rounded-lg text-[16px] font-heading font-normal leading-[100%] text-brand-lime bg-[#007FFF] hover:bg-brand-lime hover:text-brand-blue transition-colors duration-300">
    Partner with us
  </button>
 <motion.button
      // 1. Hover Scale & Tap Spring Micro-interactions
      whileHover={{ scale: 1.02, backgroundColor: "#C7FF01", color: "#007FFF" }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: "spring", stiffness: 500, damping: 20 }}
      
      // Tailwind styling matching your brand layout
      className="group flex items-center justify-center gap-2 w-full lg:w-73 h-14.75 rounded-lg text-[16px] font-heading font-normal bg-[#007FFF] text-brand-lime transition-colors duration-200 border border-transparent hover:border-brand-blue"
    >
      <span>Partner with us</span>
      
      {/* 2. Slide-in Icon Micro-interaction */}
      <motion.div
        className="opacity-60 group-hover:opacity-100"
        variants={{
          initial: { x: -4 },
          hover: { x: 40 }
        }}
        initial="initial"
        whileHover="hover"
        transition={{ type: "spring", stiffness: 10, damping: 25 }}
      >
     
      </motion.div>
    </motion.button>
</div>
        </div>
      </div>
    </section>
  );
}

export default WeBuild;
