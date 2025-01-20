# CSS

## 1. CSS 有哪些选择器？权重是如何计算的？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2 分）

- **1：**
  + 基本选择器：ID 选择器 > 类选择器/伪类选择器/属性选择器 > 元素选择器/伪元素选择器 > 通配符选择器
  + 关系选择器：后代选择器、父子选择器、兄弟选择器
- **1：** ID 选择器是百分位，类选择器/伪类选择器/属性选择器是十分位，元素选择器/伪元素选择器是个位，计算选择器组合后的数字就可以作为权重大小，，通配符选择器与关系选择器都是零位，没有权重。

## 2. margin 和 padding 的使用场景

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（1 分）

- **1：**
  + 需要在border外侧添加空白，且空白处不需要背景（色）时，使用 margin；
  + 需要在border内测添加空白，且空白处需要背景（色）时，使用 padding。

## 3. 如何清除浮动?

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2 分）

- **2：**
  .clearfix{
    clear:both;
    content:'';
    display:block;
    width: 0;
    height: 0;
    visibility:hidden;
  }

## 4. 使元素消失的方法?

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（1 分）

- **1：**
  + visibility:hidden;
  + display:none;
  + opacity:0;
  + z-index:-1;

## 5. 理解BFC吗？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（1 分）

- **1：**
  BFC 即 Block Formatting Contexts (块级格式化上下文)。  
  具有 BFC 特性的元素可以看作是隔离了的独立容器，容器里面的元素不会在布局上影响到外面的元素，并且 BFC 具有普通容器所没有的一些特性。  
  通俗一点来讲，可以把 BFC 理解为一个封闭的大箱子，箱子内部的元素无论如何翻江倒海，都不会影响到外部。

## 6. 解释 CSS 中的 flex 布局，并列举一些常用的 flex 属性及其作用

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（1 分）

- **1：**
  flex 布局（弹性布局）可以更方便地实现各种复杂的布局。常用属性包括：
display: flex：将容器设置为弹性容器。
flex-direction：指定主轴方向，如 row（水平，从左到右）、row-reverse（水平，从右到左）、column（垂直，从上到下）、column-reverse（垂直，从下到上）。
justify-content：在主轴上对齐项目，如 flex-start（起始位置对齐）、flex-end（末尾位置对齐）、center（居中对齐）、space-between（两端对齐，项目之间均匀分布）、space-around（每个项目两侧均匀分布）。
align-items：在交叉轴上对齐项目，类似 justify-content 有 flex-start、flex-end、center、baseline（项目第一行文字基线对齐）、stretch（默认值，拉伸项目以适应容器）等取值。

## 7. 如何减少页面回流和重绘？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（5 分）

- **1：** 避免频繁地修改布局相关的属性: 尤其是在循环或高频事件中。例如，直接通过JavaScript频繁修改元素的 width、height 会触发回流
- **1：** 批量更新DOM: 使用 requestAnimationFrame 或 setTimeout 将多个操作合并成一次回流
- **1：** 避免修改宽高和布局计算的父元素：获取元素的 offsetHeight 后立即改变元素的尺寸属性，这会导致浏览器先进行回流，再去计算样式
- **1：** 使用transform和opacity代替布局属性 例如：获取元素的 offsetHeight 后立即改变元素的尺寸属性，这会导致浏览器先进行回流，再去计算样式。
- **1：** 避免频繁地修改布局相关的属性 :修改父元素的尺寸会引起子元素的回流，尽量避免直接操作父元素的尺寸，尤其是在大型布局中

## 8. 如何使用 calc() 函数？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（1 分）

- **1：** calc() 允许你在 CSS 中执行简单的数学运算。例如：

```css
  width: calc(100% - 20px);
```

## 9. CSS 中的三种常用布局方式？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（3 分）

- **1：** float 布局：通过浮动和清除浮动来实现布局
- **1：** flex 布局：更加现代和灵活，适用于一维布局
- **1：** grid 布局：二维布局，支持更复杂的布局

## 10 .什么是 viewport？如何在页面中设置视口大小？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（1 分）

