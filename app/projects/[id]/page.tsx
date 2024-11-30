'use client'

import Image from 'next/image'
import { notFound } from 'next/navigation'
import { motion } from 'framer-motion'

const projects = [
  { 
    id: 1, 
    title: "Motion Graphics Showcase", 
    category: "Motion Graphics",
    description: "A collection of motion graphics work showcasing various techniques and styles, pushing the boundaries of visual storytelling through animated elements and dynamic compositions.",
    images: ["/placeholder.svg?height=400&width=600", "/placeholder.svg?height=400&width=600", "/placeholder.svg?height=400&width=600"],
    videoUrl: "https://www.example.com/video1.mp4"
  },
  // Add more projects here...
]

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const project = projects.find(p => p.id === parseInt(params.id))

  if (!project) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.h1 
        className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#91C0DF] to-[#EB4A26] text-transparent bg-clip-text"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {project.title}
      </motion.h1>
      <motion.p 
        className="text-xl text-gray-600 mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {project.category}
      </motion.p>

      <motion.div 
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <h2 className="text-2xl font-semibold mb-4">Project Description</h2>
        <p className="text-gray-700 leading-relaxed">{project.description}</p>
      </motion.div>

      <motion.div 
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <h2 className="text-2xl font-semibold mb-4">Project Images</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {project.images.map((img, index) => (
            <Image key={index} src={img} alt={`Project image ${index + 1}`} width={600} height={400} className="rounded-lg shadow-md hover:shadow-xl transition duration-300" />
          ))}
        </div>
      </motion.div>

      <motion.div 
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <h2 className="text-2xl font-semibold mb-4">Project Video</h2>
        <div className="aspect-w-16 aspect-h-9">
          <video controls className="w-full h-full rounded-lg shadow-md">
            <source src={project.videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </motion.div>
    </div>
  )
}

