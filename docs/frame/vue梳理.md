# vue梳理

1. 执行 Vue.prototype._init 方法，初始化this.data，this.props，
执行钩子函数breforeCreate，observe data，代理data,props，执行钩子函数create
2. 调用 mount方法，如果没有render方法，这里会生成render方法
3. mount 会调用 mountComponent, 创建一个watcher
``` js
  updateComponent = () => {
    vm._update(vm._render(), hydrating)
  }

  new Watcher(vm, updateComponent, noop, {
    before () {
      if (vm._isMounted) {
        callHook(vm, 'beforeUpdate')
      }
    }
  }, true)
```
Watcher 在这里起到两个作用，一个是初始化的时候会执行回调函数，
另一个是当 vm 实例中的监测的数据发生变化的时候执行回调函数


### render
* Vue 的 _render 方法是实例的一个私有方法，它用来把实例渲染成一个虚拟 Node
* vm._render 最终是通过执行 createElement 方法并返回的是 vnode，它是一个虚拟 Node

### update
_update 的核心就是调用 vm.__patch__ 方法

### 首次渲染和更新
* new Watcher 执行构造函数 -> 执行get() -> pushTarget(this)把watcher实例压栈，继续执行this.getter.call(vm, vm)，也就是执行updateComponent，vm._render() 会生成vnode，会对vm有数据访问，触发对象的getter，对象有__ob__代表是否有监听，对象的每一个值的getter都有个dep，在触发 getter 的时候会调用 dep.depend() 方法，也就会执行 Dep.target.addDep(this)，watcher中dep.addSub(this)，dep和watcher建立联系。执行get()最后会popTarget()

* 数据更新的时候，调用setter -> dep.notify() -> subs[i].update() 也就是watcher执行update() -> queueWatcher(this) -> watcher.run() -> 执行get() -> 执行updateComponent

### 编译
* parse: 解析模板字符串生成AST树
* optimize: 优化语法树,把一些 AST 节点优化成静态节点,可以在patch的过程跳过对他们的比对
* codegen: AST树生成Vue的render渲染函数

### nextTick

* queueWatcher(this)实际上是用nextTick(flushSchedulerQueue),异步执行。
* nextTick 是先用微任务，再用宏任务，if else else -> promise.then -> MutationObserver -> setImmediate -> setTimeout
* callbacks数组添加回调函数，根据事件执行顺序（微任务，宏任务）执行callbacks里面的回调函数

### Vue.set
```js
var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];
```
数组重写，先执行原来的方法，push,unshift,splice这三个新增的方法拿到新增的对象，然后重新observe，并且ob.dep.notify()
