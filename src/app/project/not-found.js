import Link from 'next/link'
import Countdown from '@/components/Countdown'

const NotFound = () => {
  return (
    <div className="util">
      <div className="util__text">
        <h1>404 : 없는 페이지🙅🏻‍♂️</h1>

        <div className="tag-wrap">
          <Link href="/project" scroll={false} className="btn btn--line">
            <h3>
              🗃️<span> 프로젝트 보기</span> <Countdown path="/project" time={4} />
            </h3>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound
