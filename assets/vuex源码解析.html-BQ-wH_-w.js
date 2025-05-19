import{_ as n,c as s,e as i,o as a}from"./app-Cqb5tvJn.js";const l={};function t(u,e){return a(),s("div",null,e[0]||(e[0]=[i(`<h1 id="vuex源码解析" tabindex="-1"><a class="header-anchor" href="#vuex源码解析"><span>vuex源码解析</span></a></h1><p>github下载vuex 3.5.1 dev分支 npm run dev 打断点调试</p><h2 id="vuex装载" tabindex="-1"><a class="header-anchor" href="#vuex装载"><span>vuex装载</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">Vue.use(Vuex)</span>
<span class="line"></span>
<span class="line">Vue.mixin({ beforeCreate: vuexInit })</span>
<span class="line"></span>
<span class="line">function vuexInit () {</span>
<span class="line">  const options = this.$options</span>
<span class="line">  // store injection</span>
<span class="line">  if (options.store) {</span>
<span class="line">    this.$store = typeof options.store === &#39;function&#39;</span>
<span class="line">      ? options.store()</span>
<span class="line">      : options.store</span>
<span class="line">  } else if (options.parent &amp;&amp; options.parent.$store) {</span>
<span class="line">    this.$store = options.parent.$store</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li><p>这句会执行vuex的install方法，把vue赋值给vuex -&gt; store.js 里面的局部变量vue, 并执行 Vue.mixin({ beforeCreate: vuexInit })，下面的new vue()就能够执行vuexInit方法了</p></li><li><p>接下来是new Vuex.Store(({...})，执行中有个 this._watcherVM = new Vue(),new Vue()会执行 vuexInit，但是此时没参数，返回</p></li><li><p>页面 new Vue({ el: &#39;#app&#39;, store, render: h =&gt; h(Counter) })， 这时会执行 vuexInit,设置 this.$store = options.store，子组件就根据 parent.$store一直往上找</p></li></ol>`,5)]))}const p=n(l,[["render",t]]),o=JSON.parse(`{"path":"/frame/vuex%E6%BA%90%E7%A0%81%E8%A7%A3%E6%9E%90.html","title":"vuex源码解析","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"vuex装载","slug":"vuex装载","link":"#vuex装载","children":[]}],"git":{"updatedTime":1622022772000,"contributors":[{"name":"wuhui","username":"wuhui","email":"maniwu@aijiatui.com","commits":2,"url":"https://github.com/wuhui"}],"changelog":[{"hash":"22549e7953a41909f4b84da9c0fc81e3df7a1ca8","time":1622022772000,"email":"maniwu@aijiatui.com","author":"wuhui","message":"up"},{"hash":"650ec3408d94f6d342552477af4ed20c9db822e5","time":1596102395000,"email":"maniwu@aijiatui.com","author":"wuhui","message":"u'p"}]},"filePathRelative":"frame/vuex源码解析.md"}`);export{p as comp,o as data};
