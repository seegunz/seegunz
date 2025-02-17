import React from 'react'

export default function PortfolioComponent({img, link, title}) {
  return (
    <a href={link} target='_blank' className='border p-2 cursor-pointer'>
      <img src={img} alt="Pitch Deck"  className='w-[400px] h-60 rounded '/> <br />
      <p className='text-2xl text-center'>{title}</p>
    </a>
  )
}
