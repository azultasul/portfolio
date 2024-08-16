import { connectDB } from '@/utils/database'
import IntroSection from '@/components/IntroSection'
import FilterList from '@/components/FilterList'
import ProjectList from '@/components/ProjectList'

const Project = async () => {
  const db = (await connectDB).db('portfolio')
  let projects = await db.collection('projects').find().toArray()
  // console.log('heads', projects)

  return (
    <>
      <IntroSection targetName="sh-project" array={['프로젝트', 'PROJECT']} />
      <div className="contents">
        <div className="container container--grid">
          <FilterList projects={JSON.parse(JSON.stringify(projects))} />
          <ProjectList projects={JSON.parse(JSON.stringify(projects))} />
        </div>
      </div>
    </>
  )
}

export default Project
