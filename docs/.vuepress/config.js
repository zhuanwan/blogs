import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'

import fabric from './config/fabric'
import algorithm from './config/algorithm'
import tools from './config/tools'
import styleBlock from './config/styleBlock'
import svgBlock from './config/svgBlock'
import jsBlock from './config/jsBlock'
import frame from './config/frame'
import webgl from './config/webgl'

import { getDirname, path } from 'vuepress/utils'

const __dirname = getDirname(import.meta.url)

export default defineUserConfig({
  base: '/blogs/',
  lang: 'zh-CN',
  title: '前端',
  description: '我的前端笔记',

  // 注册客户端文件
  clientConfigFile: path.resolve(__dirname, './client/client.js'),

  theme: defaultTheme({
    head: [[
      'link',
      {
        rel: 'icon',
        href: "/favicon.ico"
      },
    ]],
    logo: '/ya.jpg',
    repo: 'https://github.com/zhuanwan/blogs',
    navbar: [
      { text: 'fabric', link: '/fabric/'},
      { text: '算法', link: '/algorithm/'},
      { text: 'jsBlock', link: '/jsBlock/' },
      { text: 'styleBlock', link: '/styleBlock/' },
      { text: 'svgBlock', link: '/svgBlock/' },
      { text: '工具其他', link: '/tools/' },
      { text: 'Vue、React相关', link: '/frame/' },
      { text: 'webgl', link: '/webgl/' },
    ],
    sidebar: {
      '/fabric/': fabric,
      '/algorithm/': algorithm,
      '/jsBlock/': jsBlock,
      '/styleBlock/': styleBlock,
      '/svgBlock/': svgBlock,
      '/tools/': tools,
      '/frame/': frame,
      '/webgl/': webgl,
    },
    sidebarDepth: 1,
  }),

  bundler: viteBundler(),
})
