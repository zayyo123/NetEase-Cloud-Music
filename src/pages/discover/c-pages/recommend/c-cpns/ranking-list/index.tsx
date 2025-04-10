// 榜单
import { memo } from 'react'
import type { FC, ReactNode } from 'react'

import style from './style.module.css'
import { useAppSelector } from '@/store'
import RankList from '@/components/top-ranking'
import ThemeHeaderRCM from '@/components/theme-header-rcm'

interface IProps {
  children?: ReactNode
}

const Rank: FC<IProps> = () => {
  const { rankList } = useAppSelector(state => ({
    rankList: state.recommend.rankList
  }))

  return (
    <div>
      <ThemeHeaderRCM title='榜单' moreLink='/discover/ranking' />
      <div className={style.rankList}>
        {rankList.map(item => (
          <RankList key={item.name} item={item}></RankList>
        ))}
      </div>
    </div>
  )
}

Rank.displayName = 'Rank'

export default memo(Rank)
