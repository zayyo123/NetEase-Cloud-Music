# 网易云音乐 PC 端仿制项目

基于 React + Vite + TypeScript + React-Redux + Ant Design + Axios + React-Router + Mockjs 实现的网易云音乐 PC 端仿制项目。

## 技术栈

- **前端框架**：React 18
- **构建工具**：Vite
- **开发语言**：TypeScript
- **状态管理**：React-Redux
- **UI 组件库**：Ant Design
- **HTTP 请求**：Axios
- **路由管理**：React-Router v6
- **CSS 预处理器**：CSS Modules
- **数据模拟**：Mockjs

## 功能特性

### 首页

- **推荐页**

  - 轮播图展示
  - 热门推荐歌单
  - 新碟上架
  - 新歌推荐
  - MV 推荐
  - 排行榜展示

- **歌手页**

  - 歌手分类展示
  - 歌手详情

- **歌单页**

  - 歌单分类展示
  - 歌单详情

- **新碟上架页**

  - 新碟展示
  - 专辑详情

- **排行榜页**

  - 排行榜列表
  - 排行榜详情

## 项目结构

```
src/
├── assets/          # 静态资源
├── components/      # 公共组件
├── pages/          # 页面组件
│   ├── discover/   # 发现音乐
│   ├── player/     # 播放器
│   ├── mine/       # 我的音乐
│   ├── friend/     # 朋友
│   └── download/   # 下载管理
├── router/         # 路由配置
├── services/       # API 服务
├── store/          # 状态管理
├── utils/          # 工具函数
└── App.tsx         # 根组件
```

## 开发环境

- Node.js >= 16.0.0
- npm >= 7.0.0

## 安装和运行

1. 克隆项目

```bash
git clone [项目地址]
```

2. 安装依赖

```bash
npm install
```

3. 启动开发服务器

```bash
npm run dev
```

4. 构建生产环境

```bash
npm run build
```

## 项目特点

- 使用 TypeScript 进行类型检查，提高代码质量
- 采用 CSS Modules 实现样式隔离
- 使用 React-Redux 进行状态管理
- 使用 Ant Design 组件库，保证 UI 美观
- 采用模块化的项目结构，便于维护和扩展
- 使用 Mockjs 模拟后端数据，实现前后端分离开发

## Mock 数据

项目使用 Mockjs 模拟后端数据，主要模拟以下接口：

- 轮播图数据
- 推荐歌单
- 新碟上架
- 新歌推荐
- MV 推荐
- 排行榜数据
- 歌手列表
- 歌单详情
- 专辑详情
- 播放器相关数据

Mock 数据位于 `src/mock` 目录下，按功能模块组织：

```
src/mock/
├── banner.ts        # 轮播图数据
├── recommend.ts     # 推荐数据
├── playlist.ts      # 歌单数据
├── album.ts         # 专辑数据
├── artist.ts        # 歌手数据
├── ranking.ts       # 排行榜数据
└── player.ts        # 播放器数据
```

## 贡献指南

1. Fork 本仓库
2. 创建新的功能分支
3. 提交您的更改
4. 推送到分支
5. 创建 Pull Request

## 许可证

MIT License
