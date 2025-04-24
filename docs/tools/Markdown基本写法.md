# Markdown 基本写法

[转载](https://www.jianshu.com/p/191d1e21f7ed)

## 标题

```bash
# 这是一级标题
## 这是二级标题
### 这是三级标题
#### 这是四级标题
##### 这是五级标题
###### 这是六级标题
```

# 这是一级标题

## 这是二级标题

### 这是三级标题

#### 这是四级标题

##### 这是五级标题

###### 这是六级标题

## 字体

```bash
**这是加粗的文字**
*这是倾斜的文字*`
***这是斜体加粗的文字***
~~这是加删除线的文字~~
```

- **这是加粗的文字**
- _这是倾斜的文字_`
- **_这是斜体加粗的文字_**
- ~~这是加删除线的文字~~

## 图片

```bash
![图片alt](/ya.jpg "图片title")
```

![图片alt](/ya.jpg "图片title")

## 超链接

```bash
[超链接名](超链接地址 "超链接title")
title可加可不加
```

## 列表

无序列表用 - + \* 任何一种都可以，有序列表数字加点

- 无序 1
- 无序 2
- 无序 3
- 无序 4

1. 有序 1
2. 有序 2
3. 有序 3
4. 有序 4

## 表格

```bash
表头|表头|表头
---|:--:|---:
内容|内容|内容
内容|内容|内容

第二行分割表头和内容。
- 有一个就行，为了对齐，多加了几个
文字默认居左
-两边加：表示文字居中
-右边加：表示文字居右
注：原生的语法两边都要用 | 包起来。此处省略
```

## VUE 组件
### Badge组件
- VuePress - <Badge type="tip" text="v2" vertical="top" />
- VuePress - <Badge type="warning" text="v2" vertical="middle" />
- VuePress - <Badge type="danger" text="v2" vertical="bottom" />
- VuePress - <Badge type="important" text="v2" vertical="middle" />
- VuePress - <Badge type="info" text="v2" vertical="middle" />
- VuePress - <Badge type="note" text="v2" vertical="middle" />
  
### 提示
::: tip
这是一个提示
:::

::: warning
这是一个警告
:::

::: danger
这是一个危险警告
:::

::: info
这是一个信息
:::

::: important
这是一个重要信息
:::

::: note
这是一个备注
:::

::: details
这是一个 details 标签
:::

### 代码选项卡
::: code-tabs

@tab JavaScript

```js
const name = 'VuePress'
console.log(`你好，${name}！`)
```

@tab TypeScript

```ts
const name: string = 'VuePress'

console.log(`你好，${name}！`)
```

:::

### 选项卡
::: tabs

@tab 选项卡 1

这是选项卡 1 的内容。

```js
console.log('你好，VuePress!')
```

@tab 选项卡 2

这是选项卡 2 的内容。

- 列表项 1
- 列表项 2
- 列表项 3

:::