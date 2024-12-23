import{_ as a,c as i,a0 as s,o as n}from"./chunks/framework.HNGcFqhl.js";const u=JSON.parse('{"title":"TypeScript","description":"","frontmatter":{},"headers":[],"relativePath":"src/questions/front-base/4_TypeScript.md","filePath":"src/questions/front-base/4_TypeScript.md","lastUpdated":1734921744000}'),t={name:"src/questions/front-base/4_TypeScript.md"};function l(o,e,r,d,h,c){return n(),i("div",null,e[0]||(e[0]=[s('<h1 id="typescript" tabindex="-1">TypeScript <a class="header-anchor" href="#typescript" aria-label="Permalink to &quot;TypeScript&quot;">​</a></h1><h2 id="_1、ts-如何定义对象结构体" tabindex="-1">1、ts 如何定义对象结构体 <a class="header-anchor" href="#_1、ts-如何定义对象结构体" aria-label="Permalink to &quot;1、ts 如何定义对象结构体&quot;">​</a></h2><h4 id="类型-基础" tabindex="-1">类型：<code>基础</code> <a class="header-anchor" href="#类型-基础" aria-label="Permalink to &quot;类型：`基础`&quot;">​</a></h4><h4 id="级别-w1、w2、w3、w4、w5、w6" tabindex="-1">级别：<code>W1</code>、<code>W2</code>、<code>W3</code>、<code>W4</code>、<code>W5</code>、<code>W6</code> <a class="header-anchor" href="#级别-w1、w2、w3、w4、w5、w6" aria-label="Permalink to &quot;级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`&quot;">​</a></h4><h4 id="解答-2-分" tabindex="-1">解答（2 分） <a class="header-anchor" href="#解答-2-分" aria-label="Permalink to &quot;解答（2 分）&quot;">​</a></h4><ul><li><strong>1：</strong> 接口（interface）用于定义更复杂或重复使用的对象类型。接口不仅可以用于定义对象结构，还能继承、扩展其他接口。</li></ul><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Person</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>\n<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    name</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>\n<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    age</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><ul><li><strong>1：</strong> type 也可以用于定义类型</li></ul><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Person</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>\n<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    name</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>\n<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    age</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="_2、type-和-interface的区别" tabindex="-1">2、type 和 interface的区别？ <a class="header-anchor" href="#_2、type-和-interface的区别" aria-label="Permalink to &quot;2、type 和 interface的区别？&quot;">​</a></h2><h4 id="类型-基础-1" tabindex="-1">类型：<code>基础</code> <a class="header-anchor" href="#类型-基础-1" aria-label="Permalink to &quot;类型：`基础`&quot;">​</a></h4><h4 id="级别-w1、w2、w3、w4、w5、w6-1" tabindex="-1">级别：<code>W1</code>、<code>W2</code>、<code>W3</code>、<code>W4</code>、<code>W5</code>、<code>W6</code> <a class="header-anchor" href="#级别-w1、w2、w3、w4、w5、w6-1" aria-label="Permalink to &quot;级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`&quot;">​</a></h4><h4 id="解答-2-分-1" tabindex="-1">解答（2 分） <a class="header-anchor" href="#解答-2-分-1" aria-label="Permalink to &quot;解答（2 分）&quot;">​</a></h4><details><ul><li><strong>1：</strong> interface 可以重复声明，type 不行</li><li><strong>1：</strong> 继承方式不一样，type 使用交叉类型方式，interface使用extends实现，在对象扩展的情况下，使用接口继承要比交叉类型的性能更好</li><li>建议使用interface来描述对象对外暴露的借口，使用type将一组类型重命名（或对类型进行复杂编程）。</li></ul></details><h2 id="_3、常用工具类型" tabindex="-1">3、常用工具类型？ <a class="header-anchor" href="#_3、常用工具类型" aria-label="Permalink to &quot;3、常用工具类型？&quot;">​</a></h2><h4 id="类型-基础-2" tabindex="-1">类型：<code>基础</code> <a class="header-anchor" href="#类型-基础-2" aria-label="Permalink to &quot;类型：`基础`&quot;">​</a></h4><h4 id="级别-w1、w2、w3、w4、w5、w6-2" tabindex="-1">级别：<code>W1</code>、<code>W2</code>、<code>W3</code>、<code>W4</code>、<code>W5</code>、<code>W6</code> <a class="header-anchor" href="#级别-w1、w2、w3、w4、w5、w6-2" aria-label="Permalink to &quot;级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`&quot;">​</a></h4><h4 id="解答-7-分" tabindex="-1">解答（7 分） <a class="header-anchor" href="#解答-7-分" aria-label="Permalink to &quot;解答（7 分）&quot;">​</a></h4><details><ul><li><strong>1：</strong> Partial：满足部分属性(一个都没满足也可)即可</li><li><strong>1：</strong> Required：所有属性都需要</li><li><strong>1：</strong> Readonly: 包装后的所有属性只读</li><li><strong>1：</strong> Pick: 选取部分属性</li><li><strong>1：</strong> Omit: 去除部分属性</li><li><strong>1：</strong> Extract: 交集</li><li><strong>1：</strong> Exclude: 差集</li></ul></details><h2 id="_4、any、never、unknown、null-undefined-和-void-有什么区别" tabindex="-1">4、any、never、unknown、null &amp; undefined 和 void 有什么区别？ <a class="header-anchor" href="#_4、any、never、unknown、null-undefined-和-void-有什么区别" aria-label="Permalink to &quot;4、any、never、unknown、null &amp; undefined 和 void 有什么区别？&quot;">​</a></h2><h4 id="类型-基础-3" tabindex="-1">类型：<code>基础</code> <a class="header-anchor" href="#类型-基础-3" aria-label="Permalink to &quot;类型：`基础`&quot;">​</a></h4><h4 id="级别-w1、w2、w3、w4、w5、w6-3" tabindex="-1">级别：<code>W1</code>、<code>W2</code>、<code>W3</code>、<code>W4</code>、<code>W5</code>、<code>W6</code> <a class="header-anchor" href="#级别-w1、w2、w3、w4、w5、w6-3" aria-label="Permalink to &quot;级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`&quot;">​</a></h4><h4 id="解答-5-分" tabindex="-1">解答（5 分） <a class="header-anchor" href="#解答-5-分" aria-label="Permalink to &quot;解答（5 分）&quot;">​</a></h4><details><ul><li><strong>1：</strong> any: 动态的变量类型（失去了类型检查的作用）</li><li><strong>1：</strong> never: 永不存在的值的类型。例如：never 类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型</li><li><strong>1：</strong> unknown: 任何类型的值都可以赋给 unknown 类型，但是 unknown 类型的值只能赋给 unknown 本身和 any 类型</li><li><strong>1：</strong> null &amp; undefined: 默认情况下 null 和 undefined 是所有类型的子类型。 就是说你可以把 null 和 undefined 赋值给 number 类型的变量。当你指定了 --strictNullChecks 标记，null 和 undefined 只能赋值给 void 和它们各自</li><li><strong>1：</strong> void: 没有任何类型。例如：一个函数如果没有返回值，那么返回值可以定义为void</li></ul></details><h2 id="_5、-、-、-、-、-、-等符号的含义" tabindex="-1">5、?.、??、!、!.、_、** 等符号的含义？ <a class="header-anchor" href="#_5、-、-、-、-、-、-等符号的含义" aria-label="Permalink to &quot;5、?.、??、!、!.、_、** 等符号的含义？&quot;">​</a></h2><h4 id="类型-基础-4" tabindex="-1">类型：<code>基础</code> <a class="header-anchor" href="#类型-基础-4" aria-label="Permalink to &quot;类型：`基础`&quot;">​</a></h4><h4 id="级别-w1、w2、w3、w4、w5、w6-4" tabindex="-1">级别：<code>W1</code>、<code>W2</code>、<code>W3</code>、<code>W4</code>、<code>W5</code>、<code>W6</code> <a class="header-anchor" href="#级别-w1、w2、w3、w4、w5、w6-4" aria-label="Permalink to &quot;级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`&quot;">​</a></h4><h4 id="解答-6-分" tabindex="-1">解答（6 分） <a class="header-anchor" href="#解答-6-分" aria-label="Permalink to &quot;解答（6 分）&quot;">​</a></h4><details><ul><li><strong>1：</strong> ?. 可选链 遇到 null 和 undefined 可以立即停止表达式的运行</li><li><strong>1：</strong> ?? 空值合并运算符 当左侧操作数为 null 或 undefined 时，其返回右侧的操作数，否则返回左侧的操作数</li><li><strong>1：</strong> ! 非空断言运算符 x! 将从 x 值域中排除 null 和 undefined</li><li><strong>1：</strong> !. 在变量名后添加，可以断言排除undefined和null类型</li><li><strong>1：</strong> _数字分割符 分隔符不会改变数值字面量的值，使人更容易读懂数字 .e.g 1_101_324</li><li><strong>1：</strong> ** 求幂</li></ul></details><h2 id="_6、请解释一下-typescript-中的基本数据类型有哪些" tabindex="-1">6、请解释一下 TypeScript 中的基本数据类型有哪些？ <a class="header-anchor" href="#_6、请解释一下-typescript-中的基本数据类型有哪些" aria-label="Permalink to &quot;6、请解释一下 TypeScript 中的基本数据类型有哪些？&quot;">​</a></h2><h4 id="类型-基础-5" tabindex="-1">类型：<code>基础</code> <a class="header-anchor" href="#类型-基础-5" aria-label="Permalink to &quot;类型：`基础`&quot;">​</a></h4><h4 id="级别-w1、w2、w3、w4、w5、w6-5" tabindex="-1">级别：<code>W1</code>、<code>W2</code>、<code>W3</code>、<code>W4</code>、<code>W5</code>、<code>W6</code> <a class="header-anchor" href="#级别-w1、w2、w3、w4、w5、w6-5" aria-label="Permalink to &quot;级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`&quot;">​</a></h4><h4 id="解答-1-分" tabindex="-1">解答（1 分） <a class="header-anchor" href="#解答-1-分" aria-label="Permalink to &quot;解答（1 分）&quot;">​</a></h4><ul><li><strong>1：</strong> TypeScript 的基本数据类型包括：number（数字，包括整数和浮点数）、string（字符串）、boolean（布尔值，只有true和false）、null（表示空值）、undefined（表示未定义）、symbol（ES6 新增的一种原始数据类型，用于表示独一无二的值）和bigint（用于表示任意精度的整数）</li></ul>',34)]))}const k=a(t,[["render",l]]);export{u as __pageData,k as default};
