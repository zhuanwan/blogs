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

## ReactDOM.render
```js
render(element, container, callback) =
legacyRenderSubtreeIntoContainer(null, element, container, false, callback) = 

{
  // 生成root
  root = 
  container._reactRootContainer = 
  legacyCreateRootFromDOMContainer(container, false) = 
  createLegacyRoot(container, undefined) = 
  new ReactDOMBlockingRoot(container, 0, undefined) = 
  {
    _internalRoot: createRootImpl(container, 0, undefined) = 
                    createContainer(container, 0, false) =
                    createFiberRoot(container, 0, false) =
                    {
                      root = new FiberRootNode(container, 0, false) = {tag:0, containerInfo: container,...}
                      root.current = new FiberNode(3, null, null, 0) = {tag:3, mode:0 ..., stateNode: root, updateQueue: {...}}
                      return root
                    }
                    
    render: function
    unmount: function
  }
  // 生成fibreRoot
  fiberRoot = root._internalRoot

  // 这里细节没看懂
  unbatchedUpdates(function () {
    updateContainer(element, fiberRoot, null, callback);
  });
  
  updateContainer -> scheduleUpdateOnFiber -> performSyncWorkOnRoot -> renderRootSync ->
  {
    // workInProgressRoot = fiberRoot
    // workInProgress = fiberRoot.current = fiberRoot.current.alternate
    prepareFreshStack -> createWorkInProgress

    // 执行单元
    workLoopSync -> performUnitOfWork(workInProgress) -> beginWork -> completeUnitOfWork
  }

}
```


```js
ReactDOM.createRoot(container).render(element) = 

{
  _internalRoot: createRootImpl(container, 2, undefined)
  unmount: function
  render: function
}.render(element) = 

updateContainer(element, root, null, null) = 

enqueueUpdate(current$1, update);scheduleUpdateOnFiber(current$1, lane, eventTime);
```

