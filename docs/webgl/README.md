# webgl学习

::: tip
float 用 1.0，不要用整数，虽然也可以运行
:::
4

## thebookofshaders 示例
原文链接：[thebookofshaders](https://thebookofshaders.com/?lan=ch)  
thebookofshaders 里面的示例，按章节来，例：03-1  
1. [02-1](https://zhuanwan.github.io/blogs/thebookofshadersexample/02-1.html)
2. [02-2](https://zhuanwan.github.io/blogs/thebookofshadersexample/02-2.html)
3. [03-1](https://zhuanwan.github.io/blogs/thebookofshadersexample/03-1.html)
4. [04-1](https://zhuanwan.github.io/blogs/thebookofshadersexample/04-1.html)
5. [05-1](https://zhuanwan.github.io/blogs/thebookofshadersexample/05-1.html)  
其他示例https://github.com/zhuanwan/blogs/tree/gh-pages/thebookofshadersexample

## 函数
https://colin1994.github.io/2017/11/12/OpenGLES-Lesson05/
### 角度和三角函数
函数参数是以弧度为单位的角度值。以下内置函数是按逐个分量进行操作，但按单个分量操作进行描述。
|  Syntax   | Description  |
|  ----  | ----  |
| genType radians (genType degrees)  | 将角度转换为弧度 |
| genType degrees (genType radians)  | 将弧度转换为角度 |
| genType sin (genType angle)  | 标准三角正弦函数 |
| genType cos (genType angle) | 标准的三角余弦函数 |
| genType tan (genType angle)  | 标准的三角正切 |
| genType asin (genType x)  | 正弦。返回正弦为x的角度。该函数返回的值范围为[-π/2，π/2]。如果∣x∣ > 1则返回undefined |
| genType acos (genType x)  | 反余弦。返回一个余弦为x的角度。这个函数返回的值范围是[0，π] 。如果∣x∣ > 1则返回undefined|
| genType atan (genType y, genType x)  | 弧形切线。返回一个切线为y/x的角度。X和Y的符号用于确定角度所在的象限。该函数返回的值范围为[−π,π]，如果x===y===0 则返回undefined| 
| genType atan (genType y_over_x)  | 弧形切线。返回一个角度，其切线为y_over_x。该函数返回的值范围为[-π/2，π/2] |
### 指数函数
以下内置函数是按逐个分量进行操作，但按单个分量操作进行描述。
|  Syntax   | Description  |
|  ----  | ----  |
| genType pow (genType x, genType y)  | 返回x的y次方。如果x < 0，返回undefined。如果x = 0且y <= 0，返回undefined |
| genType exp (genType x)  | 返回x的自然指数 |
| genType log (genType x)	  | 返回x的自然对数。如果x <= 0，返回undefined |
| genType exp2 (genType x)  | 返回2的x次方 |
| genType log2 (genType x) | 返回以2为底x的对数。如果x <= 0，返回undefined |
| genType sqrt (genType x)  | 返回x的平方根。如果x < 0，返回undefined |
| genType inversesqrt (genType x)  | 返回1/sqrt（x）。结果如果x <= 0，返回undefined |
### 通用函数
以下内置函数是按逐个分量进行操作，但按单个分量操作进行描述。

|  Syntax   | Description  |
|  ----  | ----  |
| genType abs (genType x)  | 返回x的绝对值 |
| genType sign (genType x)  | 如果x > 0返回1.0，如果x = 0返回0.0，如果x < 0返回-1.0 |
| genType floor (genType x)	  | 返回一个值，该值等于小于或等于x的最近整数 |
| genType ceil (genType x)  | 返回一个值，该值等于最近的大于或等于x的整数 |
| genType fract (genType x) | 返回 x – floor (x) |
| genType mod (genType x, float y)  | Modulus (modulo). Returns x – y ∗ floor (x/y) |
| genType min (genType x, genType y)genType min (genType x, float y)  | 返回xy中的最小值 |
| genType max (genType x, genType y) genType max (genType x, float y) | 返回xy中的最大值 |
| genType clamp (genType x,genType minVal, genType maxVal)genType clamp (genType x, float minVal,float maxVal) | 返回 min (max (x, minVal), maxVal)，如果minVal > maxVal 返回undefined |
| genType mix (genType x,genType y,genType a)genType mix (genType x,genType y, float a) | 返回x和y的线性混合:x(1-a)+ya |
| genType step (genType edge, genType x)genType step (float edge, genType x) | if x < edge 返回0.0，否则返回1.0 |
| genType smoothstep (genType edge0,genType edge1,genType x)genType smoothstep (float edge0,float edge1,genType x)| 有些出入，看这个https://zhuanlan.zhihu.com/p/157758600 |

### 几何函数
以下内置函数是按逐个分量进行操作，但按单个分量操作进行描述。
|  Syntax   | Description  |
|  ----  | ----  |
| float length (genType x)  | 返回向量x的长度 |
| float distance (genType p0, genType p1)  | 返回p0和p1之间的距离 |
| float dot (genType x, genType y)  | 返回x和y的点积 |
| vec3 cross (vec3 x, vec3 y)  | 返回x和y的叉乘 |
| genType normalize (genType x)  | 返回与x相同方向的向量，但长度为1 |
| genType faceforward(genType N,genType I,genType Nref)  | If dot(Nref, I) < 0 return N, otherwise return –N |
| genType reflect (genType I, genType N)  | For the incident vector I and surface orientation N,returns the reflection direction: I – 2 ∗ dot(N, I) ∗ N. N must already be normalized in order to achieve the desired result. |
| genType refract(genType I, genType N,float eta)  | For the incident vector I and surface normal N, and the ratio of indices of refraction eta, return the refraction vector. The result is computed by k = 1.0 - eta * eta * (1.0 - dot(N, I) * dot(N, I)); if (k < 0.0) return genType(0.0) else return eta * I - (eta * dot(N, I) + sqrt(k)) * N. The input parameters for the incident vector I and thesurface normal N must already be normalized to get the desired results. |

### 矩阵函数
|  Syntax   | Description  |
|  ----  | ----  |
| mat matrixCompMult (mat x, mat y)  | Multiply matrix x by matrix y component-wise, i.e.,result[i][j] is the scalar product of x[i][j] and y[i][j]. Note: to get linear algebraic matrix multiplication, usethe multiply operator (*). |


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

## 纹理坐标、webgl坐标
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


### 其他工具
https://desmos.s3.amazonaws.com/Desmos_User_Guide_ZH-CN.pdf
