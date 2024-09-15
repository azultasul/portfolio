import { notFound } from 'next/navigation'
import { connectDB } from '@/utils/database'
import Image from 'next/image'
import ProjectSummary from '@/components/ProjectSummary'
import styles from '@/assets/styles/pages/detail.module.scss'

const Detail = async ({ params }) => {
  const db = (await connectDB).db('portfolio')
  let result = await db.collection('projects').findOne({ id: params.id })
  let project = JSON.parse(JSON.stringify(result))

  if (project === null) {
    return notFound()
  }

  return (
    <div className={`container ${styles.container}`}>
      <h1 className={styles.title}>{project.title}</h1>
      <ProjectSummary project={project} />

      <hr className={styles.line} />

      <div className={styles.learn}>
        <h2 className={styles.learn__title}>작업 내용</h2>
        {project.learn &&
          project.learn.map((item, index) => (
            <div className={styles.learn__cont} key={index}>
              <b>•&nbsp;</b>
              {item.title && <b>{item.title}</b>}
              {item.title && item.desc && <span className={styles.learn__line}>&nbsp;|&nbsp;</span>}
              <span className={styles.learn__desc}>{item.desc}</span>
            </div>
          ))}
      </div>

      <div className={styles.work}>
        {project.work &&
          project.work.map((item, index) => (
            <div className={styles.work__cont} key={index}>
              <div className={styles.work__text}>
                {item.title && (
                  <h3>
                    {item.number && <span>{item.number}</span>}
                    &nbsp;{item.title}
                  </h3>
                )}
                {item.desc && <div>{item.desc}</div>}
              </div>
              <div className={styles.work__media}>
                {item.video && <video src={`/images/projects/${project.id}/${item.video}`} autoPlay muted loop playsInline width="720"></video>}
                {item.image && <Image src={`/images/projects/${project.id}/${item.image}`} alt={project.id} width="720" height="300" priority />}
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Detail
