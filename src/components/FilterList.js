'use client'

import FilterItem from '@/components/FilterItem'
import { useRecoilState } from 'recoil'
import { atomOrder, atomTech, atomType } from '@/utils/recoil'

const FilterList = () => {
  const [order, setOrder] = useRecoilState(atomOrder)
  const [tech, setTech] = useRecoilState(atomTech)
  const [type, setType] = useRecoilState(atomType)

  return (
    <div>
      <FilterItem catName="order" isOrder recoilValue={order} setRecoil={setOrder} />
      <FilterItem catName="tech" recoilValue={tech} setRecoil={setTech} />
      <FilterItem catName="type" recoilValue={type} setRecoil={setType} />
    </div>
  )
}
export default FilterList
