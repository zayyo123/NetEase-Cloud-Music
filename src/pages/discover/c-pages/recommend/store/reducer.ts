// recommend/store/index.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// 定义状态类型
interface RecommendState {
  topBanners: any[] // 建议替换为具体类型（如 Banner[]）
  hotRecommends: any[] // 建议替换为具体类型
  newAlbum: any[]
  topUpList: object
  topNewList: object
  topOriginList: object
  settleSings: any[] // 建议替换为具体类型
}

// 初始状态
const initialState: RecommendState = {
  topBanners: [],
  hotRecommends: [],
  newAlbum: [],
  topUpList: {},
  topNewList: {},
  topOriginList: {},
  settleSings: []
}

const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {
    changeTopBanner(state, action: PayloadAction<any[]>) {
      state.topBanners = action.payload
    },
    changeHotRecommend(state, action: PayloadAction<any[]>) {
      state.hotRecommends = action.payload
    },
    changeNewAlbum(state, action: PayloadAction<any[]>) {
      state.newAlbum = action.payload
    },
    changeUpList(state, action: PayloadAction<object>) {
      state.topUpList = action.payload
    },
    changeNewList(state, action: PayloadAction<object>) {
      state.topNewList = action.payload
    },
    changeOriginList(state, action: PayloadAction<object>) {
      state.topOriginList = action.payload
    },
    changeSettleSonger(state, action: PayloadAction<any[]>) {
      state.settleSings = action.payload
    }
  }
})

// 导出 actions
export const {
  changeTopBanner,
  changeHotRecommend,
  changeNewAlbum,
  changeUpList,
  changeNewList,
  changeOriginList,
  changeSettleSonger
} = recommendSlice.actions

// 导出 reducer
export default recommendSlice.reducer
