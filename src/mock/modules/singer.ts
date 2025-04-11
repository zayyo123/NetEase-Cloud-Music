import Mock from 'mockjs'

Mock.mock('/api/top/artists?offset=0&limit=100', 'get', {
  code: 200,
  data: [
    {
      name: '林俊杰',
      id: 3684,
      picId: 109951168529051970,
      img1v1Id: 109951168529049970,
      briefDesc: '',
      picUrl: 'http://p1.music.126.net/78q0jUUJ0h08GxAs2G-tCA==/109951168529051968.jpg',
      img1v1Url: 'http://p1.music.126.net/r6W-zCnV-aduVn_PLZYuYg==/109951168529049969.jpg',
      albumSize: 70,
      alias: ['JJ Lin', 'Wayne Lim'],
      trans: '',
      musicSize: 594,
      topicPerson: 0,
      picId_str: '109951168529051968',
      img1v1Id_str: '109951168529049969',
      followed: false,
      fansCount: 13423161
    },
    {
      name: '陈奕迅',
      id: 2116,
      picId: 109951169014564420,
      img1v1Id: 109951169014571700,
      briefDesc: '',
      picUrl: 'http://p1.music.126.net/1qr8a9G8pWEMoruLJaBv8A==/109951169014564421.jpg',
      img1v1Url: 'http://p1.music.126.net/ODuFZql3x08Q4AaW7y20Aw==/109951169014571694.jpg',
      albumSize: 130,
      alias: ['Eason Chan'],
      trans: '',
      musicSize: 1845,
      topicPerson: 0,
      picId_str: '109951169014564421',
      img1v1Id_str: '109951169014571694',
      followed: false,
      fansCount: 11756341
    },
    {
      name: '郑润泽',
      id: 29051613,
      picId: 109951164458656130,
      img1v1Id: 109951169694705550,
      briefDesc: '',
      picUrl: 'http://p1.music.126.net/BtXjoRNLCZjoSV-3Ag3M0Q==/109951164458656122.jpg',
      img1v1Url: 'http://p1.music.126.net/sZ-KVmxSvFiygWyCzxnV8w==/109951169694705559.jpg',
      albumSize: 50,
      alias: [],
      trans: '',
      musicSize: 186,
      topicPerson: 0,
      accountId: 542203503,
      picId_str: '109951164458656122',
      img1v1Id_str: '109951169694705559',
      followed: false,
      fansCount: 5468800
    },
    {
      name: 'G.E.M.邓紫棋',
      id: 7763,
      picId: 109951167773880640,
      img1v1Id: 109951167771736530,
      briefDesc: '',
      picUrl: 'http://p1.music.126.net/fq1O8ZRT5_FHzg_uLEtUQA==/109951167773880633.jpg',
      img1v1Url: 'http://p1.music.126.net/oJorrgJ3IotZUAbZkBMuFw==/109951167771736533.jpg',
      albumSize: 55,
      alias: ['G.E.M.', 'Gloria Tang'],
      trans: '',
      musicSize: 400,
      topicPerson: 0,
      accountId: 281382,
      picId_str: '109951167773880633',
      img1v1Id_str: '109951167771736533',
      followed: false,
      fansCount: 11949876
    },
    {
      name: '方大同',
      id: 2738,
      picId: 109951169897875870,
      img1v1Id: 109951169896933400,
      briefDesc: '',
      picUrl: 'http://p1.music.126.net/EO_mrK1Hft9DpC5fr9ROIw==/109951169897875877.jpg',
      img1v1Url: 'http://p1.music.126.net/GH7Vj5kiwCOzJvPxFoIsnw==/109951169896933411.jpg',
      albumSize: 46,
      alias: ['Khalil Fong'],
      trans: '',
      musicSize: 467,
      topicPerson: 0,
      accountId: 77799052,
      picId_str: '109951169897875877',
      img1v1Id_str: '109951169896933411',
      followed: false,
      fansCount: 4090447
    },
    {
      name: '汪苏泷',
      id: 5538,
      picId: 109951170027064720,
      img1v1Id: 109951170027065600,
      briefDesc: '',
      picUrl: 'http://p1.music.126.net/7G5HqyqcpZoP4cHL7-a-hQ==/109951170027064713.jpg',
      img1v1Url: 'http://p1.music.126.net/IiF5vmh_0b04UXLrhX5liw==/109951170027065607.jpg',
      albumSize: 103,
      alias: ['Silence Wang'],
      trans: '',
      musicSize: 662,
      topicPerson: 0,
      accountId: 18378979,
      picId_str: '109951170027064713',
      img1v1Id_str: '109951170027065607',
      followed: false,
      fansCount: 5756709
    },
    {
      name: '颜人中',
      id: 31376161,
      picId: 109951165122696430,
      img1v1Id: 109951165122695490,
      briefDesc: '',
      picUrl: 'http://p1.music.126.net/M9GvSuKJQyfPKprZaLKt7A==/109951165122696427.jpg',
      img1v1Url: 'http://p1.music.126.net/ei0o1W2N_SX1vpkXr2DDtA==/109951165122695489.jpg',
      albumSize: 46,
      alias: ['Ele Yan'],
      trans: '',
      musicSize: 172,
      topicPerson: 0,

      accountId: 1750344369,
      picId_str: '109951165122696427',
      img1v1Id_str: '109951165122695489',

      followed: false,

      fansCount: 5918083
    },
    {
      name: 'LBI利比',
      id: 12277194,
      picId: 109951164206426030,
      img1v1Id: 109951167304936800,
      briefDesc: '',
      picUrl: 'http://p1.music.126.net/2nAk3Mmfyj9KadQUNL1YTQ==/109951164206426031.jpg',
      img1v1Url: 'http://p1.music.126.net/Ykd5K_gklG5P090hiKMing==/109951167304936804.jpg',
      albumSize: 135,
      alias: ['时柏尘'],
      trans: '',
      musicSize: 230,
      topicPerson: 0,

      accountId: 334800949,
      picId_str: '109951164206426031',
      img1v1Id_str: '109951167304936804',

      followed: false,

      fansCount: 696009
    },
    {
      name: '王力宏',
      id: 5346,
      picId: 109951169421841550,
      img1v1Id: 109951170336953170,
      briefDesc: '',
      picUrl: 'http://p1.music.126.net/bM06VHfs1ivzKegl3nMPsg==/109951169421841547.jpg',
      img1v1Url: 'http://p1.music.126.net/T5eZ-cn4-_JAdsnB_WtHzQ==/109951170336953174.jpg',
      albumSize: 69,
      alias: ['Leehom Wang'],
      trans: '',
      musicSize: 813,
      topicPerson: 0,

      accountId: 52641121,
      picId_str: '109951169421841547',
      img1v1Id_str: '109951170336953174',

      followed: false,

      fansCount: 2717554
    },
    {
      name: '陶喆',
      id: 5196,
      picId: 109951170606711710,
      img1v1Id: 109951170606719000,
      briefDesc: '',
      picUrl: 'http://p1.music.126.net/7FWLQ9Vm_po0VS7ptLTFiQ==/109951170606711717.jpg',
      img1v1Url: 'http://p1.music.126.net/ZxYbcFQcEElDjER_5Pq6Tg==/109951170606719006.jpg',
      albumSize: 33,
      alias: ['David Tao'],
      trans: '',
      musicSize: 392,
      topicPerson: 0,

      accountId: 1104594,
      picId_str: '109951170606711717',
      img1v1Id_str: '109951170606719006',

      followed: false,

      fansCount: 4127550
    },
    {
      name: '薛之谦',
      id: 5781,
      picId: 109951168719786020,
      img1v1Id: 109951168719781600,
      briefDesc: '',
      picUrl: 'http://p1.music.126.net/XRdiK-vIvPo83d-EjUTdEQ==/109951168719786015.jpg',
      img1v1Url: 'http://p1.music.126.net/jj_Ke8S0q8lpDtohy9seDw==/109951168719781607.jpg',
      albumSize: 19,
      alias: ['Joker Xue', 'Jacky Xue'],
      trans: '',
      musicSize: 286,
      topicPerson: 0,

      accountId: 97137413,
      picId_str: '109951168719786015',
      img1v1Id_str: '109951168719781607',

      followed: false,

      fansCount: 18560510
    },
    {
      name: '蔡健雅',
      id: 7214,
      picId: 109951169487516940,
      img1v1Id: 109951169487525150,
      briefDesc: '',
      picUrl: 'http://p1.music.126.net/xn8-WqOP6bATCd4awXEV6A==/109951169487516949.jpg',
      img1v1Url: 'http://p1.music.126.net/Z0BJgIIvL4ELo7epACRX1g==/109951169487525151.jpg',
      albumSize: 37,
      alias: ['Tanya Chua'],
      trans: '',
      musicSize: 585,
      topicPerson: 0,

      accountId: 2287435,
      picId_str: '109951169487516949',
      img1v1Id_str: '109951169487525151',

      followed: false,

      fansCount: 3152265
    },
    {
      name: '毛不易',
      id: 12138269,
      picId: 109951169875197680,
      img1v1Id: 109951169875194370,
      briefDesc: '',
      picUrl: 'http://p1.music.126.net/BGXHSF_DfcwTqdmMb6C_-g==/109951169875197682.jpg',
      img1v1Url: 'http://p1.music.126.net/svHK8nEPa8J42tJ1by7jrw==/109951169875194361.jpg',
      albumSize: 72,
      alias: [],
      trans: '',
      musicSize: 417,
      topicPerson: 0,

      accountId: 1461695826,
      picId_str: '109951169875197682',
      img1v1Id_str: '109951169875194361',

      followed: false,

      fansCount: 10283694
    },
    {
      name: 'h3R3',
      id: 12631485,
      picId: 109951169603683120,
      img1v1Id: 109951169603658960,
      briefDesc: '',
      picUrl: 'http://p1.music.126.net/in8eeZ0f5r0-iYvfI7c-WQ==/109951169603683118.jpg',
      img1v1Url: 'http://p1.music.126.net/nBgdTq-1Y5GaQw3WpKfGDA==/109951169603658959.jpg',
      albumSize: 27,
      alias: ['刘清云'],
      trans: '',
      musicSize: 93,
      topicPerson: 0,

      accountId: 90467349,
      picId_str: '109951169603683118',
      img1v1Id_str: '109951169603658959',

      followed: false,

      fansCount: 2828567
    },
    {
      name: '孙燕姿',
      id: 9272,
      picId: 109951170045683200,
      img1v1Id: 109951170045684140,
      briefDesc: '',
      picUrl: 'http://p1.music.126.net/VED2XoZcISpeGUTE_Q6lTA==/109951170045683199.jpg',
      img1v1Url: 'http://p1.music.126.net/4egsgJXURoPcBNjj00YQHQ==/109951170045684137.jpg',
      albumSize: 37,
      alias: ['Stefanie Sun'],
      trans: '',
      musicSize: 611,
      topicPerson: 0,

      picId_str: '109951170045683199',
      img1v1Id_str: '109951170045684137',

      followed: false,

      fansCount: 3365178
    },
    {
      name: '许嵩',
      id: 5771,
      picId: 109951169440811460,
      img1v1Id: 109951169440820670,
      briefDesc: '',
      picUrl: 'http://p1.music.126.net/FLHG9Ou-sIq9F6dPe7SuNw==/109951169440811453.jpg',
      img1v1Url: 'http://p1.music.126.net/GzUNS4BEQXP6ElMqLmLfow==/109951169440820668.jpg',
      albumSize: 56,
      alias: ['Vae'],
      trans: '',
      musicSize: 164,
      topicPerson: 0,

      accountId: 31265745,
      picId_str: '109951169440811453',
      img1v1Id_str: '109951169440820668',

      followed: false,

      fansCount: 8289925
    },
    {
      name: '张杰',
      id: 6472,
      picId: 109951169294511650,
      img1v1Id: 109951169294512580,
      briefDesc: '',
      picUrl: 'http://p1.music.126.net/PxsdyHtM0yMi1cIIDk_MFw==/109951169294511651.jpg',
      img1v1Url: 'http://p1.music.126.net/EsUQSAsNbYHbJ7IFqu4rUg==/109951169294512582.jpg',
      albumSize: 136,
      alias: ['Jason Zhang'],
      trans: '',
      musicSize: 854,
      topicPerson: 0,

      accountId: 3492944,
      picId_str: '109951169294511651',
      img1v1Id_str: '109951169294512582',

      followed: false,

      fansCount: 5131869
    },
    {
      name: '单依纯',
      id: 29802127,
      picId: 109951166363845440,
      img1v1Id: 109951166364127800,
      briefDesc: '',
      picUrl: 'http://p1.music.126.net/OWO44NmripkV0nLwh0CYyA==/109951166363845448.jpg',
      img1v1Url: 'http://p1.music.126.net/EZPxbVO_YOSa_j-DcLdh1g==/109951166364127802.jpg',
      albumSize: 35,
      alias: [],
      trans: '',
      musicSize: 225,
      topicPerson: 0,

      accountId: 559485939,
      picId_str: '109951166363845448',
      img1v1Id_str: '109951166364127802',

      followed: false,

      fansCount: 2151135
    },
    {
      name: '赵雷',
      id: 6731,
      picId: 3300733912483912,
      img1v1Id: 18806046882229308,
      briefDesc: '',
      picUrl: 'http://p1.music.126.net/j6KWzSdlRKzZUwJnQx3vBA==/3300733912483912.jpg',
      img1v1Url: 'http://p1.music.126.net/w_UWOls2uCkFN_U62788Xg==/18806046882229308.jpg',
      albumSize: 16,
      alias: ['雷子'],
      trans: '',
      musicSize: 109,
      topicPerson: 0,

      accountId: 93504818,
      picId_str: null,
      img1v1Id_str: '18806046882229308',

      followed: false,

      fansCount: 5265182
    },
    {
      name: '王菲',
      id: 9621,
      picId: 109951170501527380,
      img1v1Id: 109951170501532620,
      briefDesc: '',
      picUrl: 'http://p1.music.126.net/5XK6juNImi6Au60YCCcCtA==/109951170501527382.jpg',
      img1v1Url: 'http://p1.music.126.net/0jkncDBDa7SybKaCubTCdQ==/109951170501532631.jpg',
      albumSize: 94,
      alias: ['王靖雯', 'Faye Wong', 'Shirley Wong'],
      trans: '',
      musicSize: 1721,
      topicPerson: 0,

      picId_str: '109951170501527382',
      img1v1Id_str: '109951170501532631',

      followed: false,

      fansCount: 3047974
    },
    {
      name: '李荣浩',
      id: 4292,
      picId: 109951170316908670,
      img1v1Id: 109951170316912580,
      briefDesc: '',
      picUrl: 'http://p1.music.126.net/FlL7wkN6VBoGTj3Df7s2_w==/109951170316908673.jpg',
      img1v1Url: 'http://p1.music.126.net/YSeeLcOZcHKaL42XcpLyPg==/109951170316912578.jpg',
      albumSize: 33,
      alias: ['Ronghao Li'],
      trans: '',
      musicSize: 247,
      topicPerson: 0,

      accountId: 6228671,
      picId_str: '109951170316908673',
      img1v1Id_str: '109951170316912578',

      followed: false,

      fansCount: 8789581
    },
    {
      name: '周杰伦',
      id: 6452,
      picId: 109951169164936450,
      img1v1Id: 109951169164936940,
      briefDesc: '',
      picUrl: 'http://p1.music.126.net/NWv6PtSBkyWZzqbJVzBr7g==/109951169164936450.jpg',
      img1v1Url: 'http://p1.music.126.net/_ECPuM0s0qtWhkpQOSTZUg==/109951169164936940.jpg',
      albumSize: 40,
      alias: ['Jay Chou', '周董'],
      trans: '',
      musicSize: 554,
      topicPerson: 0,

      picId_str: '109951169164936450',
      img1v1Id_str: '109951169164936940',

      followed: false,

      fansCount: 15290266
    },
    {
      name: 'DJ阿智',
      id: 58149097,
      picId: 109951168832288290,
      img1v1Id: 109951169021262660,
      briefDesc: '',
      picUrl: 'http://p1.music.126.net/trV0x4YFWjTYdpt2HundTg==/109951168832288291.jpg',
      img1v1Url: 'http://p1.music.126.net/GkAP0_ZFVgDWnj0OFD2XGA==/109951169021262650.jpg',
      albumSize: 108,
      alias: [],
      trans: '',
      musicSize: 243,
      topicPerson: 0,

      accountId: 8745538625,
      picId_str: '109951168832288291',
      img1v1Id_str: '109951169021262650',

      followed: false,

      fansCount: 1386777
    },
    {
      name: '华晨宇',
      id: 861777,
      picId: 109951170365595230,
      img1v1Id: 109951170365548210,
      briefDesc: '',
      picUrl: 'http://p1.music.126.net/btGSOfbnvaBsBvPv6UIhow==/109951170365595224.jpg',
      img1v1Url: 'http://p1.music.126.net/AiwzfwDYNT-qYl4ZLsTvVQ==/109951170365548207.jpg',
      albumSize: 37,
      alias: ['花花'],
      trans: '',
      musicSize: 297,
      topicPerson: 0,

      accountId: 43745724,
      picId_str: '109951170365595224',
      img1v1Id_str: '109951170365548207',

      followed: false,

      fansCount: 6603056
    },
    {
      name: '五月天',
      id: 13193,
      picId: 109951170331174200,
      img1v1Id: 109951170330578780,
      briefDesc: '',
      picUrl: 'http://p1.music.126.net/qr5EV1Z5LDgar18Pilw0Eg==/109951170331174200.jpg',
      img1v1Url: 'http://p1.music.126.net/t7BUAen_jTN758ZFAUJyzQ==/109951170330578790.jpg',
      albumSize: 66,
      alias: ['Mayday'],
      trans: '',
      musicSize: 813,
      topicPerson: 0,

      picId_str: '109951170331174200',
      img1v1Id_str: '109951170330578790',

      followed: false,

      fansCount: 3491342
    },
    {
      name: 'Justin Bieber',
      id: 35531,
      picId: 109951166316759380,
      img1v1Id: 109951166316765740,
      briefDesc: '',
      picUrl: 'http://p1.music.126.net/rQnFyWZt9yhg9MON2lH2UQ==/109951166316759373.jpg',
      img1v1Url: 'http://p1.music.126.net/-rGhV4uUUaRsvjG7Phw_IA==/109951166316765749.jpg',
      albumSize: 94,
      alias: [],
      trans: '贾斯汀·比伯',
      musicSize: 8223,
      topicPerson: 0,

      accountId: 2094263743,
      picId_str: '109951166316759373',
      img1v1Id_str: '109951166316765749',
      transNames: ['贾斯汀·比伯'],
      followed: false,

      fansCount: 5980614
    },
    {
      name: 'Taylor Swift',
      id: 44266,
      picId: 109951167881974530,
      img1v1Id: 109951169384495890,
      briefDesc: '',
      picUrl: 'http://p1.music.126.net/J9vY1-_n5msBf8nyCKdL_w==/109951167881974520.jpg',
      img1v1Url: 'http://p1.music.126.net/2dDosoML_YMFbJ8MLCKhyQ==/109951169384495891.jpg',
      albumSize: 182,
      alias: [],
      trans: '泰勒·斯威夫特',
      musicSize: 2430,
      topicPerson: 0,

      accountId: 1880071427,
      picId_str: '109951167881974520',
      img1v1Id_str: '109951169384495891',
      transNames: ['泰勒·斯威夫特'],
      followed: false,

      fansCount: 8593025
    },
    {
      name: '容祖儿',
      id: 9269,
      picId: 109951170514231790,
      img1v1Id: 109951170514231790,
      briefDesc: '',
      picUrl: 'http://p1.music.126.net/FK3gKIL8k5WgVpZmq3nlLg==/109951170514231795.jpg',
      img1v1Url: 'http://p1.music.126.net/36HG9EBu-LKlKl3BvqdeSg==/109951170514231799.jpg',
      albumSize: 137,
      alias: ['Joey Yung'],
      trans: '',
      musicSize: 1979,
      topicPerson: 0,

      accountId: 7890760922,
      picId_str: '109951170514231795',
      img1v1Id_str: '109951170514231799',

      followed: false,

      fansCount: 665727
    },
    {
      name: '梁静茹',
      id: 8325,
      picId: 109951164077995940,
      img1v1Id: 109951164078000670,
      briefDesc: '',
      picUrl: 'http://p1.music.126.net/g_32ea9zMstphGkRjwgC1g==/109951164077995938.jpg',
      img1v1Url: 'http://p1.music.126.net/RsBGuqdnEgMSSZuohnwg7w==/109951164078000677.jpg',
      albumSize: 35,
      alias: ['Fish Leong', 'Jasmine Leong'],
      trans: '',
      musicSize: 467,
      topicPerson: 0,

      picId_str: '109951164077995938',
      img1v1Id_str: '109951164078000677',

      followed: false,

      fansCount: 1334162
    },
    {
      name: 'EXO',
      id: 759509,
      picId: 109951168721913420,
      img1v1Id: 109951168721802910,
      briefDesc: '',
      picUrl: 'http://p1.music.126.net/vY_0HYqgraysBLWXuJ5tIQ==/109951168721913427.jpg',
      img1v1Url: 'http://p1.music.126.net/13uIhYsC21O2fF76gYwF_A==/109951168721802905.jpg',
      albumSize: 38,
      alias: [],
      trans: '엑소',
      musicSize: 467,
      topicPerson: 0,

      picId_str: '109951168721913427',
      img1v1Id_str: '109951168721802905',
      transNames: ['엑소'],
      followed: false,

      fansCount: 2288826
    },
    {
      name: '徐佳莹',
      id: 9940,
      picId: 109951167507013620,
      img1v1Id: 109951167507015580,
      briefDesc: '',
      picUrl: 'http://p1.music.126.net/hcwPSdlU235A9VENxlOl2g==/109951167507013622.jpg',
      img1v1Url: 'http://p1.music.126.net/PzKwP2xvQSWIGyJlJtGB8w==/109951167507015586.jpg',
      albumSize: 56,
      alias: ['LaLa Hsu'],
      trans: '',
      musicSize: 343,
      topicPerson: 0,

      accountId: 2079882,
      picId_str: '109951167507013622',
      img1v1Id_str: '109951167507015586',

      followed: false,

      fansCount: 2018625
    },
    {
      name: '队长',
      id: 1143033,
      picId: 109951164546544260,
      img1v1Id: 109951169548313440,
      briefDesc: '',
      picUrl: 'http://p1.music.126.net/CsGY6JmX21cxa-5DZKIqpQ==/109951164546544248.jpg',
      img1v1Url: 'http://p1.music.126.net/VxlVtJCnBkHmyoY6PbnNOA==/109951169548313443.jpg',
      albumSize: 48,
      alias: ['杨浪，youngcaptain'],
      trans: '',
      musicSize: 131,
      topicPerson: 0,

      accountId: 70436671,
      picId_str: '109951164546544248',
      img1v1Id_str: '109951169548313443',

      followed: false,

      fansCount: 4200787
    },
    {
      name: '张碧晨',
      id: 1024308,
      picId: 109951167896179360,
      img1v1Id: 109951167896188580,
      briefDesc: '',
      picUrl: 'http://p1.music.126.net/ArbpVuafLfcdRAPDi4JTDA==/109951167896179360.jpg',
      img1v1Url: 'http://p1.music.126.net/drd04rrH1peb1pyICCxKAg==/109951167896188575.jpg',
      albumSize: 60,
      alias: ['Diamond Zhang'],
      trans: '',
      musicSize: 422,
      topicPerson: 0,

      accountId: 37132109,
      picId_str: '109951167896179360',
      img1v1Id_str: '109951167896188575',

      followed: false,

      fansCount: 2329807
    },
    {
      name: '马思唯',
      id: 1132392,
      picId: 109951170646726910,
      img1v1Id: 109951170646736530,
      briefDesc: '',
      picUrl: 'http://p1.music.126.net/bRHsTqcAX6mpZCylq_GIzQ==/109951170646726907.jpg',
      img1v1Url: 'http://p1.music.126.net/WDPjjeAunxIC8DVGWjG6Lw==/109951170646736523.jpg',
      albumSize: 39,
      alias: ['Masiwei'],
      trans: '',
      musicSize: 281,
      topicPerson: 0,

      accountId: 6964899,
      picId_str: '109951170646726907',
      img1v1Id_str: '109951170646736523',

      followed: false,

      fansCount: 3643866
    },
    {
      name: '王贰浪',
      id: 14312549,
      picId: 109951163303426320,
      img1v1Id: 109951165907833550,
      briefDesc: '',
      picUrl: 'http://p1.music.126.net/Kskaga6PwyOIvE7id7_J9A==/109951163303426318.jpg',
      img1v1Url: 'http://p1.music.126.net/FRmMNIYCEBkzd0KcSvFW3Q==/109951165907833550.jpg',
      albumSize: 55,
      alias: [],
      trans: '',
      musicSize: 165,
      topicPerson: 0,

      accountId: 328199093,
      picId_str: '109951163303426318',
      img1v1Id_str: '109951165907833550',

      followed: false,

      fansCount: 3947803
    },
    {
      name: '初音ミク',
      id: 159692,
      picId: 109951164605971340,
      img1v1Id: 109951164605977710,
      briefDesc: '',
      picUrl: 'http://p1.music.126.net/-QWJunQEsgiYvEoF4VITgQ==/109951164605971338.jpg',
      img1v1Url: 'http://p1.music.126.net/GTrpKziMFTfaQnl2YzUZtg==/109951164605977706.jpg',
      albumSize: 297,
      alias: ['Hatsune Miku'],
      trans: '初音未来',
      musicSize: 26907,
      topicPerson: 0,

      picId_str: '109951164605971338',
      img1v1Id_str: '109951164605977706',
      transNames: ['初音未来'],
      followed: false,

      fansCount: 2531943
    },
    {
      name: '张信哲',
      id: 6454,
      picId: 109951168500581440,
      img1v1Id: 109951168500585380,
      briefDesc: '',
      picUrl: 'http://p1.music.126.net/toy86e__VchFjS1fJ7LWTQ==/109951168500581439.jpg',
      img1v1Url: 'http://p1.music.126.net/atLP_IgNupTebpfySkG04w==/109951168500585376.jpg',
      albumSize: 66,
      alias: ['阿哲', 'Jeff Chang'],
      trans: '',
      musicSize: 911,
      topicPerson: 0,

      accountId: 517640649,
      picId_str: '109951168500581439',
      img1v1Id_str: '109951168500585376',

      followed: false,

      fansCount: 1401176
    },
    {
      name: '周深',
      id: 1030001,
      picId: 109951168649079630,
      img1v1Id: 109951168649034700,
      briefDesc: '',
      picUrl: 'http://p1.music.126.net/t257JtUSkizwFqtfur41nw==/109951168649079639.jpg',
      img1v1Url: 'http://p1.music.126.net/O7iklZenQK0SdemoEeyovQ==/109951168649034709.jpg',
      albumSize: 210,
      alias: [],
      trans: '',
      musicSize: 800,
      topicPerson: 0,

      accountId: 371143242,
      picId_str: '109951168649079639',
      img1v1Id_str: '109951168649034709',

      followed: false,

      fansCount: 6287018
    },
    {
      name: '郭顶',
      id: 2843,
      picId: 109951165912271970,
      img1v1Id: 109951165912271970,
      briefDesc: '',
      picUrl: 'http://p1.music.126.net/7OoAuH2Iqjr3Owmqf4pNFQ==/109951165912271970.jpg',
      img1v1Url: 'http://p1.music.126.net/7uBClWo-0s4QFusH3q4HAg==/109951165912271974.jpg',
      albumSize: 8,
      alias: [],
      trans: '',
      musicSize: 42,
      topicPerson: 0,

      accountId: 349660440,
      picId_str: '109951165912271970',
      img1v1Id_str: '109951165912271974',

      followed: false,

      fansCount: 4157129
    },
    {
      name: 'Beyond',
      id: 11127,
      picId: 109951165566992340,
      img1v1Id: 109951165566993820,
      briefDesc: '',
      picUrl: 'http://p1.music.126.net/EawqbkXCxGmxZ6nnqTKxKw==/109951165566992331.jpg',
      img1v1Url: 'http://p1.music.126.net/9aCJYVD0JZ0NckqAn3a_3w==/109951165566993818.jpg',
      albumSize: 138,
      alias: [],
      trans: '超越',
      musicSize: 2462,
      topicPerson: 0,

      picId_str: '109951165566992331',
      img1v1Id_str: '109951165566993818',
      transNames: ['超越'],
      followed: false,

      fansCount: 4085330
    },
    {
      name: '宝宝巴士',
      id: 14714082,
      picId: 109951164255331250,
      img1v1Id: 109951163438785710,
      briefDesc: '',
      picUrl: 'http://p1.music.126.net/hThCMr9Pm5fW9LLuD-M_xw==/109951164255331245.jpg',
      img1v1Url: 'http://p1.music.126.net/Fp2l7_9h12895Q22lIqzXQ==/109951163438785715.jpg',
      albumSize: 57,
      alias: [],
      trans: '',
      musicSize: 1856,
      topicPerson: 0,

      picId_str: '109951164255331245',
      img1v1Id_str: '109951163438785715',

      followed: false,

      fansCount: 2718111
    },
    {
      name: '蔡依林',
      id: 7219,
      picId: 109951169061116340,
      img1v1Id: 109951169061111940,
      briefDesc: '',
      picUrl: 'http://p1.music.126.net/gujwuHKRhTykPZS4GtJQ3g==/109951169061116331.jpg',
      img1v1Url: 'http://p1.music.126.net/UJyEk9xa1T66zDnS0U8wGA==/109951169061111938.jpg',
      albumSize: 53,
      alias: ['Jolin Cai'],
      trans: '',
      musicSize: 805,
      topicPerson: 0,

      picId_str: '109951169061116331',
      img1v1Id_str: '109951169061111938',

      followed: false,

      fansCount: 1294667
    },
    {
      name: '王唯旖',
      id: 12232132,
      picId: 109951163028292510,
      img1v1Id: 109951170511411090,
      briefDesc: '',
      picUrl: 'http://p1.music.126.net/BJvezWyeCQZJxUsSExw1Ng==/109951163028292519.jpg',
      img1v1Url: 'http://p1.music.126.net/G8-4Y-d6FQNGvCC4tQcBIg==/109951170511411084.jpg',
      albumSize: 37,
      alias: [],
      trans: '',
      musicSize: 96,
      topicPerson: 0,

      accountId: 630919133,
      picId_str: '109951163028292519',
      img1v1Id_str: '109951170511411084',

      followed: false,

      fansCount: 195943
    },
    {
      name: 'The Weeknd',
      id: 185858,
      picId: 109951170188145760,
      img1v1Id: 109951170188151520,
      briefDesc: '',
      picUrl: 'http://p1.music.126.net/zoYKI2MegSG9JLBVS6Sl-w==/109951170188145752.jpg',
      img1v1Url: 'http://p1.music.126.net/xLCD9qXTL--3YABPcId3Fw==/109951170188151527.jpg',
      albumSize: 122,
      alias: [],
      trans: '威肯',
      musicSize: 4512,
      topicPerson: 0,

      accountId: 5138893649,
      picId_str: '109951170188145752',
      img1v1Id_str: '109951170188151527',
      transNames: ['威肯'],
      followed: false,

      fansCount: 2270809
    },
    {
      name: '告五人',
      id: 12676697,
      picId: 109951168306629780,
      img1v1Id: 109951168306621490,
      briefDesc: '',
      picUrl: 'http://p1.music.126.net/Xyoa72EqbaHGHiSfL5D_qA==/109951168306629780.jpg',
      img1v1Url: 'http://p1.music.126.net/MbhzNEtk-c3KybdGtq3ueQ==/109951168306621485.jpg',
      albumSize: 28,
      alias: ['Accusefive'],
      trans: '',
      musicSize: 104,
      topicPerson: 0,

      accountId: 3301779206,
      picId_str: '109951168306629780',
      img1v1Id_str: '109951168306621485',

      followed: false,

      fansCount: 4538758
    },
    {
      name: '杨丞琳',
      id: 10199,
      picId: 109951169061328210,
      img1v1Id: 109951169061436660,
      briefDesc: '',
      picUrl: 'http://p1.music.126.net/f_fF2fiBIqmnHKm5-JeHow==/109951169061328202.jpg',
      img1v1Url: 'http://p1.music.126.net/Kttdnqs8jmq2l_ogB5wnOQ==/109951169061436656.jpg',
      albumSize: 45,
      alias: ['Rainie Yang'],
      trans: '',
      musicSize: 601,
      topicPerson: 0,

      accountId: 48137,
      picId_str: '109951169061328202',
      img1v1Id_str: '109951169061436656',

      followed: false,

      fansCount: 833763
    },
    {
      name: '莫文蔚',
      id: 8926,
      picId: 109951170605335260,
      img1v1Id: 109951170605342530,
      briefDesc: '',
      picUrl: 'http://p1.music.126.net/cU2F65rQVwcB_NW6h_qTFQ==/109951170605335263.jpg',
      img1v1Url: 'http://p1.music.126.net/suzLwfTCO5aOnyQ37sLAKA==/109951170605342528.jpg',
      albumSize: 71,
      alias: ['Karen Mok', 'Karen Joy Morris'],
      trans: '',
      musicSize: 953,
      topicPerson: 0,

      accountId: 8707891118,
      picId_str: '109951170605335263',
      img1v1Id_str: '109951170605342528',

      followed: false,

      fansCount: 2274899
    },
    {
      name: '郭静',
      id: 7760,
      picId: 109951165305280260,
      img1v1Id: 109951168521701580,
      briefDesc: '',
      picUrl: 'http://p1.music.126.net/R7MlJ3nn7wPHrYBH8E63Hw==/109951165305280256.jpg',
      img1v1Url: 'http://p1.music.126.net/bxDlRQcZ_-2WlyutwYjOEg==/109951168521701588.jpg',
      albumSize: 44,
      alias: ['Claire Kuo'],
      trans: '',
      musicSize: 272,
      topicPerson: 0,

      accountId: 3240550060,
      picId_str: '109951165305280256',
      img1v1Id_str: '109951168521701588',

      followed: false,

      fansCount: 213543
    },
    {
      name: 'Wiz_H张子豪',
      id: 13112601,
      picId: 109951165843118850,
      img1v1Id: 109951166530450260,
      briefDesc: '',
      picUrl: 'http://p1.music.126.net/PLA3c0_Y56L_iyzgQSu_dw==/109951165843118851.jpg',
      img1v1Url: 'http://p1.music.126.net/CSH3h2Q0xE6DrxLPVn_-NA==/109951166530450252.jpg',
      albumSize: 28,
      alias: [],
      trans: '',
      musicSize: 77,
      topicPerson: 0,

      accountId: 528506452,
      picId_str: '109951165843118851',
      img1v1Id_str: '109951166530450252',

      followed: false,

      fansCount: 849019
    },
    {
      name: '陈粒',
      id: 1007170,
      picId: 6641050233030995,
      img1v1Id: 6628955605123612,
      briefDesc: '',
      picUrl: 'http://p1.music.126.net/3WhzK6ozFXUsNutDU566ZA==/6641050233030995.jpg',
      img1v1Url: 'http://p1.music.126.net/Q92YwJrk2f2tsK-7B0VIhQ==/6628955605123612.jpg',
      albumSize: 55,
      alias: [],
      trans: '',
      musicSize: 222,
      topicPerson: 0,

      accountId: 37179178,
      picId_str: null,
      img1v1Id_str: null,

      followed: false,

      fansCount: 5948048
    },
    {
      name: '陈楚生',
      id: 2124,
      picId: 109951164172869490,
      img1v1Id: 109951170540755840,
      briefDesc: '',
      picUrl: 'http://p1.music.126.net/w7gjxVVrinDtnwrY25dRhQ==/109951164172869486.jpg',
      img1v1Url: 'http://p1.music.126.net/HXs1MIcM7n9V7qFDTuW71A==/109951170540755845.jpg',
      albumSize: 59,
      alias: [],
      trans: '',
      musicSize: 415,
      topicPerson: 0,

      accountId: 39002,
      picId_str: '109951164172869486',
      img1v1Id_str: '109951170540755845',

      followed: false,

      fansCount: 1300141
    },
    {
      name: '黄丽玲',
      id: 7063,
      picId: 109951169891913170,
      img1v1Id: 109951169891920000,
      briefDesc: '',
      picUrl: 'http://p1.music.126.net/bxxC8Nb86jc0XjZE3gl_YA==/109951169891913162.jpg',
      img1v1Url: 'http://p1.music.126.net/CU7boUrSdWPMQV5ZvfKhPg==/109951169891920006.jpg',
      albumSize: 60,
      alias: ['A-Lin'],
      trans: '',
      musicSize: 424,
      topicPerson: 0,

      accountId: 3251792543,
      picId_str: '109951169891913162',
      img1v1Id_str: '109951169891920006',

      followed: false,

      fansCount: 1290761
    },
    {
      name: 'By2',
      id: 11097,
      picId: 109951164470148350,
      img1v1Id: 109951167486285820,
      briefDesc: '',
      picUrl: 'http://p1.music.126.net/2mv7_2y-xqxRLV48VtBddA==/109951164470148357.jpg',
      img1v1Url: 'http://p1.music.126.net/FB_FPNnRnOXd0wlPr0Udyg==/109951167486285823.jpg',
      albumSize: 44,
      alias: [],
      trans: '',
      musicSize: 192,
      topicPerson: 0,

      accountId: 1808733931,
      picId_str: '109951164470148357',
      img1v1Id_str: '109951167486285823',

      followed: false,

      fansCount: 802881
    },
    {
      name: '张韶涵',
      id: 10562,
      picId: 109951167434894780,
      img1v1Id: 109951167434900510,
      briefDesc: '',
      picUrl: 'http://p1.music.126.net/DV7_R9yRIC2u7iMlLgPZPg==/109951167434894779.jpg',
      img1v1Url: 'http://p1.music.126.net/949KLcOoLnn71XzIb-X9HA==/109951167434900505.jpg',
      albumSize: 41,
      alias: ['Angela Chang', 'Angela Zhang'],
      trans: '',
      musicSize: 445,
      topicPerson: 0,

      accountId: 1971400791,
      picId_str: '109951167434894779',
      img1v1Id_str: '109951167434900505',

      followed: false,

      fansCount: 1632044
    },
    {
      name: 'ET',
      id: 49513323,
      picId: 109951166338994700,
      img1v1Id: 109951169302689040,
      briefDesc: '',
      picUrl: 'http://p1.music.126.net/wWZxAlJWQPJPjGKHSFPCAw==/109951166338994700.jpg',
      img1v1Url: 'http://p1.music.126.net/IBb5MmYSr4aWCxqrEE6tZw==/109951169302689041.jpg',
      albumSize: 36,
      alias: ['邵甲天-ET'],
      trans: '',
      musicSize: 67,
      topicPerson: 0,

      accountId: 1382448730,
      picId_str: '109951166338994700',
      img1v1Id_str: '109951169302689041',

      followed: false,

      fansCount: 65019
    },
    {
      name: '罗言',
      id: 33863232,
      picId: 109951167579824880,
      img1v1Id: 109951170456277120,
      briefDesc: '',
      picUrl: 'http://p1.music.126.net/AXQB530V_ZrrQctITVfRnw==/109951167579824884.jpg',
      img1v1Url: 'http://p1.music.126.net/eaGRzap0kwGaWfYtKK_7sQ==/109951170456277119.jpg',
      albumSize: 14,
      alias: ['RollFlash'],
      trans: '',
      musicSize: 132,
      topicPerson: 0,

      accountId: 2014687853,
      picId_str: '109951167579824884',
      img1v1Id_str: '109951170456277119',

      followed: false,

      fansCount: 1090553
    },
    {
      name: '任然',
      id: 9255,
      picId: 109951163137467400,
      img1v1Id: 109951167124899790,
      briefDesc: '',
      picUrl: 'http://p1.music.126.net/GL0xcgu4OUml509BbW2qAQ==/109951163137467389.jpg',
      img1v1Url: 'http://p1.music.126.net/MetP2jvd6gjbUGG6NIp5_A==/109951167124899789.jpg',
      albumSize: 113,
      alias: [],
      trans: '',
      musicSize: 319,
      topicPerson: 0,

      accountId: 105753794,
      picId_str: '109951163137467389',
      img1v1Id_str: '109951167124899789',

      followed: false,

      fansCount: 2818441
    },
    {
      name: '无面小生',
      id: 31347027,
      picId: 109951163825004370,
      img1v1Id: 109951166946405980,
      briefDesc: '',
      picUrl: 'http://p1.music.126.net/bgt3jO8qFvoISvfldjdlBw==/109951163825004375.jpg',
      img1v1Url: 'http://p1.music.126.net/6qcu5ATxOOmdMxEbyzdcsg==/109951166946405982.jpg',
      albumSize: 29,
      alias: [],
      trans: '',
      musicSize: 125,
      topicPerson: 0,

      accountId: 1310059473,
      picId_str: '109951163825004375',
      img1v1Id_str: '109951166946405982',

      followed: false,

      fansCount: 35969
    },
    {
      name: '余佳运',
      id: 1079074,
      picId: 109951165432652380,
      img1v1Id: 109951165432652400,
      briefDesc: '',
      picUrl: 'http://p1.music.126.net/31QAzJPNmYzZIpx-iAcy0g==/109951165432652392.jpg',
      img1v1Url: 'http://p1.music.126.net/ZcTOs-OTtuaSK0Ie5We1EQ==/109951165432652393.jpg',
      albumSize: 48,
      alias: [],
      trans: '',
      musicSize: 154,
      topicPerson: 0,

      accountId: 37365202,
      picId_str: '109951165432652392',
      img1v1Id_str: '109951165432652393',

      followed: false,

      fansCount: 2309234
    },
    {
      name: '梁博',
      id: 166010,
      picId: 109951164387664340,
      img1v1Id: 109951164387670160,
      briefDesc: '',
      picUrl: 'http://p1.music.126.net/nbpbayELLLqeRGM0Q6s-PQ==/109951164387664340.jpg',
      img1v1Url: 'http://p1.music.126.net/LaqoquOfDZnlrsEj22kehw==/109951164387670165.jpg',
      albumSize: 15,
      alias: [],
      trans: '',
      musicSize: 99,
      topicPerson: 0,

      accountId: 381796696,
      picId_str: '109951164387664340',
      img1v1Id_str: '109951164387670165',

      followed: false,

      fansCount: 1697925
    },
    {
      name: '杜宣达',
      id: 12060040,
      picId: 109951164816694180,
      img1v1Id: 109951167746230350,
      briefDesc: '',
      picUrl: 'http://p1.music.126.net/zRoJTCGq2yImTQ_jjor7zw==/109951164816694171.jpg',
      img1v1Url: 'http://p1.music.126.net/epqingjkt1RwsTn0wCjurg==/109951167746230349.jpg',
      albumSize: 152,
      alias: [],
      trans: '',
      musicSize: 294,
      topicPerson: 0,

      accountId: 111130952,
      picId_str: '109951164816694171',
      img1v1Id_str: '109951167746230349',

      followed: false,

      fansCount: 675856
    },
    {
      name: '周传雄',
      id: 6652,
      picId: 109951165816623230,
      img1v1Id: 109951170546193650,
      briefDesc: '',
      picUrl: 'http://p1.music.126.net/Vgsy_xFFUT1wo6wk0DQXqA==/109951165816623226.jpg',
      img1v1Url: 'http://p1.music.126.net/BK4RcrJ8C8AXfcQpJn39cg==/109951170546193648.jpg',
      albumSize: 47,
      alias: ['小刚', 'Steve Chou'],
      trans: '',
      musicSize: 508,
      topicPerson: 0,

      accountId: 44653565,
      picId_str: '109951165816623226',
      img1v1Id_str: '109951170546193648',

      followed: false,

      fansCount: 1856350
    },
    {
      name: 'BIGBANG',
      id: 126339,
      picId: 109951167699854340,
      img1v1Id: 109951167699859730,
      briefDesc: '',
      picUrl: 'http://p1.music.126.net/E22bm980r6xPIP3_DvsTBw==/109951167699854344.jpg',
      img1v1Url: 'http://p1.music.126.net/1z4BEmWB-rIscpYrntXvOA==/109951167699859734.jpg',
      albumSize: 70,
      alias: ['빅뱅', '宇宙大爆炸'],
      trans: '빅뱅',
      musicSize: 659,
      topicPerson: 0,

      picId_str: '109951167699854344',
      img1v1Id_str: '109951167699859734',
      transNames: ['빅뱅'],
      followed: false,

      fansCount: 2727954
    },
    {
      name: '胡彦斌',
      id: 3066,
      picId: 109951169374775660,
      img1v1Id: 109951169374772270,
      briefDesc: '',
      picUrl: 'http://p1.music.126.net/DOoazTecY7jC4JkEOfgujA==/109951169374775668.jpg',
      img1v1Url: 'http://p1.music.126.net/w_z5B6inCOmfdmOXLLK6NA==/109951169374772275.jpg',
      albumSize: 77,
      alias: ['Tiger Hu', 'Anson Hu'],
      trans: '',
      musicSize: 636,
      topicPerson: 0,

      accountId: 50485130,
      picId_str: '109951169374775668',
      img1v1Id_str: '109951169374772275',

      followed: false,

      fansCount: 1124198
    },
    {
      name: 'Imagine Dragons',
      id: 94779,
      picId: 109951170483989760,
      img1v1Id: 109951170356708100,
      briefDesc: '',
      picUrl: 'http://p1.music.126.net/lWRDGFJAq-VcUIiQjDq4ow==/109951170483989765.jpg',
      img1v1Url: 'http://p1.music.126.net/u-NXLh1jM7EhYLCpBjZDZQ==/109951170356708088.jpg',
      albumSize: 82,
      alias: [],
      trans: '梦龙乐队、梦想之龙乐队、谜团乐队',
      musicSize: 3771,
      topicPerson: 0,

      accountId: 3808758608,
      picId_str: '109951170483989765',
      img1v1Id_str: '109951170356708088',
      transNames: ['梦龙乐队、梦想之龙乐队、谜团乐队'],
      followed: false,

      fansCount: 2832919
    },
    {
      name: '罗森涛',
      id: 48082785,
      picId: 109951169703439420,
      img1v1Id: 109951169703449660,
      briefDesc: '',
      picUrl: 'http://p1.music.126.net/OZ16X3ld3ElRUnG6pMO4JQ==/109951169703439416.jpg',
      img1v1Url: 'http://p1.music.126.net/xCzSaRgOo1OFGavE8nyUnw==/109951169703449663.jpg',
      albumSize: 24,
      alias: [],
      trans: '',
      musicSize: 76,
      topicPerson: 0,

      accountId: 3948789567,
      picId_str: '109951169703439416',
      img1v1Id_str: '109951169703449663',

      followed: false,

      fansCount: 199821
    },
    {
      name: '王赫野',
      id: 47091532,
      picId: 109951165791936210,
      img1v1Id: 109951167378274600,
      briefDesc: '',
      picUrl: 'http://p1.music.126.net/qxHjJxPE8laLCKsZK7EG1w==/109951165791936208.jpg',
      img1v1Url: 'http://p1.music.126.net/Ibw1MyJVlT5ibG2DHhE0NA==/109951167378274594.jpg',
      albumSize: 21,
      alias: [],
      trans: '',
      musicSize: 155,
      topicPerson: 0,

      accountId: 1969805803,
      picId_str: '109951165791936208',
      img1v1Id_str: '109951167378274594',

      followed: false,

      fansCount: 593834
    },
    {
      name: '卢广仲',
      id: 3690,
      picId: 109951166698386540,
      img1v1Id: 109951166698382240,
      briefDesc: '',
      picUrl: 'http://p1.music.126.net/KVikVjAdccZ2KOGIu0nsZg==/109951166698386543.jpg',
      img1v1Url: 'http://p1.music.126.net/DOhZkp1I7JyCtcZ88jc2Uw==/109951166698382247.jpg',
      albumSize: 40,
      alias: ['Crowd Lu'],
      trans: '',
      musicSize: 338,
      topicPerson: 0,

      picId_str: '109951166698386543',
      img1v1Id_str: '109951166698382247',

      followed: false,

      fansCount: 658280
    },
    {
      name: '梨冻紧',
      id: 33259235,
      picId: 109951164997804900,
      img1v1Id: 109951167942752240,
      briefDesc: '',
      picUrl: 'http://p1.music.126.net/PWRWj-z4qXbKm0Nny02B5g==/109951164997804888.jpg',
      img1v1Url: 'http://p1.music.126.net/MrHwTNckIsypqatI_PQhhA==/109951167942752240.jpg',
      albumSize: 21,
      alias: [],
      trans: '',
      musicSize: 67,
      topicPerson: 0,

      accountId: 345757844,
      picId_str: '109951164997804888',
      img1v1Id_str: '109951167942752240',

      followed: false,

      fansCount: 114702
    },
    {
      name: '贝乐虎',
      id: 30109388,
      picId: 109951169838931460,
      img1v1Id: 109951169838932960,
      briefDesc: '',
      picUrl: 'http://p1.music.126.net/lAlD9yNk_wu3jzxb5slM9w==/109951169838931462.jpg',
      img1v1Url: 'http://p1.music.126.net/gtbwdnjNLFEoVAq2SS2CIA==/109951169838932968.jpg',
      albumSize: 57,
      alias: [],
      trans: '',
      musicSize: 1481,
      topicPerson: 0,

      picId_str: '109951169838931462',
      img1v1Id_str: '109951169838932968',

      followed: false,

      fansCount: 679168
    },
    {
      name: '张学友',
      id: 6460,
      picId: 109951166958310160,
      img1v1Id: 109951166958312100,
      briefDesc: '',
      picUrl: 'http://p1.music.126.net/bGTTVbPYHT24w2HkHrdXmQ==/109951166958310165.jpg',
      img1v1Url: 'http://p1.music.126.net/LJ10D1f0AmqT_lODhhlAZg==/109951166958312104.jpg',
      albumSize: 127,
      alias: ['Jacky Cheung'],
      trans: '',
      musicSize: 2578,
      topicPerson: 0,

      picId_str: '109951166958310165',
      img1v1Id_str: '109951166958312104',

      followed: false,

      fansCount: 2461359
    },
    {
      name: '林忆莲',
      id: 8336,
      picId: 109951170647127800,
      img1v1Id: 109951170647136050,
      briefDesc: '',
      picUrl: 'http://p1.music.126.net/4HX8Gz5f19W6roAkPc0Rsw==/109951170647127809.jpg',
      img1v1Url: 'http://p1.music.126.net/-CmoYXc9-zuxu4i6d1db_w==/109951170647136053.jpg',
      albumSize: 102,
      alias: ['Sandy Lam'],
      trans: '',
      musicSize: 1826,
      topicPerson: 0,

      accountId: 13284797227,
      picId_str: '109951170647127809',
      img1v1Id_str: '109951170647136053',

      followed: false,

      fansCount: 915894
    },
    {
      name: '口古口古',
      id: 60685046,
      picId: 109951169707900460,
      img1v1Id: 109951169479115400,
      briefDesc: '',
      picUrl: 'http://p1.music.126.net/YThwk_DKhGVF8IzIwSuNvA==/109951169707900462.jpg',
      img1v1Url: 'http://p1.music.126.net/JQ5Ld_DoufP5N1JSu0UXWg==/109951169479115393.jpg',
      albumSize: 1,
      alias: [],
      trans: '',
      musicSize: 28,
      topicPerson: 0,

      accountId: 349109566,
      picId_str: '109951169707900462',
      img1v1Id_str: '109951169479115393',

      followed: false,

      fansCount: 3356
    },
    {
      name: 'Happer',
      id: 58203900,
      picId: 109951167035873600,
      img1v1Id: 109951167035866770,
      briefDesc: '',
      picUrl: 'http://p1.music.126.net/4cZE0j3bfO0sqdGgBpWzvA==/109951167035873596.jpg',
      img1v1Url: 'http://p1.music.126.net/F5GXTfofFC78c2mALw2T7A==/109951167035866768.jpg',
      albumSize: 10,
      alias: ['许晨曦'],
      trans: '',
      musicSize: 33,
      topicPerson: 0,

      accountId: 1746920895,
      picId_str: '109951167035873596',
      img1v1Id_str: '109951167035866768',

      followed: false,

      fansCount: 22782
    },
    {
      name: '刘大拿',
      id: 29588305,
      picId: 109951163534426100,
      img1v1Id: 109951168863850270,
      briefDesc: '',
      picUrl: 'http://p1.music.126.net/nDHmzzJFCPnqbdFEkZh9eA==/109951163534426092.jpg',
      img1v1Url: 'http://p1.music.126.net/20HoukiJh7LWhMnksj9y0g==/109951168863850265.jpg',
      albumSize: 76,
      alias: [],
      trans: '',
      musicSize: 118,
      topicPerson: 0,

      accountId: 272502907,
      picId_str: '109951163534426092',
      img1v1Id_str: '109951168863850265',

      followed: false,

      fansCount: 752670
    },
    {
      name: 'Bruno Mars',
      id: 178059,
      picId: 109951165779168100,
      img1v1Id: 109951169885507020,
      briefDesc: '',
      picUrl: 'http://p1.music.126.net/dSpg-NkDgy0Bp8CIMuVi8Q==/109951165779168096.jpg',
      img1v1Url: 'http://p1.music.126.net/QdZ3DRwK2yZHxxu0Txax9A==/109951169885507030.jpg',
      albumSize: 45,
      alias: [],
      trans: '布鲁诺·马尔斯',
      musicSize: 947,
      topicPerson: 0,

      accountId: 1671465495,
      picId_str: '109951165779168096',
      img1v1Id_str: '109951169885507030',
      transNames: ['布鲁诺·马尔斯'],
      followed: false,

      fansCount: 2341007
    },
    {
      name: '法老',
      id: 865007,
      picId: 109951167728753950,
      img1v1Id: 109951170711607310,
      briefDesc: '',
      picUrl: 'http://p1.music.126.net/HTXB834S72ulGPL1oM-RCg==/109951167728753946.jpg',
      img1v1Url: 'http://p1.music.126.net/mXAWgUNp5pLAzmphYvBrzQ==/109951170711607308.jpg',
      albumSize: 31,
      alias: [],
      trans: '',
      musicSize: 242,
      topicPerson: 0,

      accountId: 6966840,
      picId_str: '109951167728753946',
      img1v1Id_str: '109951170711607308',

      followed: false,

      fansCount: 4817779
    },
    {
      name: '王宇宙Leto',
      id: 49144727,
      picId: 109951164344343220,
      img1v1Id: 109951169721533550,
      briefDesc: '',
      picUrl: 'http://p1.music.126.net/frNsVRHtEcJ1FRgDaXebuA==/109951164344343209.jpg',
      img1v1Url: 'http://p1.music.126.net/ArkB_Yl3wNbco4Jh4W18pg==/109951169721533552.jpg',
      albumSize: 30,
      alias: [],
      trans: '',
      musicSize: 79,
      topicPerson: 0,

      accountId: 86157242,
      picId_str: '109951164344343209',
      img1v1Id_str: '109951169721533552',

      followed: false,

      fansCount: 36832
    },
    {
      name: 'Lil Ghost小鬼',
      id: 12493781,
      picId: 109951165928323970,
      img1v1Id: 109951169289197020,
      briefDesc: '',
      picUrl: 'http://p1.music.126.net/CHei-uv74IxCFWJ7FOb1tw==/109951165928323969.jpg',
      img1v1Url: 'http://p1.music.126.net/Yybrt9QjndrqSRkPs5v2NQ==/109951169289197022.jpg',
      albumSize: 42,
      alias: ['王琳凯'],
      trans: '',
      musicSize: 235,
      topicPerson: 0,

      accountId: 295088806,
      picId_str: '109951165928323969',
      img1v1Id_str: '109951169289197022',

      followed: false,

      fansCount: 2249046
    },
    {
      name: '海洋Bo',
      id: 36985903,
      picId: 109951166613771680,
      img1v1Id: 109951169955219120,
      briefDesc: '',
      picUrl: 'http://p1.music.126.net/Zc75ADHgC-igktpI9eKUrA==/109951166613771685.jpg',
      img1v1Url: 'http://p1.music.126.net/YXC1dKYtoYeNODtOVtI0Vw==/109951169955219117.jpg',
      albumSize: 20,
      alias: [],
      trans: '',
      musicSize: 43,
      topicPerson: 0,

      accountId: 1369244318,
      picId_str: '109951166613771685',
      img1v1Id_str: '109951169955219117',

      followed: false,

      fansCount: 958534
    },
    {
      name: '杨宗纬',
      id: 6066,
      picId: 3243559305677511,
      img1v1Id: 3261151495434543,
      briefDesc: '',
      picUrl: 'http://p1.music.126.net/5_0ux0Y9P5WTfW70zSP2wQ==/3243559305677511.jpg',
      img1v1Url: 'http://p1.music.126.net/Q4JSaV98wuU6xElATsFjAw==/3261151495434543.jpg',
      albumSize: 31,
      alias: ['Aska Yang'],
      trans: '',
      musicSize: 274,
      topicPerson: 0,

      accountId: 818067,
      picId_str: null,
      img1v1Id_str: null,

      followed: false,

      fansCount: 1745180
    },
    {
      name: '陈绮贞',
      id: 7217,
      picId: 109951169959800220,
      img1v1Id: 109951169959803040,
      briefDesc: '',
      picUrl: 'http://p1.music.126.net/fPK0IO3wrFZ6du5p9xsRxw==/109951169959800223.jpg',
      img1v1Url: 'http://p1.music.126.net/tIb7RVZvcZT8dVmyrxW1ZQ==/109951169959803044.jpg',
      albumSize: 28,
      alias: ['Cheer Chen'],
      trans: '',
      musicSize: 307,
      topicPerson: 0,

      accountId: 45838336,
      picId_str: '109951169959800223',
      img1v1Id_str: '109951169959803044',

      followed: false,

      fansCount: 1581677
    },
    {
      name: 'HOYO-MiX',
      id: 12487174,
      picId: 109951164496484850,
      img1v1Id: 109951168127138050,
      briefDesc: '',
      picUrl: 'http://p1.music.126.net/JsIJaz49qG0NAeHLUxKqDw==/109951164496484854.jpg',
      img1v1Url: 'http://p1.music.126.net/Y2_BNSAyXLMHztZWCfUKKA==/109951168127138041.jpg',
      albumSize: 69,
      alias: [],
      trans: '',
      musicSize: 2685,
      topicPerson: 0,

      accountId: 1321189664,
      picId_str: '109951164496484854',
      img1v1Id_str: '109951168127138041',

      followed: false,

      fansCount: 1650647
    },
    {
      name: 'Zy',
      id: 37123911,
      picId: 109951168432327400,
      img1v1Id: 109951168432323120,
      briefDesc: '',
      picUrl: 'http://p1.music.126.net/8RaqCIF9kCKZdyLt15KFQw==/109951168432327397.jpg',
      img1v1Url: 'http://p1.music.126.net/y6rp7oRMWfLP4KDdz-eiOA==/109951168432323113.jpg',
      albumSize: 419,
      alias: [],
      trans: '',
      musicSize: 651,
      topicPerson: 0,

      accountId: 334814056,
      picId_str: '109951168432327397',
      img1v1Id_str: '109951168432323113',

      followed: false,

      fansCount: 592173
    },
    {
      name: '王心凌',
      id: 9606,
      picId: 109951169421837860,
      img1v1Id: 109951170074322640,
      briefDesc: '',
      picUrl: 'http://p1.music.126.net/dzjzjbnYZ28R1FqkMyGXeg==/109951169421837848.jpg',
      img1v1Url: 'http://p1.music.126.net/FzuoUuLY1rJ0o5lXnz9F-Q==/109951170074322641.jpg',
      albumSize: 32,
      alias: ['Cyndi Wang'],
      trans: '',
      musicSize: 573,
      topicPerson: 0,

      accountId: 7828912259,
      picId_str: '109951169421837848',
      img1v1Id_str: '109951170074322641',

      followed: false,

      fansCount: 1345654
    },
    {
      name: '徐良',
      id: 5929,
      picId: 109951170120531340,
      img1v1Id: 109951170120539550,
      briefDesc: '',
      picUrl: 'http://p1.music.126.net/2bQ8B74vQVOlLWqEIOiLoA==/109951170120531346.jpg',
      img1v1Url: 'http://p1.music.126.net/gGl5n50qGIRjlNVrjie4KQ==/109951170120539554.jpg',
      albumSize: 38,
      alias: ['L'],
      trans: '',
      musicSize: 225,
      topicPerson: 0,

      accountId: 17889857,
      picId_str: '109951170120531346',
      img1v1Id_str: '109951170120539554',

      followed: false,

      fansCount: 786322
    },
    {
      name: '古巨基',
      id: 2849,
      picId: 109951169266103870,
      img1v1Id: 109951169266105300,
      briefDesc: '',
      picUrl: 'http://p1.music.126.net/KKn_xNTssclpBjVitvE-nQ==/109951169266103879.jpg',
      img1v1Url: 'http://p1.music.126.net/7y9cC0vH9pzmO1nXJSsv0g==/109951169266105303.jpg',
      albumSize: 103,
      alias: ['Leo Ku'],
      trans: '',
      musicSize: 1252,
      topicPerson: 0,

      picId_str: '109951169266103879',
      img1v1Id_str: '109951169266105303',

      followed: false,

      fansCount: 576981
    },
    {
      name: '邵帅',
      id: 29392693,
      picId: 109951165027027400,
      img1v1Id: 109951166709617420,
      briefDesc: '',
      picUrl: 'http://p1.music.126.net/8_cpEv3Qt-0puHoq89elbA==/109951165027027385.jpg',
      img1v1Url: 'http://p1.music.126.net/Ob768vpKx3CMLEPjUwh9Bw==/109951166709617427.jpg',
      albumSize: 25,
      alias: [],
      trans: '',
      musicSize: 126,
      topicPerson: 0,

      accountId: 510572587,
      picId_str: '109951165027027385',
      img1v1Id_str: '109951166709617427',

      followed: false,

      fansCount: 1528350
    },
    {
      name: 'Muyoi',
      id: 34038597,
      picId: 109951165477004430,
      img1v1Id: 109951169805129340,
      briefDesc: '',
      picUrl: 'http://p1.music.126.net/Hr2OXWJx7UguKlxPtJu09Q==/109951165477004430.jpg',
      img1v1Url: 'http://p1.music.126.net/tJILuwBU1VOc_Pe1tjvGBQ==/109951169805129345.jpg',
      albumSize: 64,
      alias: ['莫悠'],
      trans: '',
      musicSize: 198,
      topicPerson: 0,

      accountId: 428995757,
      picId_str: '109951165477004430',
      img1v1Id_str: '109951169805129345',

      followed: false,

      fansCount: 52917
    },
    {
      name: 'Charlie Puth',
      id: 90331,
      picId: 109951167257756930,
      img1v1Id: 109951170643621120,
      briefDesc: '',
      picUrl: 'http://p1.music.126.net/y4BW_MFIZrx4BWd6TsbNCw==/109951167257756923.jpg',
      img1v1Url: 'http://p1.music.126.net/hMDuxymUia-NryMX4hAtAQ==/109951170643621112.jpg',
      albumSize: 103,
      alias: ['断眉'],
      trans: '查理·普斯',
      musicSize: 401,
      topicPerson: 0,

      accountId: 1946698380,
      picId_str: '109951167257756923',
      img1v1Id_str: '109951170643621112',
      transNames: ['查理·普斯'],
      followed: false,

      fansCount: 3895186
    },
    {
      name: '鹿晗',
      id: 1038093,
      picId: 109951166670189390,
      img1v1Id: 109951166670185470,
      briefDesc: '',
      picUrl: 'http://p1.music.126.net/01coDPkYVGGvXXnibwny1A==/109951166670189391.jpg',
      img1v1Url: 'http://p1.music.126.net/LO2LCgzpklbspO2ymaSGfg==/109951166670185478.jpg',
      albumSize: 45,
      alias: [],
      trans: '',
      musicSize: 178,
      topicPerson: 0,

      picId_str: '109951166670189391',
      img1v1Id_str: '109951166670185478',

      followed: false,

      fansCount: 1406497
    },
    {
      name: 'Capper',
      id: 12193174,
      picId: 109951167140367490,
      img1v1Id: 109951169818808750,
      briefDesc: '',
      picUrl: 'http://p1.music.126.net/htZBUaMOnJqHLKsUL5Mkrw==/109951167140367485.jpg',
      img1v1Url: 'http://p1.music.126.net/-achWi_WWlbIvKLhfhA2Aw==/109951169818808752.jpg',
      albumSize: 19,
      alias: [],
      trans: '',
      musicSize: 149,
      topicPerson: 0,

      accountId: 300806208,
      picId_str: '109951167140367485',
      img1v1Id_str: '109951169818808752',

      followed: false,

      fansCount: 1753024
    },
    {
      name: '儿歌多多',
      id: 35318954,
      picId: 109951165031652880,
      img1v1Id: 109951165031650000,
      briefDesc: '',
      picUrl: 'http://p1.music.126.net/HLPl2omgBaviv9-x7A_cfw==/109951165031652885.jpg',
      img1v1Url: 'http://p1.music.126.net/IgWrDNuYX-rKF_U6F--feQ==/109951165031649994.jpg',
      albumSize: 68,
      alias: [],
      trans: '',
      musicSize: 355,
      topicPerson: 0,

      picId_str: '109951165031652885',
      img1v1Id_str: '109951165031649994',

      followed: false,

      fansCount: 248661
    },
    {
      name: '艾志恒Asen',
      id: 12198387,
      picId: 109951166163609310,
      img1v1Id: 109951169827475040,
      briefDesc: '',
      picUrl: 'http://p1.music.126.net/g0zY65KwoJwp-zCFnxFQDg==/109951166163609304.jpg',
      img1v1Url: 'http://p1.music.126.net/gjdOZqqVuzUP4vDVN3jzGg==/109951169827475034.jpg',
      albumSize: 19,
      alias: [],
      trans: '',
      musicSize: 147,
      topicPerson: 0,
      accountId: 83846099,
      picId_str: '109951166163609304',
      img1v1Id_str: '109951169827475034',
      followed: false,
      fansCount: 861350
    },
    {
      name: '沈以诚',
      id: 12002248,
      picId: 109951165443367330,
      img1v1Id: 109951170552907250,
      briefDesc: '',
      picUrl: 'http://p1.music.126.net/EL2R9tzkaLvpAkDpNTlxIQ==/109951165443367321.jpg',
      img1v1Url: 'http://p1.music.126.net/9nKDTuZbCBMghnjSerGkJA==/109951170552907254.jpg',
      albumSize: 40,
      alias: [],
      trans: '',
      musicSize: 222,
      topicPerson: 0,
      accountId: 5700063,
      picId_str: '109951165443367321',
      img1v1Id_str: '109951170552907254',
      followed: false,
      fansCount: 3802696
    },
    {
      name: 'TizzyT',
      id: 1204010,
      picId: 109951163464459380,
      img1v1Id: 109951166527177000,
      briefDesc: '',
      picUrl: 'http://p1.music.126.net/VJLUv2HtobEqsfvE4H8xNg==/109951163464459383.jpg',
      img1v1Url: 'http://p1.music.126.net/Vbo8K447I5LLvH9VpdTfww==/109951166527176990.jpg',
      albumSize: 43,
      alias: [],
      trans: '',
      musicSize: 166,
      topicPerson: 0,
      accountId: 125606117,
      picId_str: '109951163464459383',
      img1v1Id_str: '109951166527176990',
      followed: false,
      fansCount: 2428312
    },
    {
      name: '韦礼安',
      id: 5379,
      picId: 109951169891928290,
      img1v1Id: 109951169891930770,
      briefDesc: '',
      picUrl: 'http://p1.music.126.net/KwO4m0QepQXqqBC0z3SrIw==/109951169891928289.jpg',
      img1v1Url: 'http://p1.music.126.net/ckiasuidhjDsB2p6c2cDGQ==/109951169891930774.jpg',
      albumSize: 55,
      alias: ['Weibird Wei'],
      trans: '',
      musicSize: 235,
      topicPerson: 0,
      accountId: 104814186,
      picId_str: '109951169891928289',
      img1v1Id_str: '109951169891930774',
      followed: false,
      fansCount: 521418
    },
    {
      name: '乔浚丞',
      id: 29785908,
      picId: 109951164623059500,
      img1v1Id: 109951169721463470,
      briefDesc: '',
      picUrl: 'http://p1.music.126.net/X7vGYFDcR4fvghg75NWNTg==/109951164623059509.jpg',
      img1v1Url: 'http://p1.music.126.net/Ek5s7YctMiQrIRHiibjL3g==/109951169721463465.jpg',
      albumSize: 14,
      alias: [],
      trans: '',
      musicSize: 55,
      topicPerson: 0,
      accountId: 3722693075,
      picId_str: '109951164623059509',
      img1v1Id_str: '109951169721463465',
      followed: false,
      fansCount: 16222
    },
    {
      name: '周兴哲',
      id: 980025,
      picId: 109951164639836060,
      img1v1Id: 109951164639831140,
      briefDesc: '',
      picUrl: 'http://p1.music.126.net/VGnB9gbxE1xHs6nsxNMh9A==/109951164639836060.jpg',
      img1v1Url: 'http://p1.music.126.net/ifoN5xW84J0mbAg-p7jY5A==/109951164639831129.jpg',
      albumSize: 33,
      alias: ['Eric Chou'],
      trans: '',
      musicSize: 153,
      topicPerson: 0,
      accountId: 1424570743,
      picId_str: '109951164639836060',
      img1v1Id_str: '109951164639831129',
      followed: false,
      fansCount: 1066794
    },
    {
      name: '江辰',
      id: 12641765,
      picId: 109951169419736240,
      img1v1Id: 109951170486853900,
      briefDesc: '',
      picUrl: 'http://p1.music.126.net/2AGX_RoVyzZb7EU77Tk7BA==/109951169419736238.jpg',
      img1v1Url: 'http://p1.music.126.net/KYMgj31IsKGWZENs2oi3ig==/109951170486853907.jpg',
      albumSize: 61,
      alias: [],
      trans: '',
      musicSize: 81,
      topicPerson: 0,
      accountId: 455725329,
      picId_str: '109951169419736238',
      img1v1Id_str: '109951170486853907',
      followed: false,
      fansCount: 909287
    }
  ]
})
