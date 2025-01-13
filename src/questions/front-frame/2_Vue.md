# Vue

## 1. vue3和vue2的区别

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（11 分）

* **1：** 源码组织方式变化：使用 TS 重写
* **1：** 支持 Composition API：基于函数的API，更加灵活组织组件逻辑（vue2用的是options api）
* **1：** 响应式系统提升：Vue3中响应式数据原理改成proxy，可监听动态新增删除属性，以及数组变化
* **1：** 编译优化：vue2通过标记静态根节点优化diff，Vue3 标记和提升所有静态根节点，diff的时候只需要对比动态节点内容
* **1：** 打包体积优化：移除了一些不常用的api（inline-template、filter）
* **1：** 生命周期的变化：使用setup代替了之前的beforeCreate和created
* **1：** Vue3 的 template 模板支持多个根标签
* **1：** Vuex状态管理：创建实例的方式改变,Vue2为new Store , Vue3为createStore
* **1：** Route 获取页面实例与路由信息：vue2通过this获取router实例，vue3通过使用 getCurrentInstance/ userRoute和userRouter方法获取当前组件实例
* **1：** Props 的使用变化：vue2 通过 this 获取 props 里面的内容，vue3 直接通过 props
* **1：** 父子组件传值：vue3 在向父组件传回数据时，如使用的自定义名称，如 backData，则需要在 emits 中定义一下

## 2. watch 和 watchEffect 的区别？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（3分）

* **1：** watch ：既要指明监视的数据源，也要指明监视的回调。
* **1：** watchEffect 可以自动监听数据源作为依赖。不用指明监视哪个数据，监视的回调中用到哪个数据，那就监视哪个数据。
* **1：** watch 可以访问改变之前和之后的值，watchEffect 只能获取改变后的值。

## 3. 在 Vue2.x 中如何检测数组的变化？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（1分）

* **1：** 使用了函数劫持的方式，重写了数组的方法，Vue将data中的数组进行了原型链重写，指向了自己定义的数组原型方法。这样当调用数组api时，可以通知依赖更新。如果数组中包含着引用类型，会对数组中的引用类型再次递归遍历进行监控。这样就实现了监测数组变化。

## 4. 在 v-if 与 v-show 的区别？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（1分）

* **1：** 当条件不成立时，v-if不会渲染DOM元素，v-show操作的是样式(display)，切换当前DOM的显示和隐藏。

## 5. 如何实现 Vue 组件的插槽（slot）？有哪些类型的插槽？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（1分）

* **1：** 默认插槽、具名插槽、作用域插槽

## 6. 简述 Vuex 的核心概念和工作流程

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2分）

* **1：** 核心概念:<br/>
&emsp;State：存储应用的状态数据，是一个单一的数据源，所有组件都可以访问, <br/>
&emsp;Mutations：用于同步修改 State 中的数据。
是唯一允许修改 State 的地方，它接收 State 作为第一个参数。<br>
&emsp;Actions：用于处理异步操作，如异步数据获取等，它不能直接修改 State，而是通过提交 Mutations 来间接修改。<br/>
&emsp;Getters(类似于计算属性，用于从 State 中派生出一些新的数据，方便组件获取和使用)
* **1：** 工作流程：<br/>组件通过 dispatch 方法触发 Actions，Actions 中可以进行异步操作，然后通过 commit 提交 Mutations，
Mutations 同步修改 State 的数据，组件可以通过 mapState、mapGetters 等辅助函数获取 State 和 Getters 中的数据，从而实现数据的响应式变化
和组件的更新。

## 7. Vue项目中如何进行性能优化？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（10分）

<details>

