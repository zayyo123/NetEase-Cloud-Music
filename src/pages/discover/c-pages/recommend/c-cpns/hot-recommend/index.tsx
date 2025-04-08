import { memo, useCallback, useState } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { useNavigate } from 'react-router-dom'

// 引入样式
import style from './style.module.css'

// 引入主题头部组件和主题封面组件
import ThemeHeaderRCM from '@/components/theme-header-rcm'
import ThemeCover from '@/components/theme-cover'

interface PersonalizedItem {
  id: number
  type: number
  name: string
  copywriter: string
  picUrl: string
  canDislike: boolean
  trackNumberUpdateTime: number
  playCount: number
  trackCount: number
  highQuality: boolean
  alg: string
}

// 热门推荐组件
const HotRecommend = memo(() => {
  // redux hooks
  const [curIndex, setCurIndex] = useState(0)
  // 从redux中获取推荐数据
  const { recommends } = useSelector(
    state => ({
      recommends: state.recommend.hot
      // recommends: state.recommend as PersonalizedItem[]
    }),
    shallowEqual
  )
  console.log(recommends)
  // 获取dispatch和navigate

  const navigate = useNavigate()

  // 点击关键词跳转
  const keywordClick = useCallback(() => {
    navigate('/discover/songs')
  }, [navigate])

  return (
    <div className={style.recommendWrapper}>
      <ThemeHeaderRCM
        title='热门推荐'
        keywords={['华语', '流行', '摇滚', '民谣', '电子']}
        moreLink='/discover/songs'
        keywordClick={keywordClick}
      />
      <div className={style.recommendList}>
        {recommends.slice(0, 8).map(item => (
          <ThemeCover item={item} key={item.id} />
        ))}
      </div>
    </div>
  )
})

HotRecommend.displayName = 'HotRecommend'

export default HotRecommend
