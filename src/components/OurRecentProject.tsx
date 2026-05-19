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
      btnIcon: "/Btn.svg", // Added leading slash to make path relative to public folder
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
    <section className="Inner-wrapper py-16 px-4">
      <header className="flex items-center justify-between gap-6  mb-6">
        <p className="lg:text-[18px] text-[12px] font-heading font-normal leading-6 text-[#232B33] whitespace-nowrap">
          OUR RECENT PROJECTS
        </p>
        <div className="lg:w-262 w-60 h-1 bg-[#FFFFFF]"></div>
      </header>

      <div className="flex flex-col lg:flex-row lg:gap-8 gap-4 ">
        {ProjectData.map((Project, id) => (
          <div
            key={id}
            className="lg:w-94 w-[343px] lg:h-[571px] h-[527px] bg-blue-500 rounded-3xl overflow-hidden flex flex-col lg:space-y-3 space-y-6 items-center"
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
            <div className=" flex flex-col items-center justify-center lg:w-75 w-[293px]  lg:space-y-4 space-y-6 ">
              <div className="lg:space-y-3 space-y-6 ">
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
      <div className="w-[1200px] h-[214px] bg-brand-lime rounded-4xl border-4">
        <div>
          <Image
            src="/Our_Recent_Project_Banner.svg"
            alt="Our Recent Project Banner"
            width={1200}
            height={214}
            className="rounded-4xl"
          />
         <p className="w-[685px]"> 
          You know exactly what your industry needs. So why isn't your product live yet? You're not afraid of the project. You're afraid of wasting time and money on something that won't work. 
         </p>
         <div>
          <h5>Only 4slots left</h5>
          <button className="w-full h-[52px] font-bold text-[16px] rounded-xl text-[#007FFF] leading-[100%] border border-[#007FFF] bg-white hover:bg-[#007FFF] hover:text-brand-lime transition-colors">
                      Book Clarity Call Now!
                    </button>
         </div>
        </div>
      </div>
    </section>
  );
}

export default OurRecentProject;
