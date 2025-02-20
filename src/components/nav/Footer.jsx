import React from 'react'
import seegunz from "/seegun.png";
import { Link } from 'react-router-dom';

export default function Footer() {
    function handleNav() {
        window.scrollTo(0, 0)
      }
  return (
    <div className='bg-slate-950 pb-10 text-white'>
        <hr className='border-dotted border-slate-200 border-xl'/>
      <section>
        <img src={seegunz} alt="seegunz" width={200} height={50} />
      </section>
      <main className='flex justify-around'>
        <section>
            <h1>MENU</h1><br />
            <div className='flex flex-col gap-1'>
                <Link onClick={handleNav} to='/' className='hover:text-[grey]'>Home</Link>
                <Link onClick={handleNav} to='bio' className='hover:text-[grey]'>Bio</Link>
                <Link onClick={handleNav} to='portfolio' className='hover:text-[grey]'>Portfolio</Link>
                <Link onClick={handleNav}  className='hover:text-[grey]'>Elevator Pitch</Link>
            </div>
        </section>
        <section>
            <h1>CONTACT</h1><br />
            <div className='flex flex-col gap-1'>
                <a href='mailto:emi.seegun@gmail.com' className='hover:text-[grey]'>Mail: emi.seegun@gmail.com</a>
                <a href='tel:+2347062904078' className='hover:text-[grey]'>Tel: +2347062904078</a>
            </div>
        </section>
      </main> 
      <hr className='my-5'/>
      <p className='text-center'>&copy; {new Date().getFullYear()} <a href="/">Emi Segun </a> Service. All rights reserved.</p>
    </div>
  )
}
