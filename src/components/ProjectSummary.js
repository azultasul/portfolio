'use client'

import Link from 'next/link'
import Image from 'next/image'
import useDate from '@/utils/useDate'
import catData from '@/data/categories'
import styles from '@/assets/styles/pages/projects.module.scss'

const ProjectSummary = ({ result }) => {
  const date = useDate(result.date, result.endDate)

  return (
    <>
      {result.thumb && (
        <Image
          src={`/images/projects/${result.id}/thumb.jpeg`}
          alt={result.id}
          width="100"
          height="100"
        />
      )}
      <div>{date.startDate}</div>
      <div>{date.endDate}</div>
      <div>
        {result.tech.map((item, index) => (
          <span key={index}>{catData.tech[item].name}</span>
        ))}
      </div>
      <div>
        {result.type.map((item, index) => (
          <span key={index}>{catData.type[item].name}</span>
        ))}
      </div>
      <div>{result.client}</div>
      <div>{result.url}</div>
      <div>{result.gitUrl}</div>
      <div>{result.desc}</div>
    </>
  )
}
export default ProjectSummary
