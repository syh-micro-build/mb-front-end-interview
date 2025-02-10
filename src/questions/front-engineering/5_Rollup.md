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

## Rollup 支持哪些输出格式？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（1 分）

- **1：** Rollup 支持多种输出格式，包括amd（用于 AMD 模块系统）、cjs（CommonJS，用于 Node.js）、es（ES6 模块）、iife（立即执行函数表达式，用于浏览器）、umd（通用模块定义，可在多种环境使用）

## 如何配置 Rollup 进行代码压缩？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（1 分）

- **1：** 可以使用terser插件来进行代码压缩。首先安装terser插件，然后在 Rollup 配置文件中添加：

```js
import terser from '@rollup/plugin - terser';

export default {
    input: 'input.js',
    output: {
        file: 'output.js',
        format: 'iife'
    },
    plugins: [
        terser()
    ]
};
```

## Rollup 的preserveModules选项有什么作用？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（1 分）

- **1：** preserveModules选项会保留原始的模块结构，输出的文件中每个模块会单独成为一个文件，并且保持目录结构。这在需要保持模块结构清晰，或者需要对每个模块进行单独处理时很有用。例如：

```js
export default {
    input: 'input.js',
    output: {
        dir: 'dist',
        format: 'es',
        preserveModules: true
    }
};
//这样会在dist目录下按照原始模块结构生成多个文件。
//如果你对这些面试题的答案还有更深入的问题，或者还想补充一些特定的知识点考察，欢迎随时告诉我。
```

## Rollup 的onwarn选项有什么作用？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（1 分）

- **1：** onwarn选项用于自定义警告信息的处理。可以通过它来忽略某些特定的警告，或者对警告进行统一的日志记录等操作。例如，忽略UNUSED_EXTERNAL_IMPORT警告：

```js
export default {
    input: 'input.js',
    output: {
        file: 'output.js',
        format: 'iife'
    },
    onwarn(warning, warn) {
        if (warning.code === 'UNUSED_EXTERNAL_IMPORT') return;
        warn(warning);
    }
};
```

## Rollup 和 Parcel 相比，有哪些不同点？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（3 分）

- **1：** 配置复杂度：Parcel 是零配置的打包工具，开箱即用；Rollup 需要手动配置，虽然灵活性高，但上手门槛相对较高。
- **1：** 打包性能：在某些场景下，Rollup 的 Tree - shaking 能力更强，能生成更精简的代码包；Parcel 在处理多模块和热更新方面有较好的表现，更适合快速开发。
- **1：** 适用场景：Rollup 适合库和追求极致优化的小型项目；Parcel 适合快速搭建原型和开发不需要复杂配置的应用。

## 在 Rollup 中，如何实现对 TypeScript 代码的打包？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（3 分）

- **1：** 可以使用rollup-plugin-typescript2插件。首先确保项目安装了typescript和rollup-plugin-typescript2，然后在 Rollup 配置文件中配置：

```js
import typescript from 'rollup-plugin-typescript2';

export default {
    input: 'input.ts',
    output: {
        file: 'output.js',
        format: 'iife'
    },
    plugins: [
        typescript()
    ]
};
//该插件会将 TypeScript 代码编译为 JavaScript 代码，并进行打包。
```