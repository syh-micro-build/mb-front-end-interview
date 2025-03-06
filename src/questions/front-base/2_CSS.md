# CSS

## CSS 有哪些选择器？权重是如何计算的？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2 分）

- **1：**
  + 基本选择器：ID 选择器 > 类选择器/伪类选择器/属性选择器 > 元素选择器/伪元素选择器 > 通配符选择器
  + 关系选择器：后代选择器、父子选择器、兄弟选择器
- **1：** ID 选择器是百分位，类选择器/伪类选择器/属性选择器是十分位，元素选择器/伪元素选择器是个位，计算选择器组合后的数字就可以作为权重大小，通配符选择器与关系选择器都是零位，没有权重。

## 样式引入 link 和@import 的区别是什么？

#### 类型：`基础`

#### 级别：`W3`、`W4`、`W5`、`W6`

#### 解答（4 分）

- **1：** 语法和使用位置：link属于HTML标签，在`<head>`标签内使用；在 CSS 文件中或 HTML 文件的`<style>`标签内使用，或CSS文件中使用。
- **1：** 加载顺序：link 与 HTML 并行加载；@import 在页面加载完后加载，会阻塞后续资源。
- **1：** 兼容性：link 所有主流浏览器都支持；@import 老版本浏览器（如 IE5 以下）可能不支持。
- **1：** 性能：link 性能影响小，页面渲染快；@import 可能延长页面加载时间。

## CSS中 transition和animation的区别？

#### 类型：`拓展`

#### 级别：`W3`、`W4`、`W5`、`W6`

#### 解答（1 分）

- **1：**  Animation和transition大部分属性是相同的，他们都是随时间改变元素的属性值，他们的主要区别是transition需要触发一个事件才能改变属性，
而animation不需要触发任何事件的情况下才会随时间改变属性值，并且transition为2帧，从from .... to，而animation可以一帧一帧的。

## margin 和 padding 的使用场景

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（1 分）

- **1：**
  + 需要在border外侧添加空白，且空白处不需要背景（色）时，使用 margin；
  + 需要在border内测添加空白，且空白处需要背景（色）时，使用 padding。

## 如何清除浮动?

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2 分）

- **2：**
  + 用于父容器

    ```css
    .container {
      overflow: hidden;
    }
    ```

  + 用于指定元素

    ```css
    .clearfix {
      clear: both;
    }
    ```

  + 用于现代浏览器（不影响 overflow 行为）

    ```css
    .clearfix {
      display: flow-root
    }
    ```

  + 伪元素（兼容性较好）

    ```css
    .clearfix::after {
      content: "";
      display: block;
      clear: both;
    }
    ```

## 使元素消失的方法?

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（1 分）

- **1：**
  + `visibility: hidden;`
    - 使元素不可见，但仍然占据文档流中的空间。
    - 不可交互，无法点击、聚焦等。
    - 适用于需要隐藏但保持布局的场景，比如工具提示的隐藏与显示。
  + `display: none;`
    - 彻底移除元素，不会在页面上渲染，不占空间。
    - 不可交互，也不会影响其他元素的排列。
    - 适用于需要完全隐藏的场景，比如选项卡切换时隐藏某个内容区域。
  + `opacity: 0;`
    - 使元素完全透明，但仍然占据空间，不会影响页面布局。
    - 仍然可交互，即便不可见，鼠标事件仍然可触发。
    - 常用于淡入淡出动画，比如 transition: opacity 0.5s ease;。
  + `z-index: -1;`
    - 降低层级，可能导致被其他元素遮挡，但如果没有覆盖物，仍然可见。
    - 仍然占据空间，也仍然可交互，如果页面上没有其他元素遮挡，仍可点击。
    - 常用于背景图层或某些动画效果（如使元素看起来“沉入”页面）。

## 理解BFC吗？

#### 类型：`基础`

#### 级别：`W3`、`W4`、`W5`、`W6`

#### 解答（3 分）

- **1：**
  BFC（Block Formatting Context，块级格式化上下文）是CSS 布局中的一种渲染机制，它决定了块级元素如何定位及相互影响。BFC 具有独立的布局规则，内部元素不会影响外部元素。
- **2：**
  + 防止 margin 折叠，让相邻元素的 margin 不会合并
  + 清除浮动，让父元素包裹浮动子元素，防止高度塌陷
  + 隔离布局，避免浮动元素影响其他元素
  + 适应性布局，让 float 元素与普通元素共存