* **1：** 合理使用v-show和v-if：<br/>
&emsp;原理：v-if是真正的条件渲染，它会在条件为假时销毁组件，在条件为真时重新创建组件，这涉及到 DOM 元素的销毁和重建过程。
而v - show只是简单地切换元素的CSS的display属性，组件的 DOM 元素始终存在于文档中。<br/>
&emsp;应用场景：对于那些在运行时很少改变显示状态的组件，比如用户权限相关的组件，只有管理员才能看到的功能组件，使用v-if比较合适。
对于频繁切换显示隐藏状态的组件，如页面中的导航栏下拉菜单，使用v-show能减少组件的销毁和重建带来的性能损耗。<br>
* **1：** 优化组件的props和events传递：<br/>
&emsp;原理：当组件的props发生变化时，组件会重新渲染。如果传递了不必要的props或者过于复杂的数据结构作为props，会增加组
件重新渲染的概率和成本。同样，过多的$emit事件也可能导致组件之间通信过于复杂，影响性能。<br/>
&emsp;应用场景：只传递组件真正需要的数据作为props。例如，一个列表组件只需要接收列表数据和展示格式相关的参数，而不需要接收整个应
用的状态数据。在组件内部，对于复杂的数据结构作为props，可以考虑使用Object.freeze()来冻结数据，防止在组件内部意外修改导致重新渲染。
对于$emit事件，只在必要时使用，并且确保事件名称清晰明了，避免过多的、不必要的事件通信。
* **1：** 使用keep-alive缓存组件:<br/>
&emsp;原理：keep-alive是 Vue 提供的一个内置组件，它能够缓存包裹在其中的组件。当组件被缓存时，再次激活这个组件时不会重新创建和
初始化，而是直接从缓存中取出，保留了组件之前的状态，从而减少了组件重新创建和渲染的开销。<br/>
&emsp;应用场景：适用于那些频繁切换但数据变化不大的组件。比如在一个多步骤表单应用中，用户在各个步骤之间来回切换，使用keep-alive包裹
表单步骤组件，可以避免每次切换步骤都重新创建表单组件，提高用户体验和应用性能。
* **1：** 列表渲染优化: 为v-for列表添加key属性<br/>
&emsp;原理：key属性是 Vue 用于识别v - for循环中的每个节点的唯一标识。当列表数据发生变化时，Vue 会根据key属性来更精准地判断哪些节点需要
更新、移动、添加或删除。如果没有key属性或者key属性不唯一，Vue 可能会进行不必要的 DOM 操作，导致性能下降。<br/>
&emsp;应用场景：在任何使用v - for进行列表渲染的地方都应该添加key属性。例如，渲染一个商品列表时，使用商品的唯一ID作为key
* **2：** 数据响应式优化: 避免过度的响应式数据<br/>
&emsp;原理：Vue 的响应式系统是通过Object.defineProperty()（在 Vue 3 中也有Proxy方式）对数据进行劫持来实现的。如果一个对象包含大量的数据，
并且这些数据大部分在组件的生命周期内都不会发生变化，将所有数据都设置为响应式会增加不必要的性能开销。<br/>
&emsp;应用场景：对于那些不需要响应式的数据，可以将其定义在组件的data属性之外。例如，一个组件中有一些常量数据，如固定的颜色列表、图标列表等，可以将
这些数据定义为普通的 JavaScript 对象，而不是放在data属性中。在 Vue 3 中，还可以使用shallowReactive或shallowRef来创建浅层响应式数据，只
对对象的第一层数据进行响应式处理，减少性能消耗。
* **2：** 路由层面优化: 路由懒加载<br/>
&emsp;原理：路由懒加载可以将路由对应的组件分割成不同的代码块，只有在访问该路由时才会加载对应的组件代码。这样可以减少应用初始加载时的代码体积，加
快首屏加载速度。<br/>
&emsp;应用场景：对于大型的单页面应用（SPA），尤其是包含多个页面或功能模块的应用，如一个电商应用中的商品详情页、购物车页、个人中心页等，都可以采用路由懒
加载的方式。在 Vue Router 中，可以使用动态import来实现路由懒加载，例如const ProductDetail = () => import('./views/ProductDetail.vue')，在
路由配置中{ path: '/product - detail', component: ProductDetail }。
* **1：** 代码压缩和混淆（Webpack 相关）<br/>
&emsp;原理：在构建过程中，通过工具（如terser-webpack-plugin）对 JavaScript 代码进行压缩和混淆，可以减小代码文件的大小。压缩是去除代码中的空格、注
释等冗余信息，混淆是将代码中的变量名、函数名等替换为更短的、难以理解的名称，从而减少代码体积，加快下载速度。<br/>
* **1：** 合理设置chunk大小和数量（Webpack 相关）<br/>
&emsp;原理：chunk是webpack在打包过程中生成的代码块。合理设置chunk的大小和数量可以更好地利用浏览器的缓存机制，减少重复请求，提高加载效率。如果chunk过
大，可能会导致加载时间过长；如果chunk过小，会产生过多的请求，增加请求开销。<br/>
&emsp;应用场景：根据应用的模块划分和功能需求来设置chunk。例如，可以将公共的库代码（如Vue、Vuex、Vue Router等）打包成一个单独的chunk，将不同业务模块
的代码分别打包成其他chunk。在webpack配置中，可以通过splitChunks配置项来控制chunk的生成，例如：

```js
module.exports = {
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNamePrefix: 'chunk - ',
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: - 10
        },
        default: {
          minChunks: 2,
          priority: - 20,
          reuseExistingChunk: true
        }
      }
    }
  }
};
```

</details>

## 8. v-model 双向绑定的原理是什么？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（1分）

* **1：** v-model本质就是一个语法糖，可以看成是value + input方法的语法糖。 可以通过model属性的prop和event属性来进行自定义。原生的v-model，会根据标签的不同生成不同的事件和属性 。

## 9. 在v-if 和 v-for 的优先级哪个高？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（1分）

* **1：** 在 vue2 中 v-for 的优先级更高，但是在 vue3 中优先级改变了。v-if 的优先级更高。

## 10. ref与reactive的区别？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（6分）

* **1：** ref与reactive 是 Vue3 新推出的主要 API 之一，它们主要用于响应式数据的创建。
* **1：** ref 函数创建的响应式数据，在模板中可以直接被使用，在 JS 中需要通过 .value 的形式才能使用。
* **1：** ref 函数可以接收原始数据类型与引用数据类型。
* **1：** reactive 函数只能接收引用数据类型。
* **1：** ref 底层还是使用 reactive 来做，ref 是在 reactive 上在进行了封装，增强了其能力，使它支持了对原始数据类型的处理。
* **1：** 在 Vue3 中 reactive 能做的，ref 也能做，reactive 不能做的，ref 也能做。

