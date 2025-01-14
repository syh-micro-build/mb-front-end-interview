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

<details>

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

</details>

## 如何使用Rollup构建一个复杂的项目？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（6 分）

<details>

- **1：** 初始化项目：创建一个新的项目目录，在项目目录下打开终端，执行`npm init -y`命令，快速创建一个package.json文件，用于管理项目的依赖和脚本。
- **1：** 安装 Rollup 及相关插件：安装 Rollup`npm install rollup --save-dev`, 根据项目需求安装必要的插件，如`rollup-plugin-node-resolve`用于解
析node_modules中的模块，`rollup-plugin-commonjs`用于将CommonJS模块转换为ES6模块，`rollup-plugin-babel`用于将ES6及以上版本的代码转换为兼容旧浏览器的代码等。
- **1：** 配置 Rollup：在项目根目录下创建rollup.config.js文件，这是 Rollup 的配置文件。在该文件中，定义项目的入口文件、输出选项、插件等。示例如下：

```js
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'umd',
    name: 'MyComplexProject'
  },
  plugins: [
    resolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**'
    })
  ]
};
```

- **0：** 编写项目代码：在src目录下创建项目所需的各种模块和文件，按照项目的功能和逻辑进行合理的组织和划分。使用ES6的模块系统（import和export）来管理模块之间的依赖关系。
- **1：** 处理资源文件：如果项目中有CSS、图片、字体等资源文件，需要安装相应的插件来处理。例如，使用`rollup-plugin-postcss`处理CSS文件，使用`rollup-plugin-url`处理图片和字体文件等
- **1：** 优化和压缩代码：为了提高项目的性能，可以使用插件对打包后的代码进行优化和压缩。例如，使用`rollup-plugin-terser`插件来压缩JavaScript代码，使
用`postcss-minify`插件来压缩CSS代码等。
- **1：** 配置开发和生产环境：在package.json文件中配置scripts脚本，用于在开发和生产环境下运行 Rollup。例如：

```js
{
  "scripts": {
    "dev": "rollup -c --watch",
    "build": "rollup -c"
  }
}
//dev脚本用于在开发环境下启动 Rollup 的监听模式，当源文件发生变化时自动重新打包。build脚本用于在生产环境下执行打包操作。
```
- **0：** 测试和部署：在本地对项目进行测试，确保功能正常。然后将打包后的文件部署到服务器上，供用户访问。

</details>