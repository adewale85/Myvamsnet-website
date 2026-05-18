import GrowthSection from '@/components/GrowthSection'
import HeroeSection from '@/components/HeroeSection'
import Navbar from '@/components/layout/Navbar'
import WeBuild from '@/components/WeBuild'
import WhatWeDoSection from '@/components/WhatWeDoSection'
import React from 'react'

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
    </main>
  )
}

export default page