import Link from 'next/link'
import Countdown from '@/components/Countdown'

const NotFound = () => {
  return (
    <div className="util">
      <div className="util__text">
        <h1>404 : 없는 페이지🙅🏻‍♂️</h1>

        <div className="tag-wrap">
          <Link href="/" scroll={false} className="btn btn--line">
            <h3>
              🏠<span> 홈으로 가기</span> <Countdown path="/" time={4} />
            </h3>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound
