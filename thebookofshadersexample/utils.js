//声明初始化着色器函数
function initShader(gl, vertexShaderSource, fragmentShaderSource) {
  //创建顶点着色器对象
  var vertexShader = gl.createShader(gl.VERTEX_SHADER)
  //创建片元着色器对象
  var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER)
  //引入顶点、片元着色器源代码
  gl.shaderSource(vertexShader, vertexShaderSource)
  gl.shaderSource(fragmentShader, fragmentShaderSource)
  //编译顶点、片元着色器
  gl.compileShader(vertexShader)
  gl.compileShader(fragmentShader)

  //创建程序对象program
  var program = gl.createProgram()
  //附着顶点着色器和片元着色器到program
  gl.attachShader(program, vertexShader)
  gl.attachShader(program, fragmentShader)
  //链接program
  gl.linkProgram(program)
  //使用program
  gl.useProgram(program)
  //返回程序program对象
  return program
}

function initArrayBuffer(gl, attribute, data, num) {
  // Create a buffer object
  var buffer = gl.createBuffer()
  if (!buffer) {
    console.log('Failed to create the buffer object')
    return false
  }
  // Write date into the buffer object
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
  gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW)
  // Assign the buffer object to the attribute variable
  var a_attribute = gl.getAttribLocation(gl.program, attribute)
  if (a_attribute < 0) {
    console.log('Failed to get the storage location of ' + attribute)
    return false
  }
  gl.vertexAttribPointer(a_attribute, num, gl.FLOAT, false, 0, 0)
  // Enable the assignment of the buffer object to the attribute variable
  gl.enableVertexAttribArray(a_attribute)

  return true
}

// 先封装一个生成多边形顶点坐标数组的函数
function createCircleVertex(x, y, r, n) {
  const sin = Math.sin
  const cos = Math.cos
  const perAngel = (2 * Math.PI) / n
  const positionArray = []
  for (let i = 0; i < n; i++) {
    const angel = i * perAngel
    const nx = x + r * cos(angel)
    const ny = y + r * sin(angel)
    positionArray.push(nx, ny)
  }
  return new Float32Array(positionArray)
}
// 封装一个生成正多角星顶点的数组函数
function create2CircleVertex(x, y, r, R, n) {
  const sin = Math.sin
  const cos = Math.cos
  const perAngel = Math.PI / n
  const positionArray = []
  for (let i = 0; i < 2 * n; i++) {
    const angel = i * perAngel
    if (i % 2 !== 0) {
      const Rx = x + R * cos(angel)
      const Ry = y + R * sin(angel)
      positionArray.push(Rx, Ry)
    } else {
      const rx = x + r * cos(angel)
      const ry = y + r * sin(angel)
      positionArray.push(rx, ry)
    }
  }
  return new Float32Array(positionArray)
}
