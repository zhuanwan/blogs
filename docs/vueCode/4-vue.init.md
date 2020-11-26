# vue.init

### mergeOptions
* Vue 实例       绑定一些方法属性 op1
* new Vue传参     op2
* Vue 构造方法    绑定一些方法属性 op3

Vue init方法里 $options = {...op3, ...op2, ...op1}

``` bash
vm.$options = mergeOptions(
  resolveConstructorOptions(vm.constructor),
  options || {},
  vm
)
```

### resolveConstructorOptions
直接new 的返回options, Vue.extend 父类+自身options
``` bash
// 测试
var Profile = Vue.extend({
  template: '<p>{{firstName}} {{lastName}} aka {{alias}}</p>'
})
Vue.mixin({
  data: function () {
    return {
      firstName: 'Walter',
      lastName: 'White',
      alias: 'Heisenberg'
    }
  }
})
new Profile().$mount('#example')
```

### initProxy
proxy 测试环境警告，未定义的属性出现会警告。
给vm包了一个Proxy并挂在vm._renderProxy上，这样当你用‘test’ in vm._renderProxy去测试vm上是否有此test属性时就会触发Proxy中的has，产生没有属性时的提示效果

``` bash
if (process.env.NODE_ENV !== 'production') {
  initProxy(vm)
} else {
  vm._renderProxy = vm
}

vm._renderProxy = new Proxy(vm, handlers)
```