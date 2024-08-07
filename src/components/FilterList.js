'use client'

const FilterList = ({ title, list }) => {
  return (
    <div>
      <h3>{title}</h3>
      <div className="tag-wrap">
        <button className="tag">all</button>
        {Object.values(list).map((item, index) => (
          <button className="tag" key={index}>
            {item}
          </button>
        ))}
      </div>
    </div>
  )
}
export default FilterList
