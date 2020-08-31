# requestIdleCallback

[转](http://www.zhangyunling.com/702.html)
``` bash
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      .show-info {
        font-size: 14px;
        line-height: 2;
      }
      .btn-default {
        display: inline-block;
        padding: 6px 12px;
        margin-bottom: 0;
        font-size: 14px;
        font-weight: 400;
        line-height: 1.42857143;
        text-align: center;
        white-space: nowrap;
        vertical-align: middle;
        -ms-touch-action: manipulation;
        touch-action: manipulation;
        cursor: pointer;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        background-image: none;
        border: 1px solid transparent;
        border-radius: 4px;
        color: #333;
        background-color: #fff;
        border-color: #ccc;
        margin-bottom: 10px;
      }
      .btn-default:hover {
        background-color: #ededed;
      }

      .c-f00 {
        color: #f00;
      }
    </style>
  </head>

  <body>
    <div class="m10">
      <h1>requestIdleCallback测试(timeout=100)</h1>
      <div class="blank-area">
        <p>rIC的复杂回调与复杂回调的优化</p>
        <div>
          <a id="btn1" class="btn-default" href="javascript:;">rIC复杂回调</a>
          <a id="btn2" class="btn-default" href="javascript:;"
            >rIC复杂回调(分段回调)</a
          >
        </div>
        <p id="info" class="show-info"></p>
      </div>
    </div>

    <script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.js"></script>
    <script>
      var requestId = 0,
        info = $("#info"),
        html = "",
        secs = 0;

      if (!("requestIdleCallback" in window)) {
        info.html(
          "您的浏览器还不支持requestIdleCallback方法哦，建议使用chrome浏览器尝试~"
        );
      }

      var rAF = (function () {
        return (
          window.requestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          function (callback) {
            window.setTimeout(callback, 1000 / 60);
          }
        );
      })();

      function add(t, className) {
        info.append(
          '<span class = "' + (className || "") + '">' + t + "</span><br/>"
        );
      }

      function rIC(cb) {
        requestId = requestIdleCallback(cb);
      }

      function cb1(deadline) {
        var i = 0,
          len = 10000,
          secs = new Date().getTime();

        add("rIC回调中，执行了一个" + len + "长度的循环");
        for (i; i < len; i++) {
          if ((i * 10) % len == 0) {
            add("rIC 回调中，第" + i + "次循环", "c-f00");
          }
          console.log("i=" + i);
        }
        add("rIC消耗时间=" + (new Date().getTime() - secs), "c-f00");
      }

      function _cb1() {
        var i = 0,
          len = 5;

        info.html("");

        function _s() {
          if (i < len) {
            add("rAF 循环次数 i=" + i);
            rAF(_s);
            i++;
          }
        }

        rIC(cb1);

        rAF(_s);
      }
      $("#btn1").on("click", _cb1);

      function cb2(deadline) {
        var i = 0,
          len = 1000,
          secs = new Date().getTime();

        add("rIC回调中，执行了一个" + len + "长度的循环");
        function _s(deadline) {
          //表示该帧还有剩余时间
          for (i; i < len; i++) {
            if (deadline.timeRemaining() > 0) {
              console.log("i=" + i);

              if ((i * 10) % len == 0) {
                add("rIC 回调中，第" + i + "次循环", "c-f00");
              }
            } else {
              rIC(_s);
              break;
            }
          }
        }

        _s(deadline);
      }
      function _cb2() {
        var i = 0,
          len = 5;

        info.html("");

        function _s() {
          if (i < len) {
            add("rAF 循环次数 i=" + i);
            rAF(_s);
            i++;
          }
        }

        rIC(cb2);

        rAF(_s);
      }
      $("#btn2").on("click", _cb2);
    </script>
  </body>
</html>

```