import Mock from 'mockjs'
import { data } from 'react-router-dom'

// 配置延迟（可选）
Mock.setup({
  timeout: '200-400'
})

Mock.mock('/api/user', 'get', {
  code: 200,
  message: 'success',
  data: {
    name: '张三',
    age: 25
    // 其他用户数据
  }
})

// 模拟顶部导航数据
Mock.mock('/api/headerLinks', 'get', {
  code: 200,
  data: [
    {
      title: '发现音乐',
      link: '/discover'
    },
    {
      title: '我的音乐',
      link: '/mine'
    },
    {
      title: '关注',
      link: '/https://music.163.com/?from=infinity#/friend'
    },
    {
      title: '商城',
      link: 'https://music.163.com/store/product'
    },
    {
      title: '音乐人',
      link: 'https://music.163.com/st/musician'
    },
    {
      title: '云推歌',
      link: 'https://music.163.com/st/ad-song'
    },
    {
      title: '下载客户端',
      link: '/download'
    }
  ]
})

// 模拟页脚文字链接
Mock.mock('/api/footerLinks', 'get', {
  code: 200,
  data: [
    {
      title: '服务条款',
      link: 'https://st.music.163.com/official-terms/service'
    },
    {
      title: '隐私政策',
      link: 'https://st.music.163.com/official-terms/privacy'
    },
    {
      title: '儿童隐私政策',
      link: 'https://st.music.163.com/official-terms/children'
    },
    {
      title: '版权投诉指引',
      link: 'https://music.163.com/st/staticdeal/complaints.html'
    },
    {
      title: '意见反馈',
      link: '#'
    }
  ]
})

// 模拟页脚图片链接
Mock.mock('/api/footerImages', 'get', {
  code: 200,
  data: [
    {
      link: 'https://music.163.com/st/userbasic#/auth'
    },
    {
      link: 'https://music.163.com/recruit'
    },
    {
      link: 'https://music.163.com/web/reward'
    },
    {
      link: 'https://music.163.com/uservideo#/plan'
    }
  ]
})

// 模拟发现音乐子导航
Mock.mock('/api/discoverMenu', 'get', {
  code: 200,
  data: [
    {
      title: '推荐',
      link: '/discover/recommend'
    },
    {
      title: '排行榜',
      link: '/discover/ranking'
    },
    {
      title: '歌单',
      link: '/discover/songs'
    },
    {
      title: '主播电台',
      link: '/discover/djradio'
    },
    {
      title: '歌手',
      link: '/discover/artist'
    },
    {
      title: '新碟上架',
      link: '/discover/album'
    }
  ]
})

// 模拟热门主播
Mock.mock('/api/hotRadios', 'get', {
  code: 200,
  data: [
    {
      picUrl: 'http://p1.music.126.net/H3QxWdf0eUiwmhJvA4vrMQ==/1407374893913311.jpg',
      name: '陈立',
      position: '心理学家、美食家陈立教授',
      url: '/user/home?id=278438485'
    },
    {
      picUrl: 'http://p1.music.126.net/y5-sM7tjnxnu_V9LWKgZlw==/7942872001461517.jpg',
      name: 'DJ艳秋',
      position: '著名音乐节目主持人',
      url: '/user/home?id=91239965'
    },
    {
      picUrl: 'http://p1.music.126.net/6cc6lgOfQTo6ovNnTHPyJg==/3427177769086282.jpg',
      name: '国家大剧院古典音乐频道',
      position: '国家大剧院古典音乐官方',
      url: '/user/home?id=324314596'
    },
    {
      picUrl: 'http://p1.music.126.net/xa1Uxrrn4J0pm_PJwkGYvw==/3130309604335651.jpg',
      name: '谢谢收听',
      position: '南京电台主持人王馨',
      url: '/user/home?id=1611157'
    },
    {
      picUrl: 'http://p1.music.126.net/slpd09Tf5Ju82Mv-h8MP4w==/3440371884651965.jpg',
      name: 'DJ晓苏',
      position: '独立DJ，CRI环球旅游广播特邀DJ',
      url: '/user/home?id=2313954'
    }
  ]
})

