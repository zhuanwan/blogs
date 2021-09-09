# git

### git 提交部分文件
``` js
git add xxx   // 添加需要提交的文件名
git stash -u -k  // 忽略其他文件，把现修改的隐藏起来
git commit -m xxx
git pull // 拉取合并
git push // 推送到远程仓库
git stash pop // 恢复之前忽略的文件

```

### git 回退版本

假如版本 A -> B -> C
1、回退（reset）, 回退到B，那么C提交的是没有的

``` js
git log // 查看版本
git reset --hard B的版本号 // 回到旧版本
git push -f // 强制推送上去
```
2、反做（revert），不要B，保留C，生成D
``` js
git log // 查看版本
git revert -n B的版本号
git commit -m xxx  // 生成新的版本号D
```