- **1：** 视口是用户可以看到的网页区域。设置视口的常见做法是在 `<head>` 中添加如下标签

```html
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
```

## 11. 解释 transform、translate、scale、rotate 等属性的使用？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（4 分）

- **1：** transform 用于在 2D 或 3D 空间中对元素进行旋转、缩放、平移等操作。
- **1：** translate(x, y)：平移元素
- **1：** rotate(deg)：旋转元素。
- **1：** scale(x, y)：缩放元素。

## 12. 如何处理浏览器兼容性问题？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（4 分）

- **1：** 使用 CSS 前缀来兼容不同浏览器：例如，-webkit-，-moz-，-ms- 等。
- **1：** 使用 Autoprefixer 等工具自动添加前缀。
- **1：** 测试多个浏览器，确保关键功能正常
- **1：** 使用 CSS Reset 或 Normalize.css 来减少浏览器间的样式差异。

## 13. box-sizing: border-box 和 content-box 的区别？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2 分）

- **1：** content-box（默认值）：width 和 height 只包括内容区域，不包括 padding 和 border。
- **1：** border-box：width 和 height 包括内容区域、padding 和 border。

## 14. CSS3有哪些重要的新特性？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

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

## 15. CSS哪些属性可以继承

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（5 分）

<details>

- **1：** 不可继承的

  + display
    指定元素的显示方式，常见的值包括：
    block：块级元素，占据整行
    inline：行内元素，只占据必要的宽度，不换行
    inline-block：结合了 inline 和 block 的特性
    none：隐藏元素

  + margin
    设置元素外部的空白区域，即元素与其他元素之间的距离

  + border
    设置元素的边框可以指定边框的宽度、样式和颜色

  + padding
    设置元素内容与边框之间的内边距，控制元素内部的空白区域

  + background
    设置元素的背景，包括背景颜色、背景图像等

  + height
    指定元素的高度

  + min-height
    设置元素的最小高度，元素的高度不能小于此值

  + max-height
    设置元素的最大高度，元素的高度不能超过此值

  + width
    指定元素的宽度

  + min-width
    设置元素的最小宽度，元素的宽度不能小于此值

  + max-width
    设置元素的最大宽度，元素的宽度不能超过此值

  + overflow
    控制当内容溢出元素的边界时如何显示常见的值：
      visible：内容溢出时可见
      hidden：内容溢出时隐藏
      scroll：出现滚动条
      auto：根据需要自动显示滚动条

  + position
    设置元素的定位方式常见的值：
      static：默认值，元素按文档流排列
      relative：相对定位，元素相对于其原始位置偏移
      absolute：绝对定位，元素相对于最近的已定位祖先元素定位
      fixed：固定定位，元素相对于浏览器窗口定位
      sticky：粘性定位，元素在滚动到特定位置时变为固定定位

  + top, bottom, left, right
    当元素使用 position 定位时，指定元素相对于其定位上下文的偏移量

  + z-index
    控制重叠元素的堆叠顺序，值越大的元素会覆盖值较小的元素仅对定位元素有效

  + float
    指定元素是否浮动（通常用于让文本环绕图片等）常见的值：
      left：元素向左浮动
      right：元素向右浮动
      none：取消浮动

  + clear
    控制元素周围浮动元素的行为，通常与 float 一起使用常见的值：
      left：禁止元素左侧有浮动元素
      right：禁止元素右侧有浮动元素
      both：禁止元素两侧有浮动元素
      none：允许两侧都有浮动元素

  + table-layout
    控制表格布局的算法常见的值：
      auto：浏览器根据内容调整列宽（默认）
      fixed：浏览器根据表格的宽度固定列宽

  + vertical-align
    控制元素在垂直方向上的对齐方式常见的值：
      top：元素顶部对齐
      middle：元素垂直居中对齐
      bottom：元素底部对齐

  + page-break-after
    控制分页符的位置常见的值：
      auto：默认，自动决定分页
      always：强制分页
      avoid：避免分页

  + page-break-before
    与 page-break-after 类似，控制元素前面的分页符

  + unicode-bidi
    控制文本的双向性，通常与 direction 属性一起使用，用于处理多语言文本的显示常见的值：
      normal：正常的双向文本布局
      embed：强制嵌入的文本遵循本地的方向性
      bidi-override：覆盖文本的方向性，强制使用 direction 属性的值

