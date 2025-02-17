import React from 'react'

export default function PortfolioComponent({img}) {
  return (
    <div className='w-60'>
      <img src={img} alt="Pitch Deck"/>
    </div>
  )
}
