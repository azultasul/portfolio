import localFont from 'next/font/local'
import Link from 'next/link'
import DarkModeBtn from '@/components/DarkModeBtn'
import NavigateBtn from '@/components/NavigateBtn'
import RecoilProjectProvider from '@/components/RecoilProjectProvider'
import '@/assets/styles/base/reset.scss'
import '@/assets/styles/variables.css'
import '@/assets/styles/common.scss'

export const metadata = {
  title: 'Portfolio',
  description: "Dasol's portfolio",
  icons: {
    icon: '/favicon.ico',
  },
}

const simple = localFont({
  src: './fonts/Cafe24Simplehae-v2.0.woff2',
  variable: '--font-simple',
  display: 'swap',
})
const ohsquare = localFont({
  src: [
    { path: './fonts/Cafe24Ohsquareair.woff2', weight: '400' },
    { path: './fonts/Cafe24Ohsquare.woff2', weight: '700' },
  ],
  variable: '--font-ohsquare',
  display: 'swap',
})
const pretend = localFont({
  src: [
    { path: './fonts/Pretendard-Thin.woff2', weight: '100' },
    { path: './fonts/Pretendard-ExtraLight.woff2', weight: '200' },
    { path: './fonts/Pretendard-Light.woff2', weight: '300' },
    { path: './fonts/Pretendard-Regular.woff2', weight: '400' },
    { path: './fonts/Pretendard-Medium.woff2', weight: '500' },
    { path: './fonts/Pretendard-Bold.woff2', weight: '700' },
  ],
  variable: '--font-pretend',
  display: 'swap',
})

const RootLayout = ({ children }) => {
  return (
    <html lang="en" className={`${simple.variable} ${ohsquare.variable} ${pretend.variable}`}>
      <body>
        <RecoilProjectProvider>
          <div className="gnb">
            <div className="gnb__inner container">
              <Link href="/" scroll={false}>
                유다솔 포폴
              </Link>
              <div className="gnb__sub">
                <NavigateBtn>프로젝트</NavigateBtn>
                {/* <Link href="/contact" scroll={false}>
                  컨택미
                </Link> */}
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
