import{_ as s,c as a,e as p,o as e}from"./app-Cqb5tvJn.js";const t={};function l(i,n){return e(),a("div",null,n[0]||(n[0]=[p(`<h1 id="watcher-dep" tabindex="-1"><a class="header-anchor" href="#watcher-dep"><span>watcher&amp;&amp;dep</span></a></h1><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line"><span class="token operator">&lt;</span><span class="token operator">!</span>DOCTYPE html<span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span>html <span class="token assign-left variable">lang</span><span class="token operator">=</span><span class="token string">&quot;en&quot;</span><span class="token operator">&gt;</span></span>
<span class="line">  <span class="token operator">&lt;</span>head<span class="token operator">&gt;</span></span>
<span class="line">    <span class="token operator">&lt;</span>meta <span class="token assign-left variable">charset</span><span class="token operator">=</span><span class="token string">&quot;UTF-8&quot;</span> /<span class="token operator">&gt;</span></span>
<span class="line">    <span class="token operator">&lt;</span>meta <span class="token assign-left variable">name</span><span class="token operator">=</span><span class="token string">&quot;viewport&quot;</span> <span class="token assign-left variable">content</span><span class="token operator">=</span><span class="token string">&quot;width=device-width, initial-scale=1.0&quot;</span> /<span class="token operator">&gt;</span></span>
<span class="line">    <span class="token operator">&lt;</span>title<span class="token operator">&gt;</span>Document<span class="token operator">&lt;</span>/title<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token operator">&lt;</span>/head<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token operator">&lt;</span>body<span class="token operator">&gt;</span><span class="token operator">&lt;</span>/body<span class="token operator">&gt;</span></span>
<span class="line">  <span class="token operator">&lt;</span>script<span class="token operator">&gt;</span></span>
<span class="line">    class Watcher <span class="token punctuation">{</span></span>
<span class="line">      newDepIds <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line">      newDeps <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line">      depIds <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line">      constructor<span class="token punctuation">(</span>fn, cb<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        Dep.target <span class="token operator">=</span> this</span>
<span class="line">        fn<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">        this.cb <span class="token operator">=</span> cb</span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">      addDep <span class="token punctuation">(</span>dep<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        const <span class="token function">id</span> <span class="token operator">=</span> dep.id</span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>this.newDepIds.includes<span class="token punctuation">(</span>id<span class="token punctuation">))</span> <span class="token punctuation">{</span></span>
<span class="line">          this.newDepIds.push<span class="token punctuation">(</span>id<span class="token punctuation">)</span></span>
<span class="line">          this.newDeps.push<span class="token punctuation">(</span>dep<span class="token punctuation">)</span></span>
<span class="line">          <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>this.depIds.includes<span class="token punctuation">(</span>id<span class="token punctuation">))</span> <span class="token punctuation">{</span></span>
<span class="line">            dep.addSub<span class="token punctuation">(</span>this<span class="token punctuation">)</span></span>
<span class="line">          <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">      <span class="token function-name function">update</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        this.cb<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    class Dep <span class="token punctuation">{</span></span>
<span class="line">      static target <span class="token operator">=</span> null<span class="token punctuation">;</span></span>
<span class="line">      <span class="token function">id</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">      subs <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">      <span class="token function-name function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        this.id <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line">        this.subs <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">      addSub<span class="token punctuation">(</span>sub<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        this.subs.push<span class="token punctuation">(</span>sub<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">      removeSub<span class="token punctuation">(</span>sub<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        remove<span class="token punctuation">(</span>this.subs, sub<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">      <span class="token function-name function">depend</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>Dep.target<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">          Dep.target.addDep<span class="token punctuation">(</span>this<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">      <span class="token function-name function">notify</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        const subs <span class="token operator">=</span> this.subs.slice<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">for</span> <span class="token punctuation">(</span>let i <span class="token operator">=</span> <span class="token number">0</span>, l <span class="token operator">=</span> subs.length<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> l<span class="token punctuation">;</span> i++<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">          subs<span class="token punctuation">[</span>i<span class="token punctuation">]</span>.update<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">function</span> defineReactive<span class="token punctuation">(</span>obj, key, val<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      const dep <span class="token operator">=</span> new Dep<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      Object.defineProperty<span class="token punctuation">(</span>obj, key, <span class="token punctuation">{</span></span>
<span class="line">        enumerable: true,</span>
<span class="line">        configurable: true,</span>
<span class="line">        get: <span class="token keyword">function</span> <span class="token function-name function">reactiveGetter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token keyword">if</span> <span class="token punctuation">(</span>Dep.target<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            dep.depend<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">          <span class="token punctuation">}</span></span>
<span class="line">          <span class="token builtin class-name">return</span> val<span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span>,</span>
<span class="line">        set: <span class="token keyword">function</span> reactiveSetter<span class="token punctuation">(</span>newVal<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">          val <span class="token operator">=</span> newVal<span class="token punctuation">;</span></span>
<span class="line">          dep.notify<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span>,</span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    </span>
<span class="line">    </span>
<span class="line">    const o <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">      a: <span class="token number">1</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    defineReactive<span class="token punctuation">(</span>o, <span class="token string">&#39;a&#39;</span>, <span class="token number">1</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    new Watcher<span class="token punctuation">((</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token builtin class-name">return</span> o.a</span>
<span class="line">    <span class="token punctuation">}</span>, <span class="token function-name function">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      console.log<span class="token punctuation">(</span><span class="token number">11111111</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    o.a <span class="token operator">=</span> <span class="token number">2</span></span>
<span class="line">  <span class="token operator">&lt;</span>/script<span class="token operator">&gt;</span></span>
<span class="line"><span class="token operator">&lt;</span>/html<span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>new Watcher -&gt; Dep.targer赋值 data.getter -&gt; dep.depend -&gt; dep添加watcher实例</p><p>data.setter -&gt; dep.notify() -&gt; watcher update</p>`,4)]))}const o=s(t,[["render",l]]),u=JSON.parse('{"path":"/frame/watcher__dep.html","title":"watcher&&dep","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"updatedTime":1622022772000,"contributors":[{"name":"wuhui","username":"wuhui","email":"maniwu@aijiatui.com","commits":3,"url":"https://github.com/wuhui"}],"changelog":[{"hash":"22549e7953a41909f4b84da9c0fc81e3df7a1ca8","time":1622022772000,"email":"maniwu@aijiatui.com","author":"wuhui","message":"up"},{"hash":"ece683193851ecd2869fc166e8f8ace19055b36b","time":1607503623000,"email":"maniwu@aijiatui.com","author":"wuhui","message":"up"},{"hash":"a0f6e6ec4175856326b9a5e5d0cf26cf850080bf","time":1597806398000,"email":"maniwu@aijiatui.com","author":"wuhui","message":"up"}]},"filePathRelative":"frame/watcher&&dep.md"}');export{o as comp,u as data};
