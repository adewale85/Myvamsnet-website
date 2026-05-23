import HeroeCard from "./HeroeCard";
import HeroeprojectNames from "./HeroeprojectNames";

function HeroeSection() {
  return (
    <section className=" lg:py-16 py-8 gap-8 lg:mt-28 mt-20">
    
      <div className="Inner-wrapper flex flex-col gap-8   ">
        <h1 className="font-heading font-normal lg:text-[68px] text-[40px] lg:leading-[88px] leading-[1.1] text-white">
          Empowering {" "}
          <br className="lg:hidden" /> 
          you with{" "}
          <span className="text-[#007FFF]">
            <span className="lg:hidden">tech</span> <br className="lg:block hidden"/>
            <span className="hidden lg:inline">technology</span>
          </span>
          <br className="md:hidden" />
          
          <span className="lg:text-white">{" "} and</span>{" "}
          <span className="text-[#007FFF]">innovation</span>
        </h1>

        <p className="lg:w-[906px] w-full lg:text-[20px] text-[18px] font-normal text-white/75 leading-relaxed lg:leading-[1.2]">
          We deliver tech-enabled growth for individuals and businesses across
          Africa and beyond.
        </p>

        <div className="lg:hidden space-y-6">
          <button className="w-full h-13 rounded-lg text-[16px] font-bold leading-[100%] text-brand-lime bg-[#007FFF] hover:bg-[#007FFF]transition-colors duration-300">
            Book Consultation
          </button>
          <button className="w-full h-13 rounded-lg text-[16px] font-bold leading-[100%] text-white border border-white border-opacity-50 hover:bg-brand-blue transition-colors duration-300">
            Contact us
          </button>
        </div>
      </div>
   
      <div className="space-y-12 py-12">
      <HeroeCard />
      <HeroeprojectNames />
      </div>
    </section>
  );
}

export default HeroeSection;
