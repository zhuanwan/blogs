
const algorithm = require('./config/algorithm')
const toolInstallation = require('./config/toolInstallation')
const styleBlock = require('./config/styleBlock')
const jsBlock = require('./config/jsBlock')
const vueCode = require('./config/vueCode')
const other = require('./config/other')

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
      { text: '算法', link: '/algorithm/'},
      { text: 'jsBlock', link: '/jsBlock/' },
      { text: 'styleBlock', link: '/styleBlock/' },
      { text: '工具安装', link: '/toolInstallation/' },
      { text: 'vue相关', link: '/vueCode/' },
      { text: '其他', link: '/other/' },
      { text: 'GitHub', link: 'https://github.com/zhuanwan/blogs' }
    ],
    sidebar: {
      '/algorithm': algorithm,
      '/jsBlock/': jsBlock,
      '/styleBlock/': styleBlock,
      '/toolInstallation': toolInstallation,
      '/vueCode': vueCode,
      '/other': other,
    }
  },
  markdown: {
    lineNumbers: true // 代码行数
  }
}