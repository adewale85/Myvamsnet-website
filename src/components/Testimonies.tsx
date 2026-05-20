import Image from "next/image";
import React from "react";

function Testimonies() {
  const testimonialsData = [
    {
      stars: 5,
      quote:
        "Wapx makes trading crypto and paying bills incredibly easy. I don't need multiple apps anymore.",
      name: "Joshua Idowu",
      role: "Founder, SEI Africa",
      avatarSrc: "/joshua-idowu.svg",
    },
    {
      stars: 4,
      quote:
        "The social media boost and SMS verification features save me hours every week. It was an awesome experience.",
      name: "John Bamikefa",
      role: "Back-end Developer",
      avatarSrc: "/john-bamikefa.svg",
    },
    {
      stars: 5,
      quote:
        "Everything I need in one fintech app. The virtual cards and eSIM features are game-changers.",
      name: "Fredrick Omoniyi",
      role: "Founder, Angycare Uk",
      avatarSrc: "/fredrick_omoniyi.svg",
    },
  ];
  return (
    <section className="Inner-wrapper py-16 flex lg:flex-row flex-col items-center justify-between gap-8">
      {testimonialsData.map((data, id) => (
        <div
          key={id}
          className="bg-[#EEF6FF] lg:w-[380px] w-full h-[324px] rounded-b-4xl border-2 border-[#FFFFFF] rounded-3xl flex items-center justify-center"
        >
          <div className="w-[316px] h-[260px] space-y-6 flex-col items-center justify-center">
            <div className="flex gap-2 text-amber-500">
              {Array.from({ length: data.stars }).map((_, index) => (
                <span key={index}>
                  <Image
                    src={"Rate_Icon.svg"}
                    alt=""
                    width={24}
                    height={24}
                  />
                </span> 
              ))}
            </div>
            <p className="w-[316px] text-[20px] leading-9 font-normal">"{data.quote}"</p>
            <div className="flex gap-6 items-center ">
              <Image
                src={data.avatarSrc}
                alt={data.name}
                width={60}
                height={60}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h4 className="font-normal text-[20px] leading-100% text-[#232B33] font-heading">{data.name}</h4>
                <p className="text-[20px] leading-[26px] font-normal text-[#232B33BF]">{data.role}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Testimonies;
