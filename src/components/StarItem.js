'use client'

import Link from 'next/link'
import Image from 'next/image'
import useDate from '@/utils/useDate'
import catData from '@/data/categories'
import styles from '@/assets/styles/pages/home.module.scss'

const StarItem = ({ item, index }) => {
  const date = useDate(item.date, item.endDate)

  return (
    <div>
      <h3 className={styles.section__title}>
        {index + 1}. {item.title}
        <br className="show--mo" />
        <span>
          ({item.client} / {date.startDate} - {date.endDate})
        </span>
      </h3>

      <ul>
        <li>
          <strong>• Nuxt.js의 Composable 활용</strong>: ‘서비스 사용 승인’ 및 ‘사용 가능 리전 및 인스턴스 노출’ 로직 등 모듈화
        </li>
        <li>
          <strong>• API 연동 작업</strong>: Axios, Tanstack query를 사용하여 CRUD API 연동 작업 진행
        </li>
        <li>
          <strong>• input 컴포넌트 작업 및 유효성 구현</strong>: Vuetify 커스텀하여 사용, 전체 input 관련 컴포넌트를 작업하며 유효성 검사 기능 구현
        </li>
        <li>
          <strong>• 권한 기반 UI 분기</strong>: 로그인 정보에 따라 페이지 및 화면 영역의 노출 분기하는 작업 수행
        </li>
        <li>
          <strong>• 테스트 진행</strong>: 품질을 상승을 위한 단위 테스트와 통합 테스트 진행
        </li>
        <li>
          <strong>• 스토리북 활용</strong>: 컴포넌트 기능을 시각화, 효율적인 협업 달성
        </li>
        <li>
          <strong>• 코드 개선 및 협업</strong>: GitHub의 PR(Pull Request)을 활용하여 적극적인 코드 개선과 원활한 팀 협업 경험
        </li>
      </ul>

      <div className={styles.career__tags}>
        {/* <div className={`tag-wrap`}> */}
        <Link className="btn btn--line" href={`/project/${item.id}`}>
          자세히 보기
        </Link>
        {/* {item.tech.map((item, index) => (
            <span className={`tag`} key={index}>
              {catData.tech[item].name}
            </span>
          ))} */}
        {item.thumb && (
          <div className={styles.career__thumb}>
            <Image src={`/images/projects/${item.id}/${item.thumb}`} alt={item.id} width="50" height="50" style={{ objectFit: 'cover' }} />
          </div>
        )}
        {/* </div> */}
      </div>
    </div>
  )
}
export default StarItem
