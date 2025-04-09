import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { createStyleImportPlugin } from 'vite-plugin-style-import'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    createStyleImportPlugin({
      resolves: [
        {
          libraryName: 'antd',
          esModule: true,
          resolveStyle: name => {
            return `antd/es/${name}/style/index`
          }
        }
      ]
    })
  ],
  resolve: {
    alias: {
      // 将 '@' 映射到项目的 'src' 目录
      '@': path.resolve(__dirname, 'src'),
      // 例如，将 '@components' 映射到 'src/components' 目录
      '@components': path.resolve(__dirname, 'src/components'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      'react-is': path.resolve(__dirname, 'node_modules/react-is')
    }
  },
  server: {
    open: true, // 启动项目时自动打开浏览器
    port: 7080, // 设置端口号
    proxy: {
      '/api': {
        target: 'http://localhost:7080', // 指向本地
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      }
    }
  }
})
