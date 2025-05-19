import{_ as s,c as a,e as p,o as t}from"./app-Cqb5tvJn.js";const e={};function l(i,n){return t(),a("div",null,n[0]||(n[0]=[p(`<h1 id="简单双向绑定" tabindex="-1"><a class="header-anchor" href="#简单双向绑定"><span>简单双向绑定</span></a></h1><p>[转][https://github.com/bison1994/two-way-data-binding/blob/master/index.html]</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line"><span class="token operator">&lt;</span><span class="token operator">!</span>DOCTYPE html<span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span>html <span class="token assign-left variable">lang</span><span class="token operator">=</span><span class="token string">&quot;en&quot;</span><span class="token operator">&gt;</span></span>
<span class="line">  <span class="token operator">&lt;</span>head<span class="token operator">&gt;</span></span>
<span class="line">    <span class="token operator">&lt;</span>meta <span class="token assign-left variable">charset</span><span class="token operator">=</span><span class="token string">&quot;UTF-8&quot;</span> /<span class="token operator">&gt;</span></span>
<span class="line">    <span class="token operator">&lt;</span>title<span class="token operator">&gt;</span>Two-way-data-binding<span class="token operator">&lt;</span>/title<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token operator">&lt;</span>/head<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token operator">&lt;</span>body<span class="token operator">&gt;</span></span>
<span class="line">    <span class="token operator">&lt;</span>div <span class="token assign-left variable">id</span><span class="token operator">=</span><span class="token string">&quot;app&quot;</span><span class="token operator">&gt;</span></span>
<span class="line">      <span class="token operator">&lt;</span>input <span class="token assign-left variable">type</span><span class="token operator">=</span><span class="token string">&quot;text&quot;</span> v-model<span class="token operator">=</span><span class="token string">&quot;text&quot;</span> /<span class="token operator">&gt;</span></span>
<span class="line">      <span class="token punctuation">{</span><span class="token punctuation">{</span> text <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
<span class="line">    <span class="token operator">&lt;</span>/div<span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line">    <span class="token operator">&lt;</span>script<span class="token operator">&gt;</span></span>
<span class="line">      <span class="token keyword">function</span> observe<span class="token punctuation">(</span>obj, vm<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        Object.keys<span class="token punctuation">(</span>obj<span class="token punctuation">)</span>.forEach<span class="token punctuation">(</span>function <span class="token punctuation">(</span>key<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">          defineReactive<span class="token punctuation">(</span>vm, key, obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">      <span class="token keyword">function</span> defineReactive<span class="token punctuation">(</span>obj, key, val<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        var dep <span class="token operator">=</span> new Dep<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        Object.defineProperty<span class="token punctuation">(</span>obj, key, <span class="token punctuation">{</span></span>
<span class="line">          get: <span class="token function-name function">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            // 添加订阅者 watcher 到主题对象 Dep</span>
<span class="line">            <span class="token keyword">if</span> <span class="token punctuation">(</span>Dep.target<span class="token punctuation">)</span> dep.addSub<span class="token punctuation">(</span>Dep.target<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token builtin class-name">return</span> val<span class="token punctuation">;</span></span>
<span class="line">          <span class="token punctuation">}</span>,</span>
<span class="line">          set: <span class="token keyword">function</span> <span class="token punctuation">(</span>newVal<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">if</span> <span class="token punctuation">(</span>newVal <span class="token operator">==</span><span class="token operator">=</span> val<span class="token punctuation">)</span> <span class="token builtin class-name">return</span><span class="token punctuation">;</span></span>
<span class="line">            val <span class="token operator">=</span> newVal<span class="token punctuation">;</span></span>
<span class="line">            // 作为发布者发出通知</span>
<span class="line">            dep.notify<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">          <span class="token punctuation">}</span>,</span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">      <span class="token keyword">function</span> nodeToFragment<span class="token punctuation">(</span>node, vm<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        var flag <span class="token operator">=</span> document.createDocumentFragment<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        var child<span class="token punctuation">;</span></span>
<span class="line">        // 许多同学反应看不懂这一段，这里有必要解释一下</span>
<span class="line">        // 首先，所有表达式必然会返回一个值，赋值表达式亦不例外</span>
<span class="line">        // 理解了上面这一点，就能理解 <span class="token keyword">while</span> <span class="token punctuation">(</span>child <span class="token operator">=</span> node.firstChild<span class="token punctuation">)</span> 这种用法</span>
<span class="line">        // 其次，appendChild 方法有个隐蔽的地方，就是调用以后 child 会从原来 DOM 中移除</span>
<span class="line">        // 所以，第二次循环时，node.firstChild 已经不再是之前的第一个子元素了</span>
<span class="line">        <span class="token keyword">while</span> <span class="token variable"><span class="token punctuation">((</span>child <span class="token operator">=</span> node.firstChild<span class="token punctuation">))</span></span> <span class="token punctuation">{</span></span>
<span class="line">          compile<span class="token punctuation">(</span>child, vm<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">          flag.appendChild<span class="token punctuation">(</span>child<span class="token punctuation">)</span><span class="token punctuation">;</span> // 将子节点劫持到文档片段中</span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">        <span class="token builtin class-name">return</span> flag<span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">      <span class="token keyword">function</span> compile<span class="token punctuation">(</span>node, vm<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        var reg <span class="token operator">=</span> /<span class="token punctuation">\\</span><span class="token punctuation">{</span><span class="token punctuation">\\</span><span class="token punctuation">{</span><span class="token punctuation">(</span>.*<span class="token punctuation">)</span><span class="token punctuation">\\</span><span class="token punctuation">}</span><span class="token punctuation">\\</span><span class="token punctuation">}</span>/<span class="token punctuation">;</span></span>
<span class="line">        // 节点类型为元素</span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>node.nodeType <span class="token operator">==</span><span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">          var attr <span class="token operator">=</span> node.attributes<span class="token punctuation">;</span></span>
<span class="line">          // 解析属性</span>
<span class="line">          <span class="token keyword">for</span> <span class="token punctuation">(</span>var i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> attr.length<span class="token punctuation">;</span> i++<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">if</span> <span class="token punctuation">(</span>attr<span class="token punctuation">[</span>i<span class="token punctuation">]</span>.nodeName <span class="token operator">==</span> <span class="token string">&quot;v-model&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">              var name <span class="token operator">=</span> attr<span class="token punctuation">[</span>i<span class="token punctuation">]</span>.nodeValue<span class="token punctuation">;</span> // 获取 v-model 绑定的属性名</span>
<span class="line">              node.addEventListener<span class="token punctuation">(</span><span class="token string">&quot;input&quot;</span>, <span class="token keyword">function</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                // 给相应的 data 属性赋值，进而触发该属性的 <span class="token builtin class-name">set</span> 方法</span>
<span class="line">                vm<span class="token punctuation">[</span>name<span class="token punctuation">]</span> <span class="token operator">=</span> e.target.value<span class="token punctuation">;</span></span>
<span class="line">              <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">              // node.value <span class="token operator">=</span> vm<span class="token punctuation">[</span>name<span class="token punctuation">]</span><span class="token punctuation">;</span> // 将 data 的值赋给该 <span class="token function">node</span></span>
<span class="line">              node.removeAttribute<span class="token punctuation">(</span><span class="token string">&quot;v-model&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">          <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">          new Watcher<span class="token punctuation">(</span>vm, node, name, <span class="token string">&quot;input&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        // 节点类型为 text</span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>node.nodeType <span class="token operator">==</span><span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token keyword">if</span> <span class="token punctuation">(</span>reg.test<span class="token punctuation">(</span>node.nodeValue<span class="token punctuation">))</span> <span class="token punctuation">{</span></span>
<span class="line">            var name <span class="token operator">=</span> RegExp.<span class="token variable">$1</span><span class="token punctuation">;</span> // 获取匹配到的字符串</span>
<span class="line">            name <span class="token operator">=</span> name.trim<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">            new Watcher<span class="token punctuation">(</span>vm, node, name, <span class="token string">&quot;text&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">          <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">      <span class="token keyword">function</span> Watcher<span class="token punctuation">(</span>vm, node, name, nodeType<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        Dep.target <span class="token operator">=</span> this<span class="token punctuation">;</span></span>
<span class="line">        this.name <span class="token operator">=</span> name<span class="token punctuation">;</span></span>
<span class="line">        this.node <span class="token operator">=</span> <span class="token function">node</span><span class="token punctuation">;</span></span>
<span class="line">        this.vm <span class="token operator">=</span> vm<span class="token punctuation">;</span></span>
<span class="line">        this.nodeType <span class="token operator">=</span> nodeType<span class="token punctuation">;</span></span>
<span class="line">        this.update<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        Dep.target <span class="token operator">=</span> null<span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">      Watcher.prototype <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">        update: <span class="token function-name function">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">          this.get<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">          <span class="token keyword">if</span> <span class="token punctuation">(</span>this.nodeType <span class="token operator">==</span> <span class="token string">&quot;text&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            this.node.nodeValue <span class="token operator">=</span> this.value<span class="token punctuation">;</span></span>
<span class="line">          <span class="token punctuation">}</span></span>
<span class="line">          <span class="token keyword">if</span> <span class="token punctuation">(</span>this.nodeType <span class="token operator">==</span> <span class="token string">&quot;input&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            this.node.value <span class="token operator">=</span> this.value<span class="token punctuation">;</span></span>
<span class="line">          <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span>,</span>
<span class="line">        // 获取 data 中的属性值</span>
<span class="line">        get: <span class="token function-name function">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">          this.value <span class="token operator">=</span> this.vm<span class="token punctuation">[</span>this.name<span class="token punctuation">]</span><span class="token punctuation">;</span> // 触发相应属性的 get</span>
<span class="line">        <span class="token punctuation">}</span>,</span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">      <span class="token keyword">function</span> <span class="token function-name function">Dep</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        this.subs <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">      Dep.prototype <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">        addSub: <span class="token keyword">function</span> <span class="token punctuation">(</span>sub<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">          this.subs.push<span class="token punctuation">(</span>sub<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span>,</span>
<span class="line"></span>
<span class="line">        notify: <span class="token function-name function">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">          this.subs.forEach<span class="token punctuation">(</span>function <span class="token punctuation">(</span>sub<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            sub.update<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span>,</span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">      <span class="token keyword">function</span> Vue<span class="token punctuation">(</span>options<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        this.data <span class="token operator">=</span> options.data<span class="token punctuation">;</span></span>
<span class="line">        var data <span class="token operator">=</span> this.data<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        observe<span class="token punctuation">(</span>data, this<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        var <span class="token function">id</span> <span class="token operator">=</span> options.el<span class="token punctuation">;</span></span>
<span class="line">        var dom <span class="token operator">=</span> nodeToFragment<span class="token punctuation">(</span>document.getElementById<span class="token punctuation">(</span>id<span class="token punctuation">)</span>, this<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        // 编译完成后，将 dom 返回到 app 中</span>
<span class="line">        document.getElementById<span class="token punctuation">(</span>id<span class="token punctuation">)</span>.appendChild<span class="token punctuation">(</span>dom<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">      var vm <span class="token operator">=</span> new Vue<span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">        el: <span class="token string">&quot;app&quot;</span>,</span>
<span class="line">        data: <span class="token punctuation">{</span></span>
<span class="line">          text: <span class="token string">&quot;hello world&quot;</span>,</span>
<span class="line">        <span class="token punctuation">}</span>,</span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token operator">&lt;</span>/script<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token operator">&lt;</span>/body<span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span>/html<span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3)]))}const o=s(e,[["render",l]]),u=JSON.parse(`{"path":"/frame/%E7%AE%80%E5%8D%95%E5%8F%8C%E5%90%91%E7%BB%91%E5%AE%9A.html","title":"简单双向绑定","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"updatedTime":1622022772000,"contributors":[{"name":"wuhui","username":"wuhui","email":"maniwu@aijiatui.com","commits":4,"url":"https://github.com/wuhui"}],"changelog":[{"hash":"22549e7953a41909f4b84da9c0fc81e3df7a1ca8","time":1622022772000,"email":"maniwu@aijiatui.com","author":"wuhui","message":"up"},{"hash":"ece683193851ecd2869fc166e8f8ace19055b36b","time":1607503623000,"email":"maniwu@aijiatui.com","author":"wuhui","message":"up"},{"hash":"a0f6e6ec4175856326b9a5e5d0cf26cf850080bf","time":1597806398000,"email":"maniwu@aijiatui.com","author":"wuhui","message":"up"},{"hash":"650ec3408d94f6d342552477af4ed20c9db822e5","time":1596102395000,"email":"maniwu@aijiatui.com","author":"wuhui","message":"u'p"}]},"filePathRelative":"frame/简单双向绑定.md"}`);export{o as comp,u as data};