## 11. Vue 3 中的Teleport功能有什么作用，如何使用？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2分）

* **2：** Teleport功能可以将组件的子树 “瞬移” 到 DOM 的其他位置，不受组件层级的限制。使用时，在组件中使用 `<teleport>` 标签包裹需要瞬移的元素，并
指定to属性为目标 DOM 元素的选择器或id。例如:

```js
<teleport to="#app-root">...</teleport>
//会将包裹的元素移动到id为app-root的元素内部。
```

## 12. 如何在 Vue 3 中实现自定义指令的全局注册和局部注册？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（1分）

* **1：** 全局注册在 main.js 中使用 app.directive('指令名', 指令对象)；局部注册在组件内，通过 directives: { '指令名': 指令对象 }，指令对象包含
 mounted、updated 等生命周期钩子函数用于定义指令行为。

## 13. 说一下 Vue SSR 的实现原理

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2 分）

* SSR也就是服务端渲染，也就是将Vue在客户端把标签渲染成HTML的工作放在服务端完成，然后再把html直接返回给客户端。

* SSR有着更好的SEO、并且首屏加载速度更快等优点。不过它也有一些缺点，比如我们的开发条件会受到限制，服务器端渲染只支持beforeCreate和created两个钩子，当我们需要一些外部扩展库时需要特殊处理，服务端渲染应用程序也需要处于Node.js的运行环境。还有就是服务器会有更大的负载需求。

## 14. Vue 组件的 data 为什么必须是函数？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2 分）

* 一个组件被复用多次的话，也就会创建多个实例。本质上，这些实例用的都是同一个构造函数。如果data是对象的话，对象属于引用类型，会影响到所有的实例。所以为了保证组件不同的实例之间data不冲突，data必须是一个函数。

## 15. vue 中的 spa 应用如何优化首屏加载速度?

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（5 分）

* 请求优化：CDN 将第三方的类库放到 CDN 上，能够大幅度减少生产环境中的项目体积，另外 CDN 能够实时地根据网络流量和各节点的连接、负载状况以及到用户的距离和响应时间等综合信息将用户的请求重新导向离用户最近的服务节点上。

* 缓存：将长时间不会改变的第三方类库或者静态资源设置为强缓存，将 max-age 设置为一个非常长的时间，再将访问路径加上哈希达到哈希值变了以后保证获取到最新资源，好的缓存策略有助于减轻服务器的压力，并且显著的提升用户的体验

* gzip：开启 gzip 压缩，通常开启 gzip 压缩能够有效的缩小传输资源的大小。

* http2：如果系统首屏同一时间需要加载的静态资源非常多，但是浏览器对同域名的 tcp 连接数量是有限制的(chrome 为 6 个)超过规定数量的 tcp 连接，则必须要等到之前的请求收到响应后才能继续发送，而 http2 则可以在多个 tcp 连接中并发多个请求没有限制，在一些网络较差的环境开启 http2 性能提升尤为明显。

* 懒加载：当 url 匹配到相应的路径时，通过 import 动态加载页面组件，这样首屏的代码量会大幅减少，webpack 会把动态加载的页面组件分离成单独的一个 chunk.js 文件

* 预渲染：由于浏览器在渲染出页面之前，需要先加载和解析相应的 html、css 和 js 文件，为此会有一段白屏的时间，可以添加loading，或者骨架屏幕尽可能的减少白屏对用户的影响体积优化

* 合理使用第三方库：对于一些第三方 ui 框架、类库，尽量使用按需加载，减少打包体积

* 使用可视化工具分析打包后的模块体积：webpack-bundle- analyzer 这个插件在每次打包后能够更加直观的分析打包后模块的体积，再对其中比较大的模块进行优化

* 提高代码使用率：利用代码分割，将脚本中无需立即调用的代码在代码构建时转变为异步加载的过程

* 封装：构建良好的项目架构，按照项目需求就行全局组件，插件，过滤器，指令，utils 等做一 些公共封装，可以有效减少我们的代码量，而且更容易维护资源优化

* 图片懒加载：使用图片懒加载可以优化同一时间减少 http 请求开销，避免显示图片导致的画面抖动，提高用户体验

* 使用 svg 图标：相对于用一张图片来表示图标，svg 拥有更好的图片质量，体积更小，并且不需要开启额外的 http 请求

## 16. 组件中写 name 选项有哪些好处？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2 分）

* 可以通过名字找到对应的组件（ 递归组件：组件自身调用自身 ）

* 可以通过 name 属性实现缓存功能（keep-alive）

* 可以通过 name 来识别组件（跨级组件通信时非常重要）

* 使用 vue-devtools 调试工具里显示的组见名称是由 vue 中组件 name 决定的

## 17. 说一下 ref 的作用是什么？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2 分）

ref 的作用是被用来给元素或子组件注册引用信息。引用信息将会注册在父组件的 $refs 对象上。其特点是：

