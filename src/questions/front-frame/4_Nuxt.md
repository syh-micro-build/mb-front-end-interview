# Nuxt

## Nuxt.js和Vue.js有什么区别？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（3 分）

* **1：** 服务端渲染：Nuxt.js支持服务端渲染，可以在服务器端生成页面，提高应用的性能和SEO优化。Vue.js是一个客户端渲染框架，页面内容是在浏览器端生成的。
* **1：** 路由配置：Nuxt.js提供了一种简单的方式来配置路由，自动生成路由配置，而Vue.js需要手动配置路由。
* **1：** 目录结构：Nuxt.js有一个约定的目录结构，使得项目组织更加清晰和易于维护。Vue.js没有明确的目录结构要求，开发者可以根据自己的需求自由组织项目结构。

## nuxt有哪些特性？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（7 分）

* **1：** 服务器端渲染(SSR)：Nuxt.js 支持服务器端渲染，可以提高网站的性能和搜索引擎优化。
* **1：** 自动路由：Nuxt.js 可以根据项目目录结构自动生成路由配置，减少手动配置的工作量。
* **1：** 预渲染：Nuxt.js 支持预渲染，可以在构建时生成静态 HTML 文件，提高网站的加载速度。
* **1：** 插件系统：Nuxt.js 提供了丰富的插件系统，可以方便地扩展功能和集成第三方库。
* **1：** 中间件：Nuxt.js 支持中间件，可以在路由处理之前或之后执行一些逻辑操作。
* **1：** 数据异步加载：Nuxt.js 支持在页面组件中异步加载数据，可以更好地控制数据的获取和展示。
* **1：** 静态文件服务：Nuxt.js 可以将静态文件直接发布到 CDN 或静态文件服务器，提高网站的访问速度。

## nuxt2和nuxt3的区别

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（6 分）

<details>

* **1：** 性能方面：<br/>
&emsp;Nuxt3：性能有显著提升。它采用了 Vite 作为默认的开发服务器和构建工具（也支持 Webpack）。Vite 利用了现代浏览器的原生 ES 模块支持，
在开发阶段可以实现更快的冷启动和热更新。例如，当修改一个组件文件时，Nuxt3 + Vite 能够几乎即时地更新页面，而不需要像 <br/>
&emsp;Nuxt2（基于 Webpack）那样进行较长时间的重新打包过程。在构建产物方面，Nuxt3 也能够生成更优化的代码，减少不必要的资源加载，从而提升页面加载速度。
Nuxt2：基于 Webpack 构建，在开发过程中，热更新速度相对较慢。每次更新代码后，Webpack 需要重新构建模块图，这可能导致几秒钟的延迟。在构建用于生产环境的项目时，
生成的代码包可能会包含一些冗余代码，影响最终的性能。
* **1：** 目录结构和文件约定：<br/>
&emsp;Nuxt3：目录结构更加灵活。它仍然支持传统的pages目录用于定义路由页面，但是引入了新的composables目录用于存放可组合函数，这些函数可以在多个组件之间共享逻辑。
例如，你可以在composables目录下创建一个useAuth.js文件，用于处理用户认证逻辑，然后在多个组件中使用这个函数。同时，Nuxt3 对layouts目录的使用也更加灵活，
允许更好地定制页面布局。<br/>
&emsp;Nuxt2：有比较固定的目录结构，pages目录下的文件直接对应路由，layouts目录主要用于定义页面布局模板，这种结构相对简单直接，但在复杂项目中灵活性稍差。
例如，在 Nuxt2 中，如果你想共享一些非路由相关的逻辑，可能需要通过插件或者在store（如果使用 Vuex）中实现，没有像 Nuxt3 的composables这样专门的目录。
* **1：** TypeScript 支持：<br/>
&emsp;Nuxt3：对 TypeScript 有更好的原生支持。整个框架的核心代码和 API 都是用 TypeScript 编写的，这使得在开发过程中能够提供更好的类型检查和自动补全功能。
例如，在定义组件的props时，TypeScript 能够准确地检查传入属性的类型是否正确，减少运行时错误。并且 Nuxt3 在很多配置文件和插件开发中也更方便地使用 TypeScript，
开发体验更加友好。<br/>
&emsp;Nuxt2：虽然也可以使用 TypeScript，但需要额外的配置和一些复杂的步骤来实现较好的类型支持。例如，在 Nuxt2 中使用 TypeScript 编写组件时，可能需要手动安
装和配置相关的 Babel 插件来处理类型转换，并且在一些插件开发和与 Vuex（如果使用）结合时，TypeScript 的集成度没有 Nuxt3 高。
* **1：** Composition API 和 Options API：<br/>
&emsp;Nuxt3：更加强调使用 Composition API。它提供了一系列的组合式函数，如useFetch用于数据获取，useState用于状态管理等。这些函数使得组件逻辑更加清晰，可
复用性更强。例如，useFetch可以在组件中轻松地获取数据，并且可以在多个组件中复用这个数据获取逻辑，而不需要像 Nuxt2 那样可能更多地依赖于 Options API 中
的mounted等生命周期钩子来实现相同的功能。<br/>
&emsp;Nuxt2：主要使用 Options API，通过data、methods、mounted等选项来定义组件。虽然也可以使用 Composition API，但没有 Nuxt3 那么自然和方便。
例如，在 Nuxt2 中使用 Composition API 可能需要额外引入 Vue 3 的相关 API，并且在与 Nuxt2 的生态（如插件、模块）结合时可能会遇到一些兼容性问题。
* **2：** Server - side Rendering (SSR) 和 Static Site Generation (SSG)：<br/>
&emsp;Nuxt3：在 SSR 和 SSG 方面有一些改进。它提供了更灵活的生成策略，例如在 SSG 中可以更好地控制预渲染的页面和数据获取方式。对于动态路由的 SSG，Nuxt3 能
够根据不同的参数更高效地生成页面。在 SSR 模式下，Nuxt3 也优化了服务器端渲染的性能和资源利用。<br/>
&emsp;Nuxt2：支持 SSR 和 SSG，但在一些复杂的场景下，如动态路由的预渲染和数据获取策略上相对 Nuxt3 不够灵活。例如，在 Nuxt2 中处理动态路由的 SSG 可能需要
更多的手动配置和复杂的逻辑来确保数据的正确获取和页面的预渲染。

