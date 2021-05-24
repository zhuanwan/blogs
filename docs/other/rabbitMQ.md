# rabbitMQ

1. 开启服务： sudo rabbitmq-server
2. 关闭服务： sudo rabbitmqctl stop
3. 查看状态： sudo rabbitmqctl status

开启后在浏览器打开 http://localhost:15672/#/
初始用户、密码都是 guest

## send.js

``` bash
var amqp = require('amqplib/callback_api');

  amqp.connect('amqp://localhost', function (error0, connection) {
    if (error0) {
      throw error0;
    }
    connection.createChannel(function (error1, ch) {
      if (error1) {
        throw error1;
      }

      var q = 'task_test';
      var msg = process.argv.slice(2).join(' ') || "Hello World!";

      ch.assertQueue(q, { durable: true });
      ch.sendToQueue(q, Buffer.from(msg), { persistent: true });
      console.log(" [x] Sent '%s'", msg);

    });
    setTimeout(function () {
      connection.close();
      process.exit(0);
    }, 500);
});
```

## receive.js

``` bash
var amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', function (error0, connection) {
  if (error0) {
    throw error0;
  }
  connection.createch(function (error1, ch) {
    if (error1) {
      throw error1;
    }

    var queue = 'task_test';

    ch.assertQueue(queue, {
      durable: true
    });
    ch.prefetch(1);  // 每次只接收一个，处理完了才再次接收
    console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queue);

    ch.consume(queue, function (msg) {
      var secs = msg.content.toString().split('.').length - 1;

      console.log(" [x] Received %s", msg.content.toString());
      setTimeout(function () {
        console.log(" [x] Done");
        ch.ack(msg); // 消息确认
      }, secs * 1000);

    }, {
        noAck: false  // 开启消息确认标识
    });
  });

});
```

# redis

redis-server
