import Image from 'next/image';

function RecommendedForYou() {
     const ProjectData = [
    {
      imgSrc: "/Growth_image.svg",
      imgAlt: "Growth_image",
      badge: "Join Our Tech Community to Level Up Your Career",
      description:
        "Connect with like-minded people, access growth opportunities, and stay inspired on your journey.",
      btnText: "Explore Now",
      btnIcon: "/Btn.svg", 
    
    },
    {
      imgSrc: "/TheGrowApp_image.svg",
      imgAlt: "TheGrowApp_image",
      badge: "The Growth App Made for Small Business Owners in Africa",
      description:
        "Manage your business finances, track performance, stay organized, and make smarter decisions with a simple app.",
      btnText: "Explore Now",
      btnIcon: "/Btn.svg", 
    
    },
    {
      imgSrc: "/Update_image.svg",
      imgAlt: "Update_image",
      badge: "Tips and Updates on How to Grow your Business",
      description:
        "Get practical insights & growth strategies designed to help you build, manage, and grow your business with confidence.",
      btnText: "Explore Now",
      btnIcon: "/Btn.svg", 
    
    },
    
  ];

  return (
   <section className="">
    <div className='Inner-wrapper'>
         <header className="flex items-center justify-between gap-6 mb-4">
        <p className="lg:text-[18px] text-[12px] font-heading font-normal leading-6 text-[#232B33] whitespace-nowrap">
          RECOMMENDED FOR YOU
        </p>
        <div className="lg:w-262 w-full h-1 bg-[#EEF6FF]"></div>
      </header>
   
         <div className="flex flex-col lg:flex-row items-center justify-between lg:gap-8 gap-4 ">
           {ProjectData.map((Project, id) => (
             <div
               key={id}
               className="lg:w-94 w-[343px] lg:h-[571px] h-[563px] bg-[radial-gradient(circle_at_center,#007FFF_0%,_#004C99_90%,_#004C99_100%)] rounded-3xl overflow-hidden flex flex-col  items-center justify-between"
             >
               {/* Image Container */}
               <div className="lg:w-[376px]  w-[343px] h-[259px] relative rounded-xl overflow-hidden">
                 <Image
                   src={Project.imgSrc}
                   alt={Project.imgAlt}
                   fill
                   className="object-cover object-center lg:block hidden"
                
                 />
                 <Image
                   src={Project.imgSrc}
                   alt={Project.imgAlt}
                   fill
                   className="object-cover object-center lg:hidden"
                   sizes="w-[343px] h-[259px]"
                 />
               </div>
   
               {/* Text & Action Content */}
               <div className=" flex flex-col items-center justify-center lg:w-75 w-[293px]  lg:space-y-4 py-6 space-y-6 ">
                 <div className="lg:space-y-4 space-y-6 lg:w-[312px] w-full">
                   <p className="font-bold lg:text-[20px] text-[16px] leading-9 text-[#FFFFFF]">
                     {Project.badge}
                   </p>
                   <p className="font-normal text-[16px] lg:text-[20px] leading-9 text-[#FFFFFFCC]">
                     {Project.description}
                   </p>
                 </div>
   
                 <div className="w-full items-end justify-end flex">
                   <button className="font-normal text-[12px] leading-4 font-heading text-[#FFFFFF] flex items-center gap-2 hover:underline hover:translate-x-2">
                     {Project.btnText}
                     <Image
                       src={Project.btnIcon}
                       alt=""
                       width={20}
                       height={20}
                       className=""
                     />
                   </button>
                 </div>
               </div>
             </div>
           ))}
         </div>
         
         </div>
        
       </section>
  )
}

export default RecommendedForYou