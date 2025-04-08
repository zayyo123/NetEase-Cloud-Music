import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const play: FC<IProps> = () => {
  return <div>play</div>
}

export default memo(play)