- **1：** 所有元素可继承的

  + visibility
    visibility 属性控制元素的可见性，与 display: none 不同，使用 visibility: hidden 隐藏元素时，元素依然占据空间，但不可见；
    常见值包括：
      visible（默认值）：元素是可见的
      hidden：元素不可见，但仍然占据空间
      collapse：用于表格元素时，隐藏元素并且不占据空间（与 hidden 类似，但通常用于 `<tr>、<th>、<td>` 等表格元素）

  + cursor
    cursor 属性控制鼠标指针在元素上的样式，通常用于改变鼠标悬停在某个元素上时的外观；
    常见值包括：
      auto：默认指针，浏览器根据上下文决定指针样式
      pointer：显示手形指针，通常用于可点击的链接或按钮
      default：默认的光标样式
      none：隐藏鼠标指针
      wait：显示一个旋转的沙漏或类似的等待指针，表示操作正在进行
      move：显示一个四向箭头，表示可以移动元素
      text：显示文本光标，通常用于文本输入区域
      not-allowed：显示禁用的指针，通常表示该操作不可用
      help：显示问号光标，通常表示需要帮助的地方

- **1：** 终极块级元素可继承的

  + text-indent
    text-indent 用于控制文本的首行缩进；这个属性通常应用于块级元素，如 `<p>、<div>` 等，控制块内文本的缩进量；常见值：
      length：指定缩进的距离，例如 20px 或 2em
      %：表示缩进的百分比，基于元素的宽度
      initial：将属性恢复为默认值

  + text-align
    text-align 用于设置块级元素内文本的对齐方式，可以控制文本或内联元素在其父容器中的水平对齐，常见值：
      left：将文本对齐到左边
      right：将文本对齐到右边
      center：将文本居中
      justify：将文本两端对齐，通常用于段落，使得文本两端都紧贴容器
      start 和 end：依据书写方向（左到右或右到左）自动决定对齐方式

- **1：** 内联元素可继承的
  + letter-spacing
    letter-spacing 用于设置文本中字符之间的间距。它控制字母之间的距离，可以让文本看起来更加紧凑或更加宽松，常见值：
      normal：默认的字符间距，通常为 0
      length：指定字符间的间距，可以使用单位如 px、em、rem 等。例如，2px 或 0.1em

  + word-spacing
    word-spacing 用于设置单词之间的间距。它控制单词之间的空白区域，可以增加或减少单词间的空隙。
    常见值：
      normal：默认的单词间距。
      length：指定单词间距，可以使用 px、em、rem 等单位。

  + white-space
    white-space 用于控制元素内文本的空白字符处理方式。它决定了文本中的空格、换行等如何展示；常见值：
      normal：默认值，连续空白字符会合并为一个空格，文本会自动换行
      nowrap：文本不会换行，所有空白字符会被合并为一个空格
      pre：保留空格和换行符，类似于 `<pre>` 标签的效果
      pre-wrap：保留空格和换行符，文本会自动换行
      pre-line：合并多个空白字符，但保留换行符

  + line-height
    line-height 用于设置文本行与行之间的垂直间距。它控制行之间的间隔，通常用于改善文本的可读性；常见值：
      normal：默认的行高，通常为字体大小的 1.2 倍。
      number：指定行高为字体大小的倍数。
      length：指定固定的行高值，如 20px、1.5em。
      percentage：指定行高为字体大小的百分比。

  + color
    color 用于设置文本的颜色，常见值：
      color：任何有效的颜色值，例如 red、#ff0000、rgb(255, 0, 0)、rgba(255, 0, 0, 0.5)。

  + font

    font 是一个简写属性，用于设置字体相关的多个属性。它可以同时设置字体系列、字体样式、字体粗细、字体大小等；常见值：
      font-style、font-variant、font-weight、font-size、line-height、font-family
  + font-size
    font-size 用于设置文本的大小；常见值：
      length：如 12px、1em、0.75rem。
      percentage：相对于父元素的字体大小，如 150%。
      medium：默认字体大小。
      larger / smaller：相对于父元素字体大小的大小调整。

  + font-style
    font-style 用于设置文本的样式，通常用于斜体文本；常见值：
      normal：正常样式
      italic：斜体
      oblique：倾斜字体，通常与 italic 类似，但不是正式的斜体字形

  + font-variant
    font-variant 用于控制文本是否使用变体字体；常见值：
      normal：正常字体。
      small-caps：小型大写字母，通常用于显示大写字母，但它们比普通大写字母小。

  + font-weight
    font-weight 用于设置文本的粗细；常见值：
      normal：正常的字体粗细
      bold：加粗字体
      bolder：比父元素更粗
      lighter：比父元素更细
      number：可以指定 100 到 900 之间的数值，例如 400 是正常粗细，700 是加粗

  + text-decoration
    text-decoration 用于设置文本的装饰效果，如下划线、删除线等；常见值：
      none：无装饰
      underline：下划线
      overline：上划线
      line-through：删除线
      blink：闪烁的文本（大多数浏览器已不支持）

  + text-transform
    text-transform 用于控制文本的大小写转换；常见值：
      none：不转换大小写
      capitalize：将每个单词的首字母转换为大写
      uppercase：将所有字母转换为大写
      lowercase：将所有字母转换为小写

  + direction
    direction 用于设置文本的书写方向；常见值：
      ltr：从左到右（默认）
      rtl：从右到左，通常用于阿拉伯语、希伯来语等语言

