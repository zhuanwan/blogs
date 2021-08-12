# vuepress搭建

以前用过hexo，搭了个，[链接](https://zhuanwan.github.io/)，还是不是很喜欢，也感觉有点繁琐，特别是换电脑的时候，配置一大堆。
偶然看到网上有个博客页很好看，
是我喜欢的简洁类型的，
看他的链接github上有个vuepress，
搜索这个vuepress,
开始搭了


[vuepress官网](https://vuepress.vuejs.org/zh/guide/)

主要讲下遇到的问题

### git的问题
gitignore 没生效
gitignore 只能忽略那些原来没有被 track 的文件，如果某些文件已经被纳入了版本管理中，则修改 .gitignore 是无效的。
解决方法是先把本地缓存删除，然后再提交。

```bash
git rm -r --cached .
git add .
git commit -m 'xxx'
git push
```

git 提交不上去

```bash
 // You've added another git repository inside your current repository
 把文件夹里面的.git删掉，注意有时候文件夹里面的文件夹也有，ctrl+shifit+. 显示隐藏文件
```

git 命令必须要 sudo，否则会提示权限不够

```bash
是因为.ssh里面的文件是在root里的，用普通用户重新创建ssh key
```

### 提交配置问题
第一种
``` bash 
bash deploy.sh 
```
第二种
配置travis ci，直接用git push，在项目根目录建.travis.yml，travis自动帮你配置


### travis ci 突然不工作了

提交git后，travis突然不自动不打包了，在travis里面设置plan，选择free

