
const fabric = require('./config/fabric')
const algorithm = require('./config/algorithm')
const tools = require('./config/tools')
const styleBlock = require('./config/styleBlock')
const svgBlock = require('./config/svgBlock')
const jsBlock = require('./config/jsBlock')
const frame = require('./config/frame')
const webgl = require('./config/webgl')

module.exports = {
  base: '/blogs/',
  title: '前端',
  description: '我的前端笔记',
  themeConfig: {
    docsRepo: 'zhuanwan/blogs',
    docsBranch: 'master', // git 源仓库 仓库分支
    docsDir: 'docs', // 仓库下的文件夹
    serviceWorker: {
      updatePopup: {
        // 刷新内容的弹窗
        message: '发现新内容',
        buttonText: '刷新'
      }
    },
    lastUpdated: '最后更新时间', // 最后更新时间
    sidebarDepth: 0,
    nav: [
      { text: 'fabric', link: '/fabric/'},
      { text: '算法', link: '/algorithm/'},
      { text: 'jsBlock', link: '/jsBlock/' },
      { text: 'styleBlock', link: '/styleBlock/' },
      { text: 'svgBlock', link: '/svgBlock/' },
      { text: '工具其他', link: '/tools/' },
      { text: 'Vue、React相关', link: '/frame/' },
      { text: 'webgl', link: '/webgl/' },
      { text: 'GitHub', link: 'https://github.com/zhuanwan/blogs' }
    ],
    sidebar: {
      '/fabric': fabric,
      '/algorithm': algorithm,
      '/jsBlock/': jsBlock,
      '/styleBlock/': styleBlock,
      '/svgBlock/': svgBlock,
      '/tools': tools,
      '/frame': frame,
      '/webgl': webgl,
    }
  },
  markdown: {
    lineNumbers: true // 代码行数
  }
}