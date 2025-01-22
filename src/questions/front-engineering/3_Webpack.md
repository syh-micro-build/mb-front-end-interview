# webpack

## 1. webpack 的热更新是什么?

#### 类型：`架构`

#### 级别：`W3`、`W4`、`W5`、`W6`

#### 解答（2 分）

- **1：** Hot Module Replacement 简称 HRM
- **1：** 模块热替换，指在应用程序运行过程中，替换、添加、删除模块，而无需重新刷新整个应用

## 2. webpack 中如何配置开启热更新？

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

## 3. webpack 的热更新原理?

#### 类型：`架构`

#### 级别：`W3`、`W4`、`W5`、`W6`

#### 解答（4 分）

- **1：** 在编写未经过 webpack 打包的源代码后，Webpack Compile 将源代码和 HMR Runtime 一起编译成 bundle 文件，传输给 Bundle Server 静态资源服务器，
- **1：** 当某一个文件或者模块发生变化时，webpack 监听到文件变化对文件重新编译打包，编译生成唯一的hash 值，这个 hash 值用来作为下一次热更新的标识根据变化的内容生成两个补丁文件: manifest (包含了 hash 和 chundId ，用来说明变化的内容)和 chunk.js 模块。
- **1：** 由于 socket 服务器在 HMR Runtime 和 HMR Server 之间建立 websocket 链接，当文件发生改动的时候，服务端会向浏览器推送一条消息，消息包含文件改动后生成的 hash 值，如下图的h 属性，作为下一次热更细的标识
- **1：** 在浏览器接受到这条消息之前，浏览器已经在上一次 socket 消息中已经记住了此时的 hash 标识这时候我们会创建一个 ajax 去服务端请求获取到变化内容的 manifest 文件mainfest 文件包含重新 build 生成的 hash 值，以及变化的模块，对应上图的 c 属性浏览器根据 manifest 文件获取模块变化的内容，从而触发 render 流程，实现局部模块更新。
![alt text](/public/images/image.png)

## 4. 简述webpack的构建流程？

#### 类型：`架构`

#### 级别：`W3`、`W4`、`W5`、`W6`

#### 解答（3 分）

- **1：** 初始化流程：从配置文件和 Shell 语句中读取与合并参数，并初始化需要使用的插件和配置插件等执行环境所需要的参数
- **1：** 编译构建流程：从 Entry 发出，针对每个 Module 串行调用对应的 Loader 去翻译文件内容，再找.到该 Module 依赖的 Module，递归地进行编译处理
- **1：** 输出流程：对编译后的 Module 组合成 Chunk，把 Chunk 转换成文件，输出到文件系统
![alt text](/public/images/image2.png)

## 5. webpack proxy是什么？

#### 类型：`架构`

#### 级别：`W3`、`W4`、`W5`、`W6`

#### 解答（2 分）

- **2：** webpack proxy，是 webpack 提供的代理服务，基本行为就是接收客户端发送的请求后转发给其他服务器，其目的是为了便于开发者在开发模式下解决跨域问题(浏览器安全策略限制)

## 6. webpack 中提供服务器的工具是什么？

#### 类型：`架构`

#### 级别：`W3`、`W4`、`W5`、`W6`

#### 解答（1 分）

- **1：** webpack 中提供服务器的工具为 webpack-dev-server

## 7. webpack-dev-server是什么？

#### 类型：`架构`

#### 级别：`W3`、`W4`、`W5`、`W6`

#### 解答（1 分）

- **1：** webpack-dev-server是官方推出的一款开发工具，将自动编译和自动刷新浏览器等一系列对开发友好的功能全部集成在了一起，目的是为了提高开发者日常的开发效率，只适用在开发阶段关于配置方面。

## 8. webpack代理怎么配置？proxy中常用的属性是什么？

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

## 9. proxy是工作原理？

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

## 10. webpack proxy 为什么能解决跨域？

#### 类型：`架构`

#### 级别：`W3`、`W4`、`W5`、`W6`

#### 解答（2 分）

- **2：** 在开发阶段，webpack-dev-server 会启动一个本地开发服务器，所以我们的应用在开发阶段是独立运行在 localhost 的一个端口上，而后端服务又是运行在另外一个地址上所以在开发阶段中，由于浏览器同源策略的原因，当本地访问后端就会出现跨域请求的问题通过设置 webpack proxy 实现代理请求后，相当于浏览器与服务端中添加一个代理者当本地发送请求的时候，
代理服务器响应该请求，并将请求转发到目标服务器，目标服务器响应数据后再将数据返回给代理服务器，最终再由代理服务器将数据响应给本地。  
在代理服务器传递数据给本地浏览器的过程中，两者同源，并不存在跨域行为，这时候浏览器就能正常接收数据。  
**注意：服务器与服务器之间请求数据并不会存在跨域行为，跨域行为是浏览器安全策略限制。**

## 11. webpack的loader是什么？为什么使用它？它有哪几种配置方式

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

## 12. webpack的Plugin是什么

#### 类型：`架构`

#### 级别：`W3`、`W4`、`W5`、`W6`

#### 解答（2 分）

- **2：** webpack 中的 plugin 赋予其各种灵活的功能，例如打包优化、资源管理、环境变量注入等，它们会运行在 webpack 的不同阶段(钩子/生命周期)，贯穿了 webpack 整个编译周期，目的在于解决 loader 无法实现的其他事

## 13. webpack的Plugin和Loader的区别

#### 类型：`架构`

#### 级别：`W3`、`W4`、`W5`、`W6`

#### 解答（2 分）

