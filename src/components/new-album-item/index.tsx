import { memo } from 'react'
import type { FC, ReactNode } from 'react'
import styles from './style.module.css'
import recordIcon from '@/assets/img/record_icon.png'
import { getImageSize } from '@/utils'

// 定义组件的props类型
interface IProps {
  children?: ReactNode
  item: ItemType
  width?: string | number
}

// 定义item的类型
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

// 定义组件
const NewAlbumItem: FC<IProps> = props => {
  const { item } = props
  // 设置默认宽度
  const itemWidth = props.width ?? 180

  // 设置样式
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

// 设置组件的显示名称
NewAlbumItem.displayName = 'NewAlbumItem'

// 导出组件
export default memo(NewAlbumItem)
