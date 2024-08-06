import ShuffleText from '@/components/ShuffleText'
import styles from '@/assets/styles/pages/home.module.scss'

export default function Home() {
  return (
    <>
      <div className={styles.intro}>
        <div className={`${styles.intro__inner} container`}>
          <div className={styles.intro__text}>
            <h1>
              <ShuffleText />
            </h1>
            <h1>프론트엔드 개발자</h1>
            <h1>유다솔입니다.</h1>
          </div>
          <div className={styles.intro__scroll}>
            <div className={styles.intro__arrow}></div>
            <div className={styles.intro__arrow}></div>
            <div className={styles.intro__arrow}></div>
          </div>
        </div>
      </div>
      <div className={`${styles.contents}`}>
        <div className={`${styles.contents__inner} container`}>
          <h2 className={styles.title}>기술</h2>
          <div>
            <div className={styles.skill}>
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
              <h3>디파이</h3>
              <div>3년 8개월</div>
            </div>
            <hr />
            <div>
              <h3>인천대학교</h3>
              <div>물리학과 / 전자공학과(복수전공)</div>
            </div>
            <hr />
            <div>
              <h3>정보처리기사</h3>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
