# TypeScript

## 1、type 和 interface的区别？

#### 类型：`基础`

#### 级别：`W1`

#### 解答（1 分）：

- **1、** interface 可以重复声明，type 不行

- **2、** 继承方式不一样，type 使用交叉类型方式，interface使用extends实现，在对象扩展的情况下，使用接口继承要比交叉类型的性能更好

- 建议使用interface来描述对象对外暴露的借口，使用type将一组类型重命名（或对类型进行复杂编程）。