## 解释 CSS 中的 flex 布局，并列举一些常用的 flex 属性及其作用

#### 类型：`基础`

#### 级别：`W3`、`W4`、`W5`、`W6`

#### 解答（2 分）

- **2：**
  flex 布局（弹性布局）可以更方便地实现各种复杂的布局。常用属性包括：
  + display: flex：将容器设置为弹性容器。
  + flex-direction：指定主轴方向，如 row（水平，从左到右）、row-reverse（水平，从右到左）、column（垂直，从上到下）、column-reverse（垂直，从下到上）。
  + justify-content：在主轴上对齐项目，如 flex-start（起始位置对齐）、flex-end（末尾位置对齐）、center（居中对齐）、space-between（两端对齐，项目之间均匀分布）、space-around（每个项目两侧均匀分布）。
  + align-items：在交叉轴上对齐项目，类似 justify-content 有 flex-start、flex-end、center、baseline（项目第一行文字基线对齐）、stretch（默认值，拉伸项目以适应容器）等取值。

## 回流和重绘是什么？如何减少这类动作？

#### 类型：`基础`

#### 级别：`W4`、`W5`、`W6`

#### 解答（6 分）

- **1：** 回流（Reflow）是指浏览器重新计算元素的几何位置和尺寸，并重新布局整个或部分页面，性能开销较高
- **2：** 减少下方操作可以避免回流
  + 操作DOM元素
  + 修改元素布局属性（width、height、padding、border、margin、top、left、position、display）
  + 监听窗口变化（resize ）
  + 读取元素相对位置（offsetWidth、offsetHeight、clientWidth、clientHeight）
- **1：** 重绘（Repaint）是指当元素的样式发生变化，但不影响布局时，浏览器重新绘制该元素，性能开销较低
- **2：** 减少下方操作可以避免重绘
  + 修改颜色相关样式（color、background等）
  + 修改阴影相关样式（box-shadow等）
  + 修改显隐相关样式（display、visibility、opacity等）

## 如何使用 calc() 函数？

#### 类型：`基础`

#### 级别：`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（1 分）

- **1：** calc() 允许你在 CSS 中执行简单的数学运算，注意运算符前后一定要有空格，否则不生效。例如：

```css
  width: calc(100% - 20px);
```

## CSS 中常用的布局方式有哪些？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（9 分）

- **1：** 普通流布局（Normal Flow）。即默认文档流布局，如：文章、博客；
- **1：** 浮动布局（Float）。适合元素环绕和多列布局，如：图文环绕、商品列表；
- **1：** 定位布局（Position）。适合指定位置布局，如：悬浮按钮、固定导航栏、弹窗；
- **1：** 弹性布局（Flex）。适合一维布局（横向或纵向），如：导航栏、卡片列表、响应式设计；
- **1：** 网格布局（Grid）。适合二维布局（横向和纵向），如：整体网页布局、栅格设计；
- **1：** 多列布局（Multi Column）。`.columns {column-count: 3;column-gap: 20px;}`;如：新闻排版、杂志排版；
- **1：** 自适应布局（Responsive）。@media，适合跨设备展示的布局，如：网页响应式设计、跨设备兼容布局；
- **1：** 容器查询布局（Responsive）。`container-type: inline-size;@container`，适合容器内布局，如：组件响应式设计、（低代码）组件化开发；
- **1：** 子网格布局（Subgrid）。适合容器内响应布局，如：复杂表单、复杂表格、复杂列表；

## 解释 transform、translate、scale、rotate 等属性的使用？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（4 分）

- **1：** transform 用于在 2D 或 3D 空间中对元素进行旋转、缩放、平移等操作。
- **1：** translate(x, y)：平移元素
- **1：** rotate(deg)：旋转元素。
- **1：** scale(x, y)：缩放元素。

## 谈谈你对盒模型的理解？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2 分）

- **1：** 标准盒模型：`box-sizing: content-box;`，实际占用宽度 = width + padding + border
- **1：** 怪异盒模型：`box-sizing: border-box;`，实际占用宽度 = width（不会额外增加 padding 和 border）

## CSS3有哪些重要的新特性？

#### 类型：`基础`

#### 级别：`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（5 分）

- **1：** 选择器和伪类：
  + 属性选择器增强
  + 新增伪类：:nth-child()、:first-of-type等
  + 伪元素使用双冒号::before

