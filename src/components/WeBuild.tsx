import Image from "next/image";

function WeBuild() {
  return (
    <section className="">
      <div className="Inner-wrapper flex lg:flex-row flex-col items-center justify-center">
        <div className=" lg:w-[893px] w-[327px] space-y-10 flex flex-col items-center justify-center">
          <Image
            src="/myVamsnetLogo_white.svg"
            alt="We Build Image"
            width={62}
            height={62}
            className="lg:block hidden"
          />
          <Image
            src="/myVamsnetLogo_white.svg"
            alt="We Build Image"
            width={37}
            height={44}
            className="lg:hidden"
          />
          <div className="lg:w-[893px] w-[279px] flex flex-col items-center justify-center space-y-8">
            <h2 className=" lg:text-[58px] text-[32px] font-normal text-center text-[#FFFFFF] lg:leading-17 leading-12.5 font-heading">
              We Build, Guide, and Empower
            </h2>
            <p className="lg:w-[587px] w-[279px] tracking-[5%] text-center font-normal lg:text-[20px] text-[14px] lg:leading-9 leading-9 text-[#FFFFFFCC]">
              We build solutions that empower businesses, support individuals,
              and contribute to economic growth.
            </p>
          </div>

          <div className="flex lg:flex-row flex-col gap-6 items-center justify-center w-full">
  <button className="lg:w-73 w-full h-14.75 rounded-lg text-[16px] font-heading font-normal leading-[100%] text-brand-lime bg-[#007FFF] hover:bg-[#007FFF] transition-colors duration-300">
    Partner with us
  </button>
  <button className="lg:w-73 w-full h-14.75 rounded-lg text-[16px] font-heading font-normal leading-[100%] text-brand-lime border border-brand-lime border-opacity-50 hover:bg-brand-red-500 transition-colors duration-300">
    Join our Team
  </button>
</div>
        </div>
      </div>
    </section>
  );
}

export default WeBuild;
