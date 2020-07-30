# vuex源码解析

github下载vuex 3.5.1 dev分支
npm run dev
打断点调试

## vuex装载
```
Vue.use(Vuex)

Vue.mixin({ beforeCreate: vuexInit })

function vuexInit () {
  const options = this.$options
  // store injection
  if (options.store) {
    this.$store = typeof options.store === 'function'
      ? options.store()
      : options.store
  } else if (options.parent && options.parent.$store) {
    this.$store = options.parent.$store
  }
}

```
1. 这句会执行vuex的install方法，把vue赋值给vuex -> store.js 里面的局部变量vue, 并执行 Vue.mixin({ beforeCreate: vuexInit })，下面的new vue()就能够执行vuexInit方法了

2. 接下来是new Vuex.Store(({...})，执行中有个 this._watcherVM = new Vue(),new Vue()会执行 vuexInit，但是此时没参数，返回

3. 页面 new Vue({
  el: '#app',
  store,
  render: h => h(Counter)
})， 这时会执行 vuexInit,设置 this.$store = options.store，子组件就根据 parent.$store一直往上找