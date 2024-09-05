import Countdown from '@/components/Countdown'

const NotFound = () => {
  return (
    <div className="util">
      <div className="util__text">
        <h1>404 : 없는 페이지입니다 🙅🏻‍♂️</h1>

        <div className="tag-wrap">
          <button className="btn btn--line">
            <h3>
              🗃️<span>프로젝트 보기</span> <Countdown path="/project" time={4} />
            </h3>
          </button>
        </div>
      </div>
    </div>
  )
}

export default NotFound