- **1：** 视觉效果：
  + 圆角(border-radius)
  + 阴影(text-shadow/box-shadow)
  + 渐变(linear-gradient/radial-gradient)
  + RGBA和HSLA颜色
  + 不透明度(opacity)

- **1：** 转换和动画：
  + 2D/3D转换(transform)
  + 过渡效果(transition)
  + 动画效果(animation/@keyframes)

- **1：** 布局能力：
  + 弹性布局(display: flex)
  + 网格布局(display: grid)
  + 多列布局(column-count)
  + 盒模型调整(box-sizing)

- **1：** 响应式设计：
  + 媒体查询(@media)
  + 视口单位(vh/vw)
  + 图像适配(object-fit)
  + 自定义属性(变量)

## 谈谈你对CSS属性继承的理解

#### 类型：`基础`

#### 级别：`W3`、`W4`、`W5`、`W6`

#### 解答（5 分）

- **1：** 可继承属性
  + 字体相关：font、font-family、font-size、font-style、font-variant、font-weight
  + 文本相关：color、letter-spacing、line-height、visibility、cursor、direction
- **1：** 不可继承属性
  + 盒模型：width、height、margin、padding、border
  + 定位 & 布局：display、position、top、left、right、bottom、z-index、overflow
  + 背景 & 其他：background、box-shadow、visibility
- **1：** 强制继承或不继承
  + 强制继承：inherit，`background-color: inherit;`
  + 阻止继承：initial，`color: initial;`
  + 恢复原继承模式：unset，多用于样式重置

    ```css
    .reset {
      color: unset;  /*对于 color，相当于 inherit */
      border: unset; /* 对于 border，相当于 initial，变为默认无边框*/
      /*或*/
      all: unset;
    }
    ```

- **1:** 作用
  + 减少重复定义，降低代码量
  + 特定情境禁止继承，保证元素独立性

## CSS 性能优化

#### 类型：`基础`

#### 级别：`W3`、`W4`、`W5`、`W6`

#### 解答（6 分）

- **3：** 减少文件体积
  + 使用css代码压缩工具
  + 图片压缩
  + 使用css预处理工具（less、sass等）
  + 雪碧图
  + 合理使用属性继承
  + 减少重复声明
- **2：** 降低计算成本
  + 减少回流重绘
  + 避免选择器嵌套
  + 优先使用id、类选择器
  + 合理使用css计算属性
- **1：** 减少渲染阻塞
  + 避免使用@import
  + 合理拆分合并css文件，减少http请求数

## 单行、多行文本溢出隐藏

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`

#### 解答（3 分）

- 单行文本溢出

```css
.text-overflow {
  overflow: hidden;            // 溢出隐藏
  text-overflow: ellipsis;      // 溢出用省略号显示
  white-space: nowrap;         // 规定段落中的文本不进行换行
}
```

- 多行文本溢出

```css
.text-overflow {
  display: -webkit-box;         // 作为弹性伸缩盒子模型显示
  -webkit-box-orient: vertical; // 设置伸缩盒子的子元素排列方式--从上到下垂直排列
  -webkit-line-clamp: 3;        // 显示的行数
  overflow: hidden;             // 溢出隐藏
  text-overflow: ellipsis;      // 溢出用省略号显示
}
```

## 如何根据设计稿进行移动端适配？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2 分）

- **1:** 使用 rem，em，vw，vh 等相对单位针对设计稿进行px换算；
- **1:** 使用现成的 npm 包，如 postcss-pxtorem 进行换算支持。

## 实现一个扇形

#### 类型：`编程`

#### 级别：`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（5 分）

- 用CSS实现扇形的思路和三角形基本一致，就是多了一个圆角的样式，实现一个90°的扇形：

```css
div{
    border: 100px solid transparent;
    width: 0;
    height: 0;
    border-radius: 100px;
    border-top-color: red;
}
```

## 画一条0.5px的线

#### 类型：`拓展`

#### 级别：`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（4 分）

- **2:** 采用transform: scale()的方式，该方法用来定义元素的2D 缩放转换：

```css
transform: scale(0.5,0.5);
```

- **2:** 采用meta viewport的方式

```html
<meta name="viewport" content="width=device-width, initial-scale=0.5, minimum-scale=0.5, maximum-scale=0.5"/>
```

## 相邻图片为什么会产生间隙？该如何处理？

#### 类型：`基础`

