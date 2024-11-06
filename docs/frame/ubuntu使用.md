# ubuntu使用

## vscode使用权限问题
不能保存、不能运行

### 把文件夹的权限降低
```js
  sudo chmod 777 node-demo
```
权限
* 7 表示读、写、执行权限。
* 5 表示读和执行权限。
* 0 表示没有权限。
所有者
* root 拥有读、写、执行权限。
* 群组用户拥有读和执行权限。
* 其他用户拥有读和执行权限。

### terminal选择WSL
1. ctrl + shifit + p
2. 在弹出的菜单中选择 "Select Default Shell"。
3. 选择 "WSL Bash" 作为默认终端。
