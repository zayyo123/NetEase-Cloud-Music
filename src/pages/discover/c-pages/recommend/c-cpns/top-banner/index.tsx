import { memo, useState, useRef, useCallback } from 'react'
import type { FC, ComponentRef } from 'react'
import { useAppSelector } from '@/store'
import { Carousel } from 'antd'
import styles from './style.module.css' // 引入 CSS 模块

// 定义轮播图项的接口
interface BannerItem {
  imageUrl: string
  targetId: number
  adid: null
  targetType: number
  titleColor: string
  typeTitle: string
  url: string
  exclusive: boolean
  encodeId: string
  scm: string
}

// 定义上一张图片的图标组件
const IconPrev = memo(({ onClick }: { onClick: () => void }) => (
  <i
    className={`${styles.iconfont} ${styles.iconPrev}`}
    onClick={onClick}
    role='button'
    aria-label='Previous slide'
    tabIndex={0}
  />
))

// 定义下一张图片的图标组件
const IconNext = memo(({ onClick }: { onClick: () => void }) => (
  <i
    className={`${styles.iconfont} ${styles.iconNext}`}
    onClick={onClick}
    role='button'
    aria-label='Next slide'
    tabIndex={0}
  />
))

// 定义轮播图组件
const TopBanner: FC = () => {
  // 定义当前轮播图的索引
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  // 创建一个ref，用于获取轮播图组件的实例
  const bannerRef = useRef<ComponentRef<typeof Carousel>>(null)

  // 获取轮播图数据
  const { banner } = useAppSelector(state => ({
    banner: state.recommend.banner as BannerItem[]
  }))

  // 事件处理函数
  const handlePrev = useCallback(() => {
    bannerRef.current?.prev()
  }, [])

  const handleNext = useCallback(() => {
    bannerRef.current?.next()
  }, [])

  // 轮播图改变前的回调
  const handleBeforeChange = useCallback((current: number, next: number) => {
    setCurrentIndex(next)
  }, [])

  // 获取背景图片
  let bgImageUrl = banner[currentIndex]?.imageUrl || ''
  if (bgImageUrl) {
    bgImageUrl = bgImageUrl + '?imageView&blur=40x20'
  }

  return (
    <div
      className={styles.bannerWrapper}
      style={{
        // 设置背景图片，如果bgImageUrl存在则使用bgImageUrl，否则使用none
        background: bgImageUrl ? `url(${bgImageUrl})` : 'none'
      }}
    >
      <div className={`${styles.banner} wrap-v2`}>
        <div className={styles.bannerLeft}>
          {/* 轮播图 */}
          <Carousel
            ref={bannerRef}
            effect='fade'
            arrows
            autoplay
            prevArrow={<IconPrev onClick={handlePrev} />} // 上一张按钮
            nextArrow={<IconNext onClick={handleNext} />} // 下一张按钮
            beforeChange={handleBeforeChange} // 切换前触发
          >
            {banner.map(item => (
              <div key={item.imageUrl} className={styles.bannerItem}>
                <img
                  src={item.imageUrl}
                  className={styles.image}
                  alt={item.typeTitle || 'Banner image'} // 图片描述
                />
              </div>
            ))}
          </Carousel>
        </div>
        <div className={styles.bannerRight}>
          {/* 下载客户端 */}
          <a
            className={styles.downloadClient}
            href='https://music.163.com/#/download'
            target='_blank'
            rel='noopener noreferrer'
          ></a>
          <p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
        </div>
      </div>
    </div>
  )
}

export default memo(TopBanner)
