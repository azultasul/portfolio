import { connectDB } from '@/utils/database'
import IntroSection from '@/components/IntroSection'
import StarItem from '@/components/StarItem'
import NavigateBtn from '@/components/NavigateBtn'
import Image from 'next/image'
import styles from '@/assets/styles/pages/home.module.scss'
import catData from '@/data/categories'

const Home = async () => {
  const db = (await connectDB).db('portfolio')
  let projects = await db
    .collection('projects')
    .find({ star: true, type: [1] })
    .project({ id: 1, title: 1, star: 1, thumb: 1, date: 1, endDate: 1, client: 1, learn: 1 })
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
            <div className={`container__left-inner ${styles.about}`}>
              <div className={styles.about__top}>
                <Image src={`/images/dasol.jpg`} alt="skill" width="93" height="119" />
                <div className={styles.about__contents}>
                  <h3 className={styles.about__name}>
                    유다솔<span>(1994.05.20)</span>
                  </h3>
                  <div className={styles.about__desc}>• 두 번의 프로젝트 리딩 (개발 리더)</div>
                  <div className={styles.about__desc}>• 개발실 우수사원 선정 (2023.05)</div>
                  <div className={styles.about__desc}>• AI 모델 개발과정 수료 (960시간)</div>
                  <div className={`tag-wrap ${styles.about__tags}`}>
                    <span className="tag">Frontend</span>
                    <span className="tag">React</span>
                    <span className="tag">Vue</span>
                    <span className="tag">인터랙션</span>
                    <span className="tag">커뮤니케이션</span>
                    <span className="tag">논리적</span>
                    <span className="tag">효율적</span>
                  </div>
                </div>
              </div>
              <div className={styles.about__bottom}>
                <a className={styles.about__btn} href="mailto:dasolyou@gmail.com">
                  <Image src={`/images/icons/gmail.svg`} alt="gmail" width="20" height="20" />
                  <span className="btn btn--line">dasolyou@gmail.com</span>
                </a>
                <a className={styles.about__btn} href="/프론트엔드개발자_유다솔_이력서.pdf">
                  <Image src={`/images/icons/download.svg`} alt="download" width="20" height="20" />
                  <span className="btn btn--line">이력서 보기</span>
                </a>
              </div>
            </div>
          </div>
          <div>
            <section className={styles.section}>
              <h2 className={styles.title}>기술 스택</h2>
              <div className={`tag-wrap ${styles.section__tags}`}>
                {Object.values(catData.tech).map(
                  (item) =>
                    item.show && (
                      <span className={`${styles.section__tag}`} key={item.id}>
                        <Image src={`/images/skills/${item.id}.svg`} alt="skill" width="25" height="25" />
                        <span>{item.name}</span>
                      </span>
                    )
                )}
              </div>
            </section>

            <section className={`${styles.section} ${styles.career}`}>
              <div className={styles.career__title}>
                <h2 className={styles.title}>
                  경력<span>(3년 9개월)</span>
                </h2>
                <div className={styles.career__btn}>
                  <NavigateBtn className="btn btn--bg tag" catName="type" catNum={1}>
                    경력 프로젝트 보기
                  </NavigateBtn>
                </div>
              </div>
              <div className={styles.career__contents}>
                <div>
                  <h3 className={styles.section__title}>
                    (주)엑스와이지원 <br />
                  </h3>
                  <p>개발실 / 선임</p>
                  <p className={styles.text}>2년 9개월 (2021.07 - 2024.03)</p>
                  <p className={styles.text}>(주)디파이와 동일한 회사입니다.</p>
                  <h3 className={styles.section__title}>
                    (주)디파이 <br />
                  </h3>
                  <p>개발실 / 주임</p>
                  <p className={styles.text}>1년 (2020.07 - 2021.07)</p>
                  <a className={styles.career__image} href="https://www.dfy.co.kr/" target="_blank">
                    <Image src={`/images/projects/dfy21/thumb.jpg`} alt="디파이" width="70" height="70" />
                  </a>
                </div>
                {starProjects.length > 0 ? (
                  <div>
                    {starProjects.map((item, index) => (
                      <StarItem item={item} index={index} key={index} />
                    ))}
                  </div>
                ) : (
                  <h2 className="nothing">프로젝트를 가져오는 중입니다 🙏🏼</h2>
                )}
              </div>
            </section>

            <section className={styles.section}>
              <h2 className={styles.title}>학력</h2>
              <h3 className={styles.section__title}>
                인천대학교<span>(졸업: 2013.03 - 2019.02)</span>
              </h3>
              <p>주전공: 물리학과 / 복수전공: 전자공학과</p>
              <p className={styles.text}>학점: 3.52 / 4.5</p>
              <h3 className={styles.section__title}>
                김포고등학교<span>(졸업: 2010.03 - 2013.02)</span>
              </h3>
              <p>인문계 고등학교 / 이과계열</p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.title}>교육 / 경험</h2>
              <h3 className={styles.section__title}>K-디지털 트레이닝: (현대로템) K-방산 AI모델 개발과정</h3>
              <p>2024.12.10 ~ 2025.06.04 (960시간)</p>
              <br />
              <p><b>[ 학습 내용 ]</b></p>
              <p>• Oracle DB에서 데이터 생성, 조작, 변환, 집계 등의 쿼리문 사용 실습</p>
              <p>• Numpy, Pandas, Matplotlib 등 분석 및 시각화 라이브러리 사용</p>
              <p>• Tensorflow, keras 등 라이브러리 사용 및 비정형 데이터 처리를 위한 딥러닝 모델 이해</p>
              <p>• 사전학습, 전이학습, 파인튜닝 등 딥러닝 모델 활용을 위한 방법론 학습</p>
              <br />
              <p><b>[ 프로젝트 및 논문 ]</b></p>
              <p>• XGBoost, LightGBM을 활용한 부동산 허위매물 분류 모델 구현</p>
              <p>• RAG + AI 에이전트 기반의 식당 추천 챗봇 서비스 개발</p>
              <p>• 전장 시뮬레이터를 활용한 전장 사물 인식 학습 모델 구현</p>
              <p>• 논문: RAG 모델을 적용한 AI 에이전트 기반 챗봇 추천 서비스 아키텍쳐 설계 - 금융 및 보험 산업 중심으로</p>
              <h3 className={styles.section__title}>스페인 교환학생</h3>
              <p>2016.01 ~ 2017.01 (1년)</p>
              <p>스페인어 자격증 취득 (DELE B1: 일상회화 수준) / 새로운 문화 경험 및 도전</p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.title}>자격증</h2>
              <h3 className={styles.section__title}>SQL 개발자(SQLD)</h3>
              <p>2025.04.04 / 한국데이터산업진흥원</p>
              <h3 className={styles.section__title}>데이터 분석 준전문가(ADsP)</h3>
              <p>2025.03.21 / 한국데이터산업진흥원</p>
              <h3 className={styles.section__title}>정보처리기사</h3>
              <p>2022.06.17 / 한국산업인력공단</p>
              <h3 className={styles.section__title}>컴퓨터활용능력</h3>
              <p>2급 / 2019.03.22 / 대한상공회의소</p>
              <h3 className={styles.section__title}>2종보통운전면허</h3>
              <p>2019.02.15 / 경찰청(운전면허시험관리단)</p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.title}>어학</h2>
              <h3 className={styles.section__title}>
                TOEIC Speaking Test<span>(영어)</span>
              </h3>
              <p>170점(AL급) / 2025.07.06 / 한국TOEIC위원회</p>
              <h3 className={styles.section__title}>
                DELE<span>(스페인어)</span>
              </h3>
              <p>B1 / 2019.08.27 / Instituto Cervantes</p>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
