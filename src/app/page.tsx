import FAQ from '@/components/FAQ'
import GrowthSection from '@/components/GrowthSection'
import HeroeSection from '@/components/HeroeSection'
import HowWeWork from '@/components/HowWeWork'
import Navbar from '@/components/layout/Navbar'
import OurRecentProject from '@/components/OurRecentProject'
import RecommendedForYou from '@/components/RecommendedForYou'
import WeBuild from '@/components/WeBuild'
import WhatWeDoSection from '@/components/WhatWeDoSection'

function page() {
  return (
    <main>
      <section className='relative min-h-screen  bg-[url("/Hero_background.svg")] bg-cover bg-center bg-no-repeat'>
      <Navbar />
      <HeroeSection />
      </section>
      <GrowthSection />
      <div className='relative min-h-screen  bg-[url("/What_we_do_bg.svg")] bg-cover bg-center bg-no-repeat'>
        <WhatWeDoSection />
      </div>
      <div className='flex items-center justify-center relative min-h-[665px]  bg-[url("/Hero_background.svg")] bg-cover bg-center bg-no-repeat'>
        <WeBuild />
      </div>
      <div className='relative min-h-screen  bg-[url("/OurProject_image.svg")] bg-cover bg-center bg-no-repeat'>
        <OurRecentProject/>
      </div>
      <div className='relative min-h-screen  bg-[url("/FAQBackground.svg")] bg-cover bg-center bg-no-repeat'>
        <FAQ />
      </div>
      <div className='relative min-h-screen bg-[url("/What_we_do_bg.svg")] bg-cover bg-center bg-no-repeat'>
        <HowWeWork />
      </div>
      <div>
        <RecommendedForYou />
      </div>
      <div className='relative min-h-[495px] bg-[radial-gradient(circle_at_center,#151B2F_0%,_#004C99_100%,_#004C99_100%)] bg-cover bg-center bg-no-repeat text-center flex items-center justify-center'>
        <WeBuild />
      </div>
    </main>
  )
}

export default page