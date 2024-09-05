import styles from '@/assets/styles/components/introSection.module.scss'

const Loading = () => {
  return (
    <div className={styles.intro}>
      <div className={`${styles.intro__inner} container`}>
        <div className={styles.intro__text}>
          <h1>
            {/* <TextShuffle targetName={targetName} array={array} /> */}
            로딩중...
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Loading
