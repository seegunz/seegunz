import React from 'react'
import PortfolioComponent from '../components/homecomponent/PortfolioComponent'
import slide from '/pitch/slide.jpg'
import yt from '/pitch/yt.png'

export default function Portfolio() {
  return (
    <div className='bg-slate-950 py-10'>
      <h1 className='text-center text-5xl text-white'>MY PORTFOLIO</h1>
       <section className='text-white mx-1 lg:mx-10 mt-10'>
            <h2 className='px-3 lg:px-20 text-white text-3xl underline mt-10'>Pitch Deck</h2>
            <div className='mt-10 flex flex-wrap justify-center gap-10'>
                <PortfolioComponent link='https://docs.google.com/presentation/d/1c46HBkfwwsEY8VPtVpTKY8tCMsLnWvTrfOLTK2GsAXw/present?slide=id.g2d721c1e69d_0_120' img={slide} title='Phase 2 project slide deck'/>
                <PortfolioComponent link='https://www.youtube.com/watch?v=wl2EAT5RYZc' img={yt} title=' Phase 2 project video on YouTube'/>
            </div>
       </section>
    </div>
  )
}
