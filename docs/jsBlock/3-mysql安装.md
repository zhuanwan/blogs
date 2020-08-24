# mysql安装

## 背景
本机 mac，mysql8，报错信息：Access denied for user: 'root@localhost'
官网下载mysql，一步一步安装，然后🈶提示输入密码，但是登陆就是不成功，只好重置密码，找了很久的方法，终于可行，记录下

## 设置环境变量
安装完后，首先改变环境变量，这样就不用到bin里面执行了
``` bash
open ~/.bash_profile
```

path：多个环境变量以冒号分隔，像这里我有加jdk
``` bash
export JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk-14.jdk/Contents/Home
export CLASSPATH=$JAVA_HOME/lib/tools.jar:$JAVA_HOME/lib/dt.jar:.

export MYSQL=/usr/local/mysql/bin

export PATH=$MYSQL:$JAVA_HOME/bin:$PATH:.

alias mysqlstart='sudo /usr/local/mysql/support-files/mysql.server start'
alias mysqlstop='sudo /usr/local/mysql/support-files/mysql.server stop'

```

## 重置密码

### 先关闭mysql服务
这里我是直接在活动监视器里查找mysql，关闭，网上有其他方法（在终端输入： ps  axu|grep mysql   找出 mysql 的进程id 用 kill 方法 kill 掉）

### 安全模式进入数据库
打开一个终端
``` bash
$ cd /usr/local/mysql/bin
$ sudo su
sh-3.2# ./mysqld_safe --skip-grant-tables &
```
### 设置密码
重新打开一个终端
``` bash
mysql -u -root  // 可以不输入密码就进入了
use mysql;
update user set authentication_string='' where user='root';  // 这个先把密码设空？？？

ALTER user 'root'@'localhost' IDENTIFIED BY '123456';   // 这里报错，就先输入flush privileges;
flush privileges;
```

### 重新登录
把终端都关闭
再次关闭mysql服务
然后重新打开终端
``` bash
mysql -u root -p
// 输入123456
```

:tada: :cherry_blossom: :tada: :cherry_blossom: :tada: :cherry_blossom:

### navicat 连接
用navicat连接，发现报错 “Authentication plugin 'caching_sha2_password' cannot be loaded”
进入mysql, 执行
``` bash
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '123456';
```

