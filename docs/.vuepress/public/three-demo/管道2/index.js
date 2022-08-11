import {
  createBg,
  createTube,
  createTube2,
  createZLJ,
  createSX,
} from './mesh.js'
var stats = initStats()
let renderer, renderer2, camera, scene, scene2
init()

const bg = createBg()
const { tubeMesh, tubeTexture } = createTube()
const { tubeMesh: tubeMesh2, tubeTexture: tubeTexture2 } = createTube2()
const meshZLJ = createZLJ()
const meshSX = createSX()
var group = new THREE.Group()

group.add(bg, tubeMesh, tubeMesh2, meshZLJ, meshSX)


scene.add(group)

renderer.clear()
renderer.render(scene, camera)
renderer2.render(scene2, camera)

function animation() {
  tubeTexture.offset.x -= 0.03
  tubeTexture2.offset.x -= 0.01
  renderer.render(scene, camera)
  requestAnimationFrame(animation)

  stats.update()
}

animation()

function initStats() {
  var stats = new Stats()
  stats.domElement.style.position = 'absolute'
  stats.domElement.style.left = '0px'
  stats.domElement.style.top = '0px'
  document.getElementById('canvas-frame').appendChild(stats.domElement)
  return stats
}

function init() {
  var width = window.innerWidth // 窗口宽度
  var height = window.innerHeight // 窗口高度

  // 渲染器
  renderer = new THREE.WebGLRenderer({
    antialias: true, // 消除锯齿
  })
  const scale = 1.78
  const m = width / height
  let newWidth = 0
  let newHeight = 0
  if (m >= scale) {
    newHeight = height
    newWidth = height * scale
  } else {
    newWidth = width
    newHeight = width / scale
  }

  let top = height > newHeight ? (height - newHeight) / 2 : 0
  let left = width > newWidth ? (width - newWidth) / 2 : 0

  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(newWidth, newHeight)
  renderer.setClearColor(0x000000, 1) //设置背景颜色
  renderer.domElement.style.position = 'absolute'
  renderer.domElement.style.top = top + 'px'
  renderer.domElement.style.left = left + 'px'
  renderer.domElement.style.backgroundColor = '#ff0000'
  document.body.appendChild(renderer.domElement)

  renderer2 = new THREE.CSS3DRenderer()
  renderer2.setSize(newWidth, newHeight)
  renderer2.domElement.style.position = 'absolute'
  renderer2.domElement.style.top = top + 'px'
  renderer2.domElement.style.left = left + 'px'
  document.body.appendChild(renderer2.domElement)

  // 相机
  var k = scale //窗口宽高比
  var s = 200 //三维场景显示范围控制系数，系数越大，显示的范围越大
  camera = new THREE.OrthographicCamera(-s * k, s * k, s, -s, 1, 1000)
  camera.position.set(0, 0, 100) //设置相机位置
  // camera.lookAt(0, 0, 1) //设置相机方向

  scene = new THREE.Scene()
  scene2 = new THREE.Scene()

  // 支持鼠标左中右键操作和键盘方向键操作
  var controls = new THREE.OrbitControls(camera, renderer.domElement)
  controls.addEventListener('change', () => {
    renderer.render(scene, camera)
  })

  // 辅助坐标系  参数250表示坐标系大小，可以根据场景大小去设置
  var axesHelper = new THREE.AxesHelper(250)
  scene.add(axesHelper)

  // 光照
  var ambient = new THREE.AmbientLight(0xffffff) //环境光
  scene.add(ambient)

  window.addEventListener('resize', onWindowResize, false)
}

function onWindowResize() {
  const width = window.innerWidth // 窗口宽度
  const height = window.innerHeight // 窗口高度

  const scale = 1.78

  const m = width / height
  let newWidth = 0
  let newHeight = 0
  if (m >= scale) {
    newHeight = height
    newWidth = height * scale
  } else {
    newWidth = width
    newHeight = width / scale
  }

  let top = height > newHeight ? (height - newHeight) / 2 : 0
  let left = width > newWidth ? (width - newWidth) / 2 : 0

  renderer.domElement.style.top = top + 'px'
  renderer.domElement.style.left = left + 'px'
  renderer2.domElement.style.top = top + 'px'
  renderer2.domElement.style.left = left + 'px'

  // update the camera
  var k = scale //窗口宽高比
  var s = 200 //三维场景显示范围控制系数，系数越大，显示的范围越大

  camera.left = -s * k
  camera.right = s * k
  camera.top = s
  camera.bottom = -s

  camera.updateProjectionMatrix()
  renderer.setSize(newWidth, newHeight)
  renderer2.setSize(newWidth, newHeight)
}

function getScaleSize() {
  const domElement = renderer.domElement
  const { width, height } = domElement
  console.log(444, width, height)
  return { x: 1, y: 1, z: 0 }
}
