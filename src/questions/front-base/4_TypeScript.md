
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