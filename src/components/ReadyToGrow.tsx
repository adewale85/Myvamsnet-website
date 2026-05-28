import Image from "next/image";
import React from "react";

function ReadyToGrow() {
  return (
    <section className="">
      <header className="flex items-center justify-between gap-6 mb-6">
        <p className="lg:text-[18px] text-[12px] font-heading font-normal leading-6 text-[#232B33] whitespace-nowrap">
          READY TO GROW WITH US?
        </p>
        <div className=" w-full h-1 bg-[#FFFFFF]"></div>
      </header>
      <div className="w-full lg:h-116 h-142 bg-[#014C99] rounded-4xl flex items-center justify-between relative lg:flex-row flex-col-reverse lg:gap-12 gap-6 lg:p-8 p-6" >
        <div className="lg:w-117.25 w-full items-center justify-center flex flex-col lg:space-y-8 space-y-4 ">
          <h2 className=" font-bold lg:text-[48px] text-[28px] lg:leading-17 leading-[40px] lg:text-left text-center text-[#FFFFFF] ">
            So Why Wait??? Start Your Journey To Success Now!
            </h2>
            <p className="lg:w-full w-[255px] font-normal lg:text-[20px] lg:text-left text-center text-[16px] leading-9 text-[#FFFFFFBF] flex ">
              We can’t wait to walk with you on this journey
            </p>
          
          <button className="w-full h-14.75 rounded-lg text-[16px] font-bold leading-[100%] text-brand-lime border border-brand-lime border-opacity-50 hover:bg-brand-blue hover:text-white transition-colors duration-300">
            Chat With Support
          </button>
        </div>
        <div>
            <Image src="/ReadyToGrow_image.svg" alt="Ready To Grow" width={580} height={424} className="lg:block hidden"/>
            <Image src="/ReadyToGrow_image.svg" alt="Ready To Grow" width={303} height={228} className="lg:hidden"/>
        </div>
      </div>
    </section>
  );
}

export default ReadyToGrow;
