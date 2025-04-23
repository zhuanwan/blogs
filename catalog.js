import path from 'path'
import fs from 'fs'
import { fileURLToPath } from 'url'

// 获取 __dirname 的 ES 模块写法
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const filePath = path.join(__dirname, 'docs')
const docsDirToFileMap = {}

// 根据目录返回[{title, path, children}]
function getItem(filename, filedir, prefix = '') {
  const filesOrDir = fs.readdirSync(filedir)
  const res = []
  filesOrDir.forEach((fname) => {
    const fdir = path.join(filedir, fname)
    const stats = fs.statSync(fdir)
    const isDir = stats.isDirectory()
    
    if (isDir) {
      res.push({
        text: fname,
        children: getItem(fname, fdir, `/${filename}`)
      })
    } else {
      const ext = fname.substring(fname.lastIndexOf('.') + 1)
      if (fname !== 'README.md' && ext === 'md') {
        res.push({
          text: fname.substring(0, fname.lastIndexOf('.')),
          link: `${prefix}/${filename}/${fname}`
        })
      }
    }
  })
  return res
}

// 处理 /docs 目录
const docsFiles = fs.readdirSync(filePath)
docsFiles.forEach((filename) => {
  const filedir = path.join(filePath, filename)
  const stats = fs.statSync(filedir)
  const isDir = stats.isDirectory()
  
  if (isDir && filename !== '.vuepress') {
    docsDirToFileMap[filename] = getItem(filename, filedir, '')
  }
})

// 写入配置文件
Object.keys(docsDirToFileMap).forEach(k => {
  const filePath = `./docs/.vuepress/config/${k}.js`
  const content = `export default ${JSON.stringify(docsDirToFileMap[k], null, 2)}`
  
  fs.writeFile(filePath, content, (e) => {
    if (e) return console.error('写入文件出错:', e)
    console.log('成功写入:', filePath)
  })
})