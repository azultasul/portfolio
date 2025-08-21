'use client'

import React, { useEffect, useState } from 'react'
import styles from '@/assets/styles/components/footer.module.scss'

const Footer = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // 페이지 로딩이 완료되면 로딩 상태를 false로 설정
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <footer className={`${styles.footer} ${isLoading ? styles.loading : ''}`}>
      <div className="container">
        <div className={styles.footer__line}></div>
        <p className={styles.footer__content}>
          © AzulTasul.
        </p>
      </div>
    </footer>
  )
}

export default Footer
