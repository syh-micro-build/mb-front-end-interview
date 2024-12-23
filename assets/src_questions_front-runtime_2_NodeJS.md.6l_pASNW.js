import{_ as o,c as a,a0 as d,o as c}from"./chunks/framework.HNGcFqhl.js";const u=JSON.parse('{"title":"Node","description":"","frontmatter":{},"headers":[],"relativePath":"src/questions/front-runtime/2_NodeJS.md","filePath":"src/questions/front-runtime/2_NodeJS.md","lastUpdated":1734922754000}'),l={name:"src/questions/front-runtime/2_NodeJS.md"};function i(r,e,t,s,h,n){return c(),a("div",null,e[0]||(e[0]=[d('<h1 id="node" tabindex="-1">Node <a class="header-anchor" href="#node" aria-label="Permalink to &quot;Node&quot;">​</a></h1><h2 id="_1-nodejs适用于哪些场景" tabindex="-1">1. Nodejs适用于哪些场景？ <a class="header-anchor" href="#_1-nodejs适用于哪些场景" aria-label="Permalink to &quot;1. Nodejs适用于哪些场景？&quot;">​</a></h2><h4 id="类型-基础" tabindex="-1">类型：<code>基础</code> <a class="header-anchor" href="#类型-基础" aria-label="Permalink to &quot;类型：`基础`&quot;">​</a></h4><h4 id="级别-w1、w2、w3、w4、w5、w6" tabindex="-1">级别：<code>W1</code>、<code>W2</code>、<code>W3</code>、<code>W4</code>、<code>W5</code>、<code>W6</code> <a class="header-anchor" href="#级别-w1、w2、w3、w4、w5、w6" aria-label="Permalink to &quot;级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`&quot;">​</a></h4><h4 id="解答-3-分" tabindex="-1">解答（3 分） <a class="header-anchor" href="#解答-3-分" aria-label="Permalink to &quot;解答（3 分）&quot;">​</a></h4><ul><li><p>T后端开发，Nodejs的异步I/O天生适合做Web高并发。</p></li><li><p>BFF开发，比如SSR中间层或者GraphQL中间层。</p></li><li><p>前端基建，Webpack、Gulp、Babel、Jest等等前端工程化的工具或插件。</p></li></ul><h2 id="_2-nodejs的事件循环和浏览器有什么区别" tabindex="-1">2. Nodejs的事件循环和浏览器有什么区别？ <a class="header-anchor" href="#_2-nodejs的事件循环和浏览器有什么区别" aria-label="Permalink to &quot;2. Nodejs的事件循环和浏览器有什么区别？&quot;">​</a></h2><h4 id="类型-基础-1" tabindex="-1">类型：<code>基础</code> <a class="header-anchor" href="#类型-基础-1" aria-label="Permalink to &quot;类型：`基础`&quot;">​</a></h4><h4 id="级别-w1、w2、w3、w4、w5、w6-1" tabindex="-1">级别：<code>W1</code>、<code>W2</code>、<code>W3</code>、<code>W4</code>、<code>W5</code>、<code>W6</code> <a class="header-anchor" href="#级别-w1、w2、w3、w4、w5、w6-1" aria-label="Permalink to &quot;级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`&quot;">​</a></h4><h4 id="解答-3-分-1" tabindex="-1">解答（3 分） <a class="header-anchor" href="#解答-3-分-1" aria-label="Permalink to &quot;解答（3 分）&quot;">​</a></h4><p>Node.js 的事件循环和浏览器中的事件循环的区别在于，浏览器的异步任务分为宏任务队列和微任务队列，而Nodejs的异步任务分成了6个任务队列，按执行顺序分别为：</p><ul><li><p>timers阶段：处理setTimeout()和setInterval()等定时器事件。</p></li><li><p>I/O callbacks阶段：处理几乎所有的异步I/O回调，例如网络I/O、文件I/O等。</p></li><li><p>idle, prepare阶段：这是Node.js内部使用的，开发者很少会用到。</p></li><li><p>poll阶段：轮询阶段，用于等待新的I/O事件，执行I/O回调。</p></li><li><p>check阶段：执行setImmediate()的回调函数。</p></li><li><p>close callbacks阶段：执行关闭事件的回调函数，例如socket.on(&#39;close&#39;)。</p></li></ul><h2 id="_3-nodejs的内存泄漏排查方法有哪些" tabindex="-1">3. Nodejs的内存泄漏排查方法有哪些？ <a class="header-anchor" href="#_3-nodejs的内存泄漏排查方法有哪些" aria-label="Permalink to &quot;3. Nodejs的内存泄漏排查方法有哪些？&quot;">​</a></h2><h4 id="类型-基础-2" tabindex="-1">类型：<code>基础</code> <a class="header-anchor" href="#类型-基础-2" aria-label="Permalink to &quot;类型：`基础`&quot;">​</a></h4><h4 id="级别-w1、w2、w3、w4、w5、w6-2" tabindex="-1">级别：<code>W1</code>、<code>W2</code>、<code>W3</code>、<code>W4</code>、<code>W5</code>、<code>W6</code> <a class="header-anchor" href="#级别-w1、w2、w3、w4、w5、w6-2" aria-label="Permalink to &quot;级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`&quot;">​</a></h4><h4 id="解答-3-分-2" tabindex="-1">解答（3 分） <a class="header-anchor" href="#解答-3-分-2" aria-label="Permalink to &quot;解答（3 分）&quot;">​</a></h4><p>Node.js的内存泄漏排查方法有以下几种：</p><ul><li><p>使用Node.js自带的内存分析工具，如<code>process.memoryUsage()</code>和<code>heapdump</code>模块。</p></li><li><p>使用第三方内存分析工具，如Chrome DevTools、VisualVM等。</p></li><li><p>使用内存泄漏检测工具，如<code>leak</code>、<code>memwatch</code>等。</p></li><li><p>使用代码审查和静态分析工具，如ESLint、JSHint等。</p></li><li><p>使用单元测试和集成测试，确保代码的正确性和稳定性。</p></li></ul><h2 id="_4-nodejs的进程管理有哪些方法" tabindex="-1">4. Nodejs的进程管理有哪些方法？ <a class="header-anchor" href="#_4-nodejs的进程管理有哪些方法" aria-label="Permalink to &quot;4. Nodejs的进程管理有哪些方法？&quot;">​</a></h2><h4 id="类型-基础-3" tabindex="-1">类型：<code>基础</code> <a class="header-anchor" href="#类型-基础-3" aria-label="Permalink to &quot;类型：`基础`&quot;">​</a></h4><h4 id="级别-w1、w2、w3、w4、w5、w6-3" tabindex="-1">级别：<code>W1</code>、<code>W2</code>、<code>W3</code>、<code>W4</code>、<code>W5</code>、<code>W6</code> <a class="header-anchor" href="#级别-w1、w2、w3、w4、w5、w6-3" aria-label="Permalink to &quot;级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`&quot;">​</a></h4><h4 id="解答-3-分-3" tabindex="-1">解答（3 分） <a class="header-anchor" href="#解答-3-分-3" aria-label="Permalink to &quot;解答（3 分）&quot;">​</a></h4><p>Node.js的进程管理有以下几种方法：</p><ul><li><p>使用<code>child_process</code>模块创建子进程，并使用<code>process</code>模块进行进程间通信。</p></li><li><p>使用<code>cluster</code>模块创建集群，利用多核CPU资源。</p></li><li><p>使用<code>pm2</code>等第三方进程管理工具，如自动重启、负载均衡、日志管理等功能。</p></li><li><p>使用<code>forever</code>等第三方工具，如自动重启、日志管理等功能。</p></li><li><p>使用<code>node-mac</code>等第三方工具，如自动重启、日志管理等功能。</p></li></ul><h2 id="_5-nodejs的模块化有哪些方法" tabindex="-1">5. Nodejs的模块化有哪些方法？ <a class="header-anchor" href="#_5-nodejs的模块化有哪些方法" aria-label="Permalink to &quot;5. Nodejs的模块化有哪些方法？&quot;">​</a></h2><h4 id="类型-基础-4" tabindex="-1">类型：<code>基础</code> <a class="header-anchor" href="#类型-基础-4" aria-label="Permalink to &quot;类型：`基础`&quot;">​</a></h4><h4 id="级别-w1、w2、w3、w4、w5、w6-4" tabindex="-1">级别：<code>W1</code>、<code>W2</code>、<code>W3</code>、<code>W4</code>、<code>W5</code>、<code>W6</code> <a class="header-anchor" href="#级别-w1、w2、w3、w4、w5、w6-4" aria-label="Permalink to &quot;级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`&quot;">​</a></h4><h4 id="解答-3-分-4" tabindex="-1">解答（3 分） <a class="header-anchor" href="#解答-3-分-4" aria-label="Permalink to &quot;解答（3 分）&quot;">​</a></h4><p>Node.js的模块化有以下几种方法：</p><ul><li><p>CommonJS模块化：使用<code>require</code>和<code>module.exports</code>进行模块导入和导出。</p></li><li><p>ES6模块化：使用<code>import</code>和<code>export</code>进行模块导入和导出。</p></li><li><p>AMD模块化：使用<code>define</code>和<code>require</code>进行模块导入和导出。</p></li><li><p>UMD模块化：兼容CommonJS和AMD模块化。</p></li><li><p>全局变量：将变量挂载到<code>global</code>对象上，方便全局访问。</p></li><li><p>命名空间：将变量挂载到命名空间对象上，避免全局变量污染。</p></li><li><p>模块打包：使用Webpack、Rollup等工具将模块打包成一个文件，方便部署和分发。</p></li></ul>',30)]))}const W=o(l,[["render",i]]);export{u as __pageData,W as default};
