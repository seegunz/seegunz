import React from 'react'
import seegunz from '/seegunz.jpg'

export default function Profile() {
  return (
    <div className='bg-slate-950 text-white px-3 pt-5 flex flex-col md:flex-row gap-y-10 py-3'>
      <section className='w-full lg:w-1/2 space-y-3 md:mx-10 mx-2 flex items-center justify-center flex-col'>
       <div>
          <h1 className='text-xl'>Hi, My Names are</h1> <br />
          <h2 className='text-5xl'>Segun Emeka Emi</h2>
          <br />
          <h2 className='text-3xl'>Front-end Web Developer</h2> <br />
          <p className='text-[20px]'>
              I am a front end web developer specializing in building exceptional digital experiences. 
          </p>
          <br />
          <a className='p-2 bg-white text-[#451a03] rounded' target='_blank' href='https://drive.google.com/file/d/1FB87KnAkkI5ldDN1McTBSlThDtnXXzBN/view?usp=sharing'>Download Resume</a>
       </div>
      </section>
      <section className='w-full lg:w-1/2 space-y-3 flex items-center justify-center'>
        <img src={seegunz} alt="seegunz" className='lg:w-[50%] w-full p-2'/>
      </section>
    </div>
  )
}