- **1：** 列表元素可继承的属性
  + list-style
    list-style 是一个简写属性，用于设置列表项的标记类型、位置等。它同时设置 list-style-type、list-style-position 和 list-style-image；常见值：
      list-style-type：标记类型，如 disc、circle、square、decimal、none 等。
      list-style-position：标记的位置，inside 或 outside。
      list-style-image：指定列表项标记为图片。

  + list-style-type
    list-style-type 用于设置列表项的标记类型；常见值：
      disc：实心圆点（默认）
      circle：空心圆点
      square：方块
      decimal：数字列表（如 1, 2, 3）
      none：没有标记

  + list-style-position
    list-style-position 用于设置列表标记的位置；常见值：
      outside：标记在列表项外部（默认）
      inside：标记在列表项内部

  + list-style-image
    list-style-image 用于设置列表项标记为自定义图像；常见值：`url(<image-url>)：指定图像的 URL，如 url('bullet.png')`

</details>

## 16. CSS 性能优化

#### 类型：`拓展`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（4 分）

- **1：** 合并与压缩 CSS 文件：减少文件体积，降低网络传输时间，如使用工具将多个 CSS 文件合并为一个并压缩代码。
- **1：** 合理使用选择器：避免复杂嵌套，保持选择器简单高效，如.parent >.child比.parent.class1.class2 >.child性能更好。
- **1：** 优化图片资源：使用合适的图片格式与尺寸，对于小图标可考虑使用雪碧图或字体图标，减少 HTTP 请求。
- **1：** 利用 CSS 继承：将可继承的属性设置在父元素，减少重复声明，如color、font - family等。

## 17. CSS3中有哪些新特性

#### 类型：`拓展`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（3 分）

- 新增各种CSS选择器 （: not(.input)：所有 class 不是“input”的节点）

- 圆角 （border-radius:8px）

- 多列布局 （multi-column layout）

- 阴影和反射 （box-shadow 和 reflect）

- 文字特效 （text-shadow）

- 线性渐变 （gradient）

- 旋转 （transform）

- 媒体查询 （@media）

- 2D、3D 转换和动画

## 18. 单行、多行文本溢出隐藏

#### 类型：`拓展`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（3 分）

- 单行文本溢出

```css
overflow: hidden;            // 溢出隐藏
text-overflow: ellipsis;      // 溢出用省略号显示
white-space: nowrap;         // 规定段落中的文本不进行换行
```

- 多行文本溢出

