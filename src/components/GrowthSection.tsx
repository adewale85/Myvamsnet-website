import React from 'react'

export default function GrowthSection() {
  return (
    <div className='Inner-wrapper flex lg:flex-row flex-col gap-12 lg:gap-24 py-20'>
        <div className='w-72.75 h-144 bg-[#EEF6FF] rounded-tl-4xl  hidden rounded-bl-4xl lg:flex gap-55 flex-col'>
        <div className='flex flex-col items-end justify-between h-full my-20'>
            <div className='w-51.75 h-14.5 bg-brand-lime rounded-l-12'></div>
            <div className='w-51.75 h-14.5 bg-brand-lime rounded-l-12'></div>
        </div>
        </div>
        <div className='w-[520px] h-[576px] text-[#232B33] space-y-4'>
        <h2 className='font-bold text-[48px] leading-68px'>Growth Shouldn’t Be This Hard...</h2>
        <p className='font-normal text-[20px] leading-9'>Many individuals and businesses struggle with growth, not because of lack of potential, but lack of the right structure, tools, and guidance.
        </p>
        <p className='font-normal text-[20px] leading-9'>
            Opportunities disappears, direction is vague. execution is unclear, and growth feels harder.
        </p>
        <p className='font-normal text-[20px] leading-9'>
            At <span className='text-[#007FFF] font-bold text-[20px]'>MyVamsnet</span>, we exist to change that.
        </p>
        <p className='font-normal text-[20px] leading-9'>
            We are building an ecosystem where technology unlocks opportunity, simplifies growth, and creates real impact for people, businesses, and communities.
        </p>
        </div>
         <div className='w-72.75 h-144 bg-[#EEF6FF] rounded-tr-4xl rounded-br-4xl lg:flex hidden gap-55 flex-col'>
        <div className='flex flex-col items-end justify-between h-full my-20'>
            <div className='w-51.75 h-14.5 bg-brand-lime rounded-r-12'></div>
            <div className='w-51.75 h-14.5 bg-brand-lime rounded-r-12'></div>
        </div>
        </div>
    </div>
  )
}
