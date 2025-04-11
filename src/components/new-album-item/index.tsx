import { memo } from 'react'
import type { FC, ReactNode } from 'react'
import styles from './style.module.css'
import recordIcon from '@/assets/img/record_icon.png'
import { getImageSize } from '@/utils'

interface IProps {
  children?: ReactNode
  item: ItemType
  width?: string | number
}

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

const NewAlbumItem: FC<IProps> = props => {
  const { item } = props
  const itemWidth = props.width ?? 180

  const wrapperStyle = {
    width: `${itemWidth}px`
  }

  return (
    <div className={styles.newAlbumItemWrapper} style={wrapperStyle} key={item.albumId}>
      <div className={styles.newAlbumItemCover}>
        <div className={styles.cover}>
          <div className={styles.itemMask}></div>
          <div className={styles.coverImg}>
            {item.picUrl && <img src={item.picUrl && getImageSize(item.picUrl, 180)} alt='' />}
            {item.coverUrl && (
              <img src={item.coverUrl && getImageSize(item.coverUrl, 180)} alt='' />
            )}
          </div>
          <i className={`iconfont icon-play-filling ${styles.iconfont}`}></i>
        </div>
        <div className={styles.recordIconIcon}>
          <img src={recordIcon} alt='' />
        </div>
      </div>
      {item.albumName && (
        <div className={styles.newAlbumItemInfo}>
          <p className={`${styles.newAlbumName} ${styles.ellipsis}`}>{item.albumName}</p>
          <p className={`${styles.newAlbumItemSinger} ${styles.ellipsis}`}>{item.artistName}</p>
        </div>
      )}
      {item.name && (
        <div className={styles.newAlbumItemInfo}>
          <p className={`${styles.newAlbumName} ${styles.ellipsis}`}>{item.name}</p>
          <p className={`${styles.newAlbumItemSinger2} ${styles.ellipsis}`}>
            {item.artists![0].name}
          </p>
        </div>
      )}
    </div>
  )
}

NewAlbumItem.displayName = 'NewAlbumItem'

export default memo(NewAlbumItem)
