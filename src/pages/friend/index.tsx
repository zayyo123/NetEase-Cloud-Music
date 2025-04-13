import { MouseEvent, memo } from 'react'
import { FC } from 'react'
import styles from './style.module.css'

const friend: FC = () => {
  const handleLogin = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    // Assuming top.login() is a global function
    if (typeof window !== 'undefined' && window.top && 'login' in window.top) {
      ;(window.top as any).login()
    }
  }

  return (
    <div className={styles.gBdFull}>
      <div className={styles.nPglg2}>
        <div className={`${styles.welc} ${styles.sFc3} ${styles.fFs1}`}>
          你可以关注明星和好友品味他们的私房歌单
          <br />
          通过他们的动态发现更多精彩音乐
        </div>
        <a href='#' onClick={handleLogin} className={styles.btn}></a>
      </div>
    </div>
  )
}

export default memo(friend)
