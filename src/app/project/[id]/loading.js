import styles from '@/assets/styles/pages/detail.module.scss'

const Loading = () => {
  return (
    <div className={`container ${styles.container}`}>
      <h1 className={styles.title}>
        <div className={`${styles.loading__title} ${styles.skeleton}`}></div>
      </h1>
      <div>
        <div className={`${styles.summary__section} ${styles.loading__section}`}>
          <div className={`${styles.loading__img} ${styles.skeleton}`}></div>
          <div className={styles.loading__info}>
            <p className={`${styles.loading__client} ${styles.skeleton}`}></p>
            <p className={`${styles.loading__date} ${styles.skeleton}`}></p>
            <div className={styles.summary__desc}>
              <p className={`${styles.loading__desc} ${styles.skeleton}`}></p>
              <p className={`${styles.loading__desc} ${styles.skeleton}`}></p>
            </div>
            <div className="tag-wrap">
              <div className={`btn btn--bg tag ${styles.loading__tag} ${styles.skeleton}`}></div>
              <div className={`btn btn--bg tag ${styles.loading__tag} ${styles.skeleton}`}></div>
              <div className={`btn btn--bg tag ${styles.loading__tag} ${styles.skeleton}`}></div>
            </div>
          </div>
        </div>

        <div className={`${styles.loading__url} ${styles.skeleton}`}></div>
      </div>

      <hr className={styles.line} />

      <div className={`${styles.learn} ${styles.loading}`}>
        <h2 className={`${styles.learn__title} ${styles.loading__subtit} ${styles.skeleton}`}></h2>
        <div className={`${styles.learn__cont} ${styles.loading__cont}`}>
          <b>•&nbsp;</b>
          <span className={`${styles.loading__line} ${styles.skeleton}`}></span>
        </div>
        <div className={`${styles.learn__cont} ${styles.loading__cont}`}>
          <b>•&nbsp;</b>
          <span className={`${styles.loading__line} ${styles.skeleton}`}></span>
        </div>
        <div className={`${styles.learn__cont} ${styles.loading__cont}`}>
          <b>•&nbsp;</b>
          <span className={`${styles.loading__line} ${styles.skeleton}`}></span>
        </div>
        <div className={`${styles.learn__cont} ${styles.loading__cont}`}>
          <b>•&nbsp;</b>
          <span className={`${styles.loading__line} ${styles.skeleton}`}></span>
        </div>
      </div>
    </div>
  )
}

export default Loading
