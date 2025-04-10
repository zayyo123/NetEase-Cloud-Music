// 导出一个函数，用于格式化数字
export function formatterNumber(number: number | string) {
  // 将传入的参数转换为数字类型
  number = Number(number)
  // 如果数字大于10000，则将数字除以10000并向上取整，然后加上'万'字样
  if (number > 10000) {
    return Math.ceil(number / 10000) + '万'
  } else {
    // 否则直接返回数字
    return number
  }
}

// 导出一个函数，用于获取图片尺寸
export function getImageSize(imgUrl: string, width: number, height: number = width) {
  // 返回图片链接加上'?param=宽度x高度'的字符串
  return imgUrl + `?param=${width}x${height}`
}

// 导出一个函数，用于格式化时长
export function formatterDuration(duration: number) {
  // duration ms  1s = 1000ms
  // 将毫秒转成秒
  const timeSeconds = duration / 1000
  const min = Math.floor(timeSeconds / 60)
  const sec = Math.floor(timeSeconds % 60)
  return `${parse0(min)}: ${parse0(sec)}`
}

export function parse0(number: number | string) {
  number = Number(number)
  return number < 10 ? '0' + number : number
}

/**
 * 构造轮播图列表
 * @param showlen 一页轮播图要展示的数据条数
 * @returns number
 */

// 导出一个函数，用于根据传入的参数，返回一个包含页数的数组
export function ctrBannerList(showlen: number, data: any[]) {
  // 定义一个空数组，用于存放页数
  const banners = []
  // 计算总页数
  const page = Math.ceil(data.length / showlen)
  // 循环遍历，将页数存入数组
  for (let i = 0; i < page; i++) {
    banners.push(i)
  }
  // 返回包含页数的数组
  return banners
}

/**
 * 生成一个随机数，并确保它与上一次的不同
 * @param playlist 列表
 * @param lastRandomNumber 上一次的随机数
 * @returns
 */
export function getRandomNumber(playlist: any[], lastRandomNumber: number) {
  let random = Math.floor(Math.random() * playlist.length)

  while (random === lastRandomNumber) {
    console.log(random, lastRandomNumber)
    random = Math.floor(Math.random() * playlist.length)
    if (random !== lastRandomNumber) {
      lastRandomNumber = random
    }
  }
  return random
}
