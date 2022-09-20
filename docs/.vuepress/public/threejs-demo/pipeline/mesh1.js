import * as THREE from '../../utils/jsm/three.module.js'

// 背景颜色
function createBgColor3() {
  const element = document.createElement('div')
  element.style.width = 400 + 'px'
  element.style.height = 200 + 'px'
  // element.style.opacity = 0.8;
  element.style.background = '#000825'

  const object = new THREE.CSS3DObject(element)
  // object.position.copy(new THREE.Vector3(0, 0, 1));
  // object.rotation.copy(new THREE.Euler( 0 * THREE.MathUtils.DEG2RAD, 0, 0));
  scene2.add(object)
}

// 立方体网格模型
export function test() {
  var points = [
    new THREE.Vector2(-50, -50),
    new THREE.Vector2(-60, 0),
    new THREE.Vector2(0, 50),
    new THREE.Vector2(60, 0),
    new THREE.Vector2(50, -50),
    new THREE.Vector2(-50, -50),
  ]
  // 通过顶点定义轮廓
  var shape = new THREE.Shape(points)
  // shape可以理解为一个需要填充轮廓
  // 所谓填充：ShapeGeometry算法利用顶点计算出三角面face3数据填充轮廓
  var geometry = new THREE.ShapeGeometry(shape)
  const material = new THREE.MeshBasicMaterial({
    color: 0xff0000,
    opacity: 0.8,
    transparent: true,
    // wireframe: true,
  })
  const plane = new THREE.Mesh(geometry, material)
  return plane
}

// 背景长方形
export function createBgPlane() {
  const geometry = new THREE.PlaneGeometry(400, 200)
  const material = new THREE.MeshBasicMaterial({
    color: 0x000825,
    opacity: 0.8,
    transparent: true,
  })
  const plane = new THREE.Mesh(geometry, material)
  return plane
}

// 背景网格
export function createBgGrid() {
  const material = new THREE.LineBasicMaterial({
    color: '#0066a6',
    linewidth: 8,
    transparent: true,
    opacity: 0.1,
  })

  const geometry = new THREE.BufferGeometry()

  const pointsArray = new Array()
  for (let i = 0; i <= 20; i++) {
    const x = -200 + i * 20
    const y = 100
    const z = 0
    pointsArray.push(new THREE.Vector3(x, y, z))

    const x2 = -200 + i * 20
    const y2 = -100
    const z2 = 0
    pointsArray.push(new THREE.Vector3(x2, y2, z2))
  }
  for (let j = 0; j <= 10; j++) {
    const y = -100 + j * 20
    const x = 200
    const z = 0
    pointsArray.push(new THREE.Vector3(x, y, z))

    const y2 = -100 + j * 20
    const x2 = -200
    const z2 = 0
    pointsArray.push(new THREE.Vector3(x2, y2, z2))
  }

  geometry.setFromPoints(pointsArray)
  const mesh = new THREE.LineSegments(geometry, material)
  return mesh
}

// 背景
export function createBg() {
  var groupBg = new THREE.Group()
  groupBg.add(createBgPlane(), createBgGrid())
  return groupBg
}

// 数据纹理对象, 管道里面的颜色方块
function createTubeTexture() {
  /**
   * 创建纹理对象的像素数据
   */
  var width = 2 //纹理宽度
  var height = 1 //纹理高度
  var size = width * height //像素大小
  var data = new Uint8Array(size * 4 * 2) //size*3：像素在缓冲区占用空间
  for (let i = 0; i < size * 4 * 2; i += 8) {
    // 随机设置RGB分量的值
    data[i] = 0
    data[i + 1] = 193
    data[i + 2] = 241
    data[i + 3] = 1
    data[i + 4] = 0
    data[i + 5] = 105
    data[i + 6] = 137
    data[i + 7] = 1
  }
  // 创建数据文理对象   RGB格式：THREE.RGBFormat
  var texture = new THREE.DataTexture(data, width, height, THREE.RGBAFormat)
  texture.needsUpdate = true //纹理更新
  return texture
}