#### 级别：`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（4 分）

- **1:** 图片标签是行内块元素，浏览器会将相邻行内块之间的空白字符解析为空格，从而产生间隙。
- **3:** 处理方式
  + 使用`display: block`；
  + 使用负 margin 值；
  + 父容器`font-size: 0`；

## 单冒号和双冒号有什么区别？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2 分）

- **1:** 单冒号用于CSS3伪类（`:hover`、`:nth-child()`）
- **1:** 双冒号用于CSS3伪元素（`::before`、`::after`）

## CSS 居中

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（4 分）

- **1:** 水平居中
  + `text-align: center;`（文本、行内元素、行内块元素）
  + `margin: auto;（`已知宽度的块级元素）
  + `display: flex;justify-content: center;`（任意元素）
- **1:** 垂直居中
  + `line-height`（适用于单行文本）
  + `display: flex;align-items: center;`（任意元素）
  + `position + transform`（任意元素）

    ```css
    .parent {
      position: relative;
    }

    .child {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }
    ```

- **1:** 水平居中+垂直居中
  + `flex`（任意元素），参考上方
  + `position + transform`（任意元素），参考上方
  + `possition + translate`（定宽定高）

    ```css
    .fixed {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    ```

  + `display: grid;place-items: center;`（现代浏览器）

## 使用 CSS Grid 实现响应式圣杯布局，页面包含头部(header)、主内容(main)、侧边栏(sidebar)、底部(footer)

#### 类型：`编程`、`拓展`

#### 级别：`W3`、`W4`、`W5`、`W6`

#### 解答（6 分）

```css
/* 容器定义 */
.layout {
  display: grid;
  grid-template-columns: 200px 1fr; /* 侧边栏固定200px，主内容自适应宽度 */
  grid-template-rows: 60px 1fr 60px; /* 头部、底部高60px，内容自适应高度 */
  grid-template-areas:
    "header header header"
    "sidebar main main"
    "footer footer footer";
  gap: 15px;
  min-height: 100vh;
}

/* 区块分配 */
.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }
```

## CSS 动画和过渡的区别是什么？如何使用它们？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（6 分）

<details>

- **2：** 过渡（Transition）：
  + 从一个状态到另一个状态的平滑过渡
  + 需要触发条件（如hover）
  + 只能定义开始和结束状态

```css
.element {
    width: 100px;
    transition: width 0.3s ease;
}

.element:hover {
    width: 200px;
}
```

- **2：** 动画（Animation）：
  + 可以定义多个状态的变化
  + 可以循环播放
  + 可以自动播放，无需触发条件

```css
@keyframes slide {
    0% {
        transform: translateX(0);
    }
    50% {
        transform: translateX(100px);
    }
    100% {
        transform: translateX(0);
    }
}

.element {
    animation: slide 2s ease infinite;
}
```

- **2：** 主要区别：
  + 触发方式：过渡需要触发条件，动画可以自动播放
  + 状态数量：过渡只有开始和结束两个状态，动画可以有多个状态
  + 循环播放：动画可以循环播放，过渡不能
  + 控制能力：动画的控制能力更强，可以精确控制中间状态

</details>

## CSS 中的 BEM 命名规范是什么？为什么要使用它？

#### 类型：`拓展`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2 分）

<details>

- **2：** BEM 命名规范：
  + Block（块）：独立的组件，如 `.button`
  + Element（元素）：属于块的一部分，用 `__` 连接，如 `.button__text`
  + Modifier（修饰符）：改变块或元素的外观或行为，用 `--` 连接，如 `.button--large`

- **2：** 使用BEM的好处：
  + 提高代码的可读性和可维护性
  + 避免CSS选择器嵌套过深
  + 减少命名冲突
  + 明确表达组件结构和关系
  + 方便团队协作和代码复用

</details>

