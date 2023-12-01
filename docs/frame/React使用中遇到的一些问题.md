# React使用中遇到的一些问题

### 无法从不同组件的函数体内部更新组件
Cannot update a component from inside the function body of a different component

::: tip
两个组件都用更改了同一个store里面的state,
其中一个组件改成useEffect包装即可
:::


### 360不加载js

部分js文件在360浏览器极速模式下不加载

如果需要加载的js文件和其它文件重名后会出现无法加载的情况，例如：02.js 和 02.ccs 

在360浏览器极速模式下，就是被认为是同名文件，将不加载02.js文件

解决办法
```js

output: {
    path: xxx,
    filename: '[name].[contenthash:8].js', // chunkhash 改成 contenthash
    publicPath: xxx
},
```

