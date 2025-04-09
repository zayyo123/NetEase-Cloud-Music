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

Mock.mock('/api/personalized?limit=8', 'get', {
  code: 200,
  data: [
    {
      id: 3229941142,
      type: 0,
      name: '【R&B】在璀璨星河下微醺 喝杯小酒吧！',
      copywriter: '',
      picUrl: 'https://p2.music.126.net/lg74fwVdK1CnG1_VLBIM6Q==/109951166711664533.jpg',
      canDislike: true,
      trackNumberUpdateTime: 1743178785497,
      playCount: 37262204,
      trackCount: 101,
      highQuality: false,
      alg: 'alg_high_quality'
    },
    {
      id: 893153237,
      type: 0,
      name: '粤语男声：我爱你依旧如初不曾改变',
      copywriter: '',
      picUrl: 'https://p2.music.126.net/Xd6h-xOoPj2yTUuQXOhyCQ==/18612532836990988.jpg',
      canDislike: true,
      trackNumberUpdateTime: 1738758187442,
      playCount: 29599912,
      trackCount: 100,
      highQuality: false,
      alg: 'alg_high_quality'
    },
    {
      id: 934870683,
      type: 0,
      name: '国语说唱也很抒情，副歌也美',
      copywriter: '',
      picUrl: 'https://p2.music.126.net/0N-tqsnwkAekwexX2p4NcQ==/109951169687668694.jpg',
      canDislike: true,
      trackNumberUpdateTime: 1742359547521,
      playCount: 29732556,
      trackCount: 867,
      highQuality: false,
      alg: 'alg_high_quality'
    },
    {
      id: 69860949,
      type: 0,
      name: '『90后』小时候【所谓非主流】的经典神曲',
      copywriter: '',
      picUrl: 'https://p2.music.126.net/2rux5LnJey75tm9Md-9D-Q==/2890616070443534.jpg',
      canDislike: true,
      trackNumberUpdateTime: 1690945575312,
      playCount: 29853878,
      trackCount: 212,
      highQuality: false,
      alg: 'alg_high_quality'
    },
    {
      id: 7487805161,
      type: 0,
      name: '宝藏挖掘机|分享好音乐和金曲',
      copywriter: '',
      picUrl: 'https://p2.music.126.net/whuiVDHL3a-OE8q4mcj5xA==/109951169484809780.jpg',
      canDislike: true,
      trackNumberUpdateTime: 1744077849285,
      playCount: 99710176,
      trackCount: 146,
      highQuality: false,
      alg: 'alg_high_quality'
    },
    {
      id: 171037362,
      type: 0,
      name: '香港电影中的50首经典歌曲 [追忆录]',
      copywriter: '',
      picUrl: 'https://p2.music.126.net/aRMEx-fiTudOmPIhkOe41g==/109951165493447833.jpg',
      canDislike: true,
      trackNumberUpdateTime: 1698595431351,
      playCount: 45640940,
      trackCount: 51,
      highQuality: false,
      alg: 'alg_high_quality'
    },
    {
      id: 2748492595,
      type: 0,
      name: '欧美万评优质女声•萦绕耳畔忆于心间',
      copywriter: '',
      picUrl: 'https://p2.music.126.net/ptx2Jf4PZl3oNLxv4NiADg==/109951164018765577.jpg',
      canDislike: true,
      trackNumberUpdateTime: 1742169668406,
      playCount: 40226000,
      trackCount: 170,
      highQuality: false,
      alg: 'alg_high_quality'
    },
    {
      id: 2474537199,
      type: 0,
      name: '若是心怀旧梦 就别再无疾而终',
      copywriter: '',
      picUrl: 'https://p2.music.126.net/OrXO5yyb3SHJyZWNfCnbfw==/109951163676024440.jpg',
      canDislike: true,
      trackNumberUpdateTime: 1744085355588,
      playCount: 26781868,
      trackCount: 512,
      highQuality: false,
      alg: 'alg_high_quality'
    }
  ]
})
Mock.mock('/api/album/list?limit=30', 'get', {
  code: 200,
  data: [
    {
      newAlbum: true,
      albumId: 267704306,
      albumName: '音樂',
      artistName: '乐正绫',
      price: 20,
      customPriceConfig: null,
      coverUrl: 'http://p4.music.126.net/x08erxs8P8tGxKeCqrVzlg==/109951170678036936.jpg',
      pubTime: 1744041600487,
      productId: 0,
      saleNum: 5179,
      topfans: null,
      albumType: 0,
      saleType: 0,
      area: 7,
      artistType: 0,
      status: 0
    },
    {
      newAlbum: true,
      albumId: 265084513,
      albumName: 'SPECIAL MINI ALBUM [PLEASURE]',
      artistName: 'TREASURE',
      price: 12,
      customPriceConfig: null,
      coverUrl: 'http://p4.music.126.net/ZAqAqBxTLqFsGa8zJFm1kw==/109951170632800505.jpg',
      pubTime: 1743868800068,
      productId: 0,
      saleNum: 604,
      topfans: null,
      albumType: 1,
      saleType: 0,
      area: 16,
      artistType: 0,
      status: 0
    },
    {
      newAlbum: true,
      albumId: 263952179,
      albumName: 'BLUE PARADISE',
      artistName: 'ZEROBASEONE',
      price: 18,
      customPriceConfig: null,
      coverUrl: 'http://p3.music.126.net/V_rM9G2Dqfwj4ElqqrH2PQ==/109951170647422697.jpg',
      pubTime: 1742979600164,
      productId: 0,
      saleNum: 449,
      topfans: null,
      albumType: 0,
      saleType: 0,
      area: 16,
      artistType: 0,
      status: 0
    },
    {
      newAlbum: true,
      albumId: 265732353,
      albumName: 'Mixtape : dominATE',
      artistName: 'Stray Kids',
      price: 14,
      customPriceConfig: null,
      coverUrl: 'http://p4.music.126.net/NWEapNOv4F6Xmnbo7mPcRw==/109951170629842671.jpg',
      pubTime: 1742529600139,
      productId: 0,
      saleNum: 2198,
      topfans: null,
      albumType: 0,
      saleType: 0,
      area: 16,
      artistType: 0,
      status: 0
    },
    {
      newAlbum: true,
      albumId: 266241260,
      albumName: 'PRE2EN7',
      artistName: '唐九洲',
      price: 15,
      customPriceConfig: null,
      coverUrl: 'http://p3.music.126.net/7HnUR7SQY6XyymXt3nK_Iw==/109951170624111893.jpg',
      pubTime: 1742356800319,
      productId: 0,
      saleNum: 465,
      topfans: null,
      albumType: 0,
      saleType: 0,
      area: 7,
      artistType: 0,
      status: 0
    },
    {
      newAlbum: true,
      albumId: 265585273,
      albumName: '原创音乐剧《辛吉路的画材店》原声带',
      artistName:
        '胡水/吴志军/于滨嘉/徐杭/左溢/姜义哲/李珏/赵钱龙/刘瀚聪/林大钦/牛博为/尹智博/董豫辰/王颢珏/车鸣笛/温升宝/顾易',
      price: 24,
      customPriceConfig: null,
      coverUrl: 'http://p3.music.126.net/RggBSzY7SpLIFHdv2K2I9w==/109951170606940284.jpg',
      pubTime: 1742097600354,
      productId: 0,
      saleNum: 4169,
      topfans: null,
      albumType: 0,
      saleType: 0,
      area: 7,
      artistType: 0,
      status: 0
    },
    {
      newAlbum: true,
      albumId: 265334021,
      albumName: 'OURS',
      artistName: '周柯宇',
      price: 15.17,
      customPriceConfig: null,
      coverUrl: 'http://p3.music.126.net/7_RfFKZ8511H2Dr-fkSA8Q==/109951170595850348.jpg',
      pubTime: 1741881600121,
      productId: 0,
      saleNum: 7826,
      topfans: null,
      albumType: 1,
      saleType: 0,
      area: 7,
      artistType: 0,
      status: 0
    },
    {
      newAlbum: true,
      albumId: 263843261,
      albumName: 'Ruby',
      artistName: 'JENNIE',
      price: 30,
      customPriceConfig: null,
      coverUrl: 'http://p3.music.126.net/yznsPdSBCAQA4OI_AwWLyA==/109951170513781357.jpg',
      pubTime: 1740628800101,
      productId: 0,
      saleNum: 115625,
      topfans: null,
      albumType: 0,
      saleType: 2,
      area: 96,
      artistType: 0,
      status: 0
    },
    {
      newAlbum: true,
      albumId: 260368385,
      albumName: 'HER',
      artistName: 'MINNIE',
      price: 25,
      customPriceConfig: null,
      coverUrl: 'http://p4.music.126.net/Ar5prm23viHr1PMIKXoGcg==/109951170498777904.jpg',
      pubTime: 1740042000120,
      productId: 0,
      saleNum: 3864,
      topfans: null,
      albumType: 0,
      saleType: 0,
      area: 16,
      artistType: 0,
      status: 0
    },
    {
      newAlbum: true,
      albumId: 262864536,
      albumName: 'Alter Ego',
      artistName: 'LISA',
      price: 30,
      customPriceConfig: null,
      coverUrl: 'http://p4.music.126.net/WmnpeVka5LdZydfE_90LDg==/109951170483900812.jpg',
      pubTime: 1740024000295,
      productId: 0,
      saleNum: 16994,
      topfans: null,
      albumType: 0,
      saleType: 2,
      area: 96,
      artistType: 0,
      status: 0
    },
    {
      newAlbum: true,
      albumId: 262587162,
      albumName: 'AMORTAGE',
      artistName: 'JISOO',
      price: 16,
      customPriceConfig: null,
      coverUrl: 'http://p3.music.126.net/vwZcJ1PYrKKgkrL0C90gZA==/109951170489795435.jpg',
      pubTime: 1739512800121,
      productId: 0,
      saleNum: 34560,
      topfans: null,
      albumType: 1,
      saleType: 0,
      area: 16,
      artistType: 0,
      status: 0
    },
    {
      newAlbum: true,
      albumId: 260605285,
      albumName: 'IVE EMPATHY',
      artistName: 'IVE',
      price: 15,
      customPriceConfig: null,
      coverUrl: 'http://p4.music.126.net/DRAu33Phj6Q-1yBCjXkXfg==/109951170416427562.jpg',
      pubTime: 1738573200215,
      productId: 0,
      saleNum: 6725,
      topfans: null,
      albumType: 0,
      saleType: 0,
      area: 16,
      artistType: 0,
      status: 0
    },
    {
      newAlbum: true,
      albumId: 258512180,
      albumName: '量变临界点',
      artistName: '华晨宇',
      price: 27,
      customPriceConfig: null,
      coverUrl: 'http://p3.music.126.net/Dz-vO_8bpeb-58AUtQON0Q==/109951170340533586.jpg',
      pubTime: 1736489220160,
      productId: 0,
      saleNum: 1268636,
      topfans: null,
      albumType: 0,
      saleType: 0,
      area: 7,
      artistType: 0,
      status: 0
    },
    {
      newAlbum: true,
      albumId: 258617079,
      albumName: 'LAST NIGHT',
      artistName: 'TREASURE',
      price: 3,
      customPriceConfig: null,
      coverUrl: 'http://p3.music.126.net/wrm9QYhGecVaWLc-oLa3sA==/109951170343987457.jpg',
      pubTime: 1735920000108,
      productId: 0,
      saleNum: 1737,
      topfans: null,
      albumType: 1,
      saleType: 0,
      area: 16,
      artistType: 0,
      status: 0
    },
    {
      newAlbum: true,
      albumId: 258538091,
      albumName: '不说',
      artistName: '王晰',
      price: 22,
      customPriceConfig: null,
      coverUrl: 'http://p4.music.126.net/_drFxBcjhiNIMlkMzi6i7w==/109951170341584726.jpg',
      pubTime: 1735819201952,
      productId: 0,
      saleNum: 758,
      topfans: null,
      albumType: 0,
      saleType: 0,
      area: 7,
      artistType: 0,
      status: 0
    },
    {
      newAlbum: true,
      albumId: 258537934,
      albumName: '冬日奇迹',
      artistName: 'A-SOUL',
      price: 7,
      customPriceConfig: null,
      coverUrl: 'http://p3.music.126.net/wxB3vAznzJRBX7QlzAxotQ==/109951170341565956.jpg',
      pubTime: 1735819200191,
      productId: 0,
      saleNum: 1431,
      topfans: null,
      albumType: 0,
      saleType: 0,
      area: 7,
      artistType: 0,
      status: 0
    },
    {
      newAlbum: true,
      albumId: 258374660,
      albumName: '恨赋',
      artistName: '窦唯/朝简',
      price: 100,
      customPriceConfig: null,
      coverUrl: 'http://p3.music.126.net/QZvDHVjhrY2BNy7MLxKy9g==/109951170333662226.jpg',
      pubTime: 1735660803086,
      productId: 0,
      saleNum: 159,
      topfans: null,
      albumType: 1,
      saleType: 0,
      area: 7,
      artistType: 0,
      status: 0
    },
    {
      newAlbum: true,
      albumId: 258289330,
      albumName: ' 在剧场',
      artistName: '卧轨的火车（Railway Suicide Train)',
      price: 16,
      customPriceConfig: null,
      coverUrl: 'http://p3.music.126.net/aajvxGiZC3Kg7np1ZOG56g==/109951170330482370.jpg',
      pubTime: 1735624800142,
      productId: 0,
      saleNum: 1676,
      topfans: null,
      albumType: 0,
      saleType: 0,
      area: 7,
      artistType: 0,
      status: 0
    },
    {
      newAlbum: true,
      albumId: 257899525,
      albumName: '光阴副本 / Turn Of A Page',
      artistName: '林俊杰',
      price: 7,
      customPriceConfig: null,
      coverUrl: 'http://p4.music.126.net/vjdiuyuEOBQJDbz24HQ1gQ==/109951170309394092.jpg',
      pubTime: 1735574400174,
      productId: 0,
      saleNum: 148436,
      topfans: null,
      albumType: 1,
      saleType: 0,
      area: 7,
      artistType: 0,
      status: 0
    },
    {
      newAlbum: true,
      albumId: 255010683,
      albumName: 'Like A Flower - The 1st Mini Album',
      artistName: 'IRENE',
      price: 22,
      customPriceConfig: null,
      coverUrl: 'http://p4.music.126.net/uQZD7Sp_TojTvauUOFK1Ag==/109951170309834539.jpg',
      pubTime: 1735203600182,
      productId: 0,
      saleNum: 1264,
      topfans: null,
      albumType: 0,
      saleType: 0,
      area: 16,
      artistType: 0,
      status: 0
    },
    {
      newAlbum: true,
      albumId: 257963779,
      albumName: '掌中之吻',
      artistName: '乃琳Eileen',
      price: 4,
      customPriceConfig: null,
      coverUrl: 'http://p4.music.126.net/ptZZOZJASgHhdxDHPCZPQg==/109951170312039411.jpg',
      pubTime: 1735185600193,
      productId: 0,
      saleNum: 1268,
      topfans: null,
      albumType: 1,
      saleType: 0,
      area: 7,
      artistType: 0,
      status: 0
    },
    {
      newAlbum: true,
      albumId: 257722878,
      albumName: 'FREQUENCY - The 6th Mini Album',
      artistName: '威神V(WayV)',
      price: 18,
      customPriceConfig: null,
      coverUrl: 'http://p4.music.126.net/v020nH46aXrp80vZt4uZvw==/109951170303426542.jpg',
      pubTime: 1735117200119,
      productId: 0,
      saleNum: 458,
      topfans: null,
      albumType: 0,
      saleType: 0,
      area: 7,
      artistType: 0,
      status: 0
    },
    {
      newAlbum: true,
      albumId: 257492769,
      albumName: 'First Light',
      artistName: 'Loong9',
      price: 9.9,
      customPriceConfig: null,
      coverUrl: 'http://p3.music.126.net/ZcJxBwjWjqCcEhePceyeIQ==/109951170290644912.jpg',
      pubTime: 1734683400079,
      productId: 0,
      saleNum: 48,
      topfans: null,
      albumType: 1,
      saleType: 0,
      area: 0,
      artistType: 0,
      status: 0
    },
    {
      newAlbum: true,
      albumId: 257157315,
      albumName: 'HIGH FIVE',
      artistName: '威神V(WayV)',
      price: 3,
      customPriceConfig: null,
      coverUrl: 'http://p3.music.126.net/6I-o4IJjS-dUpg36W8m_pA==/109951170270470209.jpg',
      pubTime: 1734598800117,
      productId: 0,
      saleNum: 136,
      topfans: null,
      albumType: 1,
      saleType: 0,
      area: 16,
      artistType: 0,
      status: 0
    },
    {
      newAlbum: true,
      albumId: 257269196,
      albumName: 'Spicy Honey',
      artistName: '虞书欣',
      price: 22,
      customPriceConfig: null,
      coverUrl: 'http://p4.music.126.net/-9CGdJ3TzjB0SP_cNo6Jag==/109951170278085825.jpg',
      pubTime: 1734537600072,
      productId: 0,
      saleNum: 17169,
      topfans: null,
      albumType: 0,
      saleType: 0,
      area: 7,
      artistType: 0,
      status: 0
    },
    {
      newAlbum: true,
      albumId: 254191219,
      albumName: 'Letter To Myself - The 6th Mini Album',
      artistName: '太妍',
      price: 18,
      customPriceConfig: null,
      coverUrl: 'http://p4.music.126.net/kLg4bg9n1fTIHbojW1kBhA==/109951170267877291.jpg',
      pubTime: 1734512400161,
      productId: 0,
      saleNum: 1739,
      topfans: null,
      albumType: 0,
      saleType: 0,
      area: 16,
      artistType: 0,
      status: 0
    },
    {
      newAlbum: true,
      albumId: 257161393,
      albumName: 'Strategy 2.0',
      artistName: 'TWICE',
      price: 8,
      customPriceConfig: null,
      coverUrl: 'http://p4.music.126.net/6rXG6JKV3wXX1vp5r9mvGQ==/109951170270574980.jpg',
      pubTime: 1734498000156,
      productId: 0,
      saleNum: 2257,
      topfans: null,
      albumType: 1,
      saleType: 0,
      area: 16,
      artistType: 0,
      status: 0
    },
    {
      newAlbum: true,
      albumId: 257034620,
      albumName: 'Walkin On Water (Remixes)',
      artistName: 'Stray Kids',
      price: 8,
      customPriceConfig: null,
      coverUrl: 'http://p3.music.126.net/7Erpnpl1Jn4aOPH1-bLL4Q==/109951170267324932.jpg',
      pubTime: 1734325200102,
      productId: 0,
      saleNum: 389,
      topfans: null,
      albumType: 1,
      saleType: 0,
      area: 16,
      artistType: 0,
      status: 0
    },
    {
      newAlbum: true,
      albumId: 256341231,
      albumName: '隐私',
      artistName: '周柯宇',
      price: 4,
      customPriceConfig: null,
      coverUrl: 'http://p4.music.126.net/_qJC8yxYtQEzAItQgSJu4A==/109951170239562927.jpg',
      pubTime: 1734192000087,
      productId: 0,
      saleNum: 9597,
      topfans: null,
      albumType: 1,
      saleType: 0,
      area: 7,
      artistType: 0,
      status: 0
    },
    {
      newAlbum: true,
      albumId: 256340890,
      albumName: '合(HOP)',
      artistName: 'Stray Kids',
      price: 28,
      customPriceConfig: null,
      coverUrl: 'http://p4.music.126.net/AnJLTgmSPZ3k6S2zeavv0A==/109951170251829587.jpg',
      pubTime: 1734066000000,
      productId: 0,
      saleNum: 3499,
      topfans: null,
      albumType: 0,
      saleType: 0,
      area: 16,
      artistType: 0,
      status: 0
    }
  ]
})
Mock.mock('/api/playlist/detail?id=19723756', 'get', {
  code: 200,
  data: [
    {
      name: '飙升榜',
      coverImgUrl: 'https://p1.music.126.net/BaP9nrocNTL3gGThysv4eQ==/109951170091896587.jpg',
      tracks: [
        { name: '山峰', mainTitle: null, additionalTitle: null, id: 2690847039, pst: 0 },
        { name: '风铃', mainTitle: null, additionalTitle: null, id: 2686272114, pst: 0 },
        { name: '听不见的歌', mainTitle: null, additionalTitle: null, id: 2691969689, pst: 0 },
        { name: '英雄主义', mainTitle: null, additionalTitle: null, id: 2684510360, pst: 0 },
        { name: 'Off The Hook', mainTitle: null, additionalTitle: null, id: 2673161004, pst: 0 },
        { name: '去远方', mainTitle: null, additionalTitle: null, id: 2668764089, pst: 0 },
        { name: 'Only one', mainTitle: null, additionalTitle: null, id: 5341517, pst: 0 },
        { name: '你', mainTitle: null, additionalTitle: null, id: 1406083061, pst: 0 },
        {
          name: 'YATO（你是唯一 ）',
          mainTitle: 'YATO',
          additionalTitle: '（你是唯一 ）',
          id: 2688478492,
          pst: 0
        },
        { name: '一点', mainTitle: null, additionalTitle: null, id: 2686266146, pst: 0 },
        { name: '春雪', mainTitle: null, additionalTitle: null }
      ]
    },
    {
      name: '新歌榜',
      coverImgUrl: 'https://p1.music.126.net/5guhqPBTcIrrhLBotgaT6w==/109951170048511751.jpg',
      tracks: [
        { name: '春雪', mainTitle: null, additionalTitle: null, id: 2680959706, pst: 0 },
        { name: '风铃', mainTitle: null, additionalTitle: null, id: 2686272114, pst: 0 },
        { name: '一点', mainTitle: null, additionalTitle: null, id: 2686266146, pst: 0 },
        { name: '爱错', mainTitle: null, additionalTitle: null, id: 2689896166, pst: 0 },
        { name: '烟圈', mainTitle: null, additionalTitle: null, id: 2687364563, pst: 0 },
        { name: '英雄主义', mainTitle: null, additionalTitle: null, id: 2684510360, pst: 0 },
        { name: '来电瑶', mainTitle: null, additionalTitle: null, id: 2690846498, pst: 0 },
        {
          name: 'Baby Steps (Feat. 宋雨琦)',
          mainTitle: 'Baby Steps ',
          additionalTitle: '(Feat. 宋雨琦)',
          id: 2688515350,
          pst: 0
        },
        { name: '卑鄙LilBaby', mainTitle: null, additionalTitle: null, id: 2686898672, pst: 0 },
        { name: '野路', mainTitle: null, additionalTitle: null, id: 2689900204, pst: 0 },
        { name: '我放你走', mainTitle: null, additionalTitle: null, id: 2686948803, pst: 0 }
      ]
    },
    {
      name: '热歌榜',
      coverImgUrl: 'https://p1.music.126.net/BaP9nrocNTL3gGThysv4eQ==/109951170091896587.jpg',
      tracks: [
        { name: '唯一', mainTitle: null, additionalTitle: null, id: 2083785152, pst: 0 },
        { name: '爱错', mainTitle: null, additionalTitle: null, id: 1301736461, pst: 0 },
        { name: '春雪', mainTitle: null, additionalTitle: null, id: 2680959706, pst: 0 },
        { name: '跳楼机', mainTitle: null, additionalTitle: null, id: 2645500113, pst: 0 },
        { name: '于是', mainTitle: null, additionalTitle: null, id: 1303464858, pst: 0 },
        { name: '你', mainTitle: null, additionalTitle: null, id: 1406083061, pst: 0 },
        {
          name: '罗生门（Follow）',
          mainTitle: '罗生门',
          additionalTitle: '（Follow）',
          id: 1456890009,
          pst: 0
        },
        {
          name: '我爱你但是我要回家',
          mainTitle: null,
          additionalTitle: null,
          id: 2647831829,
          pst: 0
        },
        {
          name: '如果爱忘了 (live)',
          mainTitle: '如果爱忘了 ',
          additionalTitle: '(Live)',
          id: 2124385868,
          pst: 0
        },
        { name: '去远方', mainTitle: null, additionalTitle: null, id: 2668764089, pst: 0 },
        { name: '特别的人', mainTitle: null, additionalTitle: null, id: 28403111, pst: 0 }
      ]
    }
  ]
})
