import { memo } from 'react'
import type { FC, ReactNode } from 'react'

import styles from './style.module.css'
import RecordIcon from '@/assets/img/record_icon.png'

interface IProps {
  children?: ReactNode
  width?: number
  picUrl?: string
  name?: string
}

const Avatar: FC<IProps> = props => {
  // 从属性取数据
  const { width = 120, picUrl, name } = props
  // 头像图片
  const pic = picUrl ? `${picUrl}?param=120y120` : RecordIcon

  // Create dynamic styles for the avatar size
  const avatarImgStyle = {
    width: `${width}px`,
    height: `${width}px`
  }

  return (
    <div className={styles.avatarWrapper}>
      <div className={styles.avatarImg} style={avatarImgStyle}>
        <img src={pic} alt='' />
      </div>
      <p>{name}</p>
    </div>
  )
}

Avatar.displayName = 'Avatar'

export default memo(Avatar)