```css
display: -webkit-box;         // 作为弹性伸缩盒子模型显示
-webkit-box-orient: vertical; // 设置伸缩盒子的子元素排列方式--从上到下垂直排列
-webkit-line-clamp: 3;        // 显示的行数
overflow: hidden;             // 溢出隐藏
```

## 19. Sass、Less 是什么？为什么要使用他们？

#### 类型：`拓展`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（3 分）

- 他们都是 CSS 预处理器，是 CSS 上的一种抽象层。他们是一种特殊的语法/语言编译成 CSS。 例如 Less 是一种动态样式语言，将 CSS 赋予了动态语言的特性，如变量，继承，运算， 函数，LESS 既可以在客户端上运行 (支持 IE 6+, Webkit, Firefox)，也可以在服务端运行 (借助 Node.js)。

- 为什么要使用它们？

- 结构清晰，便于扩展。 可以方便地屏蔽浏览器私有语法差异。封装对浏览器语法差异的重复处理， 减少无意义的机械劳动。

- 可以轻松实现多重继承。 完全兼容 CSS 代码，可以方便地应用到老项目中。 减少代码量，提高开发效率。

## 20. z-index属性在什么情况下会失效?

#### 类型：`拓展`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2 分）

- 通常 z-index 的使用是在有两个重叠的标签，在一定的情况下控制其中一个在另一个的上方或者下方出现。z-index值越大就越是在上层。z-index元素的position属性需要是relative，absolute或是fixed。

- 父元素position为relative时，子元素的z-index失效。解决：父元素position改为absolute或static；

- 元素没有设置position属性为非static属性。解决：设置该元素的position属性为relative，absolute或是fixed中的一种；

- 元素在设置z-index的同时还设置了float浮动。解决：float去除，改为display：inline-block；

## 21. 如何根据设计稿进行移动端适配？

#### 类型：`拓展`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2 分）

- 移动端适配主要有两个维度：

- 适配不同像素密度， 针对不同的像素密度，使用 CSS 媒体查询，选择不同精度的图片，以保证图片不会失真；

- 适配不同屏幕大小， 由于不同的屏幕有着不同的逻辑像素大小，所以如果直接使用 px 作为开发单位，会使得开发的页面在某一款手机上可以准确显示，但是在另一款手机上就会失真。为了适配不同屏幕的大小，应按照比例来还原设计稿的内容。

- 为了能让页面的尺寸自适应，可以使用 rem，em，vw，vh 等相对单位。

## 22 .实现一个扇形

#### 类型：`拓展`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2 分）

- 用CSS实现扇形的思路和三角形基本一致，就是多了一个圆角的样式，实现一个90°的扇形：

```css
div{
    border: 100px solid transparent;
    width: 0;
    heigt: 0;
    border-radius: 100px;
    border-top-color: red;
}
```

## 23. 画一条0.5px的线

#### 类型：`拓展`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2 分）

- 采用transform: scale()的方式，该方法用来定义元素的2D 缩放转换：

```css
transform: scale(0.5,0.5);
```

- 采用meta viewport的方式

```html
<meta name="viewport" content="width=device-width, initial-scale=0.5, minimum-scale=0.5, maximum-scale=0.5"/>
```

## 24. 对 sticky 定位的理解

#### 类型：`拓展`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2 分）

- sticky 英文字面意思是粘贴，所以可以把它称之为粘性定位。语法：position: sticky; 基于用户的滚动位置来定位。

- 粘性定位的元素是依赖于用户的滚动，在 position:relative 与 position:fixed 定位之间切换。它的行为就像 position:relative; 而当页面滚动超出目标区域时，它的表现就像 position:fixed;，它会固定在目标位置。元素定位表现为在跨越特定阈值前为相对定位，之后为固定定位。这个特定阈值指的是 top, right, bottom 或 left
之一，换言之，指定 top, right, bottom 或 left 四个阈值其中之一，才可使粘性定位生效。否则其行为与相对定位相同。

## 25. display:inline-block 什么时候会显示间隙？

#### 类型：`拓展`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2 分）

- 有空格时会有间隙，可以删除空格解决；

- margin正值时，可以让margin使用负值解决；

- 使用font-size解决，给父元素设置font-size:0，子元素再设置font-size；

