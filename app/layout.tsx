import './globals.css'
import { Noto_Sans_KR } from 'next/font/google'
import Header from './components/Header'
import Footer from './components/Footer'

const notoSansKR = Noto_Sans_KR({ 
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'Jung Da-hye - Video Designer Portfolio',
  description: 'Portfolio of Jung Da-hye, a professional video designer specializing in 3D animation and motion graphics',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={`${notoSansKR.className} bg-gray-50 text-gray-800`}>
        <Header />
        <main className="min-h-screen pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

