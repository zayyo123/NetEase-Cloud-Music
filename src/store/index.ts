// 引入 Redux Toolkit 中的 configureStore 函数，用于创建 Redux store
import { configureStore } from '@reduxjs/toolkit'
// 导入useSelector和useDispatch函数，用于在React组件中访问Redux store
import { useSelector, useDispatch, TypedUseSelectorHook, shallowEqual } from 'react-redux'

// 导入各个模块的slice
import DemoSlice from './modules/demo'
import recommendSlice from './modules/recommend'
import playerSlice from './modules/player'
import singerSlice from './modules/singer'
import newAlbumSlice from './modules/newAlbum'
import radioSlice from './modules/radio'
import playlistSlice from './modules/playlist'

// 使用 Redux Toolkit 的 configureStore 函数配置并创建 Redux store
const store = configureStore({
  // 指定应用的根 reducer
  reducer: {
    demo: DemoSlice,
    recommend: recommendSlice,
    player: playerSlice,
    singer: singerSlice,
    newAlbum: newAlbumSlice,
    radio: radioSlice,
    playlist: playlistSlice
  },
  // 配置中间件：getDefaultMiddleware 是 Redux Toolkit 提供的获取默认中间件的方法
  // 这里可以添加自定义中间件，但由于默认中间件已包含 redux-thunk 等常用中间件，因此无需手动添加
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
  // 配置 Redux DevTools 扩展：仅在非生产环境下启用
  devTools: process.env.NODE_ENV !== 'production'
})

// 定义RootType类型，用于表示Redux store的状态
export type RootType = ReturnType<typeof store.getState>

// 定义useAppSelector函数，用于在React组件中访问Redux store
export const useAppSelector: TypedUseSelectorHook<RootType> = useSelector
// 定义useAppDispatch函数，用于在React组件中分发Redux action
export const useAppDispatch: () => typeof store.dispatch = useDispatch
// 定义appShallowEqual函数，用于比较两个对象是否相等
export const appShallowEqual = shallowEqual

// 导出配置好的 store，以便在应用中使用
export default store