</details>

## Nuxt.js的生命周期有哪些？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（5 分）

* **1：** 服务器端生命周期：
  + nuxtServerInit：在服务端初始化数据
  + middleware：中间件执行
  + validate()：验证动态路由参数
  + asyncData()：异步数据加载
  + fetch()：服务端数据获取

* **1：** Vue生命周期（服务端）：
  + beforeCreate：组件实例化之前
  + created：组件创建完成

* **1：** Vue生命周期（客户端）：
  + beforeMount：DOM挂载之前
  + mounted：DOM挂载完成
  + beforeUpdate：数据更新前
  + updated：数据更新后

* **1：** 页面特定钩子：
  + transition：页面过渡效果
  + head：设置页面元信息

* **1：** 注意事项：
  + 服务端只能访问beforeCreate和created
  + window/document只能在mounted中使用
  + asyncData/fetch在每次路由变化时都会调用

## Nuxt.js中的数据获取方式有哪些？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（4 分）

* **1：** asyncData方法：
  + 在组件初始化前调用
  + 可以返回Promise
  + 返回的数据会合并到组件data中
  + 只能在页面组件中使用

  ```js
  async asyncData({ $axios }) {
    const data = await $axios.$get('/api/data')
    return { data }
  }
  ```

* **1：** fetch方法：
  + 可在任何组件中使用
  + 不直接返回数据
  + 通常用于填充Vuex状态

  ```js
  async fetch() {
    const { data } = await this.$axios.$get('/api/data')
    this.items = data
  }
  ```

* **1：** Vuex操作：
  + nuxtServerInit初始化存储
  + store中的actions获取数据
  + 支持模块化管理

  ```js
  export const actions = {
    async fetchData({ commit }) {
      const data = await this.$axios.$get('/api/data')
      commit('SET_DATA', data)
    }
  }
  ```

* **1：** API调用最佳实践：
  + 使用@nuxtjs/axios模块
  + 统一管理API请求
  + 处理错误和加载状态
  + 实现数据缓存策略
