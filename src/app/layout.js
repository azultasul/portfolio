import Link from 'next/link'
import DarkModeBtn from '@/components/DarkModeBtn'
import NavigateBtn from '@/components/NavigateBtn'
import RecoilProjectProvider from '@/components/RecoilProjectProvider'
import '@/assets/styles/base/reset.scss'
import '@/assets/styles/base/fonts.scss'
import '@/assets/styles/variables.css'
import '@/assets/styles/common.scss'

export const metadata = {
  title: 'Portfolio',
  description: "Dasol's portfolio",
  icons: {
    icon: '/favicon.ico',
  },
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <RecoilProjectProvider>
          <div className="gnb">
            <div className="gnb__inner container">
              <Link href="/" scroll={false}>
                유다솔 포폴
              </Link>
              <div className="gnb__sub">
                <NavigateBtn>프로젝트</NavigateBtn>
                <Link href="/contact" scroll={false}>
                  컨택미
                </Link>
                <DarkModeBtn className="gnb__dark" />
              </div>
            </div>
          </div>
          {children}
        </RecoilProjectProvider>
      </body>
    </html>
  )
}

export default RootLayout
