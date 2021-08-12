# Vue组件样式修改

``` style
<style lang="less" scoped>
.manual-box .ant-input {
  border: 1px solid red;
}
</style>
```

::: tip
用scoped
编译成
.manual-box .ant-input[data-v-7bc57017] {
    border: 1px solid red;
}
:::

``` style
<style lang="less" scoped>
.manual-box /deep/ .ant-input {
  border: 1px solid red;
}
</style>
```

::: tip
scoped给每个组件加data-v-7bc57017  
给每个css 加 【data-v-7bc57017】  
如果子组件修改，用scoped穿透 /deep/  
编译成  
.manual-box[data-v-7bc57017] .ant-input {
    border: 1px solid red;
}
:::