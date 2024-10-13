import React from 'react'
import { motion } from 'framer-motion'
import { Profile } from '../components'

export default function Home() {
  return (
    <main>
      <div className='main'>
        <video src="/video.mp4" autoPlay loop muted className='h-[50vh] w-full'/>
        <motion.span
            initial={{scale: 0}}
            whileInView={{scale: 1}}
            transition={{duration: .5}}
        >
            Welcome to my profile...
        </motion.span>
      </div>
      <section>
        <Profile />
      </section>
    </main>
  )
}
