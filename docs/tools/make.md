# make

## 错误：*** missing separator.  Stop.

方法一 用tab键
``` bash
result.txt: source.txt
	cp source.txt result.txt  # 这里前面用tab键

source.txt:
	echo "this is the source" > source.txt   # 这里前面用tab键
```
方法二 tab键改成>（.RECIPEPREFIX要在>3.82版本的make上才支持，本机3.81，暂未试）
``` bash
.RECIPEPREFIX = >
all:
> @echo Hello, world
```