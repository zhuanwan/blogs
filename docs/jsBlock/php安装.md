# php安装


## 启动、关闭，重启
sudo apachectl start
sudo apachectl stop
sudo apachectl restart

## 查看Apache服务版本
sudo apachectl -v

## 运行
http://localhost


## 修改配置文件

Apache服务默认安装路径在/private/etc/apache2
里面修改 httpd.conf

修改权限
``` bash
<Directory />
    #AllowOverride none
    #Require all denied
    Options FollowSymLinks
    AllowOverride None
    Order deny,allow
    allow from all
</Directory>
```
修改默认资源文件
``` bash
# DocumentRoot "/Library/WebServer/Documents"
DocumentRoot "/Volumes/data/aijiatui/public"
```

