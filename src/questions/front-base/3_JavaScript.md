# JavaScript

## JS 数据类型有哪些？
#### 类型：`基础`
#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`
#### 解答（2 分）：
- **1：** 基本类型：字符串（String）、数字(Number)、布尔(Boolean)、空（Null）、未定义（Undefined）、Symbol（ES6特性）、BigInt（ES11特性）；
- **1：** 引用类型：对象（Object）、函数（Function）、数组（Array）等；



## ts 如何定义对象结构体
#### 类型：基础
####  级别：W2
#### 解答（2 分）：
- **1：** 接口（interface）用于定义更复杂或重复使用的对象类型。接口不仅可以用于定义对象结构，还能继承、扩展其他接口。
```typescript
interface Person {
    name: string;
    age: number;
}
```
- **2：** type 也可以用于定义类型
```typescript
type Person = {
    name: string;
    age: number;
}
```