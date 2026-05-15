import HeroeCard from "./HeroeCard";
import HeroeprojectNames from "./HeroeprojectNames";

function HeroeSection() {
  return (
    <section className="Inner-wrapper space-y-22 py-12">
      <div className="space-y-8 ">
        <h1 className="font-heading font-normal text-[68px] leading-22 w-252.25">
          Empowering you with <br />
          <span className="text-[#007FFF]">technology </span>
          and <span className="text-[#007FFF]">innovation</span>
        </h1>
        <p className="text-[20px] font-normal text-white leading-[86%] ">
          We deliver tech-enabled growth for individuals and businesses across
          Africa and beyond.
        </p>
      </div>

      <HeroeCard />
      <HeroeprojectNames />
    </section>
  );
}

export default HeroeSection;
