'use client'

import FilterBtn from '@/components/FilterBtn'
import OrderBtn from '@/components/OrderBtn'
import { useRecoilState } from 'recoil'
import { atomOrder, atomTech, atomType } from '@/utils/recoil'
import styles from '@/assets/styles/pages/projects.module.scss'

const FilterList = ({ projects }) => {
  const [order, setOrder] = useRecoilState(atomOrder)
  const [tech, setTech] = useRecoilState(atomTech)
  const [type, setType] = useRecoilState(atomType)

  return (
    <div className="container__left">
      <div className="container__left-inner">
        <OrderBtn recoilValue={order} setRecoil={setOrder} />
        <FilterBtn
          catName="tech"
          recoilValue={tech}
          setRecoil={setTech}
          pjArray={projects.map((item) => item.tech)}
        />
        <FilterBtn
          catName="type"
          recoilValue={type}
          setRecoil={setType}
          pjArray={projects.map((item) => item.type)}
        />
      </div>
    </div>
  )
}
export default FilterList
