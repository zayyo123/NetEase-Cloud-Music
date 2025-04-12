import React, { memo, useEffect, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { appShallowEqual, useAppDispatch, useAppSelector } from '@/store'
import { fetchSingerlistAction } from '@/store/modules/singer'

import style from './style.module.css'
import Avatar from '@/components/avatar'

interface IProps {
  children?: ReactNode
}

const Singer: FC<IProps> = () => {
  // 获取dispatch
  const dispatch = useAppDispatch()

  // 发送歌手请求数据
  useEffect(() => {
    dispatch(fetchSingerlistAction())
  }, [])

  // 获取rtk数据
  const { singerlist } = useAppSelector(
    state => ({
      singerlist: state.singer.singerlist
    }),
    appShallowEqual
  )

  return (
    <div className={style.singerWrapper}>
      <div className='section_title'>热门歌手</div>
      <div className={style.singerlistHot}>
        {singerlist.slice(0, 10).map(item => (
          <div className={style.avatarContainer} key={item.id}>
            <Avatar picUrl={item.picUrl} name={item.name} />
          </div>
        ))}
      </div>
      <div className={style.singerlistCommon}>
        {singerlist.slice(10, singerlist.length + 1).map((item, index) => (
          <span key={index} className='ellipsis'>
            {item.name}
          </span>
        ))}
      </div>
    </div>
  )
}

Singer.displayName = 'Singer'

export default memo(Singer)