* 如果在普通的 DOM 元素上使用，引用指向的就是 DOM 元素

* 基本用法，本页面获取 DOM 元素

* 获取子组件中的 data

* 调用子组件中的方法

* 使用 vue-devtools 调试工具里显示的组见名称是由 vue 中组件 name 决定的

## 18. 谈谈你对 Vue 3 Composition API 中响应式原理的理解，以及它与 Vue 2.x 中响应式原理的区别

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（3分）

* **1：** Vue 3 使用 ES6 的 Proxy 对象来实现响应式，它可以直接代理整个对象，而不仅仅是对象的属性。例如：

```js
const state = reactive({ count: 0 });
//Proxy 能对对象的所有操作进行拦截，包括属性的读取、设置、删除等，从而实现更精准的响应式追踪。
```

* **1：** 对比 Vue 2.x 使用的 Object.defineProperty () 方法，它只能对对象的已有属性进行逐个劫持，对于新增属性需要使用Vue.set方法来手动触发响应式更新。
* **1：** 在 Vue 3 中，通过reactive创建的响应式对象是深层响应式的，而 Vue 2.x 中对象内部嵌套的对象，需要递归遍历进行深度响应式转换。

## 19. 在 Vue 3 项目中，如何进行 SSR（服务器端渲染）

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（3分）

* **0：** 搭建项目基础：创建 Vue 3 项目，可使用@vue/cli工具，通过命令vue create my-ssr-app创建项目，选择相关 Vue 3 选项。
* **1：** 添加 SSR 相关依赖：安装`@vue/server-renderer`和`express`等依赖，`@vue/server-renderer`用于服务器端渲染，`express`作为服务器框架。命令
为`npm install @vue/server-renderer express`。
* **1：** 创建服务器文件：在项目根目录下创建server.js文件，用于创建服务器和处理 SSR 逻辑。在文件中，引入express，创建服务器实例，设置路由，使
用@vue/server-renderer将 Vue 组件渲染为 HTML 字符串并返回。
* **1：** 调整 Vue 项目代码：在 Vue 项目中，需要创建一个用于服务器端渲染的入口文件，如`entry-server.js`，在该文件中，创建 Vue 应用实例，并导出。同时，可能
需要调整一些组件的逻辑，以适应服务器端渲染的环境。

## 20. Vue 3中的Suspense组件的作用是什么，它是如何工作的？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2分）

* **1：** Suspense是在vue3中新提供的，用来处理异步组件的加载状态。
* **1：** Suspense 组件允许你指定一个加载中的状态`（fallback）`和一个加载失败的状态`（fallback slot）`，用于处理异步组件的加载状态。当异步组件加载时，会先显示加载中
的状态；加载完成后，会显示异步组件；如果加载失败，会显示加载失败的状态。

## 21. vue的生命周期有哪些及每个生命周期做了什么？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（3分）

* beforeCreate是new Vue()之后触发的第一个钩子，在当前阶段data、methods、computed以及watch上的数据和方法都不能被访问。

* created是实例创建完成后触发的钩子，当前阶段已经完成了数据观测、属性和方法的运算，watch/event事件回调。然而，挂载阶段还没开始，$el属性目前不可见。

* beforeMount是挂载开始之前被触发的钩子，相关的render函数首次被调用。该钩子在服务器端渲染期间不被调用。

* mounted是el被新创建的vm.$el替换，并挂载到实例上去之后调用该钩子。如果根实例挂载到一个文档内元素上，当mounted被调用时vm.$el也在文档内。该钩子在服务器端渲染期间不被调用。

* beforeUpdate是数据更新时调用，发生在虚拟DOM重新渲染和打补丁之前。你可以在这个钩子中进一步地更改状态，这不会触发附加的重渲染过程。

* updated是由于数据更改导致的虚拟DOM重新渲染和打补丁之后调用。当这个钩子被调用时，组件DOM已经更新，所以你现在可以执行依赖于DOM的操作。然而请注意，在大多数情况下，你应该避免在此期间更改状态，因为这可能会导致更新无限循环。该钩子在服务器端渲染期间不被调用。

* beforeDestroy是实例销毁之前调用。在这一步，实例仍然完全可用。

* destroyed是Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。该钩子在服务器端渲染期间不被调用。

## 22. vue响应式原理是什么？vue3的响应式有何不同?

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2分）

* Vue在初始化数据时，会使用Object.defineProperty重新定义data中的所有属性，当页面使用对应属性时，首先会进行依赖收集(收集当前组件的watcher)如果属性发生变化会通知相关依赖进行更新操作(发布订阅)。

* Vue3.x改用Proxy替代Object.defineProperty。因为Proxy可以直接监听对象和数组的变化，并且有多达13种拦截方法。并且作为新标准将受到浏览器厂商重点持续的性能优化。

## 23. 谈一谈对 MVVM 的理解？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2分）

* MVVM是Model-View-ViewModel缩写，也就是把MVC中的Controller演变成ViewModel。Model层代表数据模型，View代表UI组件，ViewModel是View和Model层的桥梁，数据会绑定到viewModel层并自动将数据渲染到页面中，视图变化的时候会通知viewModel层更新数据.

