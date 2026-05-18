以上示例参考：https://blog.csdn.net/qq_30100043/category_7003591.html


## 模型

``` js
// 模型居中
geometry.center();

// 模型大小
geomtery.computeBoundingBox()

// 组大小
var box = new THREE.Box3();
//通过传入的object3D对象来返回当前模型的最小大小，值可以是一个mesh也可以是group
box.expandByObject(group);

// 通过一组顶点来获取
box.expandByPoint(vertexs);
```

material.uniformsNeedUpdate


## json
save
``` js
var result = mesh.toJSON();
localStorage.setItem("json", JSON.stringify(result));



var sceneJson = JSON.stringify(scene.toJSON());
localStorage.setItem('scene', sceneJson);

```

load
``` js
var json = localStorage.getItem("json");

if (json) {
    var jsonMesh = JSON.parse(json);
    var loader = new THREE.ObjectLoader();

    loadedMesh = loader.parse(jsonMesh);
    loadedMesh.position.x -= 50;
    scene.add(loadedMesh);
}



var json = localStorage.getItem("scene");

if (json) {
    var jsonSence = JSON.parse(json);
    var loader = new THREE.ObjectLoader();

    scene = loader.parse(jsonSence);
}

```

## 外部文件

OBJ文件定义几何体，而MTL文件定义所用的材质

## 物体前后

renderer.sortObjects = true;  
object.renderOrder  
material1.depthWrite = false;  
material.transparent = false;  
material.alphaTest = 0.1;  
depthWrite  


如果你想要一些物体渲染在“顶部”或“前面”，一个技巧是创建两个场景——第一个场景是你的常规场景，第二个场景包含你想要在顶部的物体。
1. renderer.autoClear = false;
2. var scene = new THREE.Scene();var scene2 = new THREE.Scene();
3. 这将渲染第一个场景，清除深度缓冲，然后渲染顶部的第二个场景
```js
renderer.clear();
renderer.render( scene, camera );
renderer.clearDepth();
renderer.render( scene2, camera );
```