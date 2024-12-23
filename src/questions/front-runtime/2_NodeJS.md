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

## 3. Nodejs的内存泄漏排查方法有哪些？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（3 分）

Node.js的内存泄漏排查方法有以下几种：

- 使用Node.js自带的内存分析工具，如`process.memoryUsage()`和`heapdump`模块。

- 使用第三方内存分析工具，如Chrome DevTools、VisualVM等。

- 使用内存泄漏检测工具，如`leak`、`memwatch`等。

- 使用代码审查和静态分析工具，如ESLint、JSHint等。

- 使用单元测试和集成测试，确保代码的正确性和稳定性。

## 4. Nodejs的进程管理有哪些方法？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（3 分）

Node.js的进程管理有以下几种方法：

- 使用`child_process`模块创建子进程，并使用`process`模块进行进程间通信。

- 使用`cluster`模块创建集群，利用多核CPU资源。

- 使用`pm2`等第三方进程管理工具，如自动重启、负载均衡、日志管理等功能。

- 使用`forever`等第三方工具，如自动重启、日志管理等功能。

- 使用`node-mac`等第三方工具，如自动重启、日志管理等功能。

## 5. Nodejs的模块化有哪些方法？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（3 分）

Node.js的模块化有以下几种方法：

- CommonJS模块化：使用`require`和`module.exports`进行模块导入和导出。

- ES6模块化：使用`import`和`export`进行模块导入和导出。

- AMD模块化：使用`define`和`require`进行模块导入和导出。

- UMD模块化：兼容CommonJS和AMD模块化。

- 全局变量：将变量挂载到`global`对象上，方便全局访问。

- 命名空间：将变量挂载到命名空间对象上，避免全局变量污染。

- 模块打包：使用Webpack、Rollup等工具将模块打包成一个文件，方便部署和分发。