'use client'

import styles from '@/assets/styles/components/filterList.module.scss'
import catData from '@/data/categories'

const FilterItem = ({ catName, isOrder = false, recoilValue, setRecoil }) => {
  const setQueryNum = (curNum) => {
    if (isOrder) {
      setRecoil([curNum])
    } else {
      if (curNum === 'all') {
        setRecoil([])
      } else if (recoilValue.includes(curNum)) {
        const newArray = [...recoilValue]
        newArray.splice(newArray.indexOf(curNum), 1)
        setRecoil([...newArray])
      } else {
        setRecoil((prev) => [...prev, curNum])
      }
    }
  }

  return (
    <div>
      <h3 className={styles.title}>{catData.krName[catName] && catData.krName[catName]}</h3>
      <div className={`${isOrder ? 'tag-wrap tag-wrap--right' : 'tag-wrap'}`}>
        {isOrder || (
          <button className={`${recoilValue.length > 0 ? 'tag btn btn--all' : 'tag btn active'}`} onClick={() => setQueryNum('all')}>
            all
          </button>
        )}
        {Object.values(catData[catName]).map((item, index) => (
          <button className={`${recoilValue.includes(index.toString()) ? 'tag btn active' : 'tag btn'}`} key={index} onClick={() => setQueryNum(index.toString())}>
            {item}
          </button>
        ))}
      </div>
    </div>
  )
}
export default FilterItem
