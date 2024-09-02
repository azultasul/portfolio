import IntroSection from '@/components/IntroSection'
import Image from 'next/image'
import styles from '@/assets/styles/pages/contact.module.scss'

const Contact = () => {
  return (
    <>
      <IntroSection targetName="sh-contact" array={['컨택미', 'CONTACT']} />
      <div className="contents">
        <div className="container container--grid">
          <div className="container__left">
            <div className={`container__left-inner ${styles.about}`}>
              <Image src={`/images/dasol-emoji.png`} alt="skill" width="95" height="95" />
              <div className={`${styles.tags}`}>
                {/* <span className={`${styles.tags__item}`}>
                  <Image src={`/images/skills/linkedin.svg`} alt="linkedin" width="30" height="30" />
                  <span>azultasul</span>
                </span> */}
                <span className={`${styles.tags__item}`}>
                  <Image src={`/images/skills/github.svg`} alt="github" width="30" height="30" />
                  <span>azultasul</span>
                </span>
                <span className={`${styles.tags__item}`}>
                  <Image src={`/images/skills/gmail.svg`} alt="gmail" width="30" height="30" />
                  <span>dasolyou@gmail.com</span>
                </span>
                <span className={`${styles.tags__item}`}>
                  <Image src={`/images/skills/kakao.svg`} alt="kakao" width="30" height="30" />
                  <span>dassol</span>
                </span>
              </div>
            </div>
          </div>
          <h1>contact</h1>
        </div>
      </div>
    </>
  )
}

export default Contact
