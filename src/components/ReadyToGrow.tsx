import React from "react";

function ReadyToGrow() {
  return (
    <section className="Inner-wrapper py-16">
      <header className="flex items-center justify-between gap-6  mb-6">
        <p className="lg:text-[18px] text-[12px] font-heading font-normal leading-6 text-[#232B33] whitespace-nowrap">
          READY TO GROW WITH US?
        </p>
        <div className="lg:w-262 w-60 h-1 bg-[#FFFFFF]"></div>
      </header>
      <div className="w-300 h-116 bg-[#014C99] rounded-4xl">
        <div className="w-117.25">
          <h2 className=" font-bold text-[48px] leading-17 text-[#FFFFFF] ">
            So Why Wait??? Start Your Journey To Success Now!
            <p className="font-normal text-[20px] leading-9 text-[#FFFFFFBF]">
              We can’t wait to walk with you on this journey
            </p>
          </h2>
          <button className="w-73 h-14.75 rounded-lg text-[16px] font-normal leading-[100%] text-brand-lime border border-brand-lime border-opacity-50 hover:bg-brand-red-500 transition-colors duration-300">
            Chat With Support
          </button>
        </div>
      </div>
    </section>
  );
}

export default ReadyToGrow;
