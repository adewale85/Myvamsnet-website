import Image from "next/image";

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
    <section className="Inner-wrapper py-16">
      <header className="flex items-center justify-between gap-6  mb-6">
        <p className="lg:text-[18px] text-[12px] font-heading font-normal leading-6 text-[#232B33] whitespace-nowrap">
          HOW WE WORK
        </p>
        <div className="lg:w-262 w-60 h-1 bg-[#FFFFFF]"></div>
      </header>
      <div className="flex gap-9">
        {HowWeWorkData.map((data, id) => (
          <div key={id} className="relative ">
            <Image
              src={data.imgSrc}
              alt={data.imgAlt}
              width={376}
              height={306}
              className="relative rounded-3xl"
            />
            <button className="absolute bottom-0 left-0 w-[365.33px] h-21 bg-[radial-gradient(circle_at_center,#007FFF_0%,_#004C99_90%,_#004C99_100%)] rounded-3xl items-center justify-left pl-6 flex gap-2">
              <Image
                src={data.btnIcon}
                alt="Button Icon"
                width={24}
                height={24}
              />
              <span className="font-bold text-[20px] leading-9 text-[#FFFFFF]">{data.btnText}</span>
            </button>
          </div>
        ))}
      </div>
      <ReadyToGrow />
    </section>
  );
}

export default HowWeWork;
