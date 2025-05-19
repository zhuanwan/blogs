# nextjs项目部署


### node 安装

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash  # 安装 nvm
# 重新打开终端
nvm install --lts  # 安装最新稳定版 node

npm config set registry https://registry.npmmirror.com # 配置 npm 镜像

npm install -g yarn # 安装 yarn
yarn config set registry https://registry.npmmirror.com # 配置 yarn 镜像
```

### git 安装及配置

```bash
sudo apt-get update # 更新软件包列表
sudo apt-get install -y git # 安装 git

git config --global user.name "xxname" # 配置 Git 全局用户信息
git config --global user.email "xx.email.com" # 配置 Git 全局用户信息
git config --global --list # 查看 Git 全局配置

ssh-keygen -t rsa -C "xx.email.com" # 生成 SSH 密钥 公钥放入gitlab

# config 设置
Host git.soejh.com
HostName git.soejh.com
IdentityFile ~/.ssh/id_rsa_xx
```

### clone 仓库

```bash
cd /home/ubuntu/data/code
git clone git@git.xx.git

# 如果遇到权限问题 sudo chown -R xxhostname:xxhostname /home/ubuntu/data/code
```

### 安装包并运行

```bash
cd app1
yarn # 安装依赖包
yarn build # 打包
yarn start # 运行

# 你可以在浏览器看到 http://ip:3000/
```

### 配置 pm2

```bash
npm install -g pm2

cd /home/ubuntu/data/code/app1
pm2 start ecosystem.config.js # ecosystem.config.js里面配置端口和环境变量

# pm2 其他命令
pm2 ls                    # 查看所有进程
pm2 restart app1    # 重启某个进程
pm2 stop app1       # 停止某个进程
pm2 delete app1     # 删除进程
pm2 logs app1       # 查看日志
pm2 save                  # 保存当前进程列表（用于开机自启）
```