## 26. ::before 和 :after 的双冒号和单冒号有什么区别？

#### 类型：`拓展`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（1 分）

- 冒号(:)用于CSS3伪类，双冒号(::)用于CSS3伪元素。 （2）::before就是以一个子元素的存在，定义在元素主体内容之前的一个伪元素。并不存在于dom之中，只存在在页面之中。

## 27. CSS 居中

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（4 分）

<details>

- **1：定位居中**

①已知大小的元素在屏幕窗口水平垂直都居中

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title></title>
    <style>
        .box{
            width:100px;
            height:100px;
            background-color: aqua;
            position:fixed;
            left:50%;
            top:50%;
            margin-left:-50px;
            margin-top:-50px;
        }
    </style>
</head>
<body>
    <div class="box">

    </div>
</body>
</html>
```

②未知大小的元素在屏幕窗口水平垂直都居中

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title></title>
    <style>
        .box{
            position:fixed;
            left:0;
            top:0;
            right:0;
            bottom:0;
            margin:auto;
        }
    </style>
</head>
<body>
    <div class="box">

    </div>
</body>
</html>
```

- **1：子元素在父元素中居中**

①已知大小的子元素在父元素中居中

```css
    父元素{
        /* 相对定位 */
        position: relative;
    }
    子元素{
        width:100px;
        height:100px;
        /* 绝对定位 */
        position:absolute;
        left:50%;
        top:50%;
        margin-left:-50px;
        margin-top:-50px;
    }
```

②未知大小的子元素在父元素中居中

```css
  父元素{
      /* 相对定位 */
      position: relative;
  }
  子元素{
      /* 绝对定位 */
      position:absolute;
      left:0;
      top:0;
      right:0;
      bottom:0;
      margin:auto;
  }
```

- **1：使用弹性布局**

① 使用flex布局的方式实现未知大小元素在屏幕窗口水平垂直都居中

```css
  html,body{
      height:100%;
  }
  /* 让html和body的高度为屏幕窗口的高度（窗口高度自适应） */
  body{
      display:flex;
      justify-content:center;
      align-items:center;
  }
```

② 使用flex布局的方式实现未知大小的子元素在父元素中水平垂直都居中**

```css
  父元素 {
      display:flex;
      justify-content:center;
      align-items:center;
  }
    
```

- **1：使用css3变形来实现**

① 使用css3变形的方式实现未知大小的元素在屏幕窗口水平垂直都居中

```css
  元素{
      position:fixed;
      left:50%;
      top:50%;
      transform:translateX(-50%) translateY(-50%);
  }
```

② 使用css变形的方式来实现未知大小的子元素，在父元素中水平垂直都居中

```css
  父元素{
      position:relative;
  }
  子元素{
      position:absolute;
      left:50%;
      top:50%;
      transform:translate(-50%,-50%);
  }
```

</details>

## 28. CSS Grid 布局的基本概念和使用方法是什么？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（4 分）

<details>

- **2：** Grid布局的基本概念：
  + Grid Container：设置 display: grid 的元素
  + Grid Item：Grid Container 的直接子元素
  + Grid Line：构成网格结构的分界线
  + Grid Track：两条相邻网格线之间的空间
  + Grid Cell：网格中的单元格
  + Grid Area：任意数量的网格单元格组成的区域

- **2：** 基本使用示例：

```css
.container {
    display: grid;
    /* 定义列的大小和数量 */
    grid-template-columns: 100px 100px 100px;
    /* 定义行的大小和数量 */
    grid-template-rows: 100px 100px;
    /* 设置间距 */
    gap: 10px;
}

.item {
    /* 指定元素位置 */
    grid-column: 1 / 3; /* 从第1条网格线到第3条网格线 */
    grid-row: 1 / 2;    /* 从第1条网格线到第2条网格线 */
}
```

</details>

## 29. CSS 动画和过渡的区别是什么？如何使用它们？

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

## 30. CSS 中的 BEM 命名规范是什么？为什么要使用它？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（4 分）

<details>

