// OurRecentProject.jsx
import Image from "next/image";
import React from "react";

function OurRecentProject() {
  const ProjectData = [
    {
      badge: "3trive Lab",
      description:
        "MyVamsnet is an impact-driven technology company delivering tech-enabled growth for individuals and businesses across Africa and beyond.",
      btnText: "View Project",
      btnIcon: "/Btn.svg", 
      imgSrc: "/3trive_image.svg",
      imgAlt: "3trive Lab",
    },
    {
      badge: "Angy Care Home",
      description:
        "MyVamsnet is an impact-driven technology company delivering tech-enabled growth for individuals and businesses across Africa and beyond.",
      btnText: "View Project",
      btnIcon: "/Btn.svg",
      imgSrc: "/Angy care_image.svg",
      imgAlt: "Angy Care Home",
    },
    {
      badge: "Mtrackr",
      description:
        "MyVamsnet is an impact-driven technology company delivering tech-enabled growth for individuals and businesses across Africa and beyond.",
      btnText: "View Project",
      btnIcon: "/Btn.svg",
      imgSrc: "/Mtrackr_image.svg",
      imgAlt: "Mtrackr",
    },
  ];

  return (
    /* FIXED SECTION: Added max-w-7xl and mx-auto to center the entire block on desktop screen frames */
    <section id="OurRecentProject" className="Inner-wrapper lg:space-y-8 space-y-5 lg:px-0 px-4 w-full scroll-mt-22">
      <header className="pt-8 flex items-center justify-between gap-6 lg:mb-8 ">
        <p className="lg:text-[18px] text-[12px] font-heading font-normal leading-6 text-[#232B33] whitespace-nowrap">
          OUR RECENT PROJECTS
        </p>
        <div className="lg:w-262 w-full h-1 bg-[#FFFFFF]"></div>
      </header>
          
      {/* FIXED CARD TRACK: Added lg:justify-center so the 3 layout cards stay perfectly centered together */}
      <div className="flex flex-col lg:flex-row lg:justify-center lg:gap-8 gap-6 w-full">
        {ProjectData.map((Project, id) => (
          <div
            key={id}
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
            </div>

            {/* Text & Action Content */}
            <div className="flex flex-col items-center justify-center lg:w-[312px] w-[303px] lg:space-y-6 space-y-4">
              <div className="lg:space-y-5 space-y-3">
                <p className="font-bold lg:text-[20px] text-[16px] leading-9 text-[#FFFFFF] ">
                  {Project.badge}
                </p>
                <p className="font-normal text-[16px] lg:text-[20px] leading-9 text-[#FFFFFFCC]">
                  {Project.description}
                </p>
              </div>

              <div className="w-full items-end justify-end flex">
                <button className="font-normal text-[12px] leading-4 font-heading text-[#FFFFFF] flex items-center gap-2 hover:underline hover:translate-x-2 transition-transform">
                  {Project.btnText}
                  <Image
                    src={Project.btnIcon}
                    alt=""
                    width={20}
                    height={20}
                  />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Banner Call-To-Action Block */}
      <div className="Inner-wrapper mx-auto w-full lg:h-[214px] h-[567px] bg-brand-lime rounded-4xl border-4 border-[#FFFFFF] flex lg:flex-row flex-col items-center justify-center p-6">
        <div className="flex lg:flex-row flex-col items-center justify-between gap-8 w-full max-w-[1100px]">
          <Image
            src="/slot_image.svg"
            alt="Our Recent Project Banner"
            width={150}
            height={150}
            className="rounded-4xl"
          />
          <div>
            <p className="lg:w-[580px] xl:w-[685px] w-[286px] font-normal lg:text-[20px] text-[16px] leading-8 lg:text-left text-center text-slate-900"> 
              You know exactly what your industry needs. So why isn't your product live yet? You're not afraid of the project. You're afraid of wasting time and money on something that won't work. 
            </p>
          </div>
          <div className="w-59.25 flex flex-col items-center justify-center gap-2">
            <h5 className="font-bold lg:text-[24px] xl:text-[28px] text-[24px] leading-8 text-[#FF5369] whitespace-nowrap">Only 4 slots left</h5>
            <button className="w-full h-[52px] font-normal text-[14px] font-heading rounded-xl text-brand-lime leading-[100%] border border-[#007FFF] bg-[#007FFF] hover:bg-[#006fde] hover:text-white transition-colors whitespace-nowrap px-4">
              Book Clarity Call Now!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurRecentProject;