import { headers } from 'next/headers'

import IntroSection from '@/components/IntroSection'
import styles from '@/assets/styles/pages/project.module.scss'
import FilterList from '@/components/FilterList'
import projects from '@/data/projects'
import ProjectList from '@/components/ProjectList'

const Project = () => {
  const heads = headers()
  const pathname = heads.get('next-url')
  console.log('heads', pathname)
  return (
    <>
      <IntroSection targetName="sh-project" array={['프로젝트', 'PROJECT']} />
      <div className="contents">
        <div className={`${styles.container} container`}>
          <div>
            <FilterList catName="order" isOrder />
            <FilterList catName="tech" />
            <FilterList catName="type" />
          </div>
          <ProjectList projects={projects} />
        </div>
      </div>
    </>
  )
}

export default Project
