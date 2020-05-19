
const styleBlock = require('./config/styleBlock')
const jsBlock = require('./config/jsBlock')
const vueCode = require('./config/vueCode')

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
    sidebarDepth: 2,
    nav: [
      { text: 'js', link: '/jsBlock/' },
      { text: 'style', link: '/styleBlock/' },
      { text: 'vue源码个人理解', link: '/vueCode/' },
      { text: 'GitHub', link: 'https://github.com/zhuanwan/blogs' }
    ],
    sidebar: {
      '/jsBlock/': jsBlock,
      '/styleBlock/': styleBlock,
      '/vueCode': vueCode
    }
  },
  markdown: {
    lineNumbers: true // 代码行数
  }
}