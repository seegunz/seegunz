import React from 'react'
import seegunz from '/seegunz.jpg'

export default function Bio() {
  return (
    <div className='bg-slate-950 py-10'>
      <h1 className='text-center text-5xl text-white'>BIO</h1>
      <main className='mt-10 flex flex-col md:flex-row items-center gap-5'>
        <section className='md:w-1/2 w-full flex justify-center'>
            <img src={seegunz} alt="seegunz" className='px-1 max-w-md'/>
        </section>
        <section className='lg:w-1/2 w-full'>
            <h2 className='px-1 text-white text-3xl underline'>About Me</h2>
            <p className='px-1 mt-10 text-2xl text-white'>
                Segun Emi is a driven front-end web developer with a passion for software engineering and cloud computing. 
                With a strong foundation in building responsive and user-friendly interfaces, 
                he is now focused on expanding his skill set to become a full-stack web developer and cloud engineer. 
                His notable achievements include successfully contributing to an open-source project on GitHub, completing a certification 
                program in AWS Cloud Computing, and building a personal website that showcases his front-end development expertise.
            </p>
        </section>
      </main>
    </div>
  )
}
