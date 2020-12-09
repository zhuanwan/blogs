
# preventDefault报错

通过传递 passive 为 false 来明确告诉浏览器：事件处理程序调用 preventDefault 来阻止默认滑动行为。

``` bash
document.addEventListener('touchmove', function (e) {
  e.preventDefault();
    ...
  },{passive: false});
```