- **2：** BEM 命名规范：
  + Block（块）：独立的组件，如 `.button`
  + Element（元素）：属于块的一部分，用 `__` 连接，如 `.button__text`
  + Modifier（修饰符）：改变块或元素的外观或行为，用 `--` 连接，如 `.button--large`

```css
/* Block */
.card {
    padding: 20px;
}

/* Element */
.card__title {
    font-size: 18px;
}

/* Element */
.card__content {
    margin-top: 10px;
}

/* Modifier */
.card--featured {
    background: #f0f0f0;
}
```

- **2：** 使用BEM的好处：
  + 提高代码的可读性和可维护性
  + 避免CSS选择器嵌套过深
  + 减少命名冲突
  + 明确表达组件结构和关系
  + 方便团队协作和代码复用

</details>

## 31. display的block、inline和inline-block的区别

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2 分）

block： 会独占一行，多个元素会另起一行，可以设置width、height、margin和padding属性；

inline： 元素不会独占一行，设置width、height属性无效。但可以设置水平方向的margin和padding属性，不能设置垂直方向的padding和margin；

inline-block： 将对象设置为inline对象，但对象的内容作为block对象呈现，之后的内联对象会被排列在同一行内。

## 32. link和@import的区别

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2 分）

两者都是外部引用CSS的方式，它们的区别如下：

- link是XHTML标签，除了加载CSS外，还可以定义RSS等其他事务；@import属于CSS范畴，只能加载CSS。

- link引用CSS时，在页面载入时同时加载；@import需要页面网页完全载入以后加载。

- link是XHTML标签，无兼容问题；@import是在CSS2.1提出的，低版本的浏览器不支持。

- link支持使用Javascript控制DOM去改变样式；而@import不支持。

## 33. transition和animation的区别

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2 分）

transition是过度属性，强调过度，它的实现需要触发一个事件（比如鼠标移动上去，焦点，点击等）才执行动画。它类似于flash的补间动画，设置一个开始关键帧，一个结束关键帧。

animation是动画属性，它的实现不需要触发事件，设定好时间之后可以自己执行，且可以循环一个动画。它也类似于flash的补间动画，但是它可以设置多个关键帧（用@keyframe定义）完成动画。

## 34. display:none与visibility:hidden的区别

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2 分）

这两个属性都是让元素隐藏，不可见。两者区别如下：

display:none会让元素完全从渲染树中消失，渲染时不会占据任何空间；

visibility:hidden不会让元素从渲染树中消失，渲染的元素还会占据相应的空间，只是内容不可见。

## 35. 伪元素和伪类的区别和作用？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2 分）

伪元素：在内容元素的前后插入额外的元素或样式，但是这些元素实际上并不在文档中生成。它们只在外部显示可见，但不会在文档的源代码中找到它们，因此，称为“伪”元素。

伪类：将特殊的效果添加到特定选择器上。它是已有元素上添加类别的，不会产生新的元素。

## 36. 为什么有时候⽤translate来改变位置⽽不是定位？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2 分）

translate 是 transform 属性的⼀个值。改变transform或opacity不会触发浏览器重新布局（reflow）或重绘（repaint），只会触发复合（compositions）。⽽改变绝对定位会触发重新布局，进⽽触发重绘和复合。transform使浏览器为元素创建⼀个 GPU 图层，但改变绝对定位会使⽤到 CPU。 因此translate()更⾼效，可以缩短平滑动画的绘制时间。⽽translate改变位置时，元素依然会占据其原始空间，绝对定位就不会发⽣这种情况。

## 37. li 与 li 之间有看不见的空白间隔是什么原因引起的？如何解决？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2 分）

浏览器会把inline内联元素间的空白字符（空格、换行、Tab等）渲染成一个空格。为了美观，通常是一个li放在一行，这导致li换行后产生换行字符，它变成一个空格，占用了一个字符的宽度。

解决办法：

- 为li设置float:left。不足：有些容器是不能设置浮动，如左右切换的焦点图等。

- 将所有li写在同一行。不足：代码不美观。

- 为ul设置font-size:0;。不足：如果该列表内还有其他元素，需要为其他元素设置font-size，且要保证跟父元素内font-size的值相同。

