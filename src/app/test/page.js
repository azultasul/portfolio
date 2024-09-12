import styles from '@/assets/styles/components/introSection.module.scss'

const Loading = () => {
  return (
    <div className={styles.intro}>
      <div className={`${styles.intro__inner} container`}>
        <div className={styles.intro__text}>
          <h1>
            <span className={`${styles.loading__text} ${styles.loading__1}`}>로</span>
            <span className={`${styles.loading__text} ${styles.loading__2}`}>딩</span>
            <span className={`${styles.loading__text} ${styles.loading__3}`}>중</span>
            <span className={`${styles.loading__text} ${styles.loading__4}`}>.</span>
            <span className={`${styles.loading__text} ${styles.loading__5}`}>.</span>
            <span className={`${styles.loading__text} ${styles.loading__6}`}>.</span>
            <span className={`${styles.loading__text} ${styles.loading__7}`}>.</span>
            <span className={`${styles.loading__text} ${styles.loading__8}`}>.</span>
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Loading
