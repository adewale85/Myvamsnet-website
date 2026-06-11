"use client";
import {
  fadeInUp,
  floatingY,
  scaleUpEntrance,
  staggerContainer,
} from "@/utils/animations";
import { motion } from "framer-motion";
import Image from "next/image";

function OurRecentProject() {
  const ProjectData = [
    {
      badge: "3trive Lab",
      description:
        "Your expert techOps team. 3trivelab helps non-technical professionals and businesses turn their expertise into profitable tech products.",
      btnText: "View Project",
      btnIcon: "/Btn.svg",
      imgSrc: "/3trive Lab.svg",
      imgAlt: "3trive Lab",
      logo: "/3trivelab Logo.svg",
    },

     {
      badge: "Mtrackr",
      description:
        "Manage Your Business Money with Confidence and Ease. Say bye to stress. Organize income, expenses, and all payments in one place, anytime, anywhere.",
      btnText: "View Project",
      btnIcon: "/Btn.svg",
      imgSrc: "/Mtrackr.svg",
      imgAlt: "Mtrackr",
      logo: "/Mtrackr_logo.svg",
    },
    
    {
      badge: "Angy Care Home",
      description:
        "One secured platform for trusted adult care and trusted healthcare careers. Taking care of your loved one wouldn’t feel uncertain anymore. ",
      btnText: "View Project",
      btnIcon: "/Btn.svg",
      imgSrc: "/Angy Care Home.svg",
      imgAlt: "Angy Care Home",
      logo: "/Angycare_logo.png",
    },
   
  ];

  return (
    <section
      id="OurRecentProject"
      className="Inner-wrapper lg:space-y-8 space-y-5 lg:px-0 px-4 w-full lg:scroll-mt-22 scroll-mt-12"
    >
      <header className="pt-8 flex items-center justify-between gap-6 lg:mb-8 ">
        <p className="lg:text-[18px] text-[12px] font-heading font-normal leading-6 text-[#232B33] whitespace-nowrap">
          SOME LIVE PROJECTS
        </p>
        <div className="lg:w-262 w-full h-1 bg-[#FFFFFF]"></div>
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
            className="lg:w-[376px] w-full lg:h-[571px] h-[527px] bg-[radial-gradient(circle_at_center,#007FFF_0%,_#004C99_90%,_#004C99_100%)] rounded-3xl overflow-hidden flex flex-col lg:space-y-3 space-y-6 items-center"
          >
            {/* Image Container */}
            <div className="w-full h-[259px] relative rounded-xl overflow-hidden">
              <Image
                src={Project.imgSrc}
                alt={Project.imgAlt}
                fill
                className="object-cover object-center"
                sizes="376px"
              />
              <div className="rounded-tl-12 rounded-tr-12  absolute bottom-0 left-6 items-center justify-center flex">
                <Image
                  src={Project.logo}
                  alt="Logo"
                  width={64}
                  height={56}
                  className="object-contain object-center "
                />
              </div>
            </div>

            {/* Text & Action Content */}
            <div className="flex flex-col items-center justify-center lg:w-[312px] w-[299px] lg:space-y-6 space-y-4 lg:py-2">
              <div className="space-y-2 ">
                <motion.p
                  variants={fadeInUp(12, 0.5)}
                  className="font-bold lg:text-[20px] text-[16px] leading-9 text-[#FFFFFF] "
                >
                  {Project.badge}
                </motion.p>
                <motion.p
                  variants={floatingY(12, 0.5)}
                  className="font-normal text-[16px] lg:text-[20px] leading-9 text-[#FFFFFFCC]"
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

      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: false, margin: "-60px" }}
        transition={{ type: "spring", stiffness: 180, damping: 20 }}
        className="Inner-wrapper mx-auto w-full lg:h-53.5 h-141.75 bg-brand-lime rounded-4xl border-4 border-[#FFFFFF] flex lg:flex-row flex-col items-center justify-center p-6"
      >
        <div className="flex lg:flex-row flex-col items-center justify-between gap-8 w-full max-w-275">
          <Image
            src="/slot_image.svg"
            alt="Our Recent Project Banner"
            width={150}
            height={150}
            className="rounded-4xl"
          />
          <div>
            <p className="lg:w-145 xl:w-171.25 w-71.5 font-normal lg:text-[20px] text-[16px] leading-8 lg:text-left text-center text-slate-900">
              You know exactly what your industry needs. So why isn't your
              product live yet? You're not afraid of the project. You're afraid
              of wasting time and money on something that won't work.
            </p>
          </div>
          <div className="w-59.25 flex flex-col items-center justify-center gap-2">
            <motion.h5
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
              className="font-bold lg:text-[24px] xl:text-[28px] text-[24px] leading-8 text-[#FF5369] whitespace-nowrap"
            >
              Only 4 slots left
            </motion.h5>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              className="w-full h-13 font-normal text-[14px] font-heading rounded-xl text-brand-lime leading-[100%] border border-[#007FFF] bg-[#007FFF] hover:bg-[#006fde] hover:text-white transition-colors whitespace-nowrap px-4"
            >
              Book Clarity Call Now!
            </motion.button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default OurRecentProject;
