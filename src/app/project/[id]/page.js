import { notFound } from 'next/navigation'
import { connectDB } from '@/utils/database'
import catData from '@/data/categories'
import styles from '@/assets/styles/pages/detail.module.scss'

const Detail = async ({ params }) => {
  const db = (await connectDB).db('portfolio')
  let result = await db.collection('projects').findOne({ id: params.id })

  if (result === null) {
    return notFound()
  }

  return (
    <div className={`container ${styles.container}`}>
      <h1>{result.title}</h1>
      <div>{result.thumb}</div>
      <div>{result.date}</div>
      <div>{result.endDate}</div>
      <div>
        {result.tech.map((item, index) => (
          <span key={index}>{catData.tech[item]}</span>
        ))}
      </div>
      <div>
        {result.type.map((item, index) => (
          <span key={index}>{catData.type[item]}</span>
        ))}
      </div>
      <div>{result.client}</div>
      <div>{result.url}</div>
      <div>{result.gitUrl}</div>
      <div>{result.desc}</div>
      <div>
        {result.learn.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
      <div>
        {result.work.map((item, index) => (
          <div key={index}>
            {item.title && <div>{item.title}</div>}
            {item.video && <div>{item.video}</div>}
            {item.image && <div>{item.image}</div>}
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
