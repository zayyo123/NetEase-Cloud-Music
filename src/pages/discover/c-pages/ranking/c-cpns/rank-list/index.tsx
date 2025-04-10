import { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'

import styles from './style.module.css'

import { formatterDuration } from '@/utils'

interface IProps {
  children?: ReactNode
  listData: any
}

const RankList: FC<IProps> = props => {
  // 属性数据
  const { listData } = props

  useEffect(() => {
    // console.log(listData)
  }, [listData])

  return (
    <div className={styles.rankListWrapper}>
      <li className={styles.ranklist_bar}>
        <div className={styles.col1}>歌曲</div>
        <div className={styles.col2}>歌手</div>
        <div className={styles.col3}>时长</div>
      </li>
      {listData.slice(0, 20).map((item: any, index: number) => (
        <li key={index} className={styles.rank_item}>
          <div className={styles.rank_number}>{index + 1}</div>
          <div className={styles.rank_coverimg}>
            <img src={`${item.al.picUrl}?param=70y70`} alt='' />
          </div>
          <div className={styles.rank_songname}>{item.name}</div>
          <div className={styles.rank_singer}>{item.ar[0].name}</div>
          <div className={styles.rank_duration}>{formatterDuration(item.dt)}</div>
        </li>
      ))}
    </div>
  )
}

RankList.displayName = 'RankList'

export default memo(RankList)
