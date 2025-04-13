import { MouseEvent, memo } from 'react'
import { FC } from 'react'
import styles from './style.module.css'

const mine: FC = () => {
  const handlemine = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    // Assuming top.mine() is a global function
    if (typeof window !== 'undefined' && window.top && 'mine' in window.top) {
      ;(window.top as any).mine()
    }
  }

  return (
    <div className={styles.gBdFull}>
      <div className={styles.nPglg}>
        <div className={styles.pic}>
          <h2></h2>
          <a href='#' onClick={handlemine} className={styles.btn}></a>
        </div>
      </div>
    </div>
  )
}

export default memo(mine)
