import Image from 'next/image'
import React from 'react'

function WeBuild() {
  return (
    <section className='Inner-wrapper flex items-center justify-center'>
<div className=' w-[893px] space-y-10 flex flex-col items-center justify-center'> 
  <Image src="/myVamsnetLogo_white.svg" alt="We Build Image" width={62} height={74}  />
 <div className='flex flex-col items-center justify-center '>
  <h2 className='text-2xl font-bold text-[#FFFFFF] font-normal text-[58px] leading-20 font-heading'>We Build, Guide, and Empower</h2>
  <p className='w-[587px] items-center justify-center font-normal text-[20px] leading-9 text-[#FFFFFFCC]'>We build solutions that empower businesses, support individuals, and contribute to economic growth.</p>
  </div>  
        <div className="flex gap-5 items-center justify-center">
          <button className="w-73 h-14.75 rounded-lg text-[16px] font-normal leading-[100%] text-brand-lime bg-[#007FFF] hover:bg-[#007FFF] transition-colors duration-300">
            Partner with us
          </button>
          <button className="w-73 h-14.75 rounded-lg text-[16px] font-normal leading-[100%] text-brand-lime border border-brand-lime border-opacity-50 hover:bg-brand-red-500 transition-colors duration-300">
            Join our Team
          </button>
        </div>
 
</div>

    </section>
  )
}

export default WeBuild