## 24. vue2.x 和 vuex3.x 渲染器的 diff 算法分别说一下？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2分）

简单来说，diff算法有以下过程

* 同级比较，再比较子节点

* 先判断一方有子节点一方没有子节点的情况(如果新的children没有子节点，将旧的子节点移除)

* 比较都有子节点的情况(核心diff)

* 递归比较子节点

Vue2的核心Diff算法采用了双端比较的算法，同时从新旧children的两端开始进行比较，借助key值找到可复用的节点，再进行相关操作。相比React的Diff算法，同样情况下可以减少移动节点次数，减少不必要的性能损耗，更加的优雅。

Vue3.x借鉴了 ivi算法和 inferno算法

在创建VNode时就确定其类型，以及在mount/patch的过程中采用位运算来判断一个VNode的类型，在这个基础之上再配合核心的Diff算法，使得性能上较Vue2.x有了提升。(实际的实现可以结合Vue3.x源码看。)

## 25. vue 组件通信方式有哪些？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2分）

父子组件通信

父->子props，子->父 $on、$emit

获取父子组件实例 $parent、$children

Ref 获取实例的方式调用组件的属性或者方法

Provide、inject 官方不推荐使用，但是写组件库时很常用

兄弟组件通信

Event Bus 实现跨组件通信，代码繁琐，不推荐

Vuex 官方推荐使用，功能强大，vue-devtools有插件支持

## 26. Vue的路由实现, hash路由和history路由实现原理说一下？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2分）

`location.hash`的值实际就是URL中`#`后面的东西。

history实际采用了HTML5中提供的API来实现，主要有history.pushState()和history.replaceState()。

## 27. keep-alive的常用属性有哪些及实现原理

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2分）

keep-alive可以实现组件缓存，当组件切换时不会对当前组件进行卸载。

常用的两个属性include/exclude，允许组件有条件的进行缓存。

两个生命周期activated/deactivated，用来得知当前组件是否处于活跃状态。

keep-alive的中还运用了LRU(Least Recently Used)算法。

## 28. nextTick 的作用是什么？他的实现原理是什么？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2分）

在下次 DOM 更新循环结束之后执行延迟回调。nextTick主要使用了宏任务和微任务。根据执行环境分别尝试采用

* Promise

* MutationObserver

* setImmediate

* setTimeout

定义了一个异步方法，多次调用nextTick会将方法存入队列中，通过这个异步方法清空当前队列。

## 29. 说一下 Vue 的 computed 的实现原理

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（3分）

当组件实例触发生命周期函数 beforeCreate 后，它会做一系列事情，其中就包括对 computed 的处理。

它会遍历 computed 配置中的所有属性，为每一个属性创建一个 Watcher 对象，并传入一个函数，该函数的本质其实就是 computed 配置中的 getter，这样一来，getter 运行过程中就会收集依赖

但是和渲染函数不同，为计算属性创建的 Watcher 不会立即执行，因为要考虑到该计算属性是否会被渲染函数使用，如果没有使用，就不会得到执行。因此，在创建 Watcher 的时候，它使用了 lazy 配置，lazy 配置可以让 Watcher 不会立即执行。

收到 lazy 的影响，Watcher 内部会保存两个关键属性来实现缓存，一个是 value，一个是 dirty

value 属性用于保存 Watcher 运行的结果，受 lazy 的影响，该值在最开始是 undefined

dirty 属性用于指示当前的 value 是否已经过时了，即是否为脏值，受 lazy 的影响，该值在最开始是 true

定义了一个异步方法，多次调用nextTick会将方法存入队列中，通过这个异步方法清空当前队列。

Watcher 创建好后，vue 会使用代理模式，将计算属性挂载到组件实例中

当读取计算属性时，vue 检查其对应的 Watcher 是否是脏值，如果是，则运行函数，计算依赖，并得到对应的值，保存在 Watcher 的 value 中，然后设置 dirty 为 false，然后返回。

如果 dirty 为 false，则直接返回 watcher 的 value

巧妙的是，在依赖收集时，被依赖的数据不仅会收集到计算属性的 Watcher，还会收集到组件的 Watcher

当计算属性的依赖变化时，会先触发计算属性的 Watcher 执行，此时，它只需设置 dirty 为 true 即可，不做任何处理。

由于依赖同时会收集到组件的 Watcher，因此组件会重新渲染，而重新渲染时又读取到了计算属性，由于计算属性目前已为 dirty，因此会重新运行 getter 进行运算

而对于计算属性的 setter，则极其简单，当设置计算属性时，直接运行 setter 即可。

## 30. 说一下 Vue complier 的实现原理是什么样的？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（3分）

complier 的主要作用是解析模板，生成渲染模板的 render， 而 render 的作用主要是为了生成 VNode

complier 主要分为 3 大块：

* parse：接受 template 原始模板，按着模板的节点和数据生成对应的 ast

* optimize：遍历 ast 的每一个节点，标记静态节点，这样就知道哪部分不会变化，于是在页面需要更新时，通过 diff 减少去对比这部分DOM，提升性能

