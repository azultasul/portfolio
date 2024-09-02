'use client'

import { useRecoilValue, useRecoilState } from 'recoil'
import { useEffect, useState } from 'react'
import { atomOrder, atomTech, atomType } from '@/utils/recoil'
import ProjectItem from '@/components/ProjectItem'
import styles from '@/assets/styles/pages/projects.module.scss'

const ProjectList = ({ projects }) => {
  const order = useRecoilValue(atomOrder)
  const [tech, setTech] = useRecoilState(atomTech)
  const [type, setType] = useRecoilState(atomType)

  const [filteredData, setFilteredData] = useState([])
  const [orderedData, setOrderedData] = useState([])

  useEffect(() => {
    // 초기 projects 데이터 불러온 후
    sortByDate([...projects], true)
  }, [])

  useEffect(() => {
    // 날짜 정렬
    sortByDate(filteredData)
  }, [order])

  useEffect(() => {
    // tech, type 필터링 적용 (필터링 후 날짜 정렬)
    const arrayByType = projects.filter((item) => type.every((typeItem) => item.type.includes(typeItem)))
    const arrayByTech = arrayByType.filter((item) => tech.every((techItem) => item.tech.includes(techItem)))

    sortByDate(arrayByTech)
    setFilteredData([...arrayByTech])
  }, [tech, type])

  const sortByDate = (array) => {
    // 날짜 정렬 (초기에만 projects 추가)
    const arrayByDate =
      order === 0
        ? array.sort((a, b) => new Date(b.date) - new Date(a.date)) // 내림차순
        : array.sort((a, b) => new Date(a.date) - new Date(b.date)) // 오름차순

    setOrderedData([...arrayByDate])
    // isInit && setFilteredData([...arrayByDate])
  }

  return orderedData.length > 0 ? (
    <div className={styles.list}>
      {orderedData.map((item, index) => (
        <ProjectItem item={item} key={index} />
      ))}
    </div>
  ) : (
    <div className="nothing">
      <h2>선택한 조건에 맞는 결과가 없습니다 👀</h2>
      <button
        className="btn tag"
        onClick={() => {
          setTech([])
          setType([])
        }}
      >
        전체 프로젝트 보기
      </button>
    </div>
  )
}
export default ProjectList
