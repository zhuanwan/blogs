# create-react-app


## 安装
源码简单说下主要步骤，各种node版本，包版本等判断就不说了，[源码地址](https://github.com/facebook/create-react-app)
1. 主要是几个包（react-react-app、react-scripts、cra-template或cra-template-typescript...），lerna管理这些包
2. 我们创建一个项目使用
```js
npx create-react-app my-app --template typescript
```
或者
```js
npm install create-react-app -g
create-react-app my-app --template typescript
```
所以入口文件在packages/create-react-app/package.json
```js
"bin": {
  "create-react-app": "./index.js"
}
```
3. 进入文件，主要调用createReactApp.js -> init方法
4. Command命令，输入项目名，模板之类的，也就是上面命令 “create-react-app my-app --template typescript” 中的 my-app 和 typescript，还有些其他的options，主要是这两个
5. 拿到参数my-app 和 typescript，调用createApp方法，在my-app文件夹下面创建package.json
6. 执行run方法，拿到'react-scripts'和'cra-template[-typescript]', my-app文件夹下安装这两个包，在此过程中'react', 'react-dom'也会安装
7. create-react-app包执行最后（安装好了react-scripts）会调用react-scripts执行react-scripts/scripts/init.js
8. 进入react-scripts文件夹，找到init.js，开始执行
9. 找到模板'cra-template[-typescript]'目录下的template.json文件，把dependencies、eslintConfig复制到my-app的package.json的dependencies、eslintConfig，并添加scripts(react-scripts start、react-scripts build...)
10. 找到模板'cra-template[-typescript]'目录下的template文件夹，把他复制到my-app文件夹下
11. my-app文件夹下 yarn/npm 安装dependencies

## 构建
1. 进入react-scripts文件夹，找到package.json
```js
"bin": {
  "react-scripts": "./bin/react-scripts.js"
},
```
2. 进入react-scripts.js，包含四个命令'build', 'eject', 'start', 'test'，分别对应scripts里面的文件名