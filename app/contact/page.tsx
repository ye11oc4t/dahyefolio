'use client'

import { motion } from 'framer-motion'

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.h1 
        className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-[#91C0DF] to-[#EB4A26] text-transparent bg-clip-text"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Contact Me
      </motion.h1>
      <motion.div 
        className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block mb-2 font-medium text-gray-700">Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              required 
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#91C0DF] focus:border-transparent transition duration-300"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 font-medium text-gray-700">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              required 
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#91C0DF] focus:border-transparent transition duration-300"
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-2 font-medium text-gray-700">Message</label>
            <textarea 
              id="message" 
              name="message" 
              rows={5} 
              required 
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#91C0DF] focus:border-transparent transition duration-300"
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="w-full bg-[#EB4A26] text-white px-6 py-3 rounded-md hover:bg-opacity-80 transition duration-300 transform hover:scale-105"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </div>
  )
}