// 管道
export function createTube() {
  const texture = createTubeTexture()

  // 创建多段线条的顶点数据
  var p1 = new THREE.Vector3(-85, -20, 0)
  var p2 = new THREE.Vector3(-50, 0, 0)
  var p3 = new THREE.Vector3(0, 90, 0)
  var p4 = new THREE.Vector3(50, 0, 0)
  var p5 = new THREE.Vector3(85, -20, 0)
  // 创建线条一：直线
  let line1 = new THREE.LineCurve3(p1, p2)
  // 重建线条2：三维样条曲线
  var curve = new THREE.CatmullRomCurve3([p2, p3, p4])
  // 创建线条3：直线
  let line2 = new THREE.LineCurve3(p4, p5)
  var curvePath = new THREE.CurvePath() // 创建CurvePath对象
  curvePath.curves.push(line1, curve, line2) // 插入多段线条

  // 路径 / 沿着轨迹细分数 / 管道半径 / 管道截面圆细分数 / 管道是否闭合
  var geometry1 = new THREE.TubeGeometry(curvePath, 40, 2, 5, false)

  // 设置阵列模式为 RepeatWrapping
  texture.wrapS = THREE.RepeatWrapping
  texture.wrapT = THREE.RepeatWrapping
  texture.repeat.x = 10
  texture.repeat.y = 0

  // 材质
  const material1 = new THREE.MeshBasicMaterial({
    map: texture,
    transparent: false,
    opacity: 0.5,
  })
  // 内管道
  const mesh1 = new THREE.Mesh(geometry1, material1)
  // 路径 / 沿着轨迹细分数 / 管道半径 / 管道截面圆细分数 / 管道是否闭合
  var geometry2 = new THREE.TubeGeometry(curvePath, 40, 6, 5, false)
  // 材质
  const material2 = new THREE.MeshPhongMaterial({
    color: 0x00c1f1,
    transparent: true,
    opacity: 0.3,
  })
  // 外管道
  const mesh2 = new THREE.Mesh(geometry2, material2)
  var group = new THREE.Group()
  group.add(mesh1, mesh2)
  return { tubeMesh: group, tubeTexture: texture }
}

// 公共形状（外框加内部颜色组合）
function createCommonShape({ points, color }) {
  // 开始画外框
  const geometry = new THREE.BufferGeometry() //声明一个几何体对象Geometry
  // setFromPoints方法从points中提取数据改变几何体的顶点属性vertices
  geometry.setFromPoints(points)
  //材质对象
  const material = new THREE.LineBasicMaterial({
    color,
    transparent: true,
  })
  //线条模型对象
  const line = new THREE.LineLoop(geometry, material)

  // 开始画内部颜色
  // 通过顶点定义轮廓
  const shape = new THREE.Shape(points)
  // ShapeGeometry算法利用顶点计算出三角面face3数据填充轮廓
  const geometryS = new THREE.ShapeGeometry(shape)
  //材质对象
  const materialS = new THREE.LineBasicMaterial({
    color,
    transparent: true,
    opacity: 0.2,
  })
  const meshS = new THREE.Mesh(geometryS, materialS)
  var group = new THREE.Group()

  group.add(line, meshS)
  return group
}
// 自流井
export function createZLJ() {
  // 绘制一个U型轮廓
  const R = 30 //圆弧半径
  // x,y,r,startAngle, endAngle, 是否是顺时针，默认false
  const arc = new THREE.ArcCurve(0, 0, R, 0, Math.PI, false)
  // 半圆弧的一个端点作为直线的一个端点
  const line1 = new THREE.LineCurve3(
    new THREE.Vector3(R, -40, 0),
    new THREE.Vector3(R, 0, 0)
  )
  const line2 = new THREE.LineCurve3(
    new THREE.Vector3(-R, 0, 0),
    new THREE.Vector3(-R, -40, 0)
  )
  // 创建组合曲线对象CurvePath
  const curvePath = new THREE.CurvePath()
  // 把多个线条插入到CurvePath中
  curvePath.curves.push(line1, arc, line2)
  //分段数20
  const points = curvePath.getPoints(20)

  // 开始画水桶肚子
  const mesh1 = createCommonShape({ points, color: '#006ba8' })

  // 开始画水桶肚子和水桶脚中间的分隔板
  const meshFB = createCommonShape({
    points: [
      new THREE.Vector3(-40, 2, 0),
      new THREE.Vector3(40, 2, 0),
      new THREE.Vector3(40, -2, 0),
      new THREE.Vector3(-40, -2, 0),
    ],
    color: '#006ba8',
  })
  meshFB.translateY(-42)

  // 开始画左脚
  const meshF1 = createCommonShape({
    points: [
      new THREE.Vector3(-5, 15, 0),
      new THREE.Vector3(5, 15, 0),
      new THREE.Vector3(5, -15, 0),
      new THREE.Vector3(-5, -15, 0),
    ],
    color: '#006ba8',
  })
  meshF1.translateX(-14)
  meshF1.translateY(-59)

  // 开始画右脚
  const meshF2 = meshF1.clone()
  meshF2.translateX(28)

  // 组合
  var group = new THREE.Group()

  group.add(mesh1, meshFB, meshF1, meshF2)
  group.translateX(-120)
  group.translateY(-20)
  return group
}
