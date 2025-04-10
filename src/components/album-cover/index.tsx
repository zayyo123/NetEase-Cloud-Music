import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import styles from './style.module.css'
import { getImageSize } from '@/utils'

// 定义组件的属性接口
interface IProps {
  children?: ReactNode
  item: ItemType
  width?: number // 修正为 number 类型
}

// 定义专辑类型的接口
type ItemType = {
  key?: string
  albumId?: number
  picUrl?: string
  coverUrl?: string
  albumName?: string
  artistName?: string
  artists?: any[]
  name?: string
}

// 定义专辑封面组件
const AlbumCover: FC<IProps> = props => {
  const { item } = props
  // 获取图片尺寸
  const imageSize = getImageSize(item.picUrl || item.coverUrl || '', 180)

  return (
    <div className={styles.newAlbumItemWrapper} key={item.albumId}>
      <div className={styles.newAlbumCover}>
        <div className={styles.coverContainer}>
          <div className={styles.itemMask}></div>
          <div className={styles.coverImg}>
            {item.picUrl && <img src={imageSize} alt='专辑封面' />}
            {item.coverUrl && <img src={imageSize} alt='专辑封面' />}
          </div>
          <i className={`${styles.iconfont} icon-play-filling ${styles.iconPlay}`}></i>
        </div>
        <div className={styles.recordIcon}></div>
      </div>

      {(item.albumName || item.name) && (
        <div className={styles.albumInfo}>
          <p className={styles.albumName}>{item.albumName || item.name}</p>
          {item.artistName ? (
            <p className={styles.albumSinger}>{item.artistName}</p>
          ) : (
            item.artists?.[0]?.name && (
              <p className={styles.albumSingerSecondary}>{item.artists[0].name}</p>
            )
          )}
        </div>
      )}
    </div>
  )
}

// 设置组件的显示名称
AlbumCover.displayName = 'AlbumCover'
// 导出组件，并使用 memo 进行优化
export default memo(AlbumCover)
