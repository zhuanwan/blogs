# nginx

## 命令安装
brew install nginx


nginx配置文件目录：
/usr/local/etc/nginx/nginx.conf

## 手动安装
1. ssh root@119.23.223.164  // 登录

2. cd /usr/local

3. 下载nginx安装包，从本地拷贝到服务器上/usr/local
scp /Users/xxx/downloads/nginx-1.20.1.tar.gz root@119.23.223.164:/usr/local

4. 解压nginx
tar -xvf nginx-1.20.1.tar.gz

5. 删除压缩包
rm -rf  nginx-1.20.1.tar.gz

6. 进入nginx-1.20.1
cd nginx-1.20.1

7. PCRE(Perl Compatible Regular Expressions)是一个Perl库，包括 perl 兼容的正则表达式库。
nginx的http模块使用pcre来解析正则表达式，所以需要在linux上安装pcre库。
注：pcre-devel是使用pcre开发的一个二次开发库。nginx也需要此库。
# yum install -y pcre pcre-devel

8. zlib
zlib库提供了很多种压缩和解压缩的方式，nginx使用zlib对http包的内容进行gzip，所以需要在linux上安装zlib库。
# yum install -y zlib zlib-devel

9. ./configure && make && make instal

10. 查看安装位置 whereis nginx

11. 阿里云安全组修改，添加80端口

12. cd /usr/local/nginx/sbin  
    ./nginx

13. 访问http://119.23.223.164/

## 常用命令

启动nginx：
ngxin

重启nginx：
nginx -s reload


## 查找文件
查看nginx实际调用的配置文件
```js
ps aux|grep nginx

root      2420  0.0  0.0 112712   956 pts/0    S+   09:24   0:00 grep --color=auto nginx
nobody   19724  0.0  0.0  21068  1844 ?        S    Mar30   0:08 nginx: worker process
root     23037  0.0  0.0  20712  1564 ?        Ss    2021   0:00 nginx: master process /usr/local/nginx/sbin/nginx

```
实际路径为 /usr/local/nginx/sbin/nginx  

实际调用的配置文件路径及是否调用有效
```js
/usr/local/nginx/sbin/nginx -t

nginx: the configuration file /usr/local/nginx/conf/nginx.conf syntax is ok
nginx: configuration file /usr/local/nginx/conf/nginx.conf test is successful

 ```