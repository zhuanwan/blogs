# undefined

直接控制台输入
``` bash
var undefined = 'modify undefined';
console.log(undefined); // undefined
```

改成局部属性
``` bash
(function() {
    var undefined = 'modify undefined';
    console.log(undefined); // modify undefined
})()

::: tip
JavaScript 的代码 undefined 是一个变量，而并非是一个关键字
全局undefined不可写,不可配置,它的值永远是undefined
局部属性可修改
一般用void 0 代替undefined
:::