// import Image from "next/image";

// // ServiceCard.jsx
// export default function ServiceCard({ badge="string", heading, description, btnText, btnLink, imgSrc, imgAlt, isReversed }) {
//   return (
//     <article className={`flex flex-col gap-8 items-center lg:gap-16 ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
      
//       {/* Content Side */}
//       <div className="w-full lg:w-1/2 space-y-4">
//         <span className="inline-block px-3 py-1 text-xs font-bold tracking-wider text-blue-600 bg-blue-50 rounded">
//           {badge}
//         </span>
//         <h2 className="text-3xl font-bold text-gray-900 lg:text-4xl">
//           {heading}
//         </h2>
//         <p className="text-gray-600 leading-relaxed">
//           {description}
//         </p>
//         <a href={btnLink} className="inline-block px-6 py-3 border border-blue-600 text-blue-600 rounded-md font-medium hover:bg-blue-50 transition">
//           {btnText}
//         </a>
//       </div>

//       {/* Image Side */}
//       <div className="w-full lg:w-1/2">
//         <Image 
//           src={imgSrc} 
//           alt={imgAlt} 
//           loading="lazy" 
//           className="w-full h-[350px] lg:h-[450px] object-cover rounded-xl shadow-sm"
//         />
//       </div>

//     </article>
//   );
// }
// export default ServiceCard