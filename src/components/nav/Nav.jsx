import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import seegunz from '/seegunzx.png'

export default function Nav() {
  const [toggle, setToggle] = useState(false)
  const nav = useNavigate()
  function handleClick() {
    nav('/')
  }
  function handleNav() {
    window.scrollTo(0, 0)
  }


  return (
    <div >
      <div className='flex gap-4 justify-end px-2 md:hidden text-[#451a03] text-[14px] text-black py-2 cursor-pointer'>
          <Link onClick={handleNav} className='hover:text-[#451a03]' to='/'>HOME</Link>
          <Link onClick={handleNav} className='hover:text-[#451a03]' to='bio'>BIO</Link>
          <Link onClick={handleNav} className='hover:text-[#451a03]' to='portfolio'>PORTFOLIO</Link>
          <Link onClick={handleNav} className='hover:text-[#451a03]'>E. PITCH</Link>
      </div>
    <header className='flex justify-between items-center px-3 md:px-10 my-5'>
      <motion.img className='cursor-pointer' src={seegunz} alt="logo" height={50} width={200}
        initial={{
          scale:0,
          x:-100
        }}
        animate={{
          x:0,
          rotate: 360, 
          scale: 1
        }}
        transition={{
          type:'spring',
          stiffness: 260,
          damping: 20
        }}

        onClick={handleClick}
      />
      <motion.nav className='hidden md:flex text-2xl gap-3'
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20
        }}
      >
        <Link className='hover:text-[#451a03]' to='/'>HOME</Link>
        <Link className='hover:text-[#451a03]' to='bio'>BIO</Link>
        <Link className='hover:text-[#451a03]' to='portfolio'>PORTFOLIO</Link>
        <Link className='hover:text-[#451a03]'>E. PITCH</Link>
        
      </motion.nav>
    </header>
    </div>
  )
} 
