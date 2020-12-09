var path = require("path")
var fs = require("fs")
const filePath = path.join(__dirname, 'docs')


const docsDirToFileMap = {}

// 得到 /docs 下的目录
const docsFiles = fs.readdirSync(filePath)  // 读取文件名
docsFiles.forEach(filename => {
  let filedir = path.join(filePath, filename);
  let stats = fs.statSync(filedir)
  let isDir = stats.isDirectory(); //是文件夹
  if (isDir && filename !== '.vuepress') {
    const files = fs.readdirSync(filedir).filter(f => /^((?!README).)*\.md$/.test(f)).map(f => `/${filename}/${f}`)
    docsDirToFileMap[filename] = files
  }
});

// 写文件
Object.keys(docsDirToFileMap).map(k => {
  const f = path.join(__dirname, 'docs/.vuepress/config', `${k}.js`)
  fs.open(f, 'r', (err, fd) => {
    if (err) {
      console.log('没有这个路径', f)
      return
    }

    fs.writeFile(`./docs/.vuepress/config/${k}.js`,
      `module.exports = ${JSON.stringify(docsDirToFileMap[k], null, 2)}`,
      function (err) {
        if (err) return console.log(err);
        console.log('重新写', f);
      }
    )
  });
})

