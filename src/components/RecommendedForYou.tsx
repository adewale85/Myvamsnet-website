import Image from 'next/image';

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
    <section id='RecommendedForYou' className="Inner-wrapper space-y-8 lg:px-0 px-4 w-full lg:scroll-mt-22 scroll-mt-12">
      <header className="pt-8 flex items-center justify-between gap-6 mb-6">
        <p className="lg:text-[18px] text-[12px] font-heading font-normal leading-6 text-[#232B33] whitespace-nowrap">
          RECOMMENDED FOR YOU
        </p>
        <div className="lg:w-262 w-full h-1 bg-[#EEF6FF]"></div>
      </header>
   
      {/* MATCHED CARD TRACK: Cleaned up track flex layout definitions and desktop alignment properties */}
      <div className="flex flex-col lg:flex-row lg:justify-center lg:gap-8 gap-6 w-full">
        {ProjectData.map((Project, id) => (
          <div
            key={id}
            className="lg:w-[376px] w-full lg:h-[571px] h-[548px] bg-[radial-gradient(circle_at_center,#007FFF_0%,_#004C99_90%,_#004C99_100%)] rounded-3xl overflow-hidden flex flex-col lg:space-y-3 space-y-6 items-center"
          >
            {/* Image Container - Bounded exactly to match template */}
            <div className="w-full h-[259px] relative rounded-xl overflow-hidden">
              <Image
                src={Project.imgSrc}
                alt={Project.imgAlt}
                fill
                className="object-cover object-center"
                sizes="376px"
              />
            </div>

            {/* Text & Action Content - Scaled explicitly to match template container widths */}
            <div className="flex flex-col items-center justify-center lg:w-[312px] w-[303px] lg:space-y-6 space-y-4">
              <div className="lg:space-y-5 space-y-3">
                <p className="font-bold lg:text-[20px] text-[16px] leading-9 text-[#FFFFFF]">
                  {Project.badge}
                </p>
                <p className="font-normal text-[16px] lg:text-[20px] leading-9 text-[#FFFFFFCC] h-[144px]">
                  {Project.description}
                </p>
              </div>

              <div className="w-full items-end justify-end flex mb-4">
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
    </section>
  );
}

export default RecommendedForYou;