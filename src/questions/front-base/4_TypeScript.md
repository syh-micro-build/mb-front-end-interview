# TypeScript

## 1.ts 如何定义对象结构体

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2 分）

- **1：** 接口（interface）用于定义更复杂或重复使用的对象类型。接口不仅可以用于定义对象结构，还能继承、扩展其他接口。

```typescript
interface Person {
    name: string;
    age: number;
}
```

- **1：** type 也可以用于定义类型

```typescript
type Person = {
    name: string;
    age: number;
}
```

## 2. type 和 interface的区别？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2 分）

<details>

- **1：** interface 可以重复声明，type 不行
- **1：** 继承方式不一样，type 使用交叉类型方式，interface使用extends实现，在对象扩展的情况下，使用接口继承要比交叉类型的性能更好
- 建议使用interface来描述对象对外暴露的借口，使用type将一组类型重命名（或对类型进行复杂编程）。

</details>

## 3. 常用工具类型？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（7 分）

<details>

- **1：** Partial：满足部分属性(一个都没满足也可)即可
- **1：** Required：所有属性都需要
- **1：** Readonly: 包装后的所有属性只读
- **1：** Pick: 选取部分属性
- **1：** Omit: 去除部分属性
- **1：** Extract: 交集
- **1：** Exclude: 差集

</details>

## 4. any、never、unknown、null & undefined 和 void 有什么区别？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（5 分）

<details>

- **1：** any: 动态的变量类型（失去了类型检查的作用）
- **1：** never: 永不存在的值的类型。例如：never 类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型
- **1：** unknown: 任何类型的值都可以赋给 unknown 类型，但是 unknown 类型的值只能赋给 unknown 本身和 any 类型
- **1：** null & undefined: 默认情况下 null 和 undefined 是所有类型的子类型。 就是说你可以把 null 和 undefined 赋值给 number 类型的变量。当你指定了 --strictNullChecks 标记，null 和 undefined 只能赋值给 void 和它们各自
- **1：** void: 没有任何类型。例如：一个函数如果没有返回值，那么返回值可以定义为void

</details>

## 5. ?.、??、!、!.、_、** 等符号的含义？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（6 分）

<details>

- **1：** ?. 可选链 遇到 null 和 undefined 可以立即停止表达式的运行
- **1：** ?? 空值合并运算符 当左侧操作数为 null 或 undefined 时，其返回右侧的操作数，否则返回左侧的操作数
- **1：** ! 非空断言运算符 x! 将从 x 值域中排除 null 和 undefined
- **1：** !. 在变量名后添加，可以断言排除undefined和null类型
- **1：** _数字分割符 分隔符不会改变数值字面量的值，使人更容易读懂数字 .e.g 1_101_324
- **1：** ** 求幂

</details>

## 6. 请解释一下 TypeScript 中的基本数据类型有哪些？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（1 分）

- **1：**
  TypeScript 的基本数据类型包括：number（数字，包括整数和浮点数）、string（字符串）、boolean（布尔值，只有true和false）、null（表示空值）、undefined（表示未定义）、symbol（ES6 新增的一种原始数据类型，用于表示独一无二的值）和bigint（用于表示任意精度的整数）

## 7. 什么是泛型,有什么作用？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（1 分）

- **1：** 在定义某些函数、接口和类时，不写死类型，而是改用类型参数的形式，让类型更加灵活。

<details>

```typescript

interface IResponseData<T>{
    code: number;
    message?: string;
    data: T;
}


interface User {
  id: number;
  name: string;
  email: string;
}

// 使用时传入User类型
const response: IResponseData<User> = {
  code: 200,
  message: "Success",
  data: {
    id: 1,
    name: "xiaoming",
    email: "xxx@qq.com"
  }
};

```

</details>

## 8、如何在 TypeScript 中定义一个只读属性的接口？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（1 分）

- **1：** 使用 readonly 关键字。例如：

```ts
interface Person {
  readonly name: string;
}
let p: Person = { name: "John" };
// p.name = "Doe";  // 错误，不能修改只读属性
```

