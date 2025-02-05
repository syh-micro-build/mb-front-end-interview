# TypeScript

## 1. ts 如何定义对象结构体

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

## 8. 如何在 TypeScript 中定义一个只读属性的接口？

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

## 11. `type A = { a: number; b: string; } ，type B = { a: number; b: string; c: boolean; }` 请问A和B的关系是什么？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（1 分）

- **1：** A是B的子类型 。因为A包含的属性a和b在B中都有，且B还额外包含c属性 。

## 12. 定义一个泛型函数 `add<T>(a: T, b: T): T`，该函数返回 a 和 b相加的值（假设 T类型支持加法运算）。请问`add<number>(1, 2)`返回值类型是什么

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2 分）

- 返回值类型是 number。因为 add函数传入的类型参数 T为 number，add函数返回值类型就是 number。

## 13. TypeScript 中的 this 和 JavaScript 中的 this 有什么差异？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2 分）

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

## 14. TypeScript 如何设计 Class 的声明？

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

## 15. 类型的全局声明和局部声明

- **2：** Result类型是 string | number 。因为NonNullable会排除null和undefined 。

## 16. 如何在TypeScript中实现函数重载？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（4 分）

<details>

- **2：** 函数重载允许一个函数接受不同数量或类型的参数时，作出不同的处理。在TypeScript中，我们需要先声明所有重载的函数签名，然后再实现一个通用的函数：

```typescript
// 重载签名
function add(a: number, b: number): number;
function add(a: string, b: string): string;

// 实现签名
function add(a: number | string, b: number | string): number | string {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }
    throw new Error('Parameters must be numbers or strings');
}

console.log(add(1, 2));          // 3
console.log(add("Hello ", "World")); // "Hello World"
```

- **2：** 在类中使用函数重载：

```typescript
class Calculator {
    add(a: number, b: number): number;
    add(a: string, b: string): string;
    add(a: any, b: any): any {
        if (typeof a === 'number' && typeof b === 'number') {
            return a + b;
        }
        if (typeof a === 'string' && typeof b === 'string') {
            return a.concat(b);
        }
        throw new Error('Parameters must be numbers or strings');
    }
}
```

</details>

## 17. TypeScript中的装饰器是什么？如何使用？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（6 分）

<details>

- **2：** 装饰器是一种特殊类型的声明，它能够被附加到类声明、方法、属性或参数上。装饰器使用 @expression 这种形式，expression求值后必须为一个函数，它会在运行时被调用。

- **4：** 常见的装饰器类型：

```typescript
// 类装饰器
function classDecorator<T extends {new(...args:any[]):{}}>(constructor:T) {
    return class extends constructor {
        newProperty = "new property";
        hello = "override";
    }
}

// 方法装饰器
function methodDecorator(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    // 保存原始方法
    const originalMethod = descriptor.value;
    
    // 修改方法的行为
    descriptor.value = function(...args: any[]) {
        console.log('Before method execution');
        const result = originalMethod.apply(this, args);
        console.log('After method execution');
        return result;
    }
}

// 使用装饰器
@classDecorator
class Example {
    @methodDecorator
    greet() {
        console.log('Hello!');
    }
}

const e = new Example();
e.greet();
// 输出:
// Before method execution
// Hello!
// After method execution
```

</details>

## 18. TypeScript中的映射类型是什么？请举例说明

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（4 分）

<details>

- **2：** 映射类型允许你从一个旧类型创建一个新类型，其中新类型的每个属性都基于旧类型的属性进行转换。TypeScript内置了几个常用的映射类型。

- **2：** 示例：

```typescript
// 原始接口
interface Person {
    name: string;
    age: number;
    address: string;
}

// 将所有属性变为可选
type PartialPerson = Partial<Person>;
// 等价于:
// {
//    name?: string;
//    age?: number;
//    address?: string;
// }

// 将所有属性变为只读
type ReadonlyPerson = Readonly<Person>;
// 等价于:
// {
//    readonly name: string;
//    readonly age: number;
//    readonly address: string;
// }

// 自定义映射类型
type Nullable<T> = {
    [P in keyof T]: T[P] | null;
};

// 使用自定义映射类型
type NullablePerson = Nullable<Person>;
// 等价于:
// {
//    name: string | null;
//    age: number | null;
//    address: string | null;
// }
```