* generate 把前两步生成完善的 ast，组成 render 字符串，然后将 render 字符串通过 new Function 的方式转换成渲染函数

## 31. 说一下 watch 与 computed 的区别是什么？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2分）

* 都是观察数据变化的（相同）

* 计算属性将会混入到 vue 的实例中，所以需要监听自定义变量；watch 监听 data 、props 里面数据的变化

* computed 有缓存，它依赖的值变了才会重新计算，watch 没有；

* watch 支持异步，computed 不支持；

* watch 是一对多（监听某一个值变化，执行对应操作）；computed 是多对一（监听属性依赖于其他属性）

* watch 监听函数接收两个参数，第一个是最新值，第二个是输入之前的值；

* omputed 属性是函数时，都有 get 和 set 方法，默认走 get 方法，get 必须有返回值（return）

## 32. 说一下你知道的 vue 修饰符都有哪些？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2分）

事件修饰符

* .stop：阻止冒泡。

* .prevent：阻止默认事件。

* .capture：使用事件捕获模式。

* .self：只在当前元素本身触发。

* once：只触发一次。

* passive：默认行为将会立即触发。

按键修饰符

* .left：左键

* .right：右键

* .middle：滚轮

* .enter：回车

表单修饰符

* .lazy：在文本框失去焦点时才会渲染

* .number：将文本框中所输入的内容转换为number类型

* .trim：可以自动过滤输入首尾的空格

## 33. 怎么理解Vue的单向数据流？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2分）

单向数据流是指：数据在组件树中的流动方向，是从父组件流向子组件的。这个设计使得数据流更加可预测和易于调试，确保应用状态的一致性。

简单理解：父组件的状态对于子组件是只读的，子组件想改，只能通过事件的方式，通知父组件自己改。

## 34. Vue中怎么异步加载组件

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2分）

```js
<template> 
    <MyComponent /> 
</template>
<script setup>
import { defineAsyncComponent } from 'vue'

const MyComponent = defineAsyncComponent(() =>
  import('./components/MyComponent.vue')
)
</script>
```

## 35. 为什么this.xx可以访问data中的数据?

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2分）

Vue在initData时，做了数据代理

* 判断传入的data，函数就执行，对象不做处理

* data 赋值给 vm._data

* 然后变量 vm._data对象，把可枚举属性的get代理到 vm上

* 访问vm.xxx 就相当于 vm._data.xx === vm.data.xx

## 36. 父组件如何监听子组件生命周期？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2分）

vue2 使用 @hook:mounted

vue3 使用 @vue:mounted

自定义事件，在子组件生命周期中去执行 下面是vue3的写法

```js

<template>
  <h1 @click="send">Home 页面</h1>
  <Text @vue:mounted="fn" />
</template>

<script setup>
import { onMounted, ref } from 'vue'
import Text from '../components/Text.vue'
const fn = () => {
  console.log('Text mounted')
}
</script>

```

## 37. watch怎么停止监听？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2分）

```js
import { ref, watch } from 'vue'
const count = ref(0)
const soptWatch = watch(() => count.value, (newVal, oldVal) => {
  console.log(newVal, oldVal)
})
soptWatch()

```

## 37. Vue中怎么做全局错误监听？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2分）

```js
import { ref, watch } from 'vue'
const count = ref(0)
const soptWatch = watch(() => count.value, (newVal, oldVal) => {
  console.log(newVal, oldVal)
})
soptWatch()

```

## 38. 怎么监听子组件内的错误？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2分）

```js
// 子组件
throw new Error("Error");

//父组件
import { onErrorCaptured } from 'vue'

// 监听到子组件错误，执行回调
onErrorCaptured((err) => {
  console.log('error', err)
})

```

## 38. vue-router怎么动态添加、删除路由？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2分）

添加路由

```js

import { useRouter } from 'vue-router';

const router = useRouter();
const addRoute = () => {
  const newRoute = {
    path: '/hello', name: 'hello', component: () => import('../components/HelloWorld.vue'), // 动态加载组件
  };
  router.addRoute(newRoute);
};

```

添加路由

```js

router.removeRoute('xxx');

```

## 39. 有使用过v-memo么？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2分）

缓存一个模板的子树。在元素和组件上都可以使用。为了实现缓存，该指令需要传入一个固定长度的依赖值数组进行比较。如果数组里的每个值都与最后一次的渲染相同，那么整个子树的更新将被跳过。

一般与v-for配合使用，v-memo的值是一个数组。数组的值不改变的情况，该组件及子组件就会跳过更新

v-memo 绑定的值没改变，子组件引用的响应数据变了，也不会更新

## 40. v-for 中 key 的作用是什么？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2分）

key 是 Vue 使用 v-for 渲染列表时的节点标识。使用了 key 之后，当列表项发生变化时，Vue 会基于 key 的变化而重新排列元素顺序，并且移除 key 不存在的元素，提升运行效率。

## 40. 如何动态更新对象或数组的值？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（1分）

  因为 Object.defineProperty()的限制，Vue 无法监听到对象或数组内部某个属性值的变化，因此在直接设置以上两类数据的值时，页面不会实时更新。此时可以通过 this.$set 方法来解决：

