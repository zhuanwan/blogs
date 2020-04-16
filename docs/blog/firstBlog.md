# 我的第一篇博客

My First Blog dgsdfdgdgsdgfgtgrtgrtg

遇到的问题

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

sdfsafa
