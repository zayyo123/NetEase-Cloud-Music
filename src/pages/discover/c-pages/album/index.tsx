import React, { memo, useEffect, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { useAppDispatch, useAppSelector } from '@/store'
import { fetchAllNewAlbumListAction } from '@/store/modules/newAlbum'

import { Pagination } from 'antd'
import type { PaginationProps } from 'antd'

import style from './style.module.css'
import NewAlbumItem from '@/components/new-album-item'

interface IProps {
  children?: ReactNode
}

const NewAlbum: FC<IProps> = () => {
  const [current, setCurrent] = useState(1)
  // 获取dispatch
  const dispatch = useAppDispatch()

  // fetch请求
  useEffect(() => {
    dispatch(fetchAllNewAlbumListAction(0))
  }, [])

  // 从rtk里获取数据
  const { newAlbumList } = useAppSelector(state => ({
    newAlbumList: state.newAlbum.newAlbumList
  }))

  const onChange: PaginationProps['onChange'] = page => {
    setCurrent(page)
    dispatch(fetchAllNewAlbumListAction(page))
  }

  return (
    <div className={style.newAlbumWrapper}>
      <div className='section_title'>新碟上架</div>
      <div className={style.newAlbumContainer}>
        {newAlbumList.map(item => (
          <div key={item.id} className={style.newAlbumItem}>
            <NewAlbumItem item={item} />
          </div>
        ))}
      </div>
      <Pagination onChange={onChange} total={500} pageSize={35} />
    </div>
  )
}

NewAlbum.displayName = 'NewAlbum'

export default memo(NewAlbum)
