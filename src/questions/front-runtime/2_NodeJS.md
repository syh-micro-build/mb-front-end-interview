# Node

## 1. Nodejs适用于哪些场景？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（3 分）

- T后端开发，Nodejs的异步I/O天生适合做Web高并发。

- BFF开发，比如SSR中间层或者GraphQL中间层。

- 前端基建，Webpack、Gulp、Babel、Jest等等前端工程化的工具或插件。

## 2. Nodejs的事件循环和浏览器有什么区别？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（3 分）

Node.js 的事件循环和浏览器中的事件循环的区别在于，浏览器的异步任务分为宏任务队列和微任务队列，而Nodejs的异步任务分成了6个任务队列，按执行顺序分别为：

- timers阶段：处理setTimeout()和setInterval()等定时器事件。

- I/O callbacks阶段：处理几乎所有的异步I/O回调，例如网络I/O、文件I/O等。

- idle, prepare阶段：这是Node.js内部使用的，开发者很少会用到。

- poll阶段：轮询阶段，用于等待新的I/O事件，执行I/O回调。

- check阶段：执行setImmediate()的回调函数。

- close callbacks阶段：执行关闭事件的回调函数，例如socket.on('close')。
