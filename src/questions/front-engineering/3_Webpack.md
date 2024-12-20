# webpack

## webpack 的热更新是什么?

#### 类型：`架构`

#### 级别：`W3`、`W4`、`W5`、`W6`

#### 解答（2 分）

- **1：** Hot Module Replacement 简称 HRM
- **1：** 模块热替换，指在应用程序运行过程中，替换、添加、删除模块，而无需重新刷新整个应用

## webpack 中如何配置开启热更新？

#### 类型：`架构`

#### 级别：`W3`、`W4`、`W5`、`W6`

#### 解答（2 分）

- **2：**

```javascript
const webpack = require("webpack");
module.exports = {
  // ...
  devServer: {
    // HMR
    hot: true,
    // hotOnly: true
  },
};
```

## webpack 的热更新原理?

#### 类型：`架构`

#### 级别：`W3`、`W4`、`W5`、`W6`

#### 解答（4 分）

- **1：** 在编写未经过 webpack 打包的源代码后，Webpack Compile 将源代码和 HMR Runtime 一起编译成 bundle 文件，传输给 Bundle Server 静态资源服务器，
- **1：** 当某一个文件或者模块发生变化时，webpack 监听到文件变化对文件重新编译打包，编译生成唯一的hash 值，这个 hash 值用来作为下一次热更新的标识根据变化的内容生成两个补丁文件: manifest (包含了 hash 和 chundId ，用来说明变化的内容)和 chunk.js 模块。
- **1：** 由于 socket 服务器在 HMR Runtime 和 HMR Server 之间建立 websocket 链接，当文件发生改动的时候，服务端会向浏览器推送一条消息，消息包含文件改动后生成的 hash 值，如下图的h 属性，作为下一次热更细的标识
- **1：** 在浏览器接受到这条消息之前，浏览器已经在上一次 socket 消息中已经记住了此时的 hash 标识这时候我们会创建一个 ajax 去服务端请求获取到变化内容的 manifest 文件mainfest 文件包含重新 build 生成的 hash 值，以及变化的模块，对应上图的 c 属性浏览器根据 manifest 文件获取模块变化的内容，从而触发 render 流程，实现局部模块更新。
![alt text](/public/images/image.png)

## 简述webpack的构建流程？

#### 类型：`架构`

#### 级别：`W3`、`W4`、`W5`、`W6`

#### 解答（3 分）

- **1：** 初始化流程：从配置文件和 Shell 语句中读取与合并参数，并初始化需要使用的插件和配置插件等执行环境所需要的参数
- **1：** 编译构建流程：从 Entry 发出，针对每个 Module 串行调用对应的 Loader 去翻译文件内容，再找.到该 Module 依赖的 Module，递归地进行编译处理
- **1：** 输出流程：对编译后的 Module 组合成 Chunk，把 Chunk 转换成文件，输出到文件系统
![alt text](/public/images/image2.png)

## webpack proxy是什么？

#### 类型：`架构`

#### 级别：`W3`、`W4`、`W5`、`W6`

#### 解答（2 分）

- **2：** webpack proxy，是 webpack 提供的代理服务，基本行为就是接收客户端发送的请求后转发给其他服务器，其目的是为了便于开发者在开发模式下解决跨域问题(浏览器安全策略限制)

## webpack 中提供服务器的工具是什么？

#### 类型：`架构`

#### 级别：`W3`、`W4`、`W5`、`W6`

#### 解答（1 分）

- **1：** webpack 中提供服务器的工具为 webpack-dev-server

## webpack-dev-server是什么？

#### 类型：`架构`

#### 级别：`W3`、`W4`、`W5`、`W6`

#### 解答（1 分）

- **1：** webpack-dev-server是官方推出的一款开发工具，将自动编译和自动刷新浏览器等一系列对开发友好的功能全部集成在了一起，目的是为了提高开发者日常的开发效率，只适用在开发阶段关于配置方面。

## webpack代理怎么配置？proxy中常用的属性是什么？

#### 类型：`架构`

#### 级别：`W3`、`W4`、`W5`、`W6`

#### 解答（3 分）

- **1：** 配置如下：

```javascript
const path = require("path");
module.exports = {
  // ...
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
    proxy: {
      "/api": {
        target: "https://api.github.com",// 
      },
    },
    // ...
  },
};
```

- **2：** 常用属性：  

 >target：表示的是代理到的目标地址  
 >pathRewrite：默认情况下，我们的 /api-hy 也会被写入到URL中，如果希望删除、可以使用pathRewrite  
 >secure：默认情况下不接收转发到https的服务器上，如果希望支持，可以设置为false  
 >changeOrigin：它表示是否更新代理后请求的 headers 中host地址  

