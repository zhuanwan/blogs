# Vue使用中遇到的一些问题

form表单提交，提交成功返回前一页，经常提交了页面却刷新不返还
原来是form表单有提交刷新功能，禁用掉
``` bash
@submit=handleSubmit
handleSubmit(e) {
  e.preventDefault()
}

或者 @submit.prevent=handleSubmit
```
