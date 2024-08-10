'use client'

import ProjectItem from '@/components/ProjectItem'
import styles from '@/assets/styles/components/projectList.module.scss'

const ProjectList = ({ projects }) => {
  return (
    <div className={styles.list}>
      {projects.map((item, index) => (
        <ProjectItem item={item} key={index} />
      ))}
    </div>
  )
}
export default ProjectList
