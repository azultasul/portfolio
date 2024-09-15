'use client'

import Link from 'next/link'
import Image from 'next/image'
import useDate from '@/utils/useDate'
import catData from '@/data/categories'
import styles from '@/assets/styles/pages/projects.module.scss'

const ProjectItem = ({ item }) => {
  const date = useDate(item.date, item.endDate)

  return (
    <Link className={styles.card} href={`/project/${item.id}`}>
      <div>
        <div className={styles.card__summary}>
          {item.thumb && (
            <div className={styles.card__thumb}>
              <Image
                src={`/images/projects/${item.id}/${item.thumb}`}
                alt={item.id}
                width="120"
                height="120"
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
          )}
          <div className={styles.card__wrap}>
            <h3 className={styles.card__title}>
              {item.title}
              {item.star && <span className={styles.card__star}>★</span>}
            </h3>
            <div className={styles.card__inner}>
              <div className={styles.card__client}>{item.client}</div>
              <div className={styles.card__date}>
                <span>{date.startDate}</span>
                {item.endDate && <span>&nbsp;-&nbsp;{date.endDate}</span>}
              </div>
            </div>
          </div>
        </div>
        {item.desc && <p className={styles.card__desc}>{item.desc}</p>}
      </div>
      <div className={`tag-wrap ${styles.card__tags}`}>
        {item.tech.map((item, index) => (
          <span className={`tag ${styles.card__tag}`} key={index}>
            {catData.tech[item].name}
          </span>
        ))}
      </div>
    </Link>
  )
}
export default ProjectItem
