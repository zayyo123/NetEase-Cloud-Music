import { memo, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import classnames from 'classnames'
import request from '@/services'

import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

import styles from './style.module.css'

interface HeaderLinkItem {
  title: string
  link: string
}

export default memo(function AppHeader() {
  // 数据
  const [headerLinks, setHeaderLinks] = useState<HeaderLinkItem[]>([])
  // 数据请求
  useEffect(() => {
    const HeaderLinksInfo = async () => {
      try {
        const res = await request.get({
          url: '/headerLinks'
        })
        if (Array.isArray(res.data)) {
          setHeaderLinks(res.data as HeaderLinkItem[])
        } else {
          console.error('Unexpected response format:', res)
          setHeaderLinks([])
        }
      } catch (error) {
        console.error('Failed to fetch header links:', error)
        setHeaderLinks([])
      }
    }
    HeaderLinksInfo()
  }, [])

  const showItem = (item: HeaderLinkItem, index: number) => {
    if (index < 3 || index > 5) {
      return (
        <NavLink to={item.link} className={({ isActive }) => (isActive ? styles.active : '')}>
          {item.title}
          {(index < 3 || index > 5) && <i className={'logo sprite_01'}></i>}
        </NavLink>
      )
    } else {
      return (
        <a href={item.link} target='_blank' rel='noopener noreferrer'>
          {item.title}
        </a>
      )
    }
  }

  return (
    <div className={styles.AppHeaderWrapper}>
      <div className={`wrap-v1 ${styles.content}`}>
        {/* 导航栏和logo */}
        <div className={styles.HeaderLeft}>
          <a className={`${styles.logo} sprite_01`} href='/'>
            网易云音乐
          </a>
          <div className={styles.selectList}>
            {headerLinks.map((item, index) => {
              return (
                <div className={classnames(styles.selectItem)} key={item.title}>
                  {showItem(item, index)}
                </div>
              )
            })}
          </div>
        </div>
        {/* 搜索框 /创作中心和登录*/}
        <div className={styles.HeaderRight}>
          <Input
            className={styles.search}
            placeholder='音乐/视频/电台/用户'
            prefix={<SearchOutlined />}
          />
          <div className={styles.center}>创作者中心</div>
          <a className={styles.login}>登录</a>
        </div>
      </div>
      {/* 导航栏底部分割线 */}
      <div className={styles.divider}></div>
    </div>
  )
})
