'use client'

import catData from '@/data/categories'
import styles from '@/assets/styles/pages/projects.module.scss'

const FilterBtn = ({ catName, recoilValue, setRecoil, pjArray }) => {
  const setQueryNum = (curNum) => {
    if (curNum < 0) {
      setRecoil([])
    } else if (recoilValue.includes(curNum)) {
      const newArray = [...recoilValue]
      newArray.splice(newArray.indexOf(curNum), 1)
      setRecoil([...newArray])
    } else {
      setRecoil((prev) => [...prev, curNum])
    }
  }

  return (
    <div>
      <h3 className={styles.title}>{catData.krName[catName]}</h3>
      <div className="tag-wrap">
        <button className={`${recoilValue.length > 0 ? 'tag btn btn--bg' : 'tag btn active'}`} onClick={() => setQueryNum(-1)}>
          All<span className={styles.btn__num}>{pjArray.length}</span>
        </button>
        {Object.values(catData[catName]).map((item, index) => {
          const num = pjArray && pjArray.filter((item) => item.includes(index)).length
          return num > 0 ? (
            <button className={`${recoilValue.includes(index) ? 'tag btn active' : 'tag btn'}`} key={index} onClick={() => setQueryNum(index)}>
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
