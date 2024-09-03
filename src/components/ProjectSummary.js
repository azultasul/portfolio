'use client'

import Link from 'next/link'
import Image from 'next/image'
import useDate from '@/utils/useDate'
import catData from '@/data/categories'
import styles from '@/assets/styles/pages/detail.module.scss'
import NavigateBtn from '@/components/NavigateBtn'

const ProjectSummary = ({ project }) => {
  const date = useDate(project.date, project.endDate)

  return (
    <div className={styles.summary}>
      <div className={styles.summary__section}>
        {project.thumb && (
          <div className={styles.summary__img}>
            <Image src={`/images/projects/${project.id}/${project.thumb}`} alt={project.id} width="240" height="180" priority />
          </div>
        )}
        <div>
          <p className={styles.summary__info}>{project.client}</p>
          <p className={styles.summary__info}>
            <span>{date.startDate}</span>
            {project.endDate && (
              <span>
                &nbsp;-&nbsp;{date.endDate} ({date.duration}개월)
              </span>
            )}
          </p>
          <p className={styles.summary__desc}>{project.desc}</p>
          <div className="tag-wrap">
            {project.tech.map((item, index) => (
              <NavigateBtn className={`btn btn--bg tag ${styles.summary__btn}`} catName="tech" catNum={item} key={index}>
                {catData.tech[item].name}
              </NavigateBtn>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.summary__url}>
        {project.url && (
          <a className={`btn btn--line ${styles.summary__btn}`} href={project.url} target="_blank">
            사이트 보기
          </a>
        )}
      </div>
    </div>
  )
}
export default ProjectSummary
