import Image from "next/image";
import ReadyToGrow from "./ReadyToGrow";
import Testimonies from "./Testimonies";

function HowWeWork() {
  const HowWeWorkData = [
    {
      imgSrc: "/We_Understand_image.svg",
      imgAlt: "We Understand You",
      btnIcon: "/Heart.svg",
      btnText: "We Understand You",
    },
    {
      imgSrc: "/We_Build_image.svg",
      imgAlt: "We Build or Guide You",
      btnIcon: "/ChartPieSlice.svg",
      btnText: "We Build or Guide",
    },
    {
      imgSrc: "/YouGrow_image.svg",
      imgAlt: "You Grow Confidently",
      btnIcon: "/FlowerLotus.svg",
      btnText: "You Grow Confidently",
    },
  ];

  return (
    <>
      <section className="lg:py-12 py-12 block w-full">
        {/* Header */}
        <header className="Inner-wrapper flex items-center justify-between gap-6 mb-5">
          <p className="lg:text-[18px] text-[12px] font-heading font-normal leading-6 text-[#232B33] whitespace-nowrap">
            HOW WE WORK
          </p>

          <div className="w-full h-1 bg-[#FFFFFF]"></div>
        </header>

        <div className="Inner-wrapper lg:space-y-22 space-y-8">
          {/* Cards */}
          <div className="flex lg:flex-row flex-col gap-9 h-full items-center">
            {HowWeWorkData.map((data, id) => (
              <div
                key={id}
                className="relative w-full lg:w-[376px]"
              >
                {/* Image Wrapper */}
                <div className="relative w-full h-[306px] lg:h-[306px]">
                  <Image
                    src={data.imgSrc}
                    alt={data.imgAlt}
                    fill
                    className="rounded-3xl object-cover"
                    sizes="100vw, 376px"
                  />
                </div>

                {/* Button Overlay */}
                <button className="absolute bottom-0 left-0 w-full lg:w-[376px] lg:h-21 h-[60px] bg-[radial-gradient(circle_at_center,#007FFF_0%,_#004C99_90%,_#004C99_100%)] rounded-3xl flex items-center pl-6 gap-2">
                  <Image
                    src={data.btnIcon}
                    alt="Button Icon"
                    width={24}
                    height={24}
                    className="hidden lg:block"
                  />

                  <Image
                    src={data.btnIcon}
                    alt="Button Icon"
                    width={20}
                    height={20}
                    className="lg:hidden"
                  />

                  <span className="font-bold lg:text-[20px] text-[16px] leading-9 text-[#FFFFFF]">
                    {data.btnText}
                  </span>
                </button>
              </div>
            ))}
          </div>

          {/* Ready To Grow */}
          <div className="lg:py-0 py-8">
            <ReadyToGrow />
          </div>
        </div>

        {/* Testimonies */}
        <div className="w-full lg:mb-0 lg:mt-12 mt-0 lg:mb-20">
          <Testimonies />
        </div>
      </section>
    </>
  );
}

export default HowWeWork;