import { memo, useState, useEffect } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import styles from './style.module.css' // 引入 CSS 模块
import request from '@/services'

interface discoverMenuItem {
  title: string
  link: string
}

export default memo(function Discover() {
  const [discoverMenu, setDiscoverMenu] = useState<discoverMenuItem[]>([])

  useEffect(() => {
    // 异步获取 discoverMenu 数据
    const discoverMenuInfo = async () => {
      try {
        const res = await request.get({
          url: '/discoverMenu'
        })
        // 判断返回的数据是否为数组
        if (Array.isArray(res.data)) {
          setDiscoverMenu(res.data as discoverMenuItem[])
        } else {
          console.error('Unexpected response format:', res)
          setDiscoverMenu([])
        }
      } catch (error) {
        console.error('Error fetching discover menu:', error)
        setDiscoverMenu([])
      }
    }
    discoverMenuInfo()
  }, []) // 空数组作为依赖，只在组件挂载时执行一次

  return (
    <div className={styles.discoverWrapper}>
      <div className={styles.top}>
        <div className={`${styles.topMenu} wrap-v1`}>
          {discoverMenu.map((item, index) => {
            return (
              <div className={styles.item} key={index}>
                <NavLink
                  key={index}
                  to={item.link}
                  className={({ isActive }) => (isActive ? styles.active : '')}
                >
                  {item.title}
                </NavLink>
              </div>
            )
          })}
        </div>
      </div>
      <Outlet />
    </div>
  )
})
