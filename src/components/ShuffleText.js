'use client'

import ShuffleText from '@tasul/shuffle-text'
import { useEffect } from 'react'

export default function Shuffle({ className }) {
  useEffect(() => {
    const shuffle = new ShuffleText('.target', {
      textArray: ['안녕하세요!', 'HELLO', 'YO!', 'HOLA!', 'SALUT', 'CIAO'],
      isAuto: true,
      isReplacedRandomly: true,
      stayTime: 1500,
      replaceTime: 50,
    })
    return () => {
      shuffle.clear()
    }
  }, [])

  return <div className={`${className} target`}></div>
}
