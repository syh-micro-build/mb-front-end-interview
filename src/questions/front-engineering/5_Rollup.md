# Rollup

## 什么是 Rollup？它与 Webpack 有何不同？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（6 分）

- **6：** Rollup 是一个 JavaScript 模块打包器，主要用于将多个模块捆绑成一个或多个文件。与 Webpack 相比，Rollup 主要优化了代码的静态分析和树摇（Tree Shaking），它特别适用于构建 JavaScript 库和模块。

- 模块系统支持：Rollup 专注于 ES6 模块（ESM），而 Webpack 则支持多种模块系统（CommonJS、AMD、ESM 等）。
- 性能：Rollup 对于构建库的性能比 Webpack 更好，因为它优化了打包过程，特别是树摇（Tree Shaking）。
- 输出格式：Rollup 支持多种输出格式（如 ES、CommonJS、UMD、IIFE 等），而 Webpack 更加侧重于打包应用程序。
- 插件系统：Rollup 的插件系统比 Webpack 更简洁，WebPack 插件系统更强大，适合复杂的应用场景。
- 在 Rollup 中，树摇是默认启用的，只要你使用了 ES 模块的语法，并且在构建时选择生产模式（如设置 minify 或 treeshake），就能自动进行树摇优化
- Rollup 的插件系统非常强大，可以通过 plugins 配置项来引入各种插件。插件可以用来处理各种功能，如转换文件格式、代码压缩、代码分割、环境变量注入等。

## 在 Rollup 中，如何实现多入口打包？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2 分）

- **2：** 在 Rollup 配置文件中，可以通过将input设置为一个对象来实现多入口打包。例如：

```js
export default {
    input: {
        main: 'entry-main.js',
        secondary: 'entry-secondary.js'
    },
    output: {
        dir: 'dist',
        format: 'esm'
    }
};
//在上述配置中，input是一个对象，main和secondary是两个入口的名称，对应各自的入口文件路径。output.dir指定了输出目录，Rollup 会根据不同的入口文件，在dist目录下生成对应的打包文件（如main.js和secondary.js，具体文件名根据配置和输出格式而定）。
```

## 简述 Rollup 的watch模式的作用及使用方法。

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（3 分）

- **1：** 作用：Rollup 的watch模式的作用是在开发过程中，当源文件发生变化时，自动重新打包，提高开发效率。
- **1：** 方法一：命令行方式，在项目目录下的package.json中添加script脚本：

```js
{
    "scripts": {
        "dev": "rollup -c --watch"
    }
}
//然后在命令行执行npm run dev，Rollup 会启动watch模式，监听配置文件（rollup.config.js）中指定的输入文件的变化，一旦文件有改动，就会自动重新打包。
```
- **1：** 方法二：在rollup.config.js中也可以配置watch选项：

```js
export default {
    input: 'input.js',
    output: {
        file: 'output.js',
        format: 'esm'
    },
    watch: {
        include: 'src/**',
        exclude: 'node_modules/**'
    }
};
//这里include指定了需要监听的文件或目录，exclude指定了不需要监听的文件或目录。之后通过rollup -c命令启动 Rollup，就会按照配置的watch选项进行监听。
```