</details>

## 19. 如何在TypeScript中实现函数重载？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（4 分）

<details>

- **2：** 函数重载允许一个函数接受不同数量或类型的参数时，作出不同的处理。在TypeScript中，我们需要先声明所有重载的函数签名，然后再实现一个通用的函数：

```typescript
// 重载签名
function add(a: number, b: number): number;
function add(a: string, b: string): string;

// 实现签名
function add(a: number | string, b: number | string): number | string {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }
    throw new Error('Parameters must be numbers or strings');
}

console.log(add(1, 2));          // 3
console.log(add("Hello ", "World")); // "Hello World"
```

- **2：** 在类中使用函数重载：

```typescript
class Calculator {
    add(a: number, b: number): number;
    add(a: string, b: string): string;
    add(a: any, b: any): any {
        if (typeof a === 'number' && typeof b === 'number') {
            return a + b;
        }
        if (typeof a === 'string' && typeof b === 'string') {
            return a.concat(b);
        }
        throw new Error('Parameters must be numbers or strings');
    }
}
```

</details>

## 20. TypeScript中的装饰器是什么？如何使用？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（6 分）

<details>

- **2：** 装饰器是一种特殊类型的声明，它能够被附加到类声明、方法、属性或参数上。装饰器使用 @expression 这种形式，expression求值后必须为一个函数，它会在运行时被调用。

- **4：** 常见的装饰器类型：

```typescript
// 类装饰器
function classDecorator<T extends {new(...args:any[]):{}}>(constructor:T) {
    return class extends constructor {
        newProperty = "new property";
        hello = "override";
    }
}

// 方法装饰器
function methodDecorator(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    // 保存原始方法
    const originalMethod = descriptor.value;
    
    // 修改方法的行为
    descriptor.value = function(...args: any[]) {
        console.log('Before method execution');
        const result = originalMethod.apply(this, args);
        console.log('After method execution');
        return result;
    }
}

// 使用装饰器
@classDecorator
class Example {
    @methodDecorator
    greet() {
        console.log('Hello!');
    }
}

const e = new Example();
e.greet();
// 输出:
// Before method execution
// Hello!
// After method execution
```

</details>

## 21. TypeScript中的映射类型是什么？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（4 分）

<details>

- **2：** 映射类型允许你从一个旧类型创建一个新类型，其中新类型的每个属性都基于旧类型的属性进行转换。TypeScript内置了几个常用的映射类型。

- **2：** 示例：

```typescript
// 原始接口
interface Person {
    name: string;
    age: number;
    address: string;
}

// 将所有属性变为可选
type PartialPerson = Partial<Person>;
// 等价于:
// {
//    name?: string;
//    age?: number;
//    address?: string;
// }

// 将所有属性变为只读
type ReadonlyPerson = Readonly<Person>;
// 等价于:
// {
//    readonly name: string;
//    readonly age: number;
//    readonly address: string;
// }

// 自定义映射类型
type Nullable<T> = {
    [P in keyof T]: T[P] | null;
};

// 使用自定义映射类型
type NullablePerson = Nullable<Person>;
// 等价于:
// {
//    name: string | null;
//    age: number | null;
//    address: string | null;
// }
```

</details>

## 22. TypeScript 中 const 和 readonly 的区别？枚举和常量枚举的区别？接口和类型别名的区别？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2 分）

- const 和 readonly: const可以防止变量的值被修改，readonly可以防止变量的属性被修改。
枚举和常量枚举: 常量枚举只能使用常量枚举表达式，并且不同于常规的枚举，它们在编译阶段会被删除。 常量枚举成员在使用的地方会被内联进来。 之所以可以这么做是因为，常量枚举不允许包含计算成员。

- 接口和类型别名: 两者都可以用来描述对象或函数的类型。与接口不同，类型别名还可以用于其他类型，如基本类型（原始值）、联合类型、元组。

