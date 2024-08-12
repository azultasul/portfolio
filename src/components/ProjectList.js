'use client'

import { useRecoilValue } from 'recoil'
import ProjectItem from '@/components/ProjectItem'
import styles from '@/assets/styles/components/projectList.module.scss'
import { useEffect } from 'react'
import { atomOrder, atomTech, atomType } from '@/recoil/project'

const ProjectList = ({ projects }) => {
  const order = useRecoilValue(atomOrder)
  const tech = useRecoilValue(atomTech)
  const type = useRecoilValue(atomType)

  useEffect(() => {
    console.log('??????/', order, tech, type)
  }, [order, tech, type])

  return (
    <div className={styles.list}>
      {projects.map((item, index) => (
        <ProjectItem item={item} key={index} />
      ))}
    </div>
  )
}
export default ProjectList
