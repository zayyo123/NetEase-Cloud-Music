import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {
  getTopBanner,
  getHotRecommend,
  getMVList,
  getNewAlbum,
  getNewSongs,
  getRankList
} from '@/services/modules/recommend'

// 创建异步thunk，用于获取轮播图数据
export const fetchBannersDataAction = createAsyncThunk('banners', async () => {
  const { data } = await getTopBanner()
  // console.log(data)
  return data
})

// 创建异步thunk，用于获取热门推荐数据
export const fetchHotDataAction = createAsyncThunk('hot', async (args, { dispatch }) => {
  const { data } = await getHotRecommend(8)

  return data
})

// 创建异步thunk，用于获取新专辑数据
export const fetchNewAlbumAction = createAsyncThunk('new', async () => {
  const { data } = await getNewAlbum()
  return data
})

// 创建异步thunk，用于获取排行榜数据
export const fetchRankListAction = createAsyncThunk('rank', async () => {
  // const idList = [19723756, 3779629, 3778678, 2884035, 60198]
  const promiseFetchList: Promise<any>[] = []
  promiseFetchList.push(getRankList(19723756))
  // for (const id of idList) {
  //   promiseFetchList.push(getRankList(id))
  // }
  return Promise.all(promiseFetchList).then(res => {
    // map playlist
    return res[0].data
  })
})

// 创建异步thunk，用于获取MV列表数据
export const fetchMVListAction = createAsyncThunk('mv', async () => {
  const { data } = await getMVList()
  return data
})

// 创建异步thunk，用于获取新歌列表数据
export const fetchNewSongListAction = createAsyncThunk('newSongs', async () => {
  const { data } = await getNewSongs()
  const res = data.result.map((item: any) => ({
    id: item.id,
    name: item.name,
    picUrl: item.picUrl,
    duration: item.song.duration,
    singerName: item.song.artists[0].name
  }))
  return res
})

// 定义推荐页面的状态接口
interface IRecommendState {
  banner: any[]
  hot: any[]
  newAlbum: any[]
  rankList: any[]
  mvList: any[]
  newSongList: any[]
}

// 定义推荐页面的初始状态
const initialState: IRecommendState = {
  banner: [],
  hot: [],
  newAlbum: [],
  rankList: [],
  mvList: [],
  newSongList: []
}

// 创建推荐页面的slice
const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {},
  // 添加额外的reducer
  extraReducers: builder => {
    // 当fetchBannersDataAction.fulfilled被触发时，将payload.banners赋值给state.banner
    builder
      .addCase(fetchBannersDataAction.fulfilled, (state, { payload }) => {
        state.banner = payload
      })
      // 当fetchHotDataAction.fulfilled被触发时，将payload.result赋值给state.hot
      .addCase(fetchHotDataAction.fulfilled, (state, { payload }) => {
        state.hot = payload
      })
      // 当fetchNewSongListAction.fulfilled被触发时，将payload赋值给state.newSongList
      .addCase(fetchNewSongListAction.fulfilled, (state, { payload }) => {
        state.newSongList = payload
      })
      // 当fetchNewAlbumAction.fulfilled被触发时，将payload.products赋值给state.newAlbum
      .addCase(fetchNewAlbumAction.fulfilled, (state, { payload }) => {
        state.newAlbum = payload
      })
      // 当fetchRankListAction.fulfilled被触发时，将payload赋值给state.rankList
      .addCase(fetchRankListAction.fulfilled, (state, { payload }) => {
        state.rankList = payload
      })
      // 当fetchMVListAction.fulfilled被触发时，将payload.result赋值给state.mvList
      .addCase(fetchMVListAction.fulfilled, (state, { payload }) => {
        state.mvList = payload
      })
  }
})

// 导出推荐页面的reducer
export default recommendSlice.reducer
