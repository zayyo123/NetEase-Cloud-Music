import React, { memo, Suspense } from 'react'
import { BrowserRouter, useRoutes } from 'react-router-dom'

import Menus from '@/router'
import AppHeader from '@/components/app-header'
import AppFooter from '@/components/app-footer'
import AppPlayBar from '@/pages/player/app-play-bar'

// 使用 useRoutes 渲染路由配置
const AppRoutes: React.FC = () => {
  const element = useRoutes(Menus)
  return element
}

const Main: React.FC = () => {
  return (
    <BrowserRouter>
      <AppHeader />
      <Suspense fallback={<div>loading...</div>}>
        <AppRoutes />
      </Suspense>
      <AppFooter />
      <AppPlayBar />
    </BrowserRouter>
  )
}

export default memo(Main)
