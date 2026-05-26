import HeroeCard from "./HeroeCard";
import HeroeprojectNames from "./HeroeprojectNames";


function HeroeSection() {
  return (
    <section className="space-y-22">
   
      <div className="Inner-wrapper flex flex-col gap-8 ">
        <div className="lg:h-[282px] items-center lg:pt-22 pt-[2px] justify-center space-y-8">
        <h1 className="lg:w-252.25 w-full  font-heading font-normal lg:text-[68px] text-[40px] lg:leading-22 leading-12.5  text-white">
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
          <button className="w-full h-13 rounded-lg text-[16px] font-bold leading-[100%] text-white border border-white border-opacity-50 hover:bg-brand-blue transition-colors duration-300">
            Contact us
          </button>
        </div>
      </div>
   
      <div className="space-y-6">
      <HeroeCard />
      <HeroeprojectNames />
      </div>
    </section>
  );
}

export default HeroeSection;
