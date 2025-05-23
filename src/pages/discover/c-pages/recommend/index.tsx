import { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { useAppDispatch } from '@/store'

import styles from './style.module.css' // 引入 CSS 模块

import TopBanner from './c-cpns/top-banner' // 引入轮播图组件
import HotRecommend from './c-cpns/hot-recommend'
import NewAlbum from './c-cpns/new-album'
import RankingList from './c-cpns/ranking-list'
import Sidebar from './c-cpns/recommendRight'
// import SettleSinger from './c-cpns/settle-singer';
// import HotRadio from './c-cpns/hot-radio';

// 发起请求，获取数据
import {
  fetchBannersDataAction,
  fetchHotDataAction,
  fetchNewAlbumAction,
  fetchRankListAction,
  fetchNewSongListAction
} from '@/store/modules/recommend' // 引入推荐页面的 action

interface IProps {
  children?: ReactNode
}

const recommend: FC<IProps> = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchBannersDataAction()) // 获取轮播图数据
    dispatch(fetchHotDataAction()) // 获取热门推荐数据
    dispatch(fetchNewAlbumAction())
    dispatch(fetchNewSongListAction())
    dispatch(fetchRankListAction())
  }, [])
  return (
    <div>
      {/* 轮播图 */}
      <TopBanner />
      <div className={`${styles.content} wrap-v2`}>
        <div className={styles.recommendLeft}>
          {/* 热门推荐 */}
          <HotRecommend />
          {/* 新碟上架 */}
          <NewAlbum />
          {/* 榜单 */}
          <RankingList />
        </div>
        <div className={styles.recommendRight}>
          {/* 右边栏 */}
          <Sidebar />
        </div>
      </div>
    </div>
  )
}

export default memo(recommend)
