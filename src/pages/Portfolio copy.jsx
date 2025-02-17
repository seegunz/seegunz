import React from 'react'
import PortfolioComponent from '../components/homecomponent/PortfolioComponent'
import a1 from '/pitch/1.jpg'
import a2 from '/pitch/2.jpg'
import a3 from '/pitch/3.jpg'
import a4 from '/pitch/4.jpg'
import a5 from '/pitch/5.jpg'
import a6 from '/pitch/6.jpg'
import a7 from '/pitch/7.jpg'
import a8 from '/pitch/8.jpg'
import a9 from '/pitch/9.jpg'
import a10 from '/pitch/10.jpg'
import a11 from '/pitch/11.jpg'
import a12 from '/pitch/12.jpg'
import a13 from '/pitch/13.jpg'
import a14 from '/pitch/14.jpg'
import a15 from '/pitch/15.jpg'
import a16 from '/pitch/16.jpg'

export default function Portfolio() {
  return (
    <div className='bg-slate-950 py-10'>
      <h1 className='text-center text-5xl text-white'>MY PORTFOLIO</h1>
       <section className='text-white mx-1 lg:mx-10 mt-10'>
            <h2 className='px-1 text-white text-3xl underline'>Pitch Deck</h2>
            <div className='mt-10 flex flex-wrap gap-5 justify-center'>
                <PortfolioComponent img={a1}/>
                <PortfolioComponent img={a2}/>
                <PortfolioComponent img={a3}/>
                <PortfolioComponent img={a4}/>
                <PortfolioComponent img={a5}/>
                <PortfolioComponent img={a6}/>
                <PortfolioComponent img={a7}/>
                <PortfolioComponent img={a8}/>
                <PortfolioComponent img={a9}/>
                <PortfolioComponent img={a10}/>
                <PortfolioComponent img={a11}/>
                <PortfolioComponent img={a12}/>
                <PortfolioComponent img={a13}/>
                <PortfolioComponent img={a14}/>
                <PortfolioComponent img={a15}/>
                <PortfolioComponent img={a16}/>
            </div>
       </section>
    </div>
  )
}
