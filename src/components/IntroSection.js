import TextShuffle from '@/components/TextShuffle'
import styles from '@/assets/styles/components/introSection.module.scss'

const IntroSection = ({ targetName, array, titleArray }) => {
  return (
    <div className={styles.intro}>
      <div className={`${styles.intro__inner} container`}>
        <div className={styles.intro__text}>
          <h1>
            <TextShuffle targetName={targetName} array={array} />
          </h1>
          {titleArray && titleArray.map((item, index) => <h1 key={index}>{item}</h1>)}
        </div>
        <div className={styles.intro__scroll}>
          <div className={styles.intro__arrow}></div>
          <div className={styles.intro__arrow}></div>
          <div className={styles.intro__arrow}></div>
        </div>
      </div>
    </div>
  )
}

export default IntroSection
