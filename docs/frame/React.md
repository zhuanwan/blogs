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

## diff
### reconcileSingleElement 

* 当 child !== null 且 key 相同且 type 不同时执行 deleteRemainingChildren 将 child 及其兄弟 fiber 都标记删除。
* 当 child !== null 且 key 不同时仅将 child 标记删除。
```js
  // 当前页面显示的
  ul > li * 3

  // 这次需要更新的
  ul > p
```
由于本次更新时只有一个 p，属于单一节点的 Diff，会走上面介绍的代码逻辑。  

在 reconcileSingleElement 中遍历之前的 3 个 fiber（对应的 DOM 为 3 个 li），寻找本次更新的 p 是否可以复用之前的 3 个 fiber 中某个的 DOM。  

当 key 相同且 type 不同时，代表我们已经找到本次更新的 p 对应的上次的 fiber，但是 p 与 li type 不同，不能复用。既然唯一的可能性已经不能复用，则剩下的 fiber 都没有机会了，所以都需要标记删除。  

当 key 不同时只代表遍历到的该 fiber 不能被 p 复用，后面还有兄弟 fiber 还没有遍历到。所以仅仅标记该 fiber 删除。 

### reconcileChildrenArray 
第一轮遍历步骤如下：

1. let i = 0，遍历 newChildren，将 newChildren[i] 与 oldFiber 比较，判断 DOM 节点是否可复用。
2. 如果可复用，i++，继续比较 newChildren[i] 与 oldFiber.sibling，可以复用则继续遍历。
3. 如果不可复用，分两种情况：
4. key 不同导致不可复用，立即跳出整个遍历，第一轮遍历结束。
5. key 相同 type 不同导致不可复用，会将 oldFiber 标记为 DELETION，并继续遍历
6. 如果 newChildren 遍历完（即 i === newChildren.length - 1）或者 oldFiber 遍历完（即 oldFiber.sibling === null），跳出遍历，第一轮遍历结束。

第一轮遍历完后：
* newChildren 和 oldFiber 都遍历完，结束
* newChildren 遍历完，oldFiber 没遍历完，遍历剩下的 oldFiber，依次标记 Deletion。
* newChildren 没遍历完，oldFiber 遍历完，遍历剩下的 newChildren 为生成的 workInProgress fiber 依次标记 Placement。


newChildren 与 oldFiber 都没遍历完:  
第二轮遍历步骤如下：
1. 将所有还未处理的 oldFiber 存入以 key 为 key，oldFiber 为 value 的 Map（existingChildren ） 中。
2. 最后一个可复用的节点在 oldFiber 中的位置索引（用变量 lastPlacedIndex 表示）。
3. 用变量 oldIndex 表示遍历到的可复用节点在 oldFiber 中的位置索引。如果 oldIndex < lastPlacedIndex，代表本次更新该节点需要向右移动。
4. lastPlacedIndex 初始为 0，每遍历一个可复用的节点，如果 oldIndex >= lastPlacedIndex，则 lastPlacedIndex = oldIndex。

```js
// 之前
abcd

// 之后
acdb

===第一轮遍历开始===
a（之后）vs a（之前）
key 不变，可复用
此时 a 对应的 oldFiber（之前的 a）在之前的数组（abcd）中索引为 0
所以 lastPlacedIndex = 0;

继续第一轮遍历...

c（之后）vs b（之前）
key 改变，不能复用，跳出第一轮遍历
此时 lastPlacedIndex === 0;
===第一轮遍历结束===

===第二轮遍历开始===
newChildren === cdb，没用完，不需要执行删除旧节点
oldFiber === bcd，没用完，不需要执行插入新节点

将剩余 oldFiber（bcd）保存为 map

// 当前 oldFiber：bcd
// 当前 newChildren：cdb

继续遍历剩余 newChildren

key === c 在 oldFiber 中存在
const oldIndex = c（之前）.index;
此时 oldIndex === 2;  // 之前节点为 abcd，所以c.index === 2
比较 oldIndex 与 lastPlacedIndex;

如果 oldIndex >= lastPlacedIndex 代表该可复用节点不需要移动
并将 lastPlacedIndex = oldIndex;
如果 oldIndex < lastplacedIndex 该可复用节点之前插入的位置索引小于这次更新需要插入的位置索引，代表该节点需要向右移动

在例子中，oldIndex 2 > lastPlacedIndex 0，
则 lastPlacedIndex = 2;
c 节点位置不变

继续遍历剩余 newChildren

// 当前oldFiber：bd
// 当前newChildren：db

key === d 在 oldFiber 中存在
const oldIndex = d（之前）.index;
oldIndex 3 > lastPlacedIndex 2 // 之前节点为 abcd，所以 d.index === 3
则 lastPlacedIndex = 3;
d 节点位置不变

继续遍历剩余 newChildren

// 当前 oldFiber：b
// 当前 newChildren：b

key === b 在 oldFiber 中存在
const oldIndex = b（之前）.index;
oldIndex 1 < lastPlacedIndex 3 // 之前节点为 abcd，所以 b.index === 1
则 b 节点需要向右移动
===第二轮遍历结束===

最终 acd 3 个节点都没有移动，b 节点被标记为移动
```