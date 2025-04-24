# css

```css
pointer-events: none;
```

::: tip
pointer-events: none，会禁用鼠标移上去和点击事件，如果新增编辑是一个页面，新增时 div 只是显示，编辑要点击，那么用这个特别方便
:::

图片报 403

```html
// 会影响全部请求，request header不带referer
<meta name="referrer" content="no-referrer" />
<img referrerpolicy="no-referrer" src="xxx.png" />// 或者单独设置
```

scale 缩放不清晰，加下面即可显著提高清晰度

```css
transform: translate3d(1%, 1%, 0) scale(0.8);
```

<Badge type="warning" text="react module css" vertical="middle" /> 使用全局样式覆盖 ant 样式

::: tabs

@tab page

```jsx
import styles from "./index.module.css";
<div className={styles.p}>
  <span className="tt">哈哈哈</span>
</div>;
```

@tab css

```css
:global {
  .tt {
    color: #fff;
  }
}

:global(.tt) {
  color: #fff;
}

.p {
  :global(.tt) {
    color: #fff;
  }
}
```

:::


