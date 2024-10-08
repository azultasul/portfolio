'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

const DarkModeBtn = ({ className }) => {
  let router = useRouter()
  let [mode, setMode] = useState('')

  useEffect(() => {
    let cookie = ('; ' + document.cookie).split('; mode=').pop().split(';')[0]

    if (cookie === '') {
      document.cookie = `mode=light; max-age=${3600 * 24 * 400}`
    } else {
      setMode(cookie)
    }
  }, [])

  useEffect(() => {
    if (mode === 'dark') {
      document.querySelector('html').classList.add('dark')
    } else if (mode === 'light') {
      document.querySelector('html').classList.remove('dark')
    }
  }, [mode])

  return (
    <button
      onClick={() => {
        document.cookie = `mode=${mode === 'light' ? 'dark' : 'light'}; max-age=${3600 * 24 * 400}`
        setMode(mode === 'light' ? 'dark' : 'light')
        router.refresh()
      }}
      className={className}
    >
      {mode === 'light' ? '🌙' : '☀️'}
    </button>
  )
}
export default DarkModeBtn
