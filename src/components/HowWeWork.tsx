import Image from "next/image";
import ReadyToGrow from "./ReadyToGrow";
import HeroeCard from "./HeroeCard";
import Testimonies from "./Testimonies";

function HowWeWork() {
  const HowWeWorkData = [
    {
      imgSrc: "/We_Understand_image.svg",
      imgAlt: "We Understand You",
      btnIcon: "/Btn.svg",
      btnText: "We Understand You",
    },
    {
      imgSrc: "/We_Build_image.svg",
      imgAlt: "We Build or Guide You",
      btnIcon: "/Btn.svg",
      btnText: "We Build or Guide",
    },
    {
      imgSrc: "/YouGrow_image.svg",
      imgAlt: "You Grow Confidently",
      btnIcon: "/Btn.svg",
      btnText: "You Grow Confidently",
    },
  ];
  return (
    <section className="Inner-wrapper py-22 items-center justify-center ">
      <header className="flex items-center justify-between gap-6  mb-6">
        <p className="lg:text-[18px] text-[12px] font-heading font-normal leading-6 text-[#232B33] whitespace-nowrap">
          HOW WE WORK
        </p>
        <div className="lg:w-262 w-60 h-1 bg-[#FFFFFF]"></div>
      </header>
      <div className="flex lg:flex-row flex-col gap-9">
        {HowWeWorkData.map((data, id) => (
          <div key={id} className="relative ">
            <Image
              src={data.imgSrc}
              alt={data.imgAlt}
              width={376}
              height={306}
              className="relative rounded-3xl lg:block hidden"
            />
            <Image
              src={data.imgSrc}
              alt={data.imgAlt}
              width={343}
              height={306}
              className="relative rounded-3xl lg:hidden"
            />
            <button className="absolute bottom-0 left-0 lg:w-[365.33px] w-[343px] lg:h-21 h-[60px] bg-[radial-gradient(circle_at_center,#007FFF_0%,_#004C99_90%,_#004C99_100%)] rounded-3xl items-center justify-left pl-6 flex gap-2">
              <Image
                src={data.btnIcon}
                alt="Button Icon"
                width={24}
                height={24}
                className="lg:block hidden"
              />
              <Image
                src={data.btnIcon}
                alt="Button Icon"
                width={20}
                height={20}
                className="lg:hidden"
              />
              <span className="font-bold lg:text-[20px] text-[16px] leading-9 text-[#FFFFFF]">{data.btnText}</span>
            </button>
          </div>
        ))}
      </div>
      <ReadyToGrow />
      <HeroeCard />
      <Testimonies />
    </section>
  );
}

export default HowWeWork;
