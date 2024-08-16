import IntroSection from '@/components/IntroSection'
import styles from '@/assets/styles/pages/home.module.scss'

const Home = () => {
  return (
    <>
      <IntroSection targetName="sh-hello" array={['안녕하세요!', 'HELLO', 'YO!', 'HOLA!', 'SALUT', 'CIAO']} titleArray={['프론트엔드 개발자', '유다솔입니다.']} />
      <div className="contents">
        <div className={`${styles.container} container container--grid`}>
          <div>
            <h2 className={styles.title}>기술</h2>
            <h2 className={styles.title}>경력</h2>
            <h2 className={styles.title}>학력</h2>
            <h2 className={styles.title}>자격증</h2>
          </div>
          <div>
            <div className={styles.skill}>
              {/* <h2 className={styles.title}>기술</h2> */}
              <h3>언어/프레임워크/라이브러리</h3>
              <div className="tag-wrap">
                <span className="tag tag--1">HTML</span>
                <span className="tag tag--1">CSS</span>
                <span className="tag tag--1">Javascript</span>
                <span className="tag tag--1">JQuery</span>
                <span className="tag tag--1">Git</span>
                <span className="tag tag--1">Markdown</span>
                <span className="tag tag--1">React</span>
                <span className="tag tag--1">Next</span>
                <span className="tag tag--1">Vue</span>
                <span className="tag tag--1">vuex</span>
                <span className="tag tag--1">nuxt</span>
                <span className="tag tag--1">tailwind</span>
              </div>

              <h3 className={styles.skill__title}>기타 툴</h3>
              <div className="tag-wrap">
                <span className="tag tag--1">Postman</span>
                <span className="tag tag--1">Figma</span>
                <span className="tag tag--1">Notion</span>
                <span className="tag tag--1">AWS</span>
                <span className="tag tag--1">Firebase</span>
                <span className="tag tag--1">Supabase</span>
                <span className="tag tag--1">Vercel</span>
              </div>
            </div>
            <hr />
            <div>
              {/* <h2 className={styles.title}>경력</h2> */}
              <h3>디파이</h3>
              <div>3년 8개월</div>
            </div>
            <hr />
            <div>
              {/* <h2 className={styles.title}>학력</h2> */}
              <h3>인천대학교</h3>
              <div>물리학과 / 전자공학과(복수전공)</div>
            </div>
            <hr />
            <div>
              {/* <h2 className={styles.title}>자격증</h2> */}
              <h3>정보처리기사</h3>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
