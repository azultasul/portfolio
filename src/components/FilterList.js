'use client'

import { useCallback, useEffect, useState } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import catData from '@/data/categories'

const FilterList = ({ catName, isOrder = false }) => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [filteredNum, setFilteredNum] = useState([])

  useEffect(() => {
    // 초기 filteredNum 설정
    const curParams = searchParams.get(catName)
    if (isOrder) {
      setFilteredNum(['0'])
    } else if (curParams !== null) {
      curParams === '' ? setFilteredNum([]) : setFilteredNum(curParams.split(','))
    }
  }, [])

  useEffect(() => {
    router.push(pathname + '?' + createQueryString(catName), { scroll: false })
  }, [filteredNum])

  const setQueryNum = useCallback(
    (curNum) => {
      if (isOrder) {
        setFilteredNum([curNum])
      } else {
        if (curNum === 'all') {
          setFilteredNum([])
        } else if (filteredNum.includes(curNum)) {
          filteredNum.splice(filteredNum.indexOf(curNum), 1)
          setFilteredNum([...filteredNum])
        } else {
          setFilteredNum((prev) => [...prev, curNum])
        }
      }
    },
    [filteredNum]
  )

  const createQueryString = useCallback(
    (name) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, filteredNum)

      return params.toString()
    },
    [searchParams, filteredNum]
  )

  return (
    <div>
      <h3>{catData.krName[catName] && catData.krName[catName]}</h3>
      <div className="tag-wrap">
        {isOrder || (
          <button className={`${filteredNum.length > 0 ? 'tag btn' : 'tag btn active'}`} onClick={() => setQueryNum('all')}>
            all
          </button>
        )}
        {Object.values(catData[catName]).map((item, index) => (
          <button className={`${filteredNum.includes(index.toString()) ? 'tag btn active' : 'tag btn'}`} key={index} onClick={() => setQueryNum(index.toString())}>
            {item}
          </button>
        ))}
      </div>
    </div>
  )
}
export default FilterList
