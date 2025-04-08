import React, { memo } from 'react'
import type { FC } from 'react'
import styles from './style.module.css'

// 链接配置
const footerLinks = [
  {
    name: '音乐开放平台',
    href: 'https://developer.music.163.com/st/developer',
    className: styles.openPlatform
  },
  {
    name: '云村交易所',
    href: 'https://music.163.com/st/web-sublicense/home',
    className: styles.trade
  },
  { name: 'X Studio AI歌手', href: 'https://xstudio.music.163.com', className: styles.xStudio },
  { name: '用户认证', href: 'https://music.163.com/st/userbasic#/auth', className: styles.auth },
  { name: 'AI 免费写歌', href: 'https://tianyin.music.163.com', className: styles.aiMusic },
  { name: '云推歌', href: 'https://music.163.com/st/ad-song', className: styles.cloudSong },
  { name: '赞赏', href: 'https://music.163.com/web/reward', className: styles.reward }
]

const Footer: FC = () => {
  return (
    <div className={styles.footerWrapper}>
      {/* 功能图标 */}
      <ul className={styles.enter}>
        {footerLinks.map((item, index) => (
          <li key={index} className={styles.unit}>
            <a
              className={`${styles.logo} ${item.className}`}
              href={item.href}
              target='_blank'
              rel='noopener noreferrer'
            ></a>
            <span className={styles.tt}>{item.name}</span>
          </li>
        ))}
      </ul>

      {/* 版权信息 */}
      <div className={styles.links}>
        <p className={styles.link}>
          <a href='#'>服务条款</a> | <a href='#'>隐私政策</a> | <a href='#'>儿童隐私政策</a> |{' '}
          <a href='#'>版权投诉</a> | <a href='#'>投资者关系</a> | <a href='#'>广告合作</a> |{' '}
          <a href='#'>联系我们</a>
        </p>
        <p>
          <a className={styles.jubao} href='https://jubao.163.com' target='_blank'>
            廉正举报
          </a>
          <span>不良信息举报邮箱: 51jubao@service.netease.com</span>
          <span>客服热线：95163298</span>
        </p>
        <p>
          <span>互联网宗教信息服务许可证：浙（2022）0000120</span>
          <span>增值电信业务经营许可证：浙B2-20150198</span>
          <a
            href='https://beian.miit.gov.cn/#/Integrated/index'
            rel='noopener noreferrer'
            target='_blank'
          >
            粤B2-20090191-18&nbsp;&nbsp;工业和信息化部备案管理系统网站
          </a>
        </p>
        <p>
          <span>网易公司版权所有©1997-2025</span>
          <span>杭州乐读科技有限公司运营：</span>
          <a
            href='https://p6.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/34942157981/2e30/30c1/ad1f/7be053a28e91dd8bafe49bdf6455cb2a.png'
            target='_blank'
          >
            浙网文[2024] 0900-042号
          </a>
          <a
            href='http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010902002564'
            rel='noopener noreferrer'
            target='_blank'
          >
            <span></span>
            <span>浙公网安备 33010802013307号</span>
          </a>
          <a
            href='https://y.music.163.com/m/at/661f2af6e36f7c50ead8994b'
            rel='noopener noreferrer'
            target='_blank'
          >
            <span>算法服务公示信息</span>
          </a>
        </p>
      </div>
    </div>
  )
}

export default memo(Footer)
