import React, { useEffect, useRef } from 'react'

export function Test1() {
  const canvasRef = useRef(null)
  const fabricCanvas = useRef(null)

  const draw = (canvas) => {
    fabric.Image.fromURL('/images/cat.jpg', (img) => {
      // 设置背景图， 将背景图的宽高设置成画布的宽高
      canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas), {
        scaleX: canvas.width / img.width,
        scaleY: canvas.height / img.height,
        left: 0,
        top: 0,
      })

      let rect = new fabric.Rect({
        width: 80,
        height: 100,
        left: 10,
        top: 20,
        fill: 'rgba(255,0,0,0.4)',
        name: 'rect',
      })
      // 将rect添加到画布中
      canvas.add(rect)
    })
  }

  const init = (canvas) => {
    if (!canvas) {
      return
    }
    // 重置上一次的canvas
    canvas.off('mouse:down')
    canvas.off('mouse:wheel')
    canvas.off('mouse:move')
    canvas.off('mouse:up')
    canvas.clear()
    canvas.setViewportTransform([1, 0, 0, 1, 0, 0])

    draw(canvas)

    canvas.on('mouse:wheel', (opt) => {
      const delta = opt.e.deltaY // 滚轮，向上滚一下是 -100，向下滚一下是 100
      let zoom = canvas.getZoom() // 获取画布当前缩放值
      zoom *= 0.999 ** delta
      if (zoom > 20) zoom = 20
      if (zoom < 0.01) zoom = 0.01

      // 以左上角为原点
      canvas.setZoom(zoom)

      // 以鼠标所在位置为原点缩放
      // canvas.zoomToPoint(
      //   {
      //     x: opt.e.offsetX,
      //     y: opt.e.offsetY,
      //   },
      //   zoom
      // )
      opt.e.preventDefault()
      opt.e.stopPropagation()
    })

    canvas.selection = true // 画布是否可选中。默认true；false 不可选中
    canvas.selectionColor = 'rgba(106, 101, 216, 0.3)' // 画布鼠标框选时的背景色
    canvas.selectionBorderColor = '#1d2786' // 画布鼠标框选时的边框颜色
    canvas.selectionLineWidth = 6 // 画布鼠标框选时的边框厚度
    canvas.selectionDashArray = [30, 4, 10] // 画布鼠标框选时边框虚线规则
    canvas.selectionFullyContained = true // 只选择完全包含在拖动选择矩形中的形状
  }

  useEffect(() => {
    fabricCanvas.current = new fabric.Canvas(canvasRef.current)
    init(fabricCanvas.current)
    return () => {
      fabricCanvas = null
    }
  }, [])
  return (
    <div>
      <canvas
        ref={canvasRef}
        style={{ border: '1px solid #ccc' }}
        width={300}
        height={200}
      ></canvas>
    </div>
  )
}
