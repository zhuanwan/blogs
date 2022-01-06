# node安装

## node安装
1. cd /usr/local # 进入目录
2. wget -c https://nodejs.org/dist/v16.13.1/node-v16.13.1-linux-x64.tar.gz # 下载链接
3. tar -zxvf node-v16.13.1-linux-x64.tar.gz # 解压
4. mv node-v16.13.1-linux-x64 nodejs # 重命名解压后的文件夹
5. rm -rf node-v16.13.1-linux-x64.tar.gz # 删除压缩包
6. ln -s /usr/local/nodejs/bin/node /usr/local/bin/ # 建立软连接
7. ln -s /usr/local/nodejs/bin/npm /usr/local/bin # 建立软连接
8. npm -v # test
9. node -v # test


## pm2安装
1. npm install pm2 -g
2. ln -s /usr/local/nodejs/bin/pm2 /usr/local/bin/pm2 # 建立软连接

