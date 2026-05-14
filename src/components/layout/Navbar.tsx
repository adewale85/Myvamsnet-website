import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Navbar() {

  const Navlinks = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/Projects' },
    { name: 'Solutions', href: '/Solutions' },
    { name: 'Studio', href: '/Studio' },
    { name: 'Opportunities', href: '/Opportunities' },
    { name: 'About us', href: '/About-us' },
  ]

  return (
    <main className='Wrapper bg-[#F5F5F5] h-16 '>
    <div className='Inner-wrapper flex items-center justify-between gap-6 h-full'>
      <div className='flex items-center gap-2'>
      <Image src='myVamsnetLogo.svg' 
      alt='logo' 
      width={32} 
      height={32} />
     
      <h1 className='font-normal text-2xl tracking-[4%] leading-[100%] font-heading text-black'>MyVamsnet</h1>
    </div>
    
    <div className='flex items-center justify-center list-none gap-10 text-[16px] font-normal text-black leading-[100%]'>
      {Navlinks.map((link)=>(
        <li key={link.name}>
          <Link href={link.href} className='text-black hover:text-[#007FFF]'>
            {link.name}
          </Link>
        </li>
      ))}
    </div>

    <div>
      <button className='bg-[#007FFF] px-8 py-3.5 rounded-lg text-[#C7FF01] text-sm font-normal hover:opacity-90 transition font-heading'>
          Contact us
        </button>
    </div>
    </div>
    </main>
  )
}

export default Navbar