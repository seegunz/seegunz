import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { RxHamburgerMenu } from "react-icons/rx"
import { useNavigate } from 'react-router-dom'

export default function Nav() {
  const nav = useNavigate()
  function handleClick() {
    nav('/')
  }
  return (
    <header className='flex justify-between items-center px-3 md:px-10 my-5'>
      <motion.img src="/seegunz.png" alt="logo" height={50} width={200}
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
        <Link className='hover:text-[#451a03]'>HOME</Link>
        <Link className='hover:text-[#451a03]'>ABOUT</Link>
        <Link className='hover:text-[#451a03]'>PROJECTS</Link>
      </motion.nav>
      <motion.nav className='md:hidden text-4xl mr-3 text-[#451a03]'
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20
        }}
      >
        <RxHamburgerMenu />
      </motion.nav>
    </header>
  )
} 
