import React, { memo, useEffect, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { appShallowEqual, useAppDispatch, useAppSelector } from '@/store'
import { fetchPlaylistAction } from '@/store/modules/playlist'

import { Pagination } from 'antd'
import type { PaginationProps } from 'antd'

import SongsItem from '@/components/songs-item'
import style from './style.module.css'

interface IProps {
  children?: ReactNode
}
// 歌单组件
const Songlist: FC<IProps> = () => {
  const [current, setCurrent] = useState(1)
  // 从rtk拿取数据
  const { playlist } = useAppSelector(
    state => ({
      playlist: state.playlist.playlist
    }),
    appShallowEqual
  )

  // 拿取dispatch
  const dispatch = useAppDispatch()

  // 发送请求
  useEffect(() => {
    dispatch(fetchPlaylistAction(0))
  }, [])

  const onChange: PaginationProps['onChange'] = page => {
    setCurrent(page)
    dispatch(fetchPlaylistAction(page))
  }

  return (
    <div className={style.songlistWrapper}>
      <div className='section_title'>热门歌单</div>
      <div className={style.songlistContainer}>
        {playlist.map(item => (
          <div key={item.id} className={style.songlistItem}>
            <SongsItem item={item} />
          </div>
        ))}
      </div>
      <Pagination onChange={onChange} total={660} pageSize={28} />
    </div>
  )
}

Songlist.displayName = 'Songlist'

export default memo(Songlist)