## proxy是工作原理？

#### 类型：`架构`

#### 级别：`W3`、`W4`、`W5`、`W6`

#### 解答（1 分）

- **1：** proxy 工作原理实质上是利用 http-proxy-middleware 这个 http 代理中间件，实现请求转发给其他服务器

```javascript
const express = require('express');
const proxy = require('http-proxy-middleware');
const app = express();
app.use('/api', proxy({target: 'http://www.example.org', changeOrigin: true
}));
app.listen(3000);
```

## webpack proxy 为什么能解决跨域？

#### 类型：`架构`

#### 级别：`W3`、`W4`、`W5`、`W6`

#### 解答（2 分）

- **2：** 在开发阶段，webpack-dev-server 会启动一个本地开发服务器，所以我们的应用在开发阶段是独立运行在 localhost 的一个端口上，而后端服务又是运行在另外一个地址上所以在开发阶段中，由于浏览器同源策略的原因，当本地访问后端就会出现跨域请求的问题通过设置 webpack proxy 实现代理请求后，相当于浏览器与服务端中添加一个代理者当本地发送请求的时候，
代理服务器响应该请求，并将请求转发到目标服务器，目标服务器响应数据后再将数据返回给代理服务器，最终再由代理服务器将数据响应给本地。  
在代理服务器传递数据给本地浏览器的过程中，两者同源，并不存在跨域行为，这时候浏览器就能正常接收数据。  
**注意：服务器与服务器之间请求数据并不会存在跨域行为，跨域行为是浏览器安全策略限制。**

## webpack的loader是什么？为什么使用它？它有哪几种配置方式

#### 类型：`架构`

#### 级别：`W3`、`W4`、`W5`、`W6`

#### 解答（5 分）

- **1：** loader 用于对模块的"源代码"进行转换，在 import 或"加载"模块时预处理文件
- **1：** webpack 做的事情，仅仅是分析出各种模块的依赖关系，然后形成资源列表，最终打包生成到指定的文件中。  
在 webpack 内部中，任何文件都是模块，不仅仅只是js 文件。默认情况下，在遇到 import 或者 require 加载模块的时候，webpack 只支持对 js 和 json文件打包，像 css、 sass、 png 等这些类型的文件的时候，webpack 则无能为力，这时候就需要配置对应的 loader 进行文件内容的解析。
- **3：** 关于配置 loader 的方式有三种:
  >配置方式(推荐)：在 webpack.config.js文件中指定 loader  
  >内联方式：在每个 import 语句中显式指定 loader  
  >Cl 方式：在 shell 命令中指定它们  

## webpack的Plugin是什么

#### 类型：`架构`

#### 级别：`W3`、`W4`、`W5`、`W6`

#### 解答（2 分）

- **2：** webpack 中的 plugin 赋予其各种灵活的功能，例如打包优化、资源管理、环境变量注入等，它们会运行在 webpack 的不同阶段(钩子/生命周期)，贯穿了 webpack 整个编译周期，目的在于解决 loader 无法实现的其他事

## webpack的Plugin和Loader的区别

#### 类型：`架构`

#### 级别：`W3`、`W4`、`W5`、`W6`

#### 解答（2 分）

- **1：**【Loader】：用于对模块源码的转换， loader可以将文件从不同的语言（如TypeScript）转换为JavaScript，或者将内联图像转换为data URL。比如说：CSS-Loader，Style-Loader等。
- **1：**【Plugin】：目的在于解决loader无法实现的其他事，从打包优化和压缩，到重新定义环境变量，功能强大到可以用来处理各种各样的任务。webpack提供了很多开箱即用的插件：CommonChunkPlugin主要用于提取第三方库和公共模块，避免首屏加载的bundle文件，或者按需加载的bundle文件体积过大，导致加载时间过长，是一把优化的利器。而在多页面应用中，更是能够为每个页面间的应用程序共享代码创建bundle。

## webpack常见的提升构建速度的方法

#### 类型：`架构`

#### 级别：`W3`、`W4`、`W5`、`W6`

#### 解答（2 分）

- **2：** 常见的有一下几种：

 >优化 loader 配置  
 >合理使用 resolve.extensions  
 >优化 resolve.modules  
 >优化 resolve.alias  
 >使用 DLLPlugin 插件  
 >使用 cache-loader  
 >terser 启动多线程  
 >合理使用 sourceMap