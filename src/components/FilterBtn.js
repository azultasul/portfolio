'use client'

import catData from '@/data/categories'
import styles from '@/assets/styles/pages/projects.module.scss'

const FilterBtn = ({ catName, recoilValue, setRecoil, pjArray }) => {
  const setQuery = (current) => {
    if (current === 'all') {
      setRecoil([])
    } else if (recoilValue.includes(current)) {
      const newArray = [...recoilValue]
      newArray.splice(newArray.indexOf(current), 1)
      setRecoil([...newArray])
    } else {
      setRecoil((prev) => [...prev, current])
    }
  }

  return (
    <div>
      <h3 className={styles.title}>{catData.krName[catName]}</h3>
      <div className="tag-wrap">
        <button className={`${recoilValue.length > 0 ? 'tag btn btn--bg' : 'tag btn active'}`} onClick={() => setQuery('all')}>
          All<span className={styles.btn__num}>{pjArray.length}</span>
        </button>
        {Object.entries(catData[catName]).map(([key, item]) => {
          const num = pjArray && pjArray.filter((techArray) => 
            techArray.some(tech => tech === key)
          ).length
          
          return num > 0 ? (
            <button className={`${recoilValue.includes(key) ? 'tag btn active' : 'tag btn'}`} key={key} onClick={() => setQuery(key)}>
              {item.name}
              <sup className={styles.btn__num}>{num}</sup>
            </button>
          ) : null
        })}
      </div>
    </div>
  )
}
export default FilterBtn
