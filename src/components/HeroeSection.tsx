import HeroeCard from "./HeroeCard";
import HeroeprojectNames from "./HeroeprojectNames";


function HeroeSection() {
  return (
    <section className="lg:space-y-22 space-y-5 lg:pt-6">
   
      <div className="Inner-wrapper flex flex-col gap-8 ">
        <div className="lg:h-75.5 items-center lg:pt-22 justify-center lg:space-y-8 space-y-5">
        <h1 className="w-full font-heading font-normal lg:text-[68px] text-[40px] lg:leading-22 leading-12.5 text-white">
          Empowering {" "}
          <br className="lg:hidden" /> 
          you with{" "}
          <span className="text-[#007FFF]">
            <span className="lg:hidden">tech</span> <br className="lg:block hidden"/>
            <span className="hidden lg:inline">technology</span>
          </span> 
          <br className="lg:hidden" />
          
          <span className="lg:text-white">{" "} and</span>{" "}
          <span className="text-[#007FFF]">innovation</span>
        </h1>

        <p className="lg:w-[906px] w-full lg:text-[20px] text-[18px] font-normal text-white/75 leading-relaxed lg:leading-[1.2]">
          We deliver tech-enabled growth for individuals and businesses across
          Africa and beyond.
        </p>
      </div>
        <div className="lg:hidden space-y-6">
          <button className="w-full h-13 rounded-lg text-[16px] font-bold leading-[100%] text-brand-lime bg-[#007FFF] hover:bg-[#007FFF]transition-colors duration-300">
            Book Consultation
          </button>
          <button className="w-full h-13 rounded-lg text-[16px] font-bold leading-[100%] text-[#FFFFFFBF] border border-[#FFFFFF80] hover:bg-brand-blue transition-colors duration-300">
            Contact us
          </button>
        </div>
      </div>
   
      <div className="">
      <HeroeCard />
      <HeroeprojectNames />
      </div>
    </section>
  );
}

export default HeroeSection;
