import Image from 'next/image'
import React from 'react'

function WeBuild() {
  return (
    <section className='Inner-wrapper flex lg:flex-row flex-col items-center justify-center'>
<div className=' lg:w-[893px] w-[327px] lg:space-y-10  flex flex-col items-center justify-center'> 
  <Image src="/myVamsnetLogo_white.svg" alt="We Build Image" width={62} height={74}  className='lg:block hidden'/>
  <Image src="/myVamsnetLogo_white.svg" alt="We Build Image" width={37} height={44}  className='lg:hidden'/>
 <div className='lg:w-[893px] w-[279px] flex flex-col items-center justify-center space-y-4 '>
  <h2 className=' lg:text-[58px] text-[32px] lg:font-bold font-normal text-center text-[#FFFFFF] lg:leading-20 leading-12.5 font-heading'>We Build, Guide, and Empower</h2>
  <p className='lg:w-[587px] w-[279px] text-center font-normal lg:text-[20px] text-[14px] lg:leading-9  text-[#FFFFFFCC]'>We build solutions that empower businesses, support individuals, and contribute to economic growth.</p>
  </div>  
        <div className="flex lg:flex-row flex-col gap-5 items-center justify-center">
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