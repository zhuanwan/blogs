import{_ as n,c as a,e as p,o as e}from"./app-Cqb5tvJn.js";const l={};function i(t,s){return e(),a("div",null,s[0]||(s[0]=[p(`<h1 id="加减乘除带括号" tabindex="-1"><a class="header-anchor" href="#加减乘除带括号"><span>加减乘除带括号</span></a></h1><ul><li><p>定义结果字段res, 原理是相加”a + b“, 如果是b是负数 那么 a+(-b)</p></li><li><p>s 为要遍历的字符串，尾部加”+“</p></li><li><p>遍历前定义上一次的操作符pos为1，也就是”+“</p></li><li><p>遍历到数字的时候，定义subStr子串，代表上一次的保存的值</p></li><li><p>首先只考虑加减的时候，遍历到操作符的时候，只要把上一次的操作符pos和subStr相乘，得到数字和res相加，把pos设为当前操作符，subStr设为”“</p></li><li><p>有了乘除，要考虑优先级，如果碰到*/，就把subStr和pos存储起来，等下一次再遇到操作符的时候取出计算后重新赋值subStr，再按照加减的算法继续</p></li><li><p>有括号的情况，用递归，如果遇到左括号，继续循环，直到遇到最后一个右括号，这中间的字符串取出，赋值subStr，比如 5+(8-9*(2-1)), 8-9*(2-1)作为新的字符串计算</p></li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line"><span class="token keyword">function</span> caculator<span class="token punctuation">(</span>s<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  s <span class="token operator">=</span> s + <span class="token string">&#39;+&#39;</span></span>
<span class="line"></span>
<span class="line">  <span class="token builtin class-name">let</span> res <span class="token operator">=</span> <span class="token number">0</span> // 结果</span>
<span class="line">  <span class="token builtin class-name">let</span> subStr <span class="token operator">=</span> <span class="token string">&#39;&#39;</span></span>
<span class="line">  <span class="token builtin class-name">let</span> pos <span class="token operator">=</span> <span class="token number">1</span> // 上一次的操作符</span>
<span class="line">  <span class="token builtin class-name">let</span> tempData <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> // 存储上一次的 subStr 和 操作符</span>
<span class="line"></span>
<span class="line">  <span class="token builtin class-name">let</span> zuokuoArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> // 左括号栈</span>
<span class="line">  <span class="token builtin class-name">let</span> num <span class="token operator">=</span> <span class="token number">0</span> // 配合 左括号栈 匹配到右括号时子串长度</span>
<span class="line"></span>
<span class="line">  <span class="token builtin class-name">let</span> i <span class="token operator">=</span> <span class="token number">0</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">for</span> <span class="token punctuation">(</span>i<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> s.length<span class="token punctuation">;</span> i++<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    var ch <span class="token operator">=</span> s.charAt<span class="token punctuation">(</span>i<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    // 如果碰到左括号，左括号栈 入栈</span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>ch <span class="token operator">==</span><span class="token operator">=</span> <span class="token string">&#39;(&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      zuokuoArr.push<span class="token punctuation">(</span><span class="token string">&#39;(&#39;</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    // 如果碰到右括号，左括号栈 出栈</span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>ch <span class="token operator">==</span><span class="token operator">=</span> <span class="token string">&#39;)&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      zuokuoArr.pop<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    // 如果左括号栈内还有左括号，继续循环，子串长度 + <span class="token number">1</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>zuokuoArr.length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      num++</span>
<span class="line">      <span class="token builtin class-name">continue</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    // 如果发现左括号栈 长度为0 并且 有子串, 那么递归单独计算子串，把结果赋值给subStr, 子串长度设为0，继续循环</span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>zuokuoArr.length <span class="token operator">==</span><span class="token operator">=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> num <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      const t <span class="token operator">=</span> s.substring<span class="token punctuation">(</span>i - num + <span class="token number">1</span>, i<span class="token punctuation">)</span></span>
<span class="line">      num <span class="token operator">=</span> <span class="token number">0</span></span>
<span class="line">      subStr <span class="token operator">=</span> caculator<span class="token punctuation">(</span>t<span class="token punctuation">)</span></span>
<span class="line">      <span class="token builtin class-name">continue</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    /////////////////// 以上是括号逻辑 ////////////////////</span>
<span class="line">    ////////////////// 下面是计算逻辑 ////////////////////</span>
<span class="line"></span>
<span class="line">    // 如果发现 是数字，继续循环，得到完整数字</span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>ch <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> ch <span class="token operator">&lt;=</span> <span class="token number">9</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      subStr <span class="token operator">=</span> subStr + ch</span>
<span class="line">      <span class="token builtin class-name">continue</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    // 如果碰到 +-*/</span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;+&#39;</span>, <span class="token string">&#39;-&#39;</span>, <span class="token string">&#39;*&#39;</span>, <span class="token string">&#39;/&#39;</span><span class="token punctuation">]</span>.includes<span class="token punctuation">(</span>ch<span class="token punctuation">))</span> <span class="token punctuation">{</span></span>
<span class="line">      // 先判断前面的是否存储上一次的subStr, 计算得出当前subStr</span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span>tempData.length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        const <span class="token function">op</span> <span class="token operator">=</span> tempData.pop<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">        const d <span class="token operator">=</span> tempData.pop<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>op <span class="token operator">==</span><span class="token operator">=</span> <span class="token string">&#39;*&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">          subStr <span class="token operator">=</span> d * subStr</span>
<span class="line">        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>op <span class="token operator">==</span><span class="token operator">=</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">          subStr <span class="token operator">=</span> d / subStr</span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">      // 如果是 + - ，计算结果，如果是*/，存储subStr和操作符</span>
<span class="line">      switch <span class="token punctuation">(</span>ch<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">case</span> <span class="token string">&#39;+&#39;</span><span class="token builtin class-name">:</span></span>
<span class="line">          res <span class="token operator">+=</span> pos * subStr</span>
<span class="line">          subStr <span class="token operator">=</span> <span class="token string">&#39;&#39;</span></span>
<span class="line">          pos <span class="token operator">=</span> <span class="token number">1</span></span>
<span class="line">          <span class="token builtin class-name">break</span></span>
<span class="line">        <span class="token keyword">case</span> <span class="token string">&#39;-&#39;</span><span class="token builtin class-name">:</span></span>
<span class="line">          res <span class="token operator">+=</span> pos * subStr</span>
<span class="line">          subStr <span class="token operator">=</span> <span class="token string">&#39;&#39;</span></span>
<span class="line">          pos <span class="token operator">=</span> <span class="token parameter variable">-1</span></span>
<span class="line">          <span class="token builtin class-name">break</span></span>
<span class="line">        <span class="token keyword">case</span> <span class="token string">&#39;*&#39;</span><span class="token builtin class-name">:</span></span>
<span class="line">          tempData.push<span class="token punctuation">(</span>subStr<span class="token punctuation">)</span></span>
<span class="line">          tempData.push<span class="token punctuation">(</span>ch<span class="token punctuation">)</span></span>
<span class="line">          subStr <span class="token operator">=</span> <span class="token string">&#39;&#39;</span></span>
<span class="line">          <span class="token builtin class-name">break</span></span>
<span class="line">        <span class="token keyword">case</span> <span class="token string">&#39;/&#39;</span><span class="token builtin class-name">:</span></span>
<span class="line">          tempData.push<span class="token punctuation">(</span>subStr<span class="token punctuation">)</span></span>
<span class="line">          tempData.push<span class="token punctuation">(</span>ch<span class="token punctuation">)</span></span>
<span class="line">          subStr <span class="token operator">=</span> <span class="token string">&#39;&#39;</span></span>
<span class="line">          <span class="token builtin class-name">break</span></span>
<span class="line">        default:</span>
<span class="line">          <span class="token builtin class-name">break</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token builtin class-name">return</span> res</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">console.log<span class="token punctuation">(</span>caculator<span class="token punctuation">(</span><span class="token string">&#39;4-4*(3+2)-(4)+4&#39;</span><span class="token punctuation">))</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3)]))}const o=n(l,[["render",i]]),u=JSON.parse('{"path":"/algorithm/%E5%8A%A0%E5%87%8F%E4%B9%98%E9%99%A4%E5%B8%A6%E6%8B%AC%E5%8F%B7.html","title":"加减乘除带括号","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"updatedTime":1622022772000,"contributors":[{"name":"wuhui","username":"wuhui","email":"maniwu@aijiatui.com","commits":5,"url":"https://github.com/wuhui"}],"changelog":[{"hash":"22549e7953a41909f4b84da9c0fc81e3df7a1ca8","time":1622022772000,"email":"maniwu@aijiatui.com","author":"wuhui","message":"up"},{"hash":"186000b06c46071ac7228ea3dacda32dab30737d","time":1621926759000,"email":"maniwu@aijiatui.com","author":"wuhui","message":"up"},{"hash":"75e9c37794e85b314ab982412f9812094d9e6181","time":1621849676000,"email":"maniwu@aijiatui.com","author":"wuhui","message":"up"},{"hash":"ebb9678c978303eab63d7332212c8fcadfdbdf75","time":1621847962000,"email":"maniwu@aijiatui.com","author":"wuhui","message":"测试"},{"hash":"af22270fcd5d3c9525f462ee3a181e9565656f65","time":1621845350000,"email":"maniwu@aijiatui.com","author":"wuhui","message":"up"}]},"filePathRelative":"algorithm/加减乘除带括号.md"}');export{o as comp,u as data};
