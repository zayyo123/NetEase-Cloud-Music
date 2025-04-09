import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import styles from './style.module.css'
import { useAppDispatch } from '@/store'
import { fetchCurrentSongAction } from '@/store/modules/player'
import { Link } from 'react-router-dom'

interface IProps {
  children?: ReactNode
  item: ItemType
}

type ItemType = {
  name?: string
  tracks?: any
  coverImgUrl?: string
}

interface song {
  name: string
  mainTitle: unknown
  additionalTitle: unknown
  id: number
  pst: number
}

const RankList: FC<IProps> = props => {
  const { item } = props
  const { tracks, coverImgUrl } = item

  const dispatch = useAppDispatch()
  // 点击播放歌曲
  function handlePlaySong(id: number) {
    dispatch(fetchCurrentSongAction(id))
  }

  // Set the background image dynamically as inline style
  const backgroundStyle = {
    backgroundImage: `url(${coverImgUrl + '?imageView&blur=40x20'})`
  }
  console.log(tracks)

  return (
    <div className={styles.rankListWrapper} style={backgroundStyle}>
      <div className={styles.rankListContainer}>
        <div className={styles.rankListTop}>
          <div className={styles.rankTopTitle}>巅峰榜</div>
          <div className={`${styles.rankTitle} ${styles.ellipsis}`}>{item.name}</div>
        </div>
        <div className={styles.rankListContent}>
          {tracks.map((song: song, index: number) => (
            <div key={song.id} className={styles.rankSong} onClick={() => handlePlaySong(song.id)}>
              <Link to={`/player/${song.id}`} className={styles.songLink}>
                <div className={styles.rankNumber}>{index + 1}</div>
                <div className={`${styles.rankSongName} ${styles.ellipsis}`}>{song.name}</div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

RankList.displayName = 'RankList'

export default memo(RankList)
