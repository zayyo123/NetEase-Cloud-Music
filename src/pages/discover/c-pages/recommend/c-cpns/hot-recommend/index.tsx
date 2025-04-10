import { memo, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppSelector, appShallowEqual } from '@/store'

// 引入样式
import style from './style.module.css'

// 引入主题标题组件和热梦封面组件
import ThemeHeaderRCM from '@/components/theme-header-rcm'
import ThemeCover from '@/components/theme-cover'

// 热门推荐组件
const HotRecommend = memo(() => {
  // 从redux中获取推荐数据
  const { recommends } = useAppSelector(
    state => ({
      recommends: state.recommend.hot
    }),
    appShallowEqual
  )
  // 获取dispatch和navigate

  const navigate = useNavigate()

  // 点击关键词跳转
  const keywordClick = useCallback(() => {
    navigate('/discover/songs')
  }, [])

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
