import { connectDB } from '@/utils/database'
import IntroSection from '@/components/IntroSection'
import FilterList from '@/components/FilterList'
import ProjectList from '@/components/ProjectList'

const Project = async () => {
  const db = (await connectDB).db('portfolio')
  let results = await db.collection('projects').find({ display: true }).toArray()
  let projects = JSON.parse(JSON.stringify(results))
  // console.log('heads', projects)

  return (
    <>
      <IntroSection targetName="sh-project" array={['프로젝트', 'PROJECT']} />
      <div className="contents">
        <div className="container container--grid">
          <FilterList projects={projects} />
          <ProjectList projects={projects} />
        </div>
      </div>
    </>
  )
}

export default Project
