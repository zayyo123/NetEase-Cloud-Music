import { memo, useRef } from 'react'
import type { ComponentRef, FC, ReactNode } from 'react'
import { appShallowEqual, useAppSelector } from '@/store'

import { Carousel } from 'antd'

import ThemeHeaderRCM from '@/components/theme-header-rcm'
import AlbumCover from '@/components/album-cover'
import styles from './style.module.css'
import { ctrBannerList } from '@/utils'

// 定义组件的props类型
interface IProps {
  children?: ReactNode
}

// 定义组件
const New: FC<IProps> = () => {
  // 创建一个ref，用于获取Carousel组件的实例
  const newRef = useRef<ComponentRef<typeof Carousel>>(null)
  // 从store中获取新碟上架的数据
  const { newAlbum } = useAppSelector(
    state => ({
      newAlbum: state.recommend.newAlbum
    }),
    appShallowEqual
  )

  // 处理上一页按钮的点击事件
  const handlePrev = () => {
    newRef.current?.prev()
  }

  // 处理下一页按钮的点击事件
  const handleNext = () => {
    newRef.current?.next()
  }

  // 定义上一页按钮的图标
  const IconPrev = () => (
    <i className={`${styles.iconfont} ${styles.iconPrev}`} onClick={handlePrev} />
  )
  // 定义下一页按钮的图标
  const IconNext = () => (
    <i className={`${styles.iconfont} ${styles.iconNext}`} onClick={handleNext} />
  )

  return (
    <div className={styles.albumWrapper}>
      <ThemeHeaderRCM title='新碟上架' moreLink='/discover/newAlbum' />
      <div className={styles.newContent}>
        <div className={styles.banner}>
          <Carousel
            ref={newRef}
            dots={false}
            arrows
            prevArrow={<IconPrev />}
            nextArrow={<IconNext />}
          >
            {ctrBannerList(5, newAlbum).map(page => (
              <div key={page} className={styles.newAlbumContent}>
                <div className={styles.newAlbumList}>
                  {newAlbum.slice(page * 5, (page + 1) * 5).map(album => (
                    <AlbumCover key={album.albumId} item={album} />
                  ))}
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  )
}

// 设置组件的displayName
New.displayName = 'New'

// 导出组件
export default memo(New)