- **1：**【Loader】：用于对模块源码的转换， loader可以将文件从不同的语言（如TypeScript）转换为JavaScript，或者将内联图像转换为data URL。比如说：CSS-Loader，Style-Loader等。
- **1：**【Plugin】：目的在于解决loader无法实现的其他事，从打包优化和压缩，到重新定义环境变量，功能强大到可以用来处理各种各样的任务。webpack提供了很多开箱即用的插件：CommonChunkPlugin主要用于提取第三方库和公共模块，避免首屏加载的bundle文件，或者按需加载的bundle文件体积过大，导致加载时间过长，是一把优化的利器。而在多页面应用中，更是能够为每个页面间的应用程序共享代码创建bundle。

## 14. webpack常见的提升构建速度的方法

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

## 15. webpack中的Loader如何编写？

#### 类型：`架构`

#### 级别：`W4`、`W5`、`W6`

#### 解答（5 分）

- **5：** loader 的本质其本质为函数，函数中的 this 作为上下文会被 webpack 填充，因此我们不能将 loader 设为一个箭头函数。
函数接受一个参数，为 webpack 传递给 loader 的文件源内容函数中 this 是由 webpack 提供的对象，能够获取当前 loader 所需要的各种信息函数中有异步操作或同步操作，异步操作通过 this.callback 返回，返回值要求为 string 或者 Buffer。

```javascript
//导出一个函数，source为webpack传递给loader的文件源内容
module.exports = function(source){
 const content = doSomeThing2JsString(source);
//如果 loader 配置了 options 对象，那么this.query将指向 options
const options = this.query;
// 可以用作解析其他模块路径的上下文
console.log('this.context');
/*
* this.callback 参数:
* error:Error |null，当 loader 出错时向外抛出一个 error
* content:String | Buffer，经过 loader 编译后需要导出的内容
* sourceMap:为方便调试生成的编译后内容的 source map* ast:本次编译生成的 AST 静态语法树，之后执行的 loader 可以直接使用这个 AST.进而省去重复生成 AST 的过程
*/
this.callback(null，content);//异步
return content;//同步
}
```

## 16. webpack中的Plugin如何编写？

#### 类型：`架构`

#### 级别：`W4`、`W5`、`W6`

#### 解答（5 分）

- **5：** 由于 webpack 基于发布订阅模式，在运行的生命周期中会广播出许多事件，插件通过监听这些事件就可以在特定的阶段执行自己的插件任务  
webpack 编译会创建两个核心对象:
- compiler:包含了 webpack 环境的所有的配置信息，包括 options，loader 和 plugin，和webpack 整个生命周期相关的钩子
- compilation:作为 plugin 内置事件回调函数的参数，包含了当前的模块资源、编译生成资源、变化的文件以及被跟踪依赖的状态信息。当检测到一个文件变化，一次新的 Compilation  
将被创建如果自己要实现 plugin ，也需要遵循一定的规范:
- 插件必须是一个函数或者是一个包含 apply 方法的对象，这样才能访问 compiler 实例.
- 传给每个插件的 compiler 和compilation 对象都是同一个引用，因此不建议修改
- 异步的事件需要在插件处理完任务时调用回调函数通知 webpack 进入下一个流程，不然会卡住

```javascript
class MyPlugin {
  // Webpack 会调用 MyPlugin 实例的 apply 方法给插件实例传入 compiler 对象
  apply(compiler) {
    //找到合适的事件钩子，实现自己的插件功能
    compiler.hooks.emit.tap("MyPlugin", (compilation) => {
      // compilation: 当前打包构建流程的上下文
      console.log(compilation);
      // do something...
    });
  }
}
```

## 17. 说说如何借助webpack来优化前端性能?

#### 类型：`架构`

#### 级别：`w3`,`W4`、`W5`、`W6`

#### 解答（3 分）

- **3：**

 >JS代码压缩  
 >CSS代码压缩  
 >Html文件代码压缩  
 >文件大小压缩  
 >图片压缩  
 >Tree Shaking  
 >代码分离  
 >内联 chunk

### 18. 有哪些常见的Loader？你用过哪些Loader？

#### 类型：`架构`

#### 级别：`w3`,`W4`、`W5`、`W6`

#### 解答（2 分）

- raw-loader：加载文件原始内容（utf-8）

- file-loader：把文件输出到一个文件夹中，在代码中通过相对 URL 去引用输出的文件

- url-loader：和 file-loader 类似，但是能在文件很小的情况下以 base64 的方式把文件内容注入到代码中去

- source-map-loader：加载额外的 Source Map 文件，以方便断点调试

- image-loader：加载并且压缩图片文件

- babel-loader：把 ES6 转换成 ES5

- css-loader：加载 CSS，支持模块化、压缩、文件导入等特性

### 19. 有哪些常见的Plugin？你用过哪些Plugin？

#### 类型：`架构`

#### 级别：`w3`,`W4`、`W5`、`W6`

#### 解答（2 分）

- html-webpack-plugin：简化 html 文件的创建，可以指定模板和输出文件

- mini-css-extract-plugin：分离 css 文件

- clean-webpack-plugin：清理文件夹

- webpack-bundle-analyzer：可视化 webpack 输出文件的体积

- terser-webpack-plugin：压缩 js 文件

- optimize-css-assets-webpack-plugin：压缩 css 文件

- webpack-bundle-analyzer：可视化 webpack 输出文件的体积

### 20. 使用webpack开发时，你用过哪些可以提高效率的插件？

#### 类型：`架构`

#### 级别：`w3`,`W4`、`W5`、`W6`

#### 解答（2 分）

- webpack-dashboard：可以更友好的展示相关打包信息。

- webpack-merge：提取公共配置，减少重复配置代码

- speed-measure-webpack-plugin：可以得知每个 loader 和 plugin 的执行耗时

- webpack-bundle-analyzer：可视化 webpack 输出文件的体积，方便找出问题所在

- HotModuleReplacementPlugin：模块热替换