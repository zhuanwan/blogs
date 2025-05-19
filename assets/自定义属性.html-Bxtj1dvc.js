import{_ as s,c as n,e as a,o as i}from"./app-Cqb5tvJn.js";const l={};function r(t,e){return i(),n("div",null,e[0]||(e[0]=[a(`<h1 id="自定义属性" tabindex="-1"><a class="header-anchor" href="#自定义属性"><span>自定义属性</span></a></h1><h2 id="根元素" tabindex="-1"><a class="header-anchor" href="#根元素"><span>根元素</span></a></h2><p>:root 相当于 html 根元素，优先级更改</p><div class="language-style line-numbers-mode" data-highlighter="prismjs" data-ext="style"><pre><code><span class="line">:root {</span>
<span class="line">  color: red</span>
<span class="line">}</span>
<span class="line">html {</span>
<span class="line">  color: green;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>文本显示红色</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>:root 可以应用于HTML文档，也可以应用于所有类似XML文档，这个是:root存在的原因</p></div><h2 id="自定义属性-1" tabindex="-1"><a class="header-anchor" href="#自定义属性-1"><span>自定义属性</span></a></h2><p>--属性名：值</p><ul><li>变量名称必须以 -- 开头</li><li>变量只能存储一个属性的值</li><li>区分大小写</li></ul><p>var()函数可以代替元素中任何属性中的值的任何部分</p><div class="language-style line-numbers-mode" data-highlighter="prismjs" data-ext="style"><pre><code><span class="line">:root {</span>
<span class="line">  --main-bg-color: pink;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">body {</span>
<span class="line">  background-color: var(--main-bg-color);</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11)]))}const d=s(l,[["render",r]]),p=JSON.parse('{"path":"/styleBlock/%E8%87%AA%E5%AE%9A%E4%B9%89%E5%B1%9E%E6%80%A7.html","title":"自定义属性","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"根元素","slug":"根元素","link":"#根元素","children":[]},{"level":2,"title":"自定义属性","slug":"自定义属性-1","link":"#自定义属性-1","children":[]}],"git":{"updatedTime":1628756554000,"contributors":[{"name":"wuhui","username":"wuhui","email":"maniwu@aijiatui.com","commits":1,"url":"https://github.com/wuhui"}],"changelog":[{"hash":"d26e4a13cfeb6929ab0592e823d92e4a930fc261","time":1628756554000,"email":"maniwu@aijiatui.com","author":"wuhui","message":"up"}]},"filePathRelative":"styleBlock/自定义属性.md"}');export{d as comp,p as data};
