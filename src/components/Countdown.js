'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

const Countdown = ({ path, time }) => {
  const router = useRouter()
  const [sec, setSec] = useState(time)

  useEffect(() => {
    const countdown = setInterval(() => {
      if (sec > 0) {
        setSec(sec - 1)
      }
      if (sec === 0) {
        clearInterval(countdown)
        router.push(path, { scroll: false })
      }
    }, 1000)

    return () => clearInterval(countdown)
  }, [sec])

  return <span>{sec + 1}초 전</span>
}

export default Countdown