## display的block、inline和inline-block的区别

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`

#### 解答（1 分）

block： 会独占一行，多个元素会另起一行，可以设置width、height、margin和padding属性；

inline： 元素不会独占一行，设置width、height属性无效。但可以设置水平方向的margin和padding属性，不能设置垂直方向的padding和margin；

inline-block： 将对象设置为inline对象，但对象的内容作为block对象呈现，之后的内联对象会被排列在同一行内。

## 为什么有时候⽤translate来改变位置⽽不是定位？

#### 类型：`基础`

#### 级别：`W3`、`W4`、`W5`、`W6`

#### 解答（2 分）

- **1：** transform 触发 GPU 加速，减少回流。
- **1：** position 修改会触发布局计算，性能更低。

## 对 CSS Sprites 的理解

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2 分）

- **1：** CSSSprites（精灵图、雪碧图），将一个页面涉及到的所有小图片都包含到一张大图中去，然后利用CSS的 background-image，background-repeat，background-position属性的组合进行背景定位。
- **1:** 优点：
  + 减少HTTP请求数，极大地提高页面加载速度
  + 增加图片信息重复度，提高压缩比，减少图片大小
  + 减少图片的总大小
- **1:** 缺点：
  + 图片合并麻烦
  + 维护麻烦，修改一个图片可能需要重新布局整个图片，样式调试工作量很大

## 什么是物理像素，逻辑像素和像素密度，为什么在移动端开发时需要用到@3x, @2x这种图片？

#### 类型：`拓展`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（3 分）

- **1：** 物理像素 是屏幕上的实际像素点，逻辑像素 是开发者在 CSS 中使用的抽象单位。
- **1：** 像素密度 决定了物理像素与逻辑像素的比例，常见比例有 @1x、@2x 和 @3x。
- **1：** 在移动端开发中，使用 @2x 和 @3x 图片是为了适配高像素密度屏幕，确保图片在不同设备上都能保持清晰。

## CSS预处理器/后处理器是什么？

#### 类型：`基础`

#### 级别：`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2 分）

- **1：** CSS 预处理器（less、sass），主要用于编写更具表达力和灵活性的样式代码，提供变量、嵌套、混合等功能，最终编译成标准 CSS。
- **1：** CSS 后处理器（PostCSS），在 CSS 编写完成后进行优化和增强，确保样式在不同环境下的最佳表现，如自动添加浏览器前缀、压缩代码等。

## 对媒体查询的理解？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2 分）

- **1：** 根据设备特性（如屏幕宽度）应用不同样式。
- **1：** 语法示例：`@media (max-width: 600px) { ... }`。

## 对 CSS 工程化的理解

#### 类型：`基础`

#### 级别：`W3`、`W4`、`W5`、`W6`

#### 解答（3 分）

- **1：** 规范化（Less/Sass+UnoCSS+Stylelint+Prettier）
  + 减少重复的样式代码
  + 减少样式冲突
  + 提升代码可维护性
- **1：** 模块化（CSS Module / CSS in JS）
  + 避免类名全局污染
  + 提高复用性
- **1：** 自动化（Webpack/Vite+PostCSS）
  + 按需加载：拆分代码，减少首屏加载时间
  + 代码压缩：减小文件体积
  + 摇树：剔除无用样式
  + 兼容：生成浏览器样式前缀

## 什么是margin重叠问题？如何解决？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2 分）

- **1：** 垂直方向相邻块元素 margin 会合并，合并后取最大值。
- **1：** 解决方案
  + 触发 BFC（仅适用父子关系的margin重叠）
  + 使用 padding 替代
  + 将其中一个块元素改为行内块元素

## 为什么要初始化 CSS 样式

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（1 分）

消除浏览器默认样式差异（如 margin、padding），便于布局。

## 什么是 FOUC（无样式内容闪烁）？你如何来避免 FOUC？

#### 类型：`拓展`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（1 分）

无样式内容闪烁，因 CSS 加载延迟。解决方案：将 CSS 放在 `<head>` 中，避免使用 @import。

## 浏览器是怎样解析CSS选择器的？

#### 类型：`拓展`

#### 级别：`W3`、`W4`、`W5`、`W6`

#### 解答（2 分）

- **1：** 从右向左解析。如： `.nav > li a` 先匹配 a，再向上查找 li 和 .nav；
- **1：** 减少回溯开销

## 在网页中应该使用奇数还是偶数的字体？

#### 类型：`拓展`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（1 分）

推荐偶数字体（如 14px、16px），避免点阵字体渲染问题。

## 元素竖向百分比设定依据？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（1 分）

竖向百分比（如 padding-top）依据父容器宽度计算。

## 如果需要手动写动画，你认为最小时间间隔是多久，为什么？

#### 类型：`基础`

#### 级别：`W3`、`W4`、`W5`、`W6`

#### 解答（2 分）

多数显示器默认频率是60Hz，即1秒刷新60次，所以理论上最小间隔为1/60＊1000ms ＝ 16.7ms。