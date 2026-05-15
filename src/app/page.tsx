import HeroeSection from '@/components/HeroeSection'
import Navbar from '@/components/layout/Navbar'
import React from 'react'

function page() {
  return (
    <main>
      <section className='relative min-h-screen bg-[url("/Hero_background.svg")] bg-cover bg-center bg-no-repeat'>
      <Navbar />
      <HeroeSection />

      </section>
    </main>
  )
}

export default page