import { lazy } from 'react'
import { Navigate, RouteObject } from 'react-router-dom'

// 使用更简洁的方式声明懒加载组件
const Discover = lazy(() => import('@/pages/discover'))
const Recommend = lazy(() => import('@/pages/discover/c-pages/recommend'))
const Ranking = lazy(() => import('@/pages/discover/c-pages/ranking'))
const Songs = lazy(() => import('@/pages/discover/c-pages/songs'))
const Djradio = lazy(() => import('@/pages/discover/c-pages/djradio'))
const Artist = lazy(() => import('@/pages/discover/c-pages/artist'))
const Album = lazy(() => import('@/pages/discover/c-pages/album'))
const Player = lazy(() => import('@/pages/player'))
const Friend = lazy(() => import('@/pages/friend'))
const Mine = lazy(() => import('@/pages/mine'))
const Download = lazy(() => import('@/pages/download'))

// 路由配置
const Menus: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to='/discover' replace />
  },
  {
    path: '/discover',
    element: <Discover />,
    children: [
      {
        index: true,
        element: <Recommend />
      },
      {
        path: 'recommend',
        element: <Recommend />
      },
      {
        path: 'ranking',
        element: <Ranking />
      },
      {
        path: 'songs',
        element: <Songs />
      },
      {
        path: 'djradio',
        element: <Djradio />
      },
      {
        path: 'artist',
        element: <Artist />
      },
      {
        path: 'album',
        element: <Album />
      },
      {
        path: 'player',
        element: <Player />
      }
    ]
  },
  {
    path: '/friend',
    element: <Friend />
  },
  {
    path: '/mine',
    element: <Mine />
  },
  {
    path: '/download',
    element: <Download />
  },

  {
    path: '*',
    element: <Discover />
  }
]

export default Menus