## 9. 什么是TypeScript？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（1 分）

- **1：** Typescript 是一个强类型的 JavaScript 超集，支持ES6语法，支持面向对象编程的概念，如类、接口、继承、泛型等。Typescript并不直接在浏览器上运行，需要编译器编译成纯Javascript来运行。

## 10. 为什么要使用 TypeScript ? TypeScript 相对于 JavaScript 的优势是什么？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2 分）

- 增加了静态类型，可以在开发人员编写脚本时检测错误，使得代码质量更好，更健壮。

- 杜绝手误导致的变量名写错;

- 类型检查，提前发现潜在问题;

- 类型推断，减少代码量，提高开发效率;

- 支持最新的 ECMAScript 语法，比如可选链（Optional Chaining）和空值合并运算符（Nullish Coalescing Operator）;

- 支持面向对象编程，比如类、接口、继承、泛型等;

- 支持模块化开发，使得代码更加模块化、可维护、可复用。

## 11. TypeScript 中 const 和 readonly 的区别？枚举和常量枚举的区别？接口和类型别名的区别？

## `type A = { a: number; b: string; } ，type B = { a: number; b: string; c: boolean; }` 请问A和B的关系是什么？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（1 分）

- **1：** A是B的子类型 。因为A包含的属性a和b在B中都有，且B还额外包含c属性 。

## 定义一个泛型函数 `add<T>(a: T, b: T): T`，该函数返回 a 和 b相加的值（假设 T类型支持加法运算）。请问`add<number>(1, 2)`返回值类型是什么

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2 分）

- const 和 readonly: const可以防止变量的值被修改，readonly可以防止变量的属性被修改。
枚举和常量枚举: 常量枚举只能使用常量枚举表达式，并且不同于常规的枚举，它们在编译阶段会被删除。 常量枚举成员在使用的地方会被内联进来。 之所以可以这么做是因为，常量枚举不允许包含计算成员。

- 接口和类型别名: 两者都可以用来描述对象或函数的类型。与接口不同，类型别名还可以用于其他类型，如基本类型（原始值）、联合类型、元组。

## 12. TypeScript 中的 this 和 JavaScript 中的 this 有什么差异？

- 在 TypeScript 和 JavaScript 中，this 的工作原理本质上是相同的，因为 TypeScript 是 JavaScript 的一个超集，它添加了类型系统和一些编译时的检查，但运行时行为与纯 JavaScript 相同。因此，this 的绑定规则在两者中是一致的。

- 函数上下文中的 this:

- 在全局上下文中（非严格模式下），this 指向全局对象（在浏览器中通常是 window，在 Node.js 中是 global）。

- 在严格模式（'use strict'）下，全局上下文中的 this 是 undefined。

- 在对象的方法中，this 通常指向调用该方法的对象。

- 在普通函数中，this 的值取决于函数如何被调用，而不是函数被定义的位置。例如，如果函数作为某个对象的方法被调用，this 将指向该对象；如果作为普通函数调用，this 指向全局对象或在严格模式下为 undefined。

- 箭头函数中的 this:

- 箭头函数不绑定自己的 this，而是继承自它们父作用域中的 this 值。这意味着在箭头函数内部使用 this 时，它引用的是定义该箭头函数时的上下文中的 this 值。

- 在 TypeScript 中，可以使用 this 参数来指定函数的 this 类型。例如：

```typescript
function greet(this: { name: string }) {
  console.log(`Hello, ${this.name}!`);
}
```

- 在上面的例子中，this 参数指定了函数的 this 类型为 { name: string }，这意味着在调用 greet 函数时，必须传入一个具有 name 属性的对象作为 this 的值。

- 在 TypeScript 中，可以使用 noImplicitThis 选项来禁用隐式 this 类型。当 noImplicitThis 选项被启用时，如果函数的 this 参数没有显式指定类型，TypeScript 编译器将抛出一个错误。例如：

```typescript
function greet() {
  console.log(`Hello, ${this.name}!`);
}
```

