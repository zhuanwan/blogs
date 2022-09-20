# React

## jsx
```js
import React from 'react';

function App() {
  return <h1>Hello World</h1>;
}
```
jsx本质上就是React.createElement的语法糖，调用createElement生成对象，所以需要import React from 'react'
```js
import React from 'react';

function App() {
  return React.createElement('h1', null, 'Hello world');
}
```
react17可以不用import React，React 17 在 React 的 package 中引入了两个新入口，这些入口只会被 Babel 和 TypeScript 等编译器使用。新的 JSX 转换不会将 JSX 转换为 React.createElement，而是自动从 React 的 package 中引入新的入口函数并调用

```js
// 由编译器引入（禁止自己引入！）
import {jsx as _jsx} from 'react/jsx-runtime';

function App() {
  return _jsx('h1', { children: 'Hello world' });
}
```
目前，旧的转换的默认选项为 {"runtime": "classic"}。如需启用新的转换，你可以使用 {"runtime": "automatic"} 作为 @babel/plugin-transform-react-jsx 或 @babel/preset-react 的选项
```js
// 如果你使用的是 @babel/preset-react
{
  "presets": [
    ["@babel/preset-react", {
      "runtime": "automatic"
    }]
  ]
}
```
示例https://codesandbox.io/s/didact-8-21ost中, 添加/** @jsxRuntime classic */，以便使用自定义的createElement
```js

/** @jsxRuntime classic */
/** @jsx Didact.createElement */
function Counter() {
  const [state, setState] = Didact.useState(1)
  return (
    ...
  )
}
```

1. 始终整体刷新页面
2. 单向流
3. jsx 是JavaScript语法糖，本质调用createElement生成DOM
4. 函数组件、高阶组件