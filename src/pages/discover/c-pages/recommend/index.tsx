import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { useAppDispatch } from '@/store'

import styles from './style.module.css' // 引入 CSS 模块

import { fetchBannersDataAction } from '@/store/modules/recommend' // 引入推荐页面的 action

import TopBanner from './c-cpns/top-banner' // 引入轮播图组件

interface IProps {
  children?: ReactNode
}

const recommend: FC<IProps> = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchBannersDataAction()) // 获取轮播图数据
  })
  return (
    <div>
      {/* 轮播图 */}
      <TopBanner />
      <div className={`${styles.content} wrap-v2`}>
        <div className={styles.recommendLeft}></div>
        <div className={styles.recommendRight}></div>
      </div>
    </div>
  )
}

export default memo(recommend)
