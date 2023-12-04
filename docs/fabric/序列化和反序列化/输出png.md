# 输出png

`canvas.toDataURL('png')` 输出png（base64）

使用 `canvas.toDataURL('png')` 可以输出 `png` 图片。但这个操作可能会打断 `canvas` 的渲染，所以之后要再执行以下 `canvas.requestRenderAll()` 。


```js
const draw = (canvas) => {
  const rect = new fabric.Rect({
    top: 20,
    left: 120,
    width: 60,
    height: 40,
    fill: 'transparent',
    stroke: 'blue'
  })
  canvas.add(rect)

  console.log('toPng', canvas.toDataURL('png')) // 在控制台输出 png（base64）
  canvas.requestRenderAll()
}
```
