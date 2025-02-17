import React from 'react'
import { motion } from 'framer-motion'
import { Profile, Skills } from '../components'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <main>
      <div className='main'>
        <video src="/video.mp4" autoPlay loop muted className='h-[50vh] w-full'/>
        <Link to='bio' href="">
          <motion.span
              initial={{scale: 0}}
              whileInView={{scale: 1}}
              transition={{duration: .5}}
          >
              Welcome to my profile...
          </motion.span>
        </Link>
      </div>
      <section>
        <Profile />
        <Skills />
      </section>
    </main>
  )
}
