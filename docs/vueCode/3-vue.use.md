# vue.use

注册组件两种方法
``` bash 
import Vuex from 'vuex'
Vue.use(Vuex)

import Echarts from 'echarts'
Vue.prototype.$echarts = Echarts
```

## vue.use
``` bash
export function initUse (Vue: GlobalAPI) {
  Vue.use = function (plugin: Function | Object) {
    const installedPlugins = (this._installedPlugins || (this._installedPlugins = []))
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    const args = toArray(arguments, 1)
    args.unshift(this)
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args)
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args)
    }
    installedPlugins.push(plugin)
    return this
  }
}
```

vue.use(plugin), plugin为function 或者 object, function直接调用，object调install方法，第一个参数为vue

好处，可以在plugin install里面写更多的逻辑
``` bash
import Echarts from 'echarts'
export default {
  install(Vue){
    Vue.prototype.$echarts = Echarts
    ...
  }
}
```