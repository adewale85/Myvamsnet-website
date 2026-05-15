import Image from 'next/image'
import React from 'react'

function HeroSlideImage() {

    const cardData = [
        {id: 1, img: "/card1.svg"},
        {id: 2, img: "/card2.svg"},
        {id: 3, img: "/card1.svg"},
        {id: 4, img: "/card2.svg"},
    ]

  return (
    <div>
        <motion.div classname="flex w-max gap-6 cursor-pointer">

        animate={{ x: [0, -200, -400, -600] }} 
        transition={{ repeat: Infinity, 
            duration: 20, 
            ease: "linear" 
            }} 

        <div className='grid lg:grid-cols-4 grid-col-1 gap-4 overflow-x-auto py-22'>
            {cardData.map((card) => (
                <div key={card.id}>
                    <Image src={card.img} alt={`Card ${card.id}`} width={441} height={359} />
                </div>
            ))}
        </div>
        </motion.div>
    </div>
  )
}

export default HeroSlideImage
