"use client";
import {
  fadeInUp,
  scaleUpEntrance,
  staggerContainer,
} from "@/utils/animations";
import { motion } from "framer-motion";
import Image from "next/image";

function RecommendedForYou() {
  const ProjectData = [
    {
      imgSrc: "/Growth_image.svg",
      imgAlt: "Growth_image",
      badge: "Join Our Tech Community to Level Up Your Career",
      description:
        "Connect with like-minded people, access growth opportunities, and stay inspired on your journey.",
      btnText: "Explore Now",
      btnIcon: "/Btn.svg",
    },
    {
      imgSrc: "/TheGrowApp_image.svg",
      imgAlt: "TheGrowApp_image",
      badge: "The Growth App Made for Small Business Owners in Africa",
      description:
        "Manage your business finances, track performance, stay organized, and make smarter decisions with a simple app.",
      btnText: "Explore Now",
      btnIcon: "/Btn.svg",
    },
    {
      imgSrc: "/Update_image.svg",
      imgAlt: "Update_image",
      badge: "Tips and Updates on How to Grow your Business",
      description:
        "Get practical insights & growth strategies designed to help you build, manage, and grow your business with confidence.",
      btnText: "Explore Now",
      btnIcon: "/Btn.svg",
    },
  ];

  return (
    /* MATCHED SECTION STRUCTURE: Integrated space-y-8, responsive padding layout, and full-width tags */
    <section
      id="RecommendedForYou"
      className="Inner-wrapper space-y-8 lg:px-0 px-4 w-full lg:scroll-mt-22 scroll-mt-12"
    >
      <header className="pt-8 flex items-center justify-between gap-6 mb-6">
        <p className="lg:text-[18px] text-[12px] font-heading font-normal leading-6 text-[#232B33] whitespace-nowrap">
          RECOMMENDED FOR YOU
        </p>
        <div className="lg:w-262 w-full h-1 bg-[#EEF6FF]"></div>
      </header>

      <motion.div
        variants={staggerContainer(0.15, 0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-100px" }}
        className="flex flex-col lg:flex-row lg:justify-center lg:gap-8 gap-6 w-full"
      >
        {ProjectData.map((Project, id) => (
          <motion.div
            key={id}
            variants={scaleUpEntrance(0.6)}
            whileHover={{
              y: -8,
              scale: 1.015,
              boxShadow: "0px 20px 40px rgba(0, 127, 255, 0.15)",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
            className="lg:w-[376px] w-full lg:h-[571px] h-[548px] bg-[radial-gradient(circle_at_center,#007FFF_0%,_#004C99_90%,_#004C99_100%)] rounded-3xl overflow-hidden flex flex-col items-center pb-6"
          >
            {/* Image Container - Bounded exactly to match template */}
            <div className="w-full h-[259px] relative rounded-xl overflow-hidden flex-shrink-0">
              <Image
                src={Project.imgSrc}
                alt={Project.imgAlt}
                fill
                className="object-cover object-center"
                sizes="376px"
              />
            </div>

            <div className="flex flex-col items-center justify-between lg:w-[312px] w-[303px] flex-1 mt-4">
              <div className="lg:space-y-4 space-y-2">
                <motion.p
                  variants={fadeInUp(12, 0.3)}
                  className="font-bold lg:text-[20px] text-[16px] leading-9 text-[#FFFFFF]"
                >
                  {Project.badge}
                </motion.p>
                <motion.p
                  variants={fadeInUp(12, 0.3)}
                  className="font-normal text-[16px] lg:text-[20px] leading-9 text-[#FFFFFFCC] "
                >
                  {Project.description}
                </motion.p>
              </div>

              <div className="w-full items-end justify-end flex">
                <button className="font-normal text-[12px] leading-4 font-heading text-[#FFFFFF] flex items-center gap-2 hover:underline hover:translate-x-2 transition-transform">
                  {Project.btnText}
                  <Image src={Project.btnIcon} alt="" width={20} height={20} />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default RecommendedForYou;
