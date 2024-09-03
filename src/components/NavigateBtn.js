'use client'

import { useRouter } from 'next/navigation'
import { useSetRecoilState } from 'recoil'
import { atomTech, atomType } from '@/utils/recoil'

const NavigateBtn = ({ children, className, catName, catNum }) => {
  const router = useRouter()
  const setTech = useSetRecoilState(atomTech)
  const setType = useSetRecoilState(atomType)

  return (
    <button
      type="button"
      className={className}
      onClick={() => {
        router.push('/project', { scroll: false })

        switch (catName) {
          case 'tech':
            setTech([catNum])
            setType([])
            break

          case 'type':
            setTech([])
            setType([catNum])
            break

          default:
            setTech([])
            setType([])
        }
      }}
    >
      {children}
    </button>
  )
}
export default NavigateBtn
