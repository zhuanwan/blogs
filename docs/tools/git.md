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

### git 连接多个域名

1. 新建config文件
``` js
Host github.com
HostName github.com
IdentityFile ~/.ssh/id_rsa_blogs

# 有其他加
Host git.xxx.com
HostName git.xxx.com
IdentityFile ~/.ssh/id_rsa
```
2. ssh-keygen -t rsa -C “youremail@email.com“ 生成公钥私钥，提示要取的名字，enter键默认id_rsa,这里我输入id_rsa_blogs,然后提示输入密码，enter键默认为空

3. 然后把 .ssh 目录下的id_rsa_blogs公钥放到github上

4. ssh-add -l // 查看所有添加进去的钥匙  
把刚刚创建的钥匙添加进去  
ssh-add ~/.ssh/id_rsa_blogs  
再次输入 ssh-add -l 可以看到刚刚加入的钥匙  

5. 如果期间报错’could not open a authentication agent’ 输入 eval `ssh-agent`（注意用git bash）
 
6. 测试是否连接到github 
```js
ssh -T git@github.com
```
这个会在.ssh 文件夹下创建known_hosts文件，方便下次快速连接