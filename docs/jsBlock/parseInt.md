# parseInt

parseInt(string, radix)   解析一个字符串并返回指定基数的十进制整数， radix 是2-36之间的整数，表示被解析字符串的基数。

``` bash 
["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16"].map(parseInt)
// [1, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, 9, 11, 13, 15, 17, 19, 21]
```

parseInt('1', 0) = 1      // 第二个参数是0，默认十进制
parseInt('2', 1) = NaN    // 第二个参数不在2-36内
parseInt('3', 2) = NaN    // 3 > 2, 不能进制
parseInt('4', 3) = NaN    // 4不能3进制
parseInt('5', 4) = NaN    // 5不能4进制
parseInt('6', 5) = NaN    // 6不能5进制
parseInt('7', 6) = NaN    // 7不能6进制
parseInt('8', 7) = NaN    // 8不能7进制
parseInt('9', 8) = NaN    // 9不能8进制
parseInt('10', 9) = 9     // 0*1 + 1*9
parseInt('11', 10) = 11   // 1*1 + 1*10
parseInt('12', 11) = 13   // 2*1 + 1*11
parseInt('13', 12) = 15   // 3*1 + 1*12
parseInt('14', 13) = 17   // 4*1 + 1*13
parseInt('15', 14) = 19   // 5*1 + 1*14
parseInt('16', 15) = 21   // 6*1 + 1*15



parseInt('28', 6) = 2

总结，第一个参数单个字符 要小于 第二个参数(进制) 才能继续解析，否则只解析能解析的并返回