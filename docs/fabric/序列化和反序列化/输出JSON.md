# 输出JSON

- JSON.stringify(canvas)
- canvas.toJSON()
- canvas.toObject()

`{version: '5.3.0', objects: []}`


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

  console.log('canvas stringify ', JSON.stringify(canvas))
  console.log('canvas toJSON', canvas.toJSON())
  console.log('canvas toObject', canvas.toObject())
}
```
