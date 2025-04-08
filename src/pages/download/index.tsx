import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const downloda: FC<IProps> = () => {
  return <div>downloda</div>
}

export default memo(downloda)