- 在上面的例子中，由于 greet 函数的 this 参数没有显式指定类型，TypeScript 编译器将抛出一个错误，因为无法确定 this 的类型。

## `type MyType = string | number | null | undefined ，type Result = NonNullable<MyType>` 请问Result类型是什么？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2 分）

- TypeScript：noImplicitThis: true 的情况下，必须去声明 this 的类型，才能在函数或者对象中使用this。

- Typescript 中箭头函数的 this 和 ES6 中箭头函数中的 this 是一致的。

## 13. TypeScript 如何设计 Class 的声明？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2 分）

```ts
class Greeter {
   greeting: string;
   constructor(message: string) {
       this.greeting = message;
   }
   greet(): string{
       return "Hello, " + this.greeting;
   }
}
let greeter = new Greeter("world");
```

- **2：** Result类型是 string | number 。因为NonNullable会排除null和undefined 。

## 14. 类型的全局声明和局部声明

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2 分）

- 如果声明文件内不包含import、export，那么这个文件声明的类型就会变成全局声明。反之，若是这个文件包含了import、export，那么这个文件包含的类型声明则会是局部声明，不会影响到全局声明。

## 15. 简单介绍一下 TypeScript 模块的加载机制？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2 分）

- 假设有一个导入语句 import { a } from "moduleA";

- 首先，编译器会尝试定位需要导入的模块文件，通过绝对或者相对的路径查找方式；

- 如果上面的解析失败了，没有查找到对应的模块，编译器会尝试定位一个外部模块声明（.d.ts）；

- 最后，如果编译器还是不能解析这个模块，则会抛出一个错误 error TS2307: Cannot find module 'moduleA'.

## 16. 简单聊聊你对 TypeScript 类型兼容性的理解？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2 分）

- ts 类型兼容： 当一个类型 Y 可以赋值给另一个类型 X 时， 我们就可以说类型 X 兼容类型 Y。也就是说两者在结构上是一致的，而不一定非得通过 extends 的方式继承而来

- 接口的兼容性：X = Y 只要目标类型 X 中声明的属性变量在源类型 Y 中都存在就是兼容的（ Y 中的类型可以比 X 中的多，但是不能少）

- 函数的兼容性：X = Y Y 的每个参数必须能在 X 里找到对应类型的参数，参数的名字相同与否无所谓，只看它们的类型

## 17. 协变、逆变、双变和抗变的理解？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2 分）

- 协变：X = Y Y 类型可以赋值给 X 类型的情况就叫做协变，也可以说是 X 类型兼容 Y 类型

```ts
interface X { name: string; age: number; } 
interface Y { name: string; age: number; hobbies: string[] }
let x: X = { name: 'xiaoming', age: 16 }
let y: Y = { name: 'xiaohong', age: 18, hobbies: ['eat'] }
x = y
```

- 逆变：printY = printX 函数X 类型可以赋值给函数Y 类型，因为函数Y 在调用的时候参数是按照Y类型进行约束的，但是用到的是函数X的X的属性和方法，ts检查结果是类型安全的。这种特性就叫做逆变，
函数的参数有逆变的性质。

```ts
let printY: (y: Y) => void
printY = (y) => { console.log(y.hobbies) }
let printX: (x: X) => void
printX = (x) => { console.log(x.name) }
printY = printX
```

- 双变（双向协变）：X = Y；Y = X父类型可以赋值给子类型，子类型可以赋值给父类型，既逆变又协变，叫做“双向协变”（ts2.x 之前支持这种赋值，之后 ts 加了一个编译选项 strictFunctionTypes，设置为 true 就只支持函数参数的逆变，设置为 false 则支持双向协变）

- 抗变（不变）：非父子类型之间不会发生型变，只要类型不一样就会报错

## 18. TypeScript 中对象展开会有什么副作用吗？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2 分）

- 展开对象后面的属性会覆盖前面的属性；

- 仅包含对象自身的可枚举属性，不可枚举的属性将会丢失。