// 带参数的歌手列表查询示例
const artistCategoriesData = [
  {
    title: '推荐',
    area: -1,
    artists: [
      {
        name: '推荐歌手',
        type: 1,
        url: '/discover/artist',
        id: 0
      },
      {
        name: '入驻歌手',
        type: 2,
        url: '/discover/artist?cat=5001',
        dataPath: '/artist/list?cat=5001'
      }
    ]
  },
  {
    title: '华语',
    area: 7,
    artists: [
      {
        name: '华语男歌手',
        url: '/discover/artist?id=1001',
        type: 1
      },
      {
        name: '华语女歌手',
        url: '/discover/artist?id=1002',
        type: 2
      },
      {
        name: '华语组合/乐队',
        url: '/discover/artist?id=1003',
        type: 3
      }
    ]
  },
  {
    title: '欧美',
    area: 96,
    artists: [
      {
        name: '欧美男歌手',
        url: '/discover/artist?id=2001',
        type: 1
      },
      {
        name: '欧美女歌手',
        url: '/discover/artist?id=2002',
        type: 2
      },
      {
        name: '欧美组合乐队',
        url: '/discover/artist?id=2003',
        type: 3
      }
    ]
  },
  {
    title: '日本',
    area: 8,
    artists: [
      {
        name: '日本男歌手',
        url: '/discover/artist?id=6001',
        type: 1
      },
      {
        name: '日本女歌手',
        url: '/discover/artist?id=6002',
        type: 2
      },
      {
        name: '日本组合/乐队',
        url: '/discover/artist?id=6003',
        type: 3
      }
    ]
  },
  {
    title: '韩国',
    area: 16,
    artists: [
      {
        name: '韩国男歌手',
        url: '/discover/artist?id=7001',
        type: 1
      },
      {
        name: '韩国女歌手',
        url: '/discover/artist?id=7002',
        type: 2
      },
      {
        name: '韩国组合/乐队',
        url: '/discover/artist?id=7003',
        type: 3
      }
    ]
  },
  {
    title: '其他',
    area: 0,
    artists: [
      {
        name: '其他男歌手',
        url: '/discover/artist?id=4001',
        type: 1
      },
      {
        name: '其他女歌手',
        url: '/discover/artist?id=4002',
        type: 2
      },
      {
        name: '其他组合乐队',
        url: '/discover/artist?id=4003',
        type: 3
      }
    ]
  }
]

Mock.mock(/\/mock\/artist\/categories$/, 'get', () => {
  return {
    code: 200,
    message: 'success',
    data: artistCategoriesData
  }
})

Mock.mock('/api/banner', 'get', {
  code: 200,
  data: [
    {
      imageUrl: 'http://p1.music.126.net/xkviKeCLCYBiY5qkEaE3Yw==/109951170697367759.jpg',
      targetId: 0,
      targetType: 3000,
      titleColor: 'blue',
      typeTitle: '独家策划',
      url: 'https://y.music.163.com/g/yida/b6cd28c6ff8e44c0a9a64fcc3328801b',
      exclusive: false,
      encodeId: '0',
      scm: '1.music-homepage.homepage_banner_force.banner.15745984.-1661483021.null',
      bannerBizType: 'force_banner'
    },
    {
      imageUrl: 'http://p1.music.126.net/SvV_dCR6TLbQON6rzdqShQ==/109951170697404297.jpg',
      targetId: 2686299978,
      targetType: 1,
      titleColor: 'red',
      typeTitle: '新歌首发',
      exclusive: false,
      encodeId: '2686299978',
      scm: '1.music-homepage.homepage_banner_force.banner.15745985.1193331410.null',
      bannerBizType: 'force_banner'
    },
    {
      imageUrl: 'http://p1.music.126.net/6xFVRWergtcdh94f0EOepA==/109951170697429610.jpg',
      targetId: 0,
      targetType: 3000,
      titleColor: 'blue',
      typeTitle: '独家策划',
      url: 'https://y.music.163.com/g/yida/476f0b752c5b4dbdba0a00fb11820fe6',
      exclusive: false,
      encodeId: '0',
      scm: '1.music-homepage.homepage_banner_force.banner.15745986.-1661306011.null',
      bannerBizType: 'force_banner'
    },
    {
      imageUrl: 'http://p1.music.126.net/YOnhy1j4aQkJWlC4GjMsvw==/109951170697455364.jpg',
      targetId: 22727481,
      targetType: 1004,
      titleColor: 'red',
      typeTitle: 'MV首发',
      exclusive: false,
      encodeId: '22727481',
      scm: '1.music-homepage.homepage_banner_force.banner.15745987.-1661311037.null',
      bannerBizType: 'force_banner'
    },
    {
      imageUrl: 'http://p1.music.126.net/V3FPR3fOohOa0i1oIoSzVw==/109951170697480522.jpg',
      targetId: 2685574025,
      targetType: 1,
      titleColor: 'red',
      typeTitle: '新歌首发',
      exclusive: false,
      encodeId: '2685574025',
      scm: '1.music-homepage.homepage_banner_force.banner.15745988.-1661396441.null',
      bannerBizType: 'force_banner'
    },
    {
      imageUrl: 'http://p1.music.126.net/MEItihUtZtgYyV2VfuGJ6Q==/109951170697490370.jpg',
      targetId: 2690849960,
      targetType: 1,
      titleColor: 'red',
      typeTitle: '新歌首发',
      exclusive: false,
      encodeId: '2690849960',
      scm: '1.music-homepage.homepage_banner_force.banner.15745990.-1661312897.null',
      bannerBizType: 'force_banner'
    },
    {
      imageUrl: 'http://p1.music.126.net/FGk3AapBsKspa86DbgFwhA==/109951170697520503.jpg',
      targetId: 0,
      adid: null,
      targetType: 3000,
      titleColor: 'blue',
      typeTitle: '数字专辑',
      url: 'https://music.163.com/store/newalbum/detail?id=265084513',
      exclusive: false,
      encodeId: '0',
      scm: '1.music-homepage.homepage_banner_force.banner.15745991.-1661398267.null',
      bannerBizType: 'force_banner'
    }
  ]
})