## 23. 解释 TypeScript 中的类型断言（Type Assertion）及其作用

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2 分）

- **1：** 类型断言是一种告诉编译器某个值的类型的方式，它允许开发者手动指定一个值的类型，而不是让编译器自动推断。有两种语法形式：as语法和尖括号语法。例如：

```ts
// as语法
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;

// 尖括号语法
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;
```

- **1：** 类型断言的作用主要是在某些情况下，当编译器无法准确推断类型或者开发者确定某个值的类型时，通过类型断言来告诉编译器，以便进行更准确的类型检查和代码提示，避免类型错误。

## 24. 什么是 TypeScript 中的模块（Module）？如何在模块中导出和导入成员？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（3 分）

<details>

- **1：** 模块定义：模块是 TypeScript 中用于组织和封装代码的一种方式，它可以将相关的代码、类型定义、函数等组合在一起，形成一个独立的单元，提高代码的可维护性和可复用性。
- **1：** 导出成员：使用export关键字来导出模块中的成员，如变量、函数、类、接口等。可以在定义成员时直接使用export导出，也可以在模块末尾统一使用export导出。

```ts
// 方式一：直接导出
export const name = 'Tom';
export function sayHello() {
    console.log('Hello');
}
// 方式二：统一导出
const age = 18;
function doSomething() {
    console.log('Doing something');
}
export { age, doSomething };
```

- **1：** 导入成员：使用import关键字来导入模块中的成员，可以按需导入特定成员，也可以整体导入模块并通过别名访问成员。

```ts
// 按需导入
import { name, sayHello } from './module';
// 整体导入并使用别名
import * as myModule from './module';
console.log(myModule.name);
myModule.sayHello();
```

</details>

## 25. 描述一下 TypeScript 中keyof操作符的作用和使用场景

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2 分）

- **1：** keyof操作符用于获取类型的键类型。例如，`type K = keyof { a: number; b: string }`，K的类型就是`'a' | 'b'`。
- **1：** 使用场景包括实现类型安全的对象访问，如根据键获取对象的值时确保键的类型正确。

## 26. 如何实现一个类型工具 `IsNever<T>`，用于判断一个类型 T 是否为 never 类型？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2 分）

- **2：** 使用 `[T]` extends `[never]` 来判断，因为直接 T extends never 会有特殊处理，而包装成元组可以正确判断。

```ts
// 答案
type IsNever<T> = [T] extends [never]? true : false;
// 测试
type Result1 = IsNever<never>; // true
type Result2 = IsNever<string>; // false
```

## 27. 实现一个类型工具 `Pop<T>`，用于移除元组类型 T 的最后一个元素

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2 分）

- **2：** 使用 infer 关键字来推断元组的前面部分 Rest 和最后一个元素，然后返回 Rest。

```ts
// 答案
type Pop<T extends any[]> = T extends [...infer Rest, infer _] ? Rest : [];

// 测试
type Tuple = [1, 2, 3];
type Result = Pop<Tuple>; // [1, 2]
```

## 28. 解释 TypeScript 中 infer 关键字的作用

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2 分）

- **2：** infer 关键字用于在条件类型中推断类型。它通常和 extends 一起使用，在类型匹配成功时，将匹配到的部分类型赋值给一个新的类型变量。

## 29. 如何在 TypeScript 中实现一个深度只读（Deep Readonly）类型？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2 分）

<details>

- **2：** 答案如下：

```ts
type DeepReadonly<T> = {
    readonly [P in keyof T]: T[P] extends object? DeepReadonly<T[P]> : T[P];
};
interface Example {
    a: number;
    b: {
        c: string;
        d: {
            e: boolean;
        };
    };
}
const example: DeepReadonly<Example> = {
    a: 1,
    b: {
        c: 'test',
        d: {
            e: true
        }
    }
};
// example.a = 2; // 报错，只读属性不能被重新赋值
// example.b.c = 'new'; // 报错，深层属性也为只读
```

</details>

## 30. 请解释 TypeScript 中类型断言和类型守卫的区别，并分别举例说明

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2 分）

