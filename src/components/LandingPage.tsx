import Image from "next/image"
import FAQ from "./FAQ"
import GrowthSection from "./GrowthSection"
import HeroeSection from "./HeroeSection"
import HowWeWork from "./HowWeWork"
import OurRecentProject from "./OurRecentProject"
import ReadyToBuild from "./ReadyToBuild"
import RecommendedForYou from "./RecommendedForYou"
import TrustedBy from "./TrustedBy"
import WeBuild from "./WeBuild"
import WhatWeDoSection from "./WhatWeDoSection"


function LandingPage() {
  return (
    <main>
      <section className='relative min-h-screen  bg-[url("/Hero_background.svg")] bg-cover bg-center bg-no-repeat'>
      {/* <Navbar /> */}
      <HeroeSection />
      </section>
      <GrowthSection />
      <div className='relative min-h-screen  bg-[url("/What_we_do_bg.svg")] bg-cover bg-center bg-no-repeat'>
        <WhatWeDoSection />
      </div>
      <div className='flex items-center justify-center relative min-h-[665px]  bg-[url("/Webuild_bg.svg")] bg-cover bg-center bg-no-repeat'>
        <WeBuild />
      </div>
      <div className='relative h-[2372px] lg:h-[1081px] bg-[url("/OurProject_image.svg")] bg-cover bg-center bg-no-repeat flex items-center justify-center'>
        <OurRecentProject/>
      </div>
      <div className='relative lg:h-[1152px] bg-[url("/FAQBackground.svg")] bg-cover bg-center bg-no-repeat flex items-center justify-center'>
        <FAQ/>
      </div>
      <div className='relative lg:h-[1609px] h-[2158px] bg-[url("/What_we_do_bg.svg")] bg-cover bg-center bg-no-repeat flex items-center justify-center '>
        <HowWeWork />
      </div>
      <div className='relative lg:h-[827px] h-[1848px] bg-[#FFFFFF] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center'> 
        <RecommendedForYou />
      </div>
      <TrustedBy/>
      <div className='relative min-h-[495px] bg-[radial-gradient(circle_at_center,#151B2F_0%,_#004C99_100%,_#004C99_100%)] bg-cover bg-center bg-no-repeat text-center flex flex-col text-center items-center justify-center'>
        <ReadyToBuild />
        </div>
      <div>
     <Image src="/Lastimage.svg" alt="We Build Image" width={1940} height={514} className='lg:block hidden w-full'/>
     <Image src="/MobileLastimage.svg" alt="We Build Image" width={575} height={404} className='lg:hidden w-full h-[404px]'/>
   </div>
      {/* <Footer/> */}
    </main>
  )
}

export default LandingPage