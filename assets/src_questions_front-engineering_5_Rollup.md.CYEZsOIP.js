import{_ as i,c as a,a0 as l,o as n}from"./chunks/framework.Canm8p3M.js";const E=JSON.parse('{"title":"Rollup","description":"","frontmatter":{},"headers":[],"relativePath":"src/questions/front-engineering/5_Rollup.md","filePath":"src/questions/front-engineering/5_Rollup.md","lastUpdated":1737012017000}'),e={name:"src/questions/front-engineering/5_Rollup.md"};function p(t,s,h,k,o,r){return n(),a("div",null,s[0]||(s[0]=[l('<h1 id="rollup" tabindex="-1">Rollup <a class="header-anchor" href="#rollup" aria-label="Permalink to &quot;Rollup&quot;">​</a></h1><h2 id="什么是-rollup-它与-webpack-有何不同" tabindex="-1">什么是 Rollup？它与 Webpack 有何不同？ <a class="header-anchor" href="#什么是-rollup-它与-webpack-有何不同" aria-label="Permalink to &quot;什么是 Rollup？它与 Webpack 有何不同？&quot;">​</a></h2><h4 id="类型-基础" tabindex="-1">类型：<code>基础</code> <a class="header-anchor" href="#类型-基础" aria-label="Permalink to &quot;类型：`基础`&quot;">​</a></h4><h4 id="级别-w1、w2、w3、w4、w5、w6" tabindex="-1">级别：<code>W1</code>、<code>W2</code>、<code>W3</code>、<code>W4</code>、<code>W5</code>、<code>W6</code> <a class="header-anchor" href="#级别-w1、w2、w3、w4、w5、w6" aria-label="Permalink to &quot;级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`&quot;">​</a></h4><h4 id="解答-6-分" tabindex="-1">解答（6 分） <a class="header-anchor" href="#解答-6-分" aria-label="Permalink to &quot;解答（6 分）&quot;">​</a></h4><ul><li><p><strong>6：</strong> Rollup 是一个 JavaScript 模块打包器，主要用于将多个模块捆绑成一个或多个文件。与 Webpack 相比，Rollup 主要优化了代码的静态分析和树摇（Tree Shaking），它特别适用于构建 JavaScript 库和模块。</p></li><li><p>模块系统支持：Rollup 专注于 ES6 模块（ESM），而 Webpack 则支持多种模块系统（CommonJS、AMD、ESM 等）。</p></li><li><p>性能：Rollup 对于构建库的性能比 Webpack 更好，因为它优化了打包过程，特别是树摇（Tree Shaking）。</p></li><li><p>输出格式：Rollup 支持多种输出格式（如 ES、CommonJS、UMD、IIFE 等），而 Webpack 更加侧重于打包应用程序。</p></li><li><p>插件系统：Rollup 的插件系统比 Webpack 更简洁，WebPack 插件系统更强大，适合复杂的应用场景。</p></li><li><p>在 Rollup 中，树摇是默认启用的，只要你使用了 ES 模块的语法，并且在构建时选择生产模式（如设置 minify 或 treeshake），就能自动进行树摇优化</p></li><li><p>Rollup 的插件系统非常强大，可以通过 plugins 配置项来引入各种插件。插件可以用来处理各种功能，如转换文件格式、代码压缩、代码分割、环境变量注入等。</p></li></ul><h2 id="在-rollup-中-如何实现多入口打包" tabindex="-1">在 Rollup 中，如何实现多入口打包？ <a class="header-anchor" href="#在-rollup-中-如何实现多入口打包" aria-label="Permalink to &quot;在 Rollup 中，如何实现多入口打包？&quot;">​</a></h2><h4 id="类型-基础-1" tabindex="-1">类型：<code>基础</code> <a class="header-anchor" href="#类型-基础-1" aria-label="Permalink to &quot;类型：`基础`&quot;">​</a></h4><h4 id="级别-w1、w2、w3、w4、w5、w6-1" tabindex="-1">级别：<code>W1</code>、<code>W2</code>、<code>W3</code>、<code>W4</code>、<code>W5</code>、<code>W6</code> <a class="header-anchor" href="#级别-w1、w2、w3、w4、w5、w6-1" aria-label="Permalink to &quot;级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`&quot;">​</a></h4><h4 id="解答-2-分" tabindex="-1">解答（2 分） <a class="header-anchor" href="#解答-2-分" aria-label="Permalink to &quot;解答（2 分）&quot;">​</a></h4><ul><li><strong>2：</strong> 在 Rollup 配置文件中，可以通过将input设置为一个对象来实现多入口打包。例如：</li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    input: {</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        main: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;entry-main.js&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        secondary: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;entry-secondary.js&#39;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    output: {</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        dir: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;dist&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        format: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;esm&#39;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//在上述配置中，input是一个对象，main和secondary是两个入口的名称，对应各自的入口文件路径。output.dir指定了输出目录，Rollup 会根据不同的入口文件，在dist目录下生成对应的打包文件（如main.js和secondary.js，具体文件名根据配置和输出格式而定）。</span></span></code></pre></div><h2 id="简述-rollup-的watch模式的作用及使用方法" tabindex="-1">简述 Rollup 的watch模式的作用及使用方法 <a class="header-anchor" href="#简述-rollup-的watch模式的作用及使用方法" aria-label="Permalink to &quot;简述 Rollup 的watch模式的作用及使用方法&quot;">​</a></h2><h4 id="类型-基础-2" tabindex="-1">类型：<code>基础</code> <a class="header-anchor" href="#类型-基础-2" aria-label="Permalink to &quot;类型：`基础`&quot;">​</a></h4><h4 id="级别-w1、w2、w3、w4、w5、w6-2" tabindex="-1">级别：<code>W1</code>、<code>W2</code>、<code>W3</code>、<code>W4</code>、<code>W5</code>、<code>W6</code> <a class="header-anchor" href="#级别-w1、w2、w3、w4、w5、w6-2" aria-label="Permalink to &quot;级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`&quot;">​</a></h4><h4 id="解答-3-分" tabindex="-1">解答（3 分） <a class="header-anchor" href="#解答-3-分" aria-label="Permalink to &quot;解答（3 分）&quot;">​</a></h4><details><ul><li><strong>1：</strong> 作用：Rollup 的watch模式的作用是在开发过程中，当源文件发生变化时，自动重新打包，提高开发效率。</li><li><strong>1：</strong> 方法一：命令行方式，在项目目录下的package.json中添加script脚本：</li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>\n<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;scripts&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>\n<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;dev&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;rollup -c --watch&quot;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//然后在命令行执行npm run dev，Rollup 会启动watch模式，监听配置文件（rollup.config.js）中指定的输入文件的变化，一旦文件有改动，就会自动重新打包。</span></span></code></pre></div><ul><li><strong>1：</strong> 方法二：在rollup.config.js中也可以配置watch选项：</li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    input: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;input.js&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    output: {</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        file: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;output.js&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        format: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;esm&#39;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    watch: {</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        include: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;src/**&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        exclude: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;node_modules/**&#39;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//这里include指定了需要监听的文件或目录，exclude指定了不需要监听的文件或目录。之后通过rollup -c命令启动 Rollup，就会按照配置的watch选项进行监听。</span></span></code></pre></div></details><h2 id="如何使用rollup构建一个复杂的项目" tabindex="-1">如何使用Rollup构建一个复杂的项目？ <a class="header-anchor" href="#如何使用rollup构建一个复杂的项目" aria-label="Permalink to &quot;如何使用Rollup构建一个复杂的项目？&quot;">​</a></h2><h4 id="类型-基础-3" tabindex="-1">类型：<code>基础</code> <a class="header-anchor" href="#类型-基础-3" aria-label="Permalink to &quot;类型：`基础`&quot;">​</a></h4><h4 id="级别-w1、w2、w3、w4、w5、w6-3" tabindex="-1">级别：<code>W1</code>、<code>W2</code>、<code>W3</code>、<code>W4</code>、<code>W5</code>、<code>W6</code> <a class="header-anchor" href="#级别-w1、w2、w3、w4、w5、w6-3" aria-label="Permalink to &quot;级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`&quot;">​</a></h4><h4 id="解答-6-分-1" tabindex="-1">解答（6 分） <a class="header-anchor" href="#解答-6-分-1" aria-label="Permalink to &quot;解答（6 分）&quot;">​</a></h4><details><ul><li><strong>1：</strong> 初始化项目：创建一个新的项目目录，在项目目录下打开终端，执行<code>npm init -y</code>命令，快速创建一个package.json文件，用于管理项目的依赖和脚本。</li><li><strong>1：</strong> 安装 Rollup 及相关插件：安装 Rollup<code>npm install rollup --save-dev</code>, 根据项目需求安装必要的插件，如<code>rollup-plugin-node-resolve</code>用于解 析node_modules中的模块，<code>rollup-plugin-commonjs</code>用于将CommonJS模块转换为ES6模块，<code>rollup-plugin-babel</code>用于将ES6及以上版本的代码转换为兼容旧浏览器的代码等。</li><li><strong>1：</strong> 配置 Rollup：在项目根目录下创建rollup.config.js文件，这是 Rollup 的配置文件。在该文件中，定义项目的入口文件、输出选项、插件等。示例如下：</li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> resolve </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;rollup-plugin-node-resolve&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> commonjs </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;rollup-plugin-commonjs&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> babel </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;rollup-plugin-babel&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  input: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;src/index.js&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  output: {</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    file: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;dist/bundle.js&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    format: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;umd&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;MyComplexProject&#39;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  plugins: [</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    resolve</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(),</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    commonjs</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(),</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    babel</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      exclude: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;node_modules/**&#39;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    })</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ]</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div><ul><li><strong>0：</strong> 编写项目代码：在src目录下创建项目所需的各种模块和文件，按照项目的功能和逻辑进行合理的组织和划分。使用ES6的模块系统（import和export）来管理模块之间的依赖关系。</li><li><strong>1：</strong> 处理资源文件：如果项目中有CSS、图片、字体等资源文件，需要安装相应的插件来处理。例如，使用<code>rollup-plugin-postcss</code>处理CSS文件，使用<code>rollup-plugin-url</code>处理图片和字体文件等</li><li><strong>1：</strong> 优化和压缩代码：为了提高项目的性能，可以使用插件对打包后的代码进行优化和压缩。例如，使用<code>rollup-plugin-terser</code>插件来压缩JavaScript代码，使 用<code>postcss-minify</code>插件来压缩CSS代码等。</li><li><strong>1：</strong> 配置开发和生产环境：在package.json文件中配置scripts脚本，用于在开发和生产环境下运行 Rollup。例如：</li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>\n<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;scripts&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>\n<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;dev&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;rollup -c --watch&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>\n<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;build&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;rollup -c&quot;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//dev脚本用于在开发环境下启动 Rollup 的监听模式，当源文件发生变化时自动重新打包。build脚本用于在生产环境下执行打包操作。</span></span></code></pre></div><ul><li><strong>0：</strong> 测试和部署：在本地对项目进行测试，确保功能正常。然后将打包后的文件部署到服务器上，供用户访问。</li></ul></details>',22)]))}const c=i(e,[["render",p]]);export{E as __pageData,c as default};
