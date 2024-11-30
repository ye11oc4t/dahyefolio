'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16">
      <section id="hero" className="text-center mb-16">
        <motion.h1 
          className="text-5xl font-bold mb-4 bg-gradient-to-r from-[#91C0DF] to-[#EB4A26] text-transparent bg-clip-text"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          안녕하세요, 연출하는 영상 디자이너 정다혜입니다.
        </motion.h1>
        <motion.p 
          className="text-xl mb-8 text-gray-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Hello, I'm Jung Da-hye, a video designer specializing in direction.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link href="#contact" className="bg-[#EB4A26] text-white px-8 py-3 rounded-full hover:bg-opacity-80 transition duration-300 inline-block">
            연락하기 / Contact Me
          </Link>
          <a 
            href="/jung-dahye-portfolio.pdf" 
            download
            className="bg-[#91C0DF] text-white px-8 py-3 rounded-full hover:bg-opacity-80 transition duration-300 inline-block"
          >
            PDF 다운로드 / Download PDF
          </a>
        </motion.div>
      </section>

      <section id="career" className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">경력 / Career</h2>
        {[
          {
            period: "2022.06 - 2024.04",
            company: "블래스트",
            role: "버추얼 아이돌 플레이브 언리얼엔진 아트",
            roleEn: "Virtual Idol PLEVE Unreal Engine Art"
          },
          {
            period: "2020.02 - 2022.05",
            company: "브릭 스튜디오",
            role: "3D 애니메이션 제작 및 연출",
            roleEn: "3D Animation Production and Direction"
          },
          {
            period: "2019.07 - 2019.09",
            company: "KB증권",
            role: "프로젝트 매니저, 3D 인포그래픽 감독(2인 협업)",
            roleEn: "Project Manager, 3D Infographic Director (2-person collaboration)"
          },
          {
            period: "2019.05 - 2019.07",
            company: "디스트릭트",
            role: "삼성 평택관 프로젝트 산학 디자이너",
            roleEn: "Samsung Pyeongtaek Hall Project Industry-Academic Designer"
          },
          {
            period: "2017.08 - 2018.09",
            company: "필르밍",
            role: "2D 모션그래픽, 인포그래픽 연출 및 제작",
            roleEn: "2D Motion Graphics, Infographic Direction and Production"
          }
        ].map((job, index) => (
          <motion.div 
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
          >
            <h3 className="text-xl font-semibold mb-2">{job.company}</h3>
            <p className="text-gray-600 mb-2">{job.period}</p>
            <p className="mb-1">{job.role}</p>
            <p className="text-sm text-gray-500">{job.roleEn}</p>
          </motion.div>
        ))}
      </section>

      <section id="education" className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">학력 / Education</h2>
        {[
          {
            year: "2019.04",
            institution: "VDAS",
            description: "모션그래픽 과정 수료",
            descriptionEn: "Completed Motion Graphics Course"
          },
          {
            year: "2017.02",
            institution: "홍익대학교",
            description: "애니메이션과 졸업",
            descriptionEn: "Graduated from Animation Department"
          },
          {
            year: "2017.02",
            institution: "인천여자고등학교",
            description: "졸업",
            descriptionEn: "Graduated"
          }
        ].map((edu, index) => (
          <motion.div 
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
          >
            <h3 className="text-xl font-semibold mb-2">{edu.institution}</h3>
            <p className="text-gray-600 mb-2">{edu.year}</p>
            <p className="mb-1">{edu.description}</p>
            <p className="text-sm text-gray-500">{edu.descriptionEn}</p>
          </motion.div>
        ))}
      </section>

      <section id="skills" className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">기술 / Skills</h2>
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {[
            "Unreal Engine 5",
            "Maya Arnold render",
            "Cinema 4D",
            "Adobe Animate",
            "TVP",
            "After Effects",
            "Premiere",
            "Photoshop",
            "Illustrator"
          ].map((skill, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-4 text-center">
              <p className="font-medium">{skill}</p>
            </div>
          ))}
        </motion.div>
      </section>

      <section id="contact" className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">연락처 / Contact</h2>
        <motion.div 
          className="bg-white rounded-lg shadow-lg p-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-4">
            <strong>전화 / Phone:</strong> 010-4594-3885
          </p>
          <p className="mb-4">
            <strong>이메일 / Email:</strong> <a href="mailto:wjdekgp18@gmail.com" className="text-[#EB4A26] hover:underline">wjdekgp18@gmail.com</a>
          </p>
          <p>
            <strong>Behance:</strong> <a href="https://behance.net/zeungda" target="_blank" rel="noopener noreferrer" className="text-[#EB4A26] hover:underline">behance.net/zeungda</a>
          </p>
        </motion.div>
      </section>
    </div>
  )
}

