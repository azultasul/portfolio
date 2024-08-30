import Link from 'next/link'
import { connectDB } from '@/utils/database'
import IntroSection from '@/components/IntroSection'
import StarItem from '@/components/StarItem'
import Image from 'next/image'
import styles from '@/assets/styles/pages/home.module.scss'
import catData from '@/data/categories'

const Home = async () => {
  const db = (await connectDB).db('portfolio')
  let projects = await db
    .collection('projects')
    .find({ star: true })
    .project({ id: 1, title: 1, star: 1, thumb: 1, date: 1, endDate: 1, client: 1, tech: 1 })
    .sort({ date: -1 })
    .toArray()
  let starProjects = JSON.parse(JSON.stringify(projects))

  return (
    <>
      <IntroSection
        targetName="sh-hello"
        array={['안녕하세요!', 'HELLO', 'YO!', 'HOLA!', 'SALUT', 'CIAO']}
        titleArray={['프론트엔드 개발자', '유다솔입니다.']}
      />
      <div className="contents">
        <div className="container container--grid">
          <div className="container__left">
            <div className="container__left-inner">
              <h2 className={styles.title}></h2>
              <div>에이전시에서 여러 고객사의 요구사항에 맞춘 구축 프로젝트에 참여하며 다양한 기술 스택을 경험했습니다.</div>
              <div className="tag-wrap">
                <button className="btn btn--bg tag">이력서</button>
                <button className="btn btn--bg tag">경력기술서</button>
                <button className="btn btn--bg tag">자기소개서</button>
              </div>
            </div>
          </div>
          <div>
            <section className={styles.section}>
              <h2 className={styles.title}>기술 스택</h2>
              <div className={`tag-wrap ${styles.section__tags}`}>
                {Object.values(catData.tech).map((item) => (
                  <span className={`tag tag--${item.color} ${styles.section__tag}`} key={item.id}>
                    <Image src={`/images/skills/${item.id}.svg`} alt="skill" width="25" height="25" />
                    <span>{item.name}</span>
                  </span>
                ))}
              </div>
            </section>
            <section className={`${styles.section} ${styles.career}`}>
              <div className={styles.career__title}>
                <h2 className={styles.title}>
                  경력<span>(3년 9개월)</span>
                </h2>
                <div className={styles.career__btn}>
                  <Link href="/project" scroll={false} className="btn btn--bg tag">
                    전체 프로젝트 보기
                  </Link>
                </div>
              </div>
              <div className={styles.career__contents}>
                <div>
                  <h3 className={styles.section__title}>
                    주식회사 엑스와이지원 <br />
                  </h3>
                  <p>개발실 / 선임</p>
                  <p className={styles.text}>2년 9개월 (2021.07 - 2024.03)</p>
                  <p className={styles.text}>(주)디파이와 동일한 회사입니다.</p>
                  <h3 className={styles.section__title}>
                    (주)디파이 <br />
                  </h3>
                  <p>개발실 / 주임</p>
                  <p className={styles.text}>1년 (2020.07 - 2021.07)</p>
                  <Image className={styles.career__image} src={`/images/projects/dfy21/thumb.jpg`} alt="디파이" width="70" height="70" />
                </div>
                <div>
                  {starProjects.length > 0 ? (
                    <div className={styles.career__projects}>
                      {starProjects.map((item, index) => (
                        <StarItem item={item} index={index} key={index} />
                      ))}
                    </div>
                  ) : (
                    <h2 className="nothing">프로젝트를 가져오는 중입니다 🙏🏼</h2>
                  )}
                </div>
              </div>
            </section>
            <section className={styles.section}>
              <h2 className={styles.title}>학력</h2>
              <h3 className={styles.section__title}>
                인천대학교<span>(졸업: 2013.03 - 2019.02)</span>
              </h3>
              <p>주전공: 물리학과 / 복수전공: 전자공학과</p>
              <p className={styles.text}>학점: 3.52 / 4.5</p>
            </section>
            <section className={styles.section}>
              <h2 className={styles.title}>자격증/어학</h2>
              <h3 className={styles.section__title}>정보처리기사</h3>
              <p>2022.06.17 / 한국산업인력공단</p>
              <h3 className={styles.section__title}>컴퓨터활용능력</h3>
              <p>2급 / 2019.03.22 / 대한상공회의소</p>
              <h3 className={styles.section__title}>
                TOEIC<span>(영어)</span>
              </h3>
              <p>800점 / 2019.06.15 / 한국TOEIC위원회</p>
              <h3 className={styles.section__title}>
                DELE<span>(스페인어)</span>
              </h3>
              <p>B1 / 2019.08.27 / Instituto Cervantes</p>
            </section>
            {/* <section className={styles.section}>
              <h2 className={styles.title}>주요 프로젝트</h2>
              {starProjects.length > 0 ? (
                <div className={styles.contents__projects}>
                  {starProjects.map((item, index) => (
                    <StarItem item={item} key={index} />
                  ))}
                </div>
              ) : (
                <h2 className="nothing">프로젝트를 가져오는 중입니다 🙏🏼</h2>
              )}
              <div className={styles.contents__btn}>
                <Link href="/project" scroll={false} className="btn btn--bg tag">
                  전체 프로젝트 보기
                </Link>
              </div>
            </section> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
