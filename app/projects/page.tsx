'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

const projects = [
  { id: 1, title: "Motion Graphics Showcase", category: "Motion Graphics" },
  { id: 2, title: "Brand Video Campaign", category: "Video Production" },
  { id: 3, title: "3D Animation Reel", category: "3D Animation" },
  { id: 4, title: "Interactive Video Experience", category: "Interactive Media" },
  { id: 5, title: "Visual Effects Compilation", category: "VFX" },
  { id: 6, title: "Explainer Video Series", category: "Explainer Videos" },
]

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.h1 
        className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-[#91C0DF] to-[#EB4A26] text-transparent bg-clip-text"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Projects
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div 
            key={project.id} 
            className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
          >
            <Image src={`/placeholder.svg?height=300&width=400`} alt={project.title} width={400} height={300} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
              <p className="text-gray-600 mb-4">{project.category}</p>
              <Link href={`/projects/${project.id}`} className="text-[#EB4A26] hover:underline font-medium">View Project</Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

