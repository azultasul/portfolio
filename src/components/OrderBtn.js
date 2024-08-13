'use client'

import catData from '@/data/categories'

const OrderBtn = ({ recoilValue, setRecoil }) => {
  return (
    <div className="tag-wrap tag-wrap--right">
      {Object.values(catData.order).map((item, index) => (
        <button className={`${recoilValue === index ? 'tag btn active' : 'tag btn'}`} key={index} onClick={() => setRecoil(index)}>
          {item}
        </button>
      ))}
    </div>
  )
}
export default OrderBtn