## 41. v-on 如何绑定多个事件？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（1分）

  ```js
<!--单事件绑定-->
<input type="text" @click="onClick">
<!--多事件绑定-->
<input type="text" v-on="{ input:onInput,focus:onFocus,blur:onBlur }">

```

## 41. Vue 初始化页面闪动问题如何解决？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（1分）

出现该问题是因为在 Vue 代码尚未被解析之前，尚无法控制页面中 DOM 的显示，所以会看见模板字符串等代码。

解决方案是，在 css 代码中添加 v-cloak 规则，同时在待编译的标签上添加 v-cloak 属性：

```html
[v-cloak] { display: none; }

<div v-cloak>
  {{ message }}
</div>

```

## 42. Vue 如何清除浏览器缓存？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（1分）

* 项目打包的时候给每个打包文件加上 hash 值，一般是在文件后面加上时间戳；

* 在 html 文件中加入 meta 标签，content 属性设置为no-cache;

* 在后端服务器中进行禁止缓存设置。

## 43. 页面刷新了之后vuex中的数据消失怎么解决

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（1分）

* vuex数据位于内存, 页面的刷新重置会导致数据的归零,也就是所谓的消失, 本地持久化可以解决这个问题.本地持久化用到的技术也就是 本次存储 sesstionStorage 或者 localStorage

* tate的持久化 也就是分别需要在 state数据初始化 /更新 的时候 进行读取和设置本地存储操作

```js
  export default new Vuex.store({
   state: {
       user: localStorge.getItem('user')  // 初始化时读取 本地存储
   },
   mutations: {
       updateUser (state, payload) {
           state.user = payload.user
           localStoregae.setItem('user',payload.user) // 数据更新时 设置本地存储
       }
   }
})

```

## 44. 页面刷新了之后vuex中的数据消失怎么解决

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2分）

* 在对一些属性进行操作时，使用这种方法无法拦截，比如通过下标方式修改数组数据或者给对象新增属性，这都不能触发组件的重新渲染，因为 Object.defineProperty 不能拦截到这些操作。更精确的来说，对于数组而言，大部分操作都是拦截不到的，只是 Vue 内部通过重写函数的方式解决了这个问题。

* 在 Vue3.0 中已经不使用这种方式了，而是通过使用 Proxy 对对象进行代理，从而实现数据劫持。使用Proxy 的好处是它可以完美的监听到任何方式的数据改变，唯一的缺点是兼容性的问题，因为 Proxy 是 ES6 的语法。

## 45. assets和static的区别

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2分）

* 相同点： assets 和 static 两个都是存放静态资源文件。项目中所需要的资源文件图片，字体图标，样式文件等都可以放在这两个文件下

* 不相同点：assets 中存放的静态资源文件在项目打包时，也就是运行 npm run build 时会将 assets 中放置的静态资源文件进行打包上传，所谓打包简单点可以理解为压缩体积，代码格式化。而压缩后的静态资源文件最终也都会放置在 static 文件中跟着 index.html 一同上传至服务器。static 中放置的静态资源文件就不会要走打包压缩格式化等流程，而是直接进入打包好的目录，直接上传至服务器。

因为避免了压缩直接进行上传，在打包时会提高一定的效率，但是 static 中的资源文件由于没有进行压缩等操作，所以文件的体积也就相对于 assets 中打包后的文件提交较大点。在服务器中就会占据更大的空间

## 46. delete和Vue.delete删除数组的区别

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2分）

* delete 只是被删除的元素变成了 empty/undefined 其他的元素的键值还是不变。

* Vue.delete 直接删除了数组 改变了数组的键值。

## 47. 什么是 mixin？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2分）

* Mixin 使我们能够为 Vue 组件编写可插拔和可重用的功能。

* 如果希望在多个组件之间重用一组组件选项，例如生命周期 hook、 方法等，则可以将其编写为 mixin，并在组件中简单的引用它。

* 然后将 mixin 的内容合并到组件中。如果你要在 mixin 中定义生命周期 hook，那么它在执行时将优化于组件自已的 hook。

## 48. 对 SPA 单页面的理解，它的优缺点分别是什么？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2分）

SPA（ single-page application ）仅在 Web 页面初始化时加载相应的 HTML、JavaScript 和 CSS。一旦页面加载完成，SPA 不会因为用户的操作而进行页面的重新加载或跳转；取而代之的是利用路由机制实现 HTML 内容的变换，UI 与用户的交互，避免页面的重新加载。

优点：

* 用户体验好、快，内容的改变不需要重新加载整个页面，避免了不必要的跳转和重复渲染；

* 基于上面一点，SPA 相对对服务器压力小；

* 前后端职责分离，架构清晰，前端进行交互逻辑，后端负责数据处理；

缺点：

* 初次加载耗时多：为实现单页 Web 应用功能及显示效果，需要在加载页面的时候将 JavaScript、CSS 统一加载，部分页面按需加载；

* 前进后退路由管理：由于单页应用在一个页面中显示所有的内容，所以不能使用浏览器的前进后退功能，所有的页面切换需要自己建立堆栈管理；

