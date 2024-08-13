'use client'

import { useRecoilValue, useRecoilValueLoadable } from 'recoil'
import ProjectItem from '@/components/ProjectItem'
import styles from '@/assets/styles/components/projectList.module.scss'
import { useEffect, useState } from 'react'
import { atomOrder, atomTech, atomType, projectData } from '@/utils/recoil'

const ProjectList = () => {
  const order = useRecoilValue(atomOrder)
  const tech = useRecoilValue(atomTech)
  const type = useRecoilValue(atomType)
  const projects = useRecoilValueLoadable(projectData)

  const [originData, setOriginData] = useState([])
  const [filteredData, setFilteredData] = useState([])
  const [orderedData, setOrderedData] = useState([])

  useEffect(() => {
    // 초기 projects 데이터 불러온 후
    if (projects.state === 'hasValue') {
      sortByDate([...projects.contents], true)
      setFilteredData([...projects.contents])
    }
  }, [projects])

  useEffect(() => {
    // 날짜 정렬
    sortByDate(filteredData)
  }, [order])

  useEffect(() => {
    // tech, type 필터링 적용 (필터링 후 날짜 정렬)
    const arrayByType = originData.filter((item) => type.every((typeItem) => item.type.includes(typeItem)))
    const arrayByTech = arrayByType.filter((item) => tech.every((techItem) => item.tech.includes(techItem)))

    sortByDate(arrayByTech)
    setFilteredData([...arrayByTech])
  }, [tech, type])

  const sortByDate = (array, isInit = false) => {
    // 날짜 정렬 (초기에만 originData 추가)
    const arrayByDate =
      order === 0
        ? array.sort((a, b) => new Date(b.date) - new Date(a.date)) // 내림차순
        : array.sort((a, b) => new Date(a.date) - new Date(b.date)) // 오름차순

    setOrderedData([...arrayByDate])
    isInit && setOriginData([...arrayByDate])
  }

  return (
    <div className={styles.list}>
      {orderedData.map((item, index) => (
        <ProjectItem item={item} key={index} />
      ))}
    </div>
  )
}
export default ProjectList
