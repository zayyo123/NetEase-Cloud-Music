import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import styles from './style.module.css'
import { formatterNumber, getImageSize } from '@/utils'

// 定义组件的props类型
interface IProps {
  children?: ReactNode
  item: itemType
}

// 定义item的类型
type itemType = {
  key?: string
  name?: string
  id?: string
  picUrl?: string
  playCount?: string
  width?: string | number
  coverImgUrl?: string
}

// 定义组件
const SongsItemV1: FC<IProps> = memo(props => {
  const { item } = props
  // 如果item有width属性，则使用item.width，否则使用220
  const itemWidth = item.width || 220

  // 定义容器的样式
  const containerStyle = {
    width: `${itemWidth}px`
  }

  // 定义图片容器的样式
  const imageContainerStyle = {
    height: `${itemWidth}px`
  }

  // 定义图片的样式
  const imageStyle = {
    height: `${itemWidth}px`
  }

  return (
    <div style={containerStyle}>
      <div className={styles.hotItem} key={item.id}>
        <div className={styles.itemTop} style={containerStyle}>
          <div className={styles.itemImg} style={imageContainerStyle}>
            <div className={styles.itemImgBox} style={imageContainerStyle}>
              {item.picUrl ? (
                <img
                  style={imageStyle}
                  src={item.picUrl && getImageSize(item.picUrl, 220)}
                  alt=''
                />
              ) : (
                <img
                  style={imageStyle}
                  src={item.coverImgUrl && getImageSize(item.coverImgUrl, 220)}
                  alt=''
                />
              )}
            </div>
            <i className={`iconfont icon-play-filling ${styles.iconfont}`}></i>
          </div>
          <div className={styles.itemCount}>
            播放量 {item.playCount && formatterNumber(item.playCount)}
          </div>
        </div>
        <div className={styles.itemBottom}>
          <span className={styles.itemTitle}>{item.name}</span>
        </div>
      </div>
    </div>
  )
})

// 设置组件的displayName
SongsItemV1.displayName = 'SongsItemV1'

// 导出组件
export default SongsItemV1
