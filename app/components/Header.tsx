'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-[#EB4A26]">정다혜 포트폴리오</Link>
        <ul className="flex space-x-6">
          {[
            { name: '홈', link: '/' },
            { name: '경력', link: '/#career' },
            { name: '학력', link: '/#education' },
            { name: '기술', link: '/#skills' },
            { name: '연락처', link: '/#contact' },
          ].map((item) => (
            <li key={item.name}>
              <Link 
                href={item.link}
                className={`text-lg font-medium ${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-[#EB4A26] transition-colors duration-300`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header

