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
        <div className='flex gap-4'>
            {cardData.map((card) => (
                <div key={card.id}>
                    <Image src={card.img} alt={`Card ${card.id}`} width={441} height={359} />
                </div>
            ))}
        </div>

    </div>
  )
}

export default HeroSlideImage
