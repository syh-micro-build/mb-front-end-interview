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

## 11. `type A = { a: number; b: string; } ，type B = { a: number; b: string; c: boolean; }` 请问A和B的关系是什么？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（1 分）

- **1：** A是B的子类型 。因为A包含的属性a和b在B中都有，且B还额外包含c属性 。

## 12. 定义一个泛型函数 `add<T>(a: T, b: T): T`，该函数返回 a 和 b相加的值（假设 T类型支持加法运算）。请问`add<number>(1, 2)`返回值类型是什么

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2 分）

- const 和 readonly: const可以防止变量的值被修改，readonly可以防止变量的属性被修改。
枚举和常量枚举: 常量枚举只能使用常量枚举表达式，并且不同于常规的枚举，它们在编译阶段会被删除。 常量枚举成员在使用的地方会被内联进来。 之所以可以这么做是因为，常量枚举不允许包含计算成员。

- 接口和类型别名: 两者都可以用来描述对象或函数的类型。与接口不同，类型别名还可以用于其他类型，如基本类型（原始值）、联合类型、元组。

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
