'use client'

import { RecoilRoot } from 'recoil'

const RecoilProjectProvider = ({ children }) => {
  return <RecoilRoot>{children}</RecoilRoot>
}
export default RecoilProjectProvider
