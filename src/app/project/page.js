import IntroSection from '@/components/IntroSection'
import FilterList from '../../components/FilterList'

import styles from '@/assets/styles/pages/project.module.scss'
import catData from '@/data/categories'

const Project = () => {
  return (
    <>
      <IntroSection targetName="sh-project" array={['프로젝트', 'PROJECT']} />
      <div className="contents">
        <div className={`${styles.container} container`}>
          <div></div>
          <div>
            <FilterList title={catData.krName.tech} list={catData.tech} />
            <FilterList title={catData.krName.type} list={catData.type} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Project
