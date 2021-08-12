# typescript

1. Exclude<T, U>，T有，U没有

``` tsx
type ResT = Exclude<"a"|"b"|"c", "c"|"d">
// ResT = "a"|"b"
```

2. Extract<T, U>，T、U交集

``` tsx
type ResT = Extract<"a"|"b"|"c", "c"|"d">
// ResT = "c"
```

3. Pick<T, K>，从T中取出K

``` tsx
ExampleTyle = {
  lable: string
  id: string
}
const ResT = Pick<ExampleTyle, 'lable'>
// ResT = {label: string}
```

4. Omit<T, K>，从T中去除K

``` tsx
ExampleTyle = {
  id: string
  lable: string
  name: string
}
const ResT = Omit<ExampleTyle, 'lable'>
// ResT = {
//   id: string
//   name: string
// }
```

