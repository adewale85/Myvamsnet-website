
function TrustedBy() {
    const trustedByData = [ "Trusted by:", "Eliad Investment", "SEI Africa", "AngyCare UK", "3trive Lab" ]
  return (
    
        <div className='flex  lg:flex-row flex-col items-center justify-center gap-[123px] bg-[#C7FF01] w-full lg:h-[137px] h-[100px]

]'>
            {trustedByData.map((data, id) => (
                <div key={id} className='text-center'>
                    <p className='font-normal text-[16px] leading-6 text-[#232B33] text-[#13171CBF]'>{data}</p>
                </div>
            ))}
        </div>
   
  )
}

export default TrustedBy