* SEO 难度较大：由于所有的内容都在一个页面中动态替换显示，所以在 SEO 上其有着天然的弱势。

## 49. 对 SPA 单页面的理解，它的优缺点分别是什么？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2分）

对于 runtime 来说，只需要保证组件存在 render 函数即可，而有了预编译之后，只需要保证构建过程中生成 render 函数就可以。在 webpack 中，使用vue-loader编译.vue文件，内部依赖的vue-template-compiler模块，在 webpack 构建过程中，将template预编译成 render 函数。与 react 类似，在添加了jsx的语法糖解析器babel-plugin-transform-vue-jsx之后，就可以直接手写render函数。

所以，template和jsx的都是render的一种表现形式，不同的是：JSX相对于template而言，具有更高的灵活性，在复杂的组件中，更具有优势，而 template 虽然显得有些呆滞。但是 template 在代码结构上更符合视图与逻辑分离的习惯，更简单、更直观、更好维护。

## 50. Vue 子组件和父组件执行顺序

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2分）

加载渲染过程：

* 1.父 beforeCreate

* 2.父 created

* 3.父 beforeMount

* 4.子 beforeCreate

* 5.子 created

* 6.子 beforeMount

* 7.子 mounted

* 8.父 mounted

更新过程：

* 1.父 beforeUpdate

* 2.子 beforeUpdate

* 3.子 updated

* 4.父 updated

## 51. Vue-Router 的懒加载如何实现

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2分）

加载渲染过程：

方案一(常用)：使用箭头函数+import动态加载

```js
  const List = () => import('@/components/list.vue')
  const router = new VueRouter({
    routes: [
      { path: '/list', component: List }
    ]
  })
```

方案二：使用箭头函数+require动态加载

```js
const router = new Router({
  routes: [
   {
     path: '/list',
     component: resolve => require(['@/components/list'], resolve)
   }
  ]
})

```

方案二：方案三：使用webpack的require.ensure技术，也可以实现按需加载。 这种情况下，多个路由指定相同的chunkName，会合并打包成一个js文件。

```js
// r就是resolve
const List = r => require.ensure([], () => r(require('@/components/list')), 'list');
// 路由也是正常的写法  这种是官方推荐的写的 按模块划分懒加载 
const router = new Router({
  routes: [
  {
    path: '/list',
    component: List,
    name: 'list'
  }
 ]
}))

```

## 52. $route 和$router 的区别

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2分）

$route 是“路由信息对象”，包括 path，params，hash，query，fullPath，matched，name 等路由信息参数

$router 是“路由实例”对象包括了路由的跳转方法，钩子函数等。

## 53. Vuex和单纯的全局对象有什么区别？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2分）

Vuex 的状态存储是响应式的。当 Vue 组件从 store 中读取状态的时候，若 store 中的状态发生变化，那么相应的组件也会相应地得到高效更新。

不能直接改变 store 中的状态。改变 store 中的状态的唯一途径就是显式地提交 (commit) mutation。这样可以方便地跟踪每一个状态的变化，从而能够实现一些工具帮助更好地了解我们的应用

## 54. 为什么 Vuex 的 mutation 中不能做异步操作？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2分）

Vuex中所有的状态更新的唯一途径都是mutation，异步操作通过 Action 来提交 mutation实现，这样可以方便地跟踪每一个状态的变化，从而能够实现一些工具帮助更好地了解我们的应用。

每个mutation执行完成后都会对应到一个新的状态变更，这样devtools就可以打个快照存下来，然后就可以实现 time-travel 了。如果mutation支持异步操作，就没有办法知道状态是何时更新的，无法很好的进行状态的追踪，给调试带来困难。

## 55. Vuex的严格模式是什么,有什么作用，如何开启？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2分）

在严格模式下，无论何时发生了状态变更且不是由mutation函数引起的，将会抛出错误。这能保证所有的状态变更都能被调试工具跟踪到。

在Vuex.Store 构造器选项中开启,如下

```js
const store = new Vuex.Store({
  strict: true
})
```

## 56. 如何在组件中批量使用Vuex的getter属性

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2分）

如何在组件中批量使用Vuex的getter属性

使用mapGetters辅助函数, 利用对象展开运算符将getter混入computed 对象中

```js
import {mapGetters} from 'vuex'
export default{
    computed:{
        ...mapGetters(['total','discountTotal'])
    }
}
```

## 57. 如何在组件中重复使用Vuex的mutation

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2分）

使用mapMutations辅助函数,在组件中这么使用

使用mapGetters辅助函数, 利用对象展开运算符将getter混入computed 对象中

```js
import { mapMutations } from 'vuex'
methods:{
    ...mapMutations({
        setNumber:'SET_NUMBER',
    })
}
```

然后调用this.setNumber(10)相当调用this.$store.commit('SET_NUMBER',10)

## 58. 为什么不建议用index作为key?

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（1分）

使用index 作为 key和没写基本上没区别，因为不管数组的顺序怎么颠倒，index 都是 0, 1, 2...这样排列，导致 Vue 会复用错误的旧子节点，做很多额外的工作。