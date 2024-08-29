import Image from 'next/image'
import { notFound } from 'next/navigation'
import { connectDB } from '@/utils/database'
import styles from '@/assets/styles/pages/detail.module.scss'
import ProjectSummary from '@/components/ProjectSummary'

const Detail = async ({ params }) => {
  const db = (await connectDB).db('portfolio')
  let result = await db.collection('projects').findOne({ id: params.id })

  if (result === null) {
    return notFound()
  }

  return (
    <div className={`container ${styles.container}`}>
      <h1>{result.title}</h1>
      <ProjectSummary result={result} />
      <div>
        {result.learn.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
      <div>
        {result.work.map((item, index) => (
          <div key={index}>
            {item.title && <div>{item.title}</div>}
            {item.video && <video src={`/images/projects/${result.id}/${item.video}`} autoPlay muted loop playsInline width="100%"></video>}
            {item.image && <Image src={`/images/projects/${result.id}/${item.image}`} alt={result.id} width="100" height="100" />}
            {item.number && <div>{item.number}</div>}
            {item.title && <div>{item.title}</div>}
            {item.desc && <div>{item.desc}</div>}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Detail
