'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.h1 
        className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-[#91C0DF] to-[#EB4A26] text-transparent bg-clip-text"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About Me
      </motion.h1>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Image src="/placeholder.svg?height=400&width=400" alt="Designer's portrait" width={400} height={400} className="rounded-full shadow-lg" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl"
        >
          <h2 className="text-3xl font-semibold mb-6">John Doe</h2>
          <p className="mb-6 text-gray-700 leading-relaxed">
            I'm a passionate video designer with over 10 years of experience in creating compelling visual stories. 
            My expertise spans motion graphics, 3D animation, video production, and interactive media.
          </p>
          <p className="mb-6 text-gray-700 leading-relaxed">
            I've had the pleasure of working with a diverse range of clients, from startups to Fortune 500 companies, 
            helping them communicate their messages effectively through the power of video. My approach combines 
            creativity with strategic thinking to deliver impactful results that resonate with audiences.
          </p>
          <p className="text-gray-700 leading-relaxed">
            When I'm not crafting videos, you can find me exploring new design trends, experimenting with emerging 
            technologies, or sharing my knowledge through workshops and online tutorials. I believe in continuous 
            learning and pushing the boundaries of what's possible in video design.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

