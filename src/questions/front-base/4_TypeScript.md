# TypeScript

## 1、type 和 interface的区别？

#### 类型：`基础`

#### 级别：`W1`

#### 解答（1 分）：
<details>

- **1、** interface 可以重复声明，type 不行

- **2、** 继承方式不一样，type 使用交叉类型方式，interface使用extends实现，在对象扩展的情况下，使用接口继承要比交叉类型的性能更好

- 建议使用interface来描述对象对外暴露的借口，使用type将一组类型重命名（或对类型进行复杂编程）。
</details>

## 2、常用工具类型？

#### 类型：`基础`

#### 级别：`W1`

#### 解答（2 分）：

<details>

- **1、** Partial：满足部分属性(一个都没满足也可)即可
 
- **2、** Required：所有属性都需要
 
- **3、** Readonly: 包装后的所有属性只读
 
- **4、** Pick: 选取部分属性
 
- **5、** Omit: 去除部分属性
 
- **6、** Extract: 交集

- **7、** Exclude: 差集
</details>

## 3、any、never、unknown、null & undefined 和 void 有什么区别？

#### 类型：`基础`

#### 级别：`W2`

#### 解答（2 分）：

<details>

- **1、** any: 动态的变量类型（失去了类型检查的作用）

- **2、** never: 永不存在的值的类型。例如：never 类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型

- **3、** unknown: 任何类型的值都可以赋给 unknown 类型，但是 unknown 类型的值只能赋给 unknown 本身和 any 类型

- **4、** null & undefined: 默认情况下 null 和 undefined 是所有类型的子类型。 就是说你可以把 null 和 undefined 赋值给 number 类型的变量。当你指定了 --strictNullChecks 标记，null 和 undefined 只能赋值给 void 和它们各自

- **5、** void: 没有任何类型。例如：一个函数如果没有返回值，那么返回值可以定义为void
</details>

## 4、?.、??、!、!.、_、** 等符号的含义？

#### 类型：`基础`

#### 级别：`W1`

#### 解答（2 分）：

<details>

- **1、** ?. 可选链 遇到 null 和 undefined 可以立即停止表达式的运行

- **2、** ?? 空值合并运算符 当左侧操作数为 null 或 undefined 时，其返回右侧的操作数，否则返回左侧的操作数

- **3、** ! 非空断言运算符 x! 将从 x 值域中排除 null 和 undefined

- **4、** !. 在变量名后添加，可以断言排除undefined和null类型

- **5、** _ 数字分割符 分隔符不会改变数值字面量的值，使人更容易读懂数字 .e.g 1_101_324

- **6、** ** 求幂
</details>