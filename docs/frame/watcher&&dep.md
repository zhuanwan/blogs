# watcher&&dep

``` bash
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body></body>
  <script>
    class Watcher {
      newDepIds = []
      newDeps = []
      depIds = []
      constructor(fn, cb) {
        Dep.target = this
        fn()
        this.cb = cb
      }
      addDep (dep) {
        const id = dep.id
        if (!this.newDepIds.includes(id)) {
          this.newDepIds.push(id)
          this.newDeps.push(dep)
          if (!this.depIds.includes(id)) {
            dep.addSub(this)
          }
        }
      }
      update () {
        this.cb()
      }
    }

    class Dep {
      static target = null;
      id = 0;
      subs = [];

      constructor() {
        this.id = 1;
        this.subs = [];
      }

      addSub(sub) {
        this.subs.push(sub);
      }

      removeSub(sub) {
        remove(this.subs, sub);
      }

      depend() {
        if (Dep.target) {
          Dep.target.addDep(this);
        }
      }

      notify() {
        const subs = this.subs.slice();
        for (let i = 0, l = subs.length; i < l; i++) {
          subs[i].update();
        }
      }
    }

    function defineReactive(obj, key, val) {
      const dep = new Dep();
      Object.defineProperty(obj, key, {
        enumerable: true,
        configurable: true,
        get: function reactiveGetter() {
          if (Dep.target) {
            dep.depend();
          }
          return val;
        },
        set: function reactiveSetter(newVal) {
          val = newVal;
          dep.notify();
        },
      });
    }

    
    
    const o = {
      a: 1
    }
    defineReactive(o, 'a', 1)

    new Watcher(() => {
      return o.a
    }, function() {
      console.log(11111111)
    })

    o.a = 2
  </script>
</html>

```

new Watcher -> Dep.targer赋值 data.getter -> dep.depend -> dep添加watcher实例

data.setter -> dep.notify() -> watcher update