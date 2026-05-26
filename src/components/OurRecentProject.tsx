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
    <section className=" space-y-8 ">
       <header className="flex items-center justify-between gap-6 mb-8">
        <p className="lg:text-[18px] text-[12px] font-heading font-normal leading-6 text-[#232B33] whitespace-nowrap">
         OUR RECENT PROJECTS
        </p>
        <div className=" w-full h-1 bg-[#FFFFFF]"></div>
      </header>

      <div className="flex flex-col lg:flex-row lg:gap-8 gap-6 items-center justify-center">
        {ProjectData.map((Project, id) => (
          <div
            key={id}
            className="lg:w-94 w-[343px] lg:h-[571px] h-[527px] bg-[radial-gradient(circle_at_center,#007FFF_0%,_#004C99_90%,_#004C99_100%)] rounded-3xl overflow-hidden flex flex-col lg:space-y-3 space-y-6 items-center"
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
            <div className=" flex flex-col items-center justify-center lg:w-[312px] w-full space-y-6 ">
              <div className="lg:space-y-5 space-y-6 ">
                <p className="font-bold lg:text-[20px] text-[16px] leading-9 text-[#FFFFFF]">
                  {Project.badge}
                </p>
                <p className="font-normal text-[16px] lg:text-[20px] leading-relaxed text-[#FFFFFFCC]">
                  {Project.description}
                </p>
              </div>

              <div className="w-full items-end justify-end flex">
                <button className="font-normal text-[12px] leading-4 font-heading text-[#FFFFFF] flex items-center gap-2 hover:underline hover:translate-x-2">
                  {Project.btnText}
                  <Image
                    src={Project.btnIcon}
                    alt=""
                    width={20}
                    height={20}
                    className=""
                  />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="Inner-wrapper w-full lg:h-[214px] h-[567px] bg-brand-lime rounded-4xl border-4 border-[#FFFFFF] flex lg:flex-row flex-col items-center justify-center ">
        <div className="flex lg:flex-row flex-col items-center justify-between gap-8 ">
          <Image
            src="/slot_image.svg"
            alt="Our Recent Project Banner"
            width={150}
            height={150}
            className="rounded-4xl"
          />
        <div>
           <p className="lg:w-[685px] w-[286px] font-normal lg:text-[20px] text-[16px] leading-8 lg:text-left text-center  "> 
          You know exactly what your industry needs. So why isn't your product live yet? You're not afraid of the project. You're afraid of wasting time and money on something that won't work. 
         </p>
        </div>
         <div className="w-59.25 flex flex-col items-center justify-center gap-2">
          <h5 className="font-bold lg:text-[28px] text-[24px] leading-8 text-[#FF5369]">Only 4slots left</h5>
          <button className="w-full h-[52px] font-normal text-[14px]  font-heading rounded-xl text-brand-lime leading-[100%] border border-[#007FFF] bg-[#007FFF] hover:bg-[#006fde] hover:text-white transition-colors">
            Book Clarity Call Now!
          </button>
         </div>
        </div>
      </div>
    </section>
  );
}

export default OurRecentProject;
