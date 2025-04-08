import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import store from '@/store/index.ts'
import '@/assets/css/base.css'
import './mock/index.ts'
import Main from '@/pages/main/index.tsx'

// 创建一个 App 组件来使用 useRoutes

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <Main />
    </Provider>
  </StrictMode>
)
