var path = require('path')
var fs = require('fs')
const filePath = path.join(__dirname, 'docs')

const docsDirToFileMap = {}


// 根据目录返回[{titile,path, children}]
function getItem(filename, filedir, prefix = '') {
  const filesOrDir = fs.readdirSync(filedir)
  const res = []
  filesOrDir.forEach((fname) => {
    let fdir = path.join(filedir, fname)
    let stats = fs.statSync(fdir)
    let isDir = stats.isDirectory() //是文件夹
    if (isDir) {
      res.push({
        title: fname,
        children: getItem(fname, fdir, `/${filename}`)
      })
    } else {
      const ext = fname.substring(fname.lastIndexOf('.') + 1)
      if (fname !== 'README.md' && ext === 'md') {
        res.push({
          title: fname.substring(0, fname.lastIndexOf('.')),
          path: `${prefix}/${filename}/${fname}`
        })
      }
    }
  })
  return res
}

// 得到 /docs 下的目录
const docsFiles = fs.readdirSync(filePath) // 读取文件名
docsFiles.forEach((filename) => {
  let filedir = path.join(filePath, filename)
  let stats = fs.statSync(filedir)
  let isDir = stats.isDirectory() //是文件夹
  if (isDir && filename !== '.vuepress') {
    docsDirToFileMap[filename] = getItem(filename, filedir, '')
  }
})


// 写文件
Object.keys(docsDirToFileMap).map(k => {
  const f = path.join(__dirname, 'docs/.vuepress/config', `${k}.js`)
  fs.open(f, 'r', (err, fd) => {
    if (err) {
      console.log('没有这个路径', f)
    }

    fs.writeFile(`./docs/.vuepress/config/${k}.js`,
      `module.exports = ${JSON.stringify(docsDirToFileMap[k], null, 2)}`,
      function (e) {
        if (e) return console.log(e);
        console.log('重新写', f);
      }
    )
  });
})
