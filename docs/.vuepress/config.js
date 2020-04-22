
const codeBlack = require('./config/codeBlack')
const accumulate = require('./config/accumulate')

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
    sidebarDepth: 3,
    nav: [
      { text: '前端积累', link: '/accumulate/' },
      { text: '代码块', link: '/codeBlack/' },
      { text: 'GitHub', link: 'https://github.com/zhuanwan/blogs' }
    ],
    sidebar: {
      '/accumulate/': accumulate,
      '/codeBlack/': codeBlack
    }
  },
  markdown: {
    lineNumbers: true // 代码行数
  }
}