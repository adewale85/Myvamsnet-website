import Image from 'next/image'
import React from 'react'

function ReadyToBuild() {
  return (
      <section >
    <div className='Inner-wrapper flex lg:flex-row flex-col items-center justify-center'>
      <div className=' lg:w-[893px] w-[327px] lg:space-y-10 space-y-9  flex flex-col items-center justify-center'> 
      
     <div className='lg:w-[918px] w-[235px] flex flex-col items-center justify-center space-y-4 '>
      <h2 className=' lg:text-[58px] text-[32px] lg:font-bold font-normal text-center text-[#FFFFFF] lg:leading-20 leading-12.5 font-heading'>Ready to Build, Grow, or Scale?</h2>
      <p className='lg:w-[587px] w-[279px] text-center font-normal lg:text-[20px] text-[14px] lg:leading-9  text-[#FFFFFFCC]'>We help you move forward with clarity and confidence.</p>
      </div>  
            <div className="flex lg:flex-row flex-col gap-5 items-center justify-center">
              <button className="w-73 h-14.75 font-heading rounded-lg text-[16px] font-normal leading-[100%] text-brand-lime bg-[#007FFF] hover:bg-[#007FFF] transition-colors duration-300">
                 Book a Consultation
              </button>
              <button className="w-73 h-14.75 font-heading rounded-lg text-[16px] font-normal leading-[100%] text-brand-lime border border-brand-lime border-opacity-50 hover:bg-brand-red-500 transition-colors duration-300">
                 Get in Touch
              </button>
            </div>
        </div>
    </div>
    
        </section>
  )
}

export default ReadyToBuild