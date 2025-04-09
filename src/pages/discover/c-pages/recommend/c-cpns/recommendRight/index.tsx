import React from 'react'
import styles from './style.module.css'
import disVipCardImg from '../../../../style/web2/img/dis_vip_card.png'

// Type definitions
interface Singer {
  id: string
  imageUrl: string
  name: string
  description: string
}

interface Broadcaster {
  id: string
  imageUrl: string
  name: string
  description: string
}

const Sidebar: React.FC = () => {
  // Mock data for singers
  const singers: Singer[] = [
    {
      id: '29879272',
      imageUrl:
        'http://p1.music.126.net/cSAmmAvsKhm3N-zxWg7QcQ==/109951168490195225.jpg?param=62y62',
      name: '张惠妹aMEI',
      description: '台湾歌手张惠妹'
    },
    {
      id: '650120',
      imageUrl:
        'http://p2.music.126.net/FRjXcFEflJMI0UBFauC--g==/109951169959806190.jpg?param=62y62',
      name: '吴莫愁Momo',
      description: '《中国好声音》选手吴莫愁'
    },
    {
      id: '198554',
      imageUrl:
        'http://p2.music.126.net/whG7pbsbd1akKtOE7V3R_Q==/109951168299161319.jpg?param=62y62',
      name: '孙楠',
      description: '歌手孙楠 代表作《你快回来》《燃烧》'
    },
    {
      id: '2000268',
      imageUrl: 'http://p2.music.126.net/1GIlkxKmvKu66ufU83FyvA==/31885837222663.jpg?param=62y62',
      name: '麦田老狼',
      description: '歌手，音乐人。代表作《同桌的你》等。'
    },
    {
      id: '39002',
      imageUrl:
        'http://p2.music.126.net/HXs1MIcM7n9V7qFDTuW71A==/109951170540755845.jpg?param=62y62',
      name: '陈楚生',
      description: '唱作歌手'
    }
  ]

  // Mock data for broadcasters
  const broadcasters: Broadcaster[] = [
    {
      id: '278438485',
      imageUrl: 'http://p1.music.126.net/H3QxWdf0eUiwmhJvA4vrMQ==/1407374893913311.jpg?param=40y40',
      name: '陈立',
      description: '心理学家、美食家陈立教授'
    },
    {
      id: '559210341',
      imageUrl:
        'http://p1.music.126.net/GgXkjCzeH4rqPCsrkBV1kg==/109951164843970584.jpg?param=40y40',
      name: '刘维-Julius',
      description: '歌手、播客节目《维维道来》主理人'
    },
    {
      id: '259292486',
      imageUrl:
        'http://p1.music.126.net/x-DhADCAweo7fKUpVR79Pw==/109951170205405591.jpg?param=40y40',
      name: '莫非定律乐团',
      description: '男女双人全创作独立乐团'
    },
    {
      id: '1450418799',
      imageUrl:
        'http://p1.music.126.net/NHjNoFpLDEZ-3OR9h35z1w==/109951165825466770.jpg?param=40y40',
      name: '碎嘴许美达',
      description: '脱口秀网络红人'
    },
    {
      id: '2688170',
      imageUrl:
        'http://p1.music.126.net/mMZvNruOjEa4XNL6-lWjNg==/109951168919647064.jpg?param=40y40',
      name: '银临Rachel',
      description: ''
    }
  ]

  const handleLogin = () => {
    // Assuming the top.login() is available globally
    // You might want to replace this with a proper authentication flow
    if (typeof window !== 'undefined' && (window as any).top.login) {
      ;(window as any).top.login()
    }
  }

  return (
    <div className={styles.sidebar}>
      <div className={styles.vipCard}>
        <img
          className={styles.vipCardImg}
          id='dis-vip-card'
          src='https://music.163.com/style/web2/img/dis_vip_card.png'
          alt='VIP Card'
          data-action='openCanisher'
        />
      </div>

      <div className={styles.userProfile}>
        <div className={styles.myInfo}>
          <p className={styles.note}>登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
          <a
            id='index-enter-default'
            href='#'
            onClick={e => {
              e.preventDefault()
              handleLogin()
            }}
            className={styles.loginBtn}
            tabIndex={1}
          >
            用户登录
          </a>
        </div>
      </div>

      <div className={styles.singerSection}>
        <h3 className={styles.sectionHeader}>
          <span className={styles.title}>入驻歌手</span>
          <a href='/discover/artist/signed/' className={styles.more}>
            查看全部 &gt;
          </a>
        </h3>
        <ul className={styles.singerList} id='singer-list'>
          {singers.map(singer => (
            <li key={singer.id}>
              <a href={`/user/home?id=${singer.id}`} className={styles.singerItem}>
                <div className={styles.head}>
                  <img className={styles.headImg} src={singer.imageUrl} alt={singer.name} />
                </div>
                <div className={styles.info}>
                  <h4>
                    <span className={styles.name}>{singer.name}</span>
                  </h4>
                  <p className={styles.description}>{singer.description}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
        <div>
          <a target='_blank' href='/recruit' className={styles.applyBtn} rel='noreferrer'>
            <i>申请成为网易音乐人</i>
          </a>
        </div>
      </div>

      <div className={styles.djSection}>
        <h3 className={styles.sectionHeader}>热门主播</h3>
        <ul className={styles.djList} id='hotdj-list'>
          {broadcasters.map(broadcaster => (
            <li key={broadcaster.id}>
              <a href={`/user/home?id=${broadcaster.id}`} className={styles.djCover}>
                <img
                  className={styles.djImg}
                  src={broadcaster.imageUrl}
                  data-src={broadcaster.imageUrl}
                  alt={broadcaster.name}
                />
              </a>
              <div className={styles.djInfo}>
                <p>
                  <a href={`/user/home?id=${broadcaster.id}`} className={styles.djName}>
                    {broadcaster.name}
                  </a>
                </p>
                <p className={styles.djDescription}>{broadcaster.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
