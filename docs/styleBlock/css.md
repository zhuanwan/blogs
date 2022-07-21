# css

```js
pointer-events: none
```

::: tip
pointer-events: none，会禁用鼠标移上去和点击事件，如果新增编辑是一个页面，新增时 div 只是显示，编辑要点击，那么用这个特别方便
:::

图片报 403

```js
    <meta name="referrer" content="no-referrer"/> // 会影响全部请求，request header不带referer
    // 或者
    <img referrerPolicy="no-referrer" src="xxx.png" />
```

scale 缩放不清晰，加下面即可显著提高清晰度
```css
transform: translate3d(1%, 1%, 0) scale(0.8)
```
