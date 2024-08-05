import styles from '@/assets/styles/pages/home.module.scss'

export default function Home() {
  return (
    <>
      <div className={styles.intro}>
        <div className={`${styles.intro__inner} container`}>
          <div className={styles.intro__text}>
            <h1>안녕하세요</h1>
            <h1>프론트엔드 개발자</h1>
            <h1>유다솔입니다</h1>
          </div>
          <div className={styles.intro__scroll}>
            <div className={styles.intro__arrow}></div>
            <div className={styles.intro__arrow}></div>
            <div className={styles.intro__arrow}></div>
          </div>
        </div>
      </div>
      <div className={`${styles.contents} container`}>
        <h2 className={styles.title}>기술</h2>
        <div>
          <div>
            <h3>Language, Framework, Library</h3>
            <div>html, css, javascript</div>
          </div>
          <div>
            <h3>디파이</h3>
            <div></div>
          </div>
          <div>
            <h3>인천대학교</h3>
            <div></div>
          </div>
          <div>
            <h3>정보처리기사</h3>
            <div></div>
          </div>
        </div>
      </div>
    </>
  )
}
