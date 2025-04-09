import { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { useAppDispatch } from '@/store'

import styles from './style.module.css' // 引入 CSS 模块

import {
  fetchBannersDataAction,
  fetchHotDataAction,
  fetchNewAlbumAction
} from '@/store/modules/recommend' // 引入推荐页面的 action

import TopBanner from './c-cpns/top-banner' // 引入轮播图组件
import HotRecommend from './c-cpns/hot-recommend'
import NewAlbum from './c-cpns/new-album'
// import RankingList from './c-cpns/ranking-list';
// import UserLogin from './c-cpns/user-login';
// import SettleSinger from './c-cpns/settle-singer';
// import HotRadio from './c-cpns/hot-radio';

interface IProps {
  children?: ReactNode
}

const recommend: FC<IProps> = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchBannersDataAction()) // 获取轮播图数据
    dispatch(fetchHotDataAction()) // 获取热门推荐数据
    dispatch(fetchNewAlbumAction())
  })
  return (
    <div>
      {/* 轮播图 */}
      <TopBanner />
      <div className={`${styles.content} wrap-v2`}>
        <div className={styles.recommendLeft}>
          <HotRecommend />
          <NewAlbum />
        </div>
        <div className={styles.recommendRight}></div>
      </div>
    </div>
  )
}

export default memo(recommend)
