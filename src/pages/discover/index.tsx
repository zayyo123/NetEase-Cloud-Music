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
    const discoverMenuInfo = async () => {
      try {
        const res = await request.get({
          url: '/discoverMenu'
        })
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
  }, [])

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
