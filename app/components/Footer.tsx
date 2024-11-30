import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-[#91C0DF] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-bold">정다혜 포트폴리오</h3>
            <p className="mt-2">연출하는 영상 디자이너</p>
          </div>
          <div className="flex space-x-4">
            <Link href="mailto:wjdekgp18@gmail.com" className="hover:text-[#EB4A26] transition-colors duration-300">
              Email
            </Link>
            <Link href="https://behance.net/zeungda" target="_blank" rel="noopener noreferrer" className="hover:text-[#EB4A26] transition-colors duration-300">
              Behance
            </Link>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2023 Jung Da-hye. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

