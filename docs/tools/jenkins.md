# Jenkins安装

## 安装
1. 官网下载war包，https://updates.jenkins.io/download/war/
2. 命令行输入
```js 
java -jar jenkins2.3.56.war // > 2.3.56 需要jdk11
```
3. 打开浏览器 http://119.23.223.164:8080/ 密码在/root/.jenkins/secrets, 默认用户名admin


## 后台运行

nohup java -jar jenkins2.3.56.war &
```js
nohup java -jar jenkins2.3.56.war --httpPort=8080 &
```

## 安装插件
1、安装参数化部署插件

1. Git Parameter Plug-In git参数化构建，可选择分支、标签构建
2. Extended Choice Parameter Plug-In 自定义参数化构建，可根据需要任意添加参数
3. NodeJS Plugin Node环境，打包项目