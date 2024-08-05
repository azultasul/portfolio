import Link from 'next/link'
import DarkMode from '@/components/DarkMode'
import '@/assets/styles/base/reset.scss'
import '@/assets/styles/base/fonts.scss'
import '@/assets/styles/variables.css'
import '@/assets/styles/common.scss'

export const metadata = {
  title: 'Portfolio',
  description: "Dasol's portfolio",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="gnb">
          <div className="gnb__inner container">
            <Link href="/">유다솔 포폴</Link>
            <div className="gnb__sub">
              <Link href="/project">프로젝트</Link>
              <Link href="/contact">컨택미</Link>
              <DarkMode className="gnb__dark" />
            </div>
          </div>
        </div>
        {children}
      </body>
    </html>
  )
}
