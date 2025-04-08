import { memo } from 'react' // 引入memo函数，用于优化组件性能
import type { FC, ReactNode } from 'react' // 引入FC和ReactNode类型
import { Link } from 'react-router-dom' // 引入Link组件，用于页面跳转
import classNames from 'classnames' // 引入classNames，用于动态添加类名
import styles from './style.module.css' // 引入样式文件

// 定义组件的props类型
interface IProps {
  children?: ReactNode // 子组件
  title?: string // 标题
  keywords?: string[] // 关键词列表
  hasMore?: boolean // 是否有更多
  moreLink?: string // 更多链接
  activeIndex?: number // 当前激活的索引
  keywordClick?: (keyword: string) => void // 关键词点击事件
}

// 定义组件
const ThemeHeaderRCM: FC<IProps> = memo(
  ({
    title = '默认标题', // 默认标题
    keywords = [], // 默认关键词列表
    hasMore = true, // 默认有更多
    moreLink = '/', // 默认更多链接
    activeIndex = 0, // 默认激活索引为0
    keywordClick // 关键词点击事件
  }) => {
    return (
      <div className={styles.headerWrapper}>
        <a className={styles.hotTitle}>{title}</a>
        <div className={styles.hotKeylist}>
          <div className={styles.keywords}>
            {keywords.map((item: string, index: number) => (
              <div
                className={classNames(styles.item, { [styles.activeText]: activeIndex === index })}
                key={`keyword-${item}-${index}`}
                onClick={() => keywordClick?.(item)}
              >
                {item}
              </div>
            ))}
          </div>
          {hasMore && (
            <div className={styles.more}>
              <Link className={styles.moreText} to={moreLink}>
                更多
              </Link>
              <i className={`iconfont icon-next ${styles.iconfont}`} aria-hidden='true'></i>
            </div>
          )}
        </div>
      </div>
    )
  }
)

ThemeHeaderRCM.displayName = 'ThemeHeaderRCM'

export default ThemeHeaderRCM
