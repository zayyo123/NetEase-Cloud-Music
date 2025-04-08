import Request from './require'

// import qqMusic from 'qq-music-api'

const request = new Request({
  baseURL: '/api',
  timeout: 10000,
  interceptors: {
    request: {
      success: config => {
        return config
      }
    }
  }
})
export default request
