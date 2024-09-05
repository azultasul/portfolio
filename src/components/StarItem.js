'use client'

import Link from 'next/link'
import Image from 'next/image'
import useDate from '@/utils/useDate'
import styles from '@/assets/styles/pages/home.module.scss'

const StarItem = ({ item, index }) => {
  const date = useDate(item.date, item.endDate)

  return (
    <>
      <h3 className={styles.section__title}>
        {index + 1}. {item.title}
        <br className="show--mo" />
        <span>
          ({item.client} / {date.startDate} - {date.endDate})
        </span>
      </h3>

      <ul>
        {item.learn &&
          item.learn.map((item, index) => (
            <li className={styles.career__learn} key={index}>
              <b>•&nbsp;</b>
              {item.title && <b>{item.title}</b>}
              {item.title && item.desc && <span>&nbsp;:&nbsp;</span>}
              <span className={styles.career__desc}>{item.desc}</span>
            </li>
          ))}
      </ul>

      <div className={styles.career__tags}>
        <Link className="btn btn--line" href={`/project/${item.id}`}>
          자세히 보기
        </Link>
        {item.thumb && (
          <div className={styles.career__thumb}>
            <Image src={`/images/projects/${item.id}/${item.thumb}`} alt={item.id} width="50" height="50" style={{ objectFit: 'cover' }} />
          </div>
        )}
      </div>
    </>
  )
}
export default StarItem
