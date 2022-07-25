# webgl学习

::: tip
float 用 1.0，不要用整数，虽然也可以运行
:::


## thebookofshaders 示例
原文链接：[thebookofshaders](https://thebookofshaders.com/?lan=ch)  
thebookofshaders 里面的示例，按章节来，例：shaders-03-1  
1. [shaders-02-1](https://zhuanwan.github.io/blogs/thebookofshadersexample/shaders-02-1.html)
2. [shaders-02-2](https://zhuanwan.github.io/blogs/thebookofshadersexample/shaders-02-2.html)


## webgl 图元类型
 * gl.POINTS(点)
 * gl.LINES(线段)
 * gl.LINE_STRIP(线条)
 * gl.LINE_LOOP(回路)
 * gl.TRIANGLES(三角形)
 * gl.TRIANGLE_STRIP(三角带)
 * gl.TRIANGLE_FAN(三角扇)

1. gl.TRIANGLES：用来绘制相互独立的三角形。从缓冲区中每次获取3个顶点的数据作为一个三角形。
2. gl.TRIANGLE_STRIP：用来绘制有共享边的三角形。从第二个三角形开始，每次读取一个顶点，并利用前面的末尾两个顶点构成一个三角形，以此类推。
3. gl.TRIANGLES_FAN：同样用来绘制有共享边的三角形。从第二个三角形开始，每次读取一个顶点，并利用首个顶点和之前最后一个顶点来构成一个三角形，以此类推。

## 向量

### 向量的点乘
a、b 向量点积的几何含义，是 a 向量乘以 b 向量在 a 向量上的投影分量 
``` js
|a • b| = |a||b|*cos(x°) 
```
1、垂直 a.x * b.x + a.y * b.y === 0 
2、平行 a.x * b.x + a.y * b.y === a.length * b.length 

### 向量的叉乘
``` js
|a X b| = |a||b|*sin(x°) 
```
x1*y2 - x2 * y1
