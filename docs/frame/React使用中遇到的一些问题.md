# React使用中遇到的一些问题

### 无法从不同组件的函数体内部更新组件
Cannot update a component from inside the function body of a different component

::: tip
两个组件都用更改了同一个store里面的state,
其中一个组件改成useEffect包装即可
:::


