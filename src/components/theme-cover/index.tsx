import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import style from './style.module.css'
import { formatterNumber, getImageSize } from '@/utils'
// import recordPng from '@/assets/imgs/record_icon.png'

interface IProps {
  children?: ReactNode
  item: itemType
}

type itemType = {
  key?: string
  name?: string
  id?: string
  picUrl?: string
  playCount?: string
  width?: string | number
  coverImgUrl?: string
}

const ThemeCover: FC<IProps> = memo(props => {
  const { item } = props
  return (
    <div className={style.themeCoverWrapper}>
      <div className={style.hotItem} key={item.id}>
        <div className={style.itemTop}>
          <div className={style.itemImg}>
            <div className={style.itemImgBox}>
              {item.picUrl ? (
                <img src={item.picUrl && getImageSize(item.picUrl, 220)} alt='' />
              ) : (
                <img src={item.coverImgUrl && getImageSize(item.coverImgUrl, 220)} alt='' />
              )}
            </div>
            <i className={`${style.iconfont} icon-play-filling`}></i>
          </div>
          <div className={style.itemCount}>
            <span className={style.iconHeadset}></span>
            {item.playCount && formatterNumber(item.playCount)}
          </div>
        </div>
        <div className={style.itemBottom}>
          <span className={style.itemTitle}>{item.name}</span>
        </div>
      </div>
    </div>
  )
})

ThemeCover.displayName = 'ThemeCover'

export default ThemeCover