<details>

- **1：** 类型断言：类型断言是一种告诉 TypeScript 编译器某个变量具有特定类型的方式，它不会进行运行时检查，只是在编译阶段影响类型系统。开发者需要确保断言的正
确性，否则可能导致运行时错误。

```ts
// 定义一个变量，类型为 unknown
let value: unknown = 'hello';

// 使用类型断言将 unknown 类型断言为 string 类型
let strLength: number = (value as string).length;
console.log(strLength); // 输出: 5
```

- **1：** 类型守卫：类型守卫是在运行时检查某个变量是否符合特定类型的条件，根据检查结果缩小变量的类型范围，使得在特定代码块内可以安全地使用该类型的属性和方法。

```ts
// 定义一个类型守卫函数，检查值是否为字符串
function isString(value: unknown): value is string {
    return typeof value === 'string';
}

let value: unknown = 'hello';
if (isString(value)) {
    // 在这个代码块内，TypeScript 知道 value 是 string 类型
    let strLength: number = value.length;
    console.log(strLength); // 输出: 5
}
```

</details>

## 31. 解释一下TypeScript中的字面量类型和联合类型的区别

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（8 分）

<details>

- **2：** 定义与概念
  + 字面量类型：是指由具体的字面量值所构成的类型，比如1、'hello'、true等，每个具体的值就是一个字面量类型。它表示变量只能取特定的单一值。
  + 联合类型：是由多个不同类型通过|运算符组合而成的类型，它表示变量可以是这些类型中的任意一种。
- **2：** 作用与用途
  + 字面量类型：主要用于精确地限定变量的取值范围，当我们希望变量只能取某个特定的值时，就可以使用字面量类型。例如，在表示一周中的某一天时，可以定
  义`type Day = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday'`，这里的每个星期几就是一个字面量类型，通过这
  种方式可以确保变量只能被赋值为这些特定的字符串值。
  + 联合类型：用于在变量可能有多种不同类型的情况下，为其指定多种可能的类型。比如，一个函数的参数可能接受字符串或者数字，就可以定义为
  `function foo(arg: string | number) {}`，这样参数arg就可以接受字符串类型的值或者数字类型的值。
- **2：** 类型检查行为
  + 字面量类型：在类型检查时，变量必须严格等于字面量的值才能通过类型检查。例如，定义const num: 5 = 5是正确的，但const num: 5 = 6就会报错，因为6不等于字面量类型5所允许的值。
  + 联合类型：类型检查时，只要变量的值符合联合类型中的某一种类型，就可以通过类型检查。例如，对于`let value: string | number，value = 'hello'`或者`value = 123`都是
  可以通过类型检查的，因为它们分别符合联合类型中的string和number类型。
- **2：** 可扩展性
  + 字面量类型：通常比较固定和单一，如果需要增加新的取值，就需要重新定义字面量类型。例如，在上述Day类型中，如果要增加一个新的休息日，就需要修改定义，添加新的字面量。
  + 联合类型：具有较好的扩展性，当需要增加新的可能类型时，直接使用|运算符添加到联合类型中即可。比如，对于`function foo(arg: string | number)`，如果还需要支持布尔类型，只
  需要修改为`function foo(arg: string | number | boolean)`。

</details>

## 32. 解释 keyof typeof 的组合用法

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2 分）

- **2：** typeof 用于获取一个值的类型，keyof 用于获取一个类型的所有键组成的联合类型。keyof typeof 通常用于获取一个对象值的所有属性名组成的联合类型。示例：

```ts
const colors = {
    red: '#FF0000',
    green: '#00FF00',
    blue: '#0000FF'
};
type ColorKeys = keyof typeof colors; 
// ColorKeys 类型为 'red' | 'green' | 'blue'
```

## 33. 简述 NonNullable 类型工具的作用

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2 分）

- **2：** `NonNullable<T>` 用于从类型 T 中排除 null 和 undefined 类型。示例：

```ts
type MaybeString = string | null | undefined;
type DefiniteString = NonNullable<MaybeString>; 
// DefiniteString 类型为 string
```