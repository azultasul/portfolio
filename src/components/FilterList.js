'use client'

import FilterBtn from '@/components/FilterBtn'
import OrderBtn from '@/components/OrderBtn'
import { useRecoilState, useRecoilValueLoadable } from 'recoil'
import { atomOrder, atomTech, atomType, projectData } from '@/utils/recoil'

const FilterList = () => {
  const [order, setOrder] = useRecoilState(atomOrder)
  const [tech, setTech] = useRecoilState(atomTech)
  const [type, setType] = useRecoilState(atomType)
  const projects = useRecoilValueLoadable(projectData)

  return (
    <div>
      <OrderBtn recoilValue={order} setRecoil={setOrder} />
      <FilterBtn catName="tech" recoilValue={tech} setRecoil={setTech} pjArray={projects.state === 'hasValue' && projects.contents.map((item) => item.tech)} />
      <FilterBtn catName="type" recoilValue={type} setRecoil={setType} pjArray={projects.state === 'hasValue' && projects.contents.map((item) => item.type)} />
    </div>
  )
}
export default FilterList