- 为li设置margin:0 -4px;。不足：假如li换行，会产生新的空白间隔。

## 38. CSS3中有哪些新特性

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2 分）

- 新增各种CSS选择器 （: not(.input)：所有 class 不是“input”的节点）

- 圆角 （border-radius:8px）

- 多列布局 （multi-column layout）

- 阴影和反射 （Shadoweflect）

- 文字特效 （text-shadow）

- 线性渐变 （gradient）

- 旋转 （transform）

- 增加了更多的CSS3选择器 多背景 rgba

- 在CSS3中唯一引入的伪元素是::selection

- 媒体查询，多栏布局

- border-image

## 39. 对 CSSSprites 的理解

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2 分）

CSSSprites（精灵图），将一个页面涉及到的所有图片都包含到一张大图中去，然后利用CSS的 background-image，background-repeat，background-position属性的组合进行背景定位。

优点：

- 减少HTTP请求数，极大地提高页面加载速度

- 增加图片信息重复度，提高压缩比，减少图片大小

- 减少图片的总大小

缺点：

- 图片合并麻烦

- 维护麻烦，修改一个图片可能需要重新布局整个图片，样式调试工作量很大

## 40. 什么是物理像素，逻辑像素和像素密度，为什么在移动端开发时需要用到@3x, @2x这种图片？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2 分）

以 iPhone XS 为例，当写 CSS 代码时，针对于单位 px，其宽度为 414px & 896px，也就是说当赋予一个 DIV元素宽度为 414px，这个 DIV 就会填满手机的宽度；

而如果有一把尺子来实际测量这部手机的物理像素，实际为 1242*2688 物理像素；经过计算可知，1242/414=3，也就是说，在单边上，一个逻辑像素=3个物理像素，就说这个屏幕的像素密度为 3，也就是常说的 3 倍屏。

对于图片来说，为了保证其不失真，1 个图片像素至少要对应一个物理像素，假如原始图片是 500300 像素，那么在 3 倍屏上就要放一个 1500900 像素的图片才能保证 1 个物理像素至少对应一个图片像素，才能不失真。

## 41. margin 和 padding 的使用场景

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2 分）

- 需要在border外侧添加空白，且空白处不需要背景（色）时，使用 margin；

- 需要在border内测添加空白，且空白处需要背景（色）时，使用 padding。

## 42. 对line-height 的理解及其赋值方式

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2 分）

line-height的概念：

- line-height 指一行文本的高度，包含了字间距，实际上是下一行基线到上一行基线距离；

- 如果一个标签没有定义 height 属性，那么其最终表现的高度由 line-height 决定；

- 一个容器没有设置高度，那么撑开容器高度的是 line-height，而不是容器内的文本内容；

- 把 line-height 值设置为 height 一样大小的值可以实现单行文字的垂直居中；

- line-height 和 height 都能撑开一个高度；

line-height 的赋值方式：

- 带单位：px 是固定值，而 em 会参考父元素 font-size 值计算自身的行高

- 纯数字：会把比例传递给后代。例如，父级行高为 1.5，子元素字体为 18px，则子元素行高为 1.5 * 18 = 27px

- 百分比：将计算后的值传递给后代

## 43. CSS预处理器/后处理器是什么？为什么要使用它们？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2 分）

预处理器， 如：less，sass，stylus，用来预编译sass或者less，增加了css代码的复用性。层级，mixin， 变量，循环， 函数等对编写以及开发UI组件都极为方便。

后处理器， 如： postCss，通常是在完成的样式表中根据css规范处理css，让其更加有效。目前最常做的是给css属性添加浏览器私有前缀，实现跨浏览器兼容性的问题。

css预处理器为css增加一些编程特性，无需考虑浏览器的兼容问题，可以在CSS中使用变量，简单的逻辑程序，函数等在编程语言中的一些基本的性能，可以让css更加的简洁，增加适应性以及可读性，可维护性等。

使用原因：

结构清晰， 便于扩展

可以很方便的屏蔽浏览器私有语法的差异

可以轻松实现多重继承

完美的兼容了CSS代码，可以应用到老项目中