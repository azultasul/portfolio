import { headers } from 'next/headers'

import IntroSection from '@/components/IntroSection'

import styles from '@/assets/styles/pages/project.module.scss'
import FilterList from '@/components/FilterList'

const Project = () => {
  const heads = headers()
  const pathname = heads.get('next-url')
  console.log('heads', pathname)
  return (
    <>
      <IntroSection targetName="sh-project" array={['프로젝트', 'PROJECT']} />
      <div className="contents">
        <div className={`${styles.container} container`}>
          <div></div>
          <div>
            <FilterList catName="order" isOrder />
            <FilterList catName="tech" />
            <FilterList catName="type" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Project
