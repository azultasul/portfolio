'use client'

import Link from 'next/link'
import catData from '@/data/categories'
import styles from '@/assets/styles/pages/projects.module.scss'

const ProjectItem = ({ item }) => {
  return (
    <Link className={styles.card} href={`/project/${item.id}`}>
      <div>
        <h3 className={styles.card__title}>{item.title}</h3>
        {item.star && <div>⭐️</div>}
        <div className={styles.card__client}>{item.client}</div>
        <div className={styles.card__date}>
          {item.date} - {item.endDate}
        </div>
        <p className={styles.card__desc}>{item.desc}</p>
      </div>
      <div className={`tag-wrap ${styles.card__tags}`}>
        {item.tech.map((item, index) => (
          <span className={`tag ${styles.card__tag}`} key={index}>
            {catData.tech[item]}
          </span>
        ))}
      </div>
    </Link>
  )
}
export default ProjectItem
