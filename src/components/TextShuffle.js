'use client'

import ShuffleText from '@tasul/shuffle-text'
import { useEffect } from 'react'

const TextShuffle = ({ targetName, className, array }) => {
  useEffect(() => {
    const shuffle = new ShuffleText(`.${targetName}`, {
      textArray: array,
      isAuto: true,
      isReplacedRandomly: true,
      stayTime: 900,
      replaceTime: 100,
    })
    return () => {
      shuffle.clear()
    }
  }, [])

  return <div className={`${className} ${targetName}`}></div>
}

export default TextShuffle
