// 定义扩大可点击区域的函数类型
type ExtendClickFunction = () => string

// 定义单行文字溢出函数类型
type NoWrapFunction = () => string

// 定义样式常量接口
interface StyleConstants {
  'theme-color': string
  'theme-color-shadow': string
  'font-color-light': string
  'font-color-desc': string
  'font-color-desc-v2': string
  'font-size-s': string
  'font-size-n': string
  'font-size-l': string
  'font-size-ll': string
  'border-color': string
  'background-color': string
  'background-color-shadow': string
  'highlight-background-color': string
  extendClick: ExtendClickFunction
  noWrap: NoWrapFunction
}

// 扩大可点击区域
const extendClick: ExtendClickFunction = () => {
  return `
    position: relative;
    &:before {
      content: '';
      position: absolute;
      top: -10px; bottom: -10px; left: -10px; right: -10px;
    };
  `
}

// 一行文字溢出部分用... 代替
const noWrap: NoWrapFunction = () => {
  return `
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  `
}

// 样式常量
const styleConstants: StyleConstants = {
  'theme-color': '#C20C0C',
  'theme-color-shadow': 'rgba(212, 68, 57, .5)',
  'font-color-light': '#f1f1f1',
  'font-color-desc': '#2E3030',
  'font-color-desc-v2': '#bba8a8', // 略淡
  'font-size-s': '12px',
  'font-size-n': '14px',
  'font-size-l': '16px',
  'font-size-ll': '20px',
  'border-color': '#e4e4e4',
  'background-color': '#f2f3f4',
  'background-color-shadow': 'rgba(0, 0, 0, 0.3)',
  'highlight-background-color': '#fff',
  extendClick,
  noWrap
}

export default styleConstants
