// craco.config.js
const path = require('path')

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/components')
    }
  }
  // 你还可以添加其他配置，如 Babel、PostCSS 等
}
