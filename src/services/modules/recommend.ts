import request from '..'

// recommend模块的请求函数
export function getTopBanner() {
  return request.get({
    url: '/banner'
  })
}

export function getHotRecommend(limit = 30) {
  return request.get({
    url: '/personalized',
    params: {
      limit
    }
  })
}

export function getNewAlbum(limit = 30) {
  return request.get({
    url: '/album/list',
    params: {
      limit
    }
  })
}

export function getTopList(id: number) {
  return request.get({
    url: '/playlist/detail',
    params: {
      id
    }
  })
}

export function getMVList() {
  return request.get({
    url: '/personalized/mv'
  })
}

export function getNewSongs(limit = 30) {
  return request.get({
    url: '/personalized/newsong',
    params: {
      limit
    }
  })
}

export function getSongDetail(ids: number) {
  return request.get({
    url: '/song/detail',
    params: {
      ids
    }
  })
}

export function getArtistList(limit: number, cat: string) {
  return request.get({
    url: '/artist/list',
    params: {
      cat,
      limit
    }
  })
}

export function getRankList(id: number) {
  return request.get({
    url: '/playlist/detail',
    params: {
      id
    }
  })
}
