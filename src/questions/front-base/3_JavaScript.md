# JavaScript

## JS 数据类型有哪些？
#### 类型：`基础`
#### 级别：`W1`
#### 解答（2 分）：
- **1：** 基本类型：字符串（String）、数字(Number)、布尔(Boolean)、空（Null）、未定义（Undefined）、Symbol（ES6特性）、BigInt（ES11特性）；
- **1：** 引用类型：对象（Object）、函数（Function）、数组（Array）等；

## == 和 === 的区别是什么？
#### 类型：`基础`
#### 级别：`W1`
#### 解答（2 分）：
- **1：** == 是 宽松相等，会进行类型转换，比较前会先转换两边的操作数类型（例如，'5' == 5 为 true;
- **1：** === 是 严格相等，不会进行类型转换，只有两边的值和类型都相同才会返回 true（例如，'5' === 5 为 false;

## var 、let 、 const 的区别是什么？
#### 类型：`基础`
#### 级别：`W1`
#### 解答（2 分）：
- **1：** var 作用域: 函数作用域（如果在函数内部声明），全局作用域（如果在函数外部声明）;
              提升: 声明和初始化都会被提升（变量提升，但未初始化时是 undefined）;
- **1：** let、 const 作用域: 级作用域（只在其所在的代码块内有效）;
          提升: 变量提升但不会初始化，存在“暂时性死区”，即在声明之前不能访问;
- **1：** 区别: 
            const： 需要在声明时初始化，且之后不能被修改;
            let：可以修改其值;
            var： 是函数作用域或全局作用域，let 和 const 是块级作用域;

## 什么是事件冒泡和事件捕获？
#### 类型：`基础`
#### 级别：`W1`
#### 解答（2 分）：
- **1：** 事件冒泡：事件从目标元素开始，向上冒泡到 document;
- **1：** 事件捕获：事件从 document 开始，向下捕获到目标元素;
- **1：** 事件流顺序: 1.捕获 -> 2.目标 -> 3.冒泡;
- **2：** 引用类型：对象（Object）、函数（Function）、数组（Array）等；

## JS 什么是防抖和节流？它们的应用场景有哪些？
#### 类型：`基础`
#### 级别：`W1`
#### 解答（3 分）：
- **1：** 防抖：在事件被触发后，延迟一定时间后再执行回调函数，如果在延迟时间内再次触发事件，则重新计算延迟时间，直到延迟时间结束后才执行回调函数。例如，在用户输入搜索框时，防止频繁发送请求，可以使用防抖函数，只有在用户停止输入一段时间后才发送搜索请求。
- **2：** 节流：在一定时间内，只允许函数执行一次。例如，在页面滚动时，需要频繁执行某个函数来处理滚动事件，但为了避免函数执行过于频繁影响性能，可以使用节流函数，限制函数在一定时间内只执行一次。

## JS 请解释在 JavaScript 中this指针的工作原理，在以下函数调用场景中this指向什么？
#### 类型：`基础`
#### 级别：`W1`
```js
const person = {
    name: "张三",
    sayHello: function() {
        console.log(`你好，我的名字叫 ${this.name}`);
    }
};
person.sayHello();
```
#### 解答（2 分）：
- **1：** 在person.sayHello()调用中，this指向person对象。
- **2：** 当一个函数作为对象的方法被调用时，this指向调用该方法的对象。在这里，sayHello是person对象的方法，所以this指代person，因此可以正确访问person.name

## JS 请解释setTimeout和setInterval的区别，并说明如何清除定时器。
#### 类型：`基础`
#### 级别：`W1`
#### 解答（2 分）：
- **1：** setTimeout：在指定的延迟时间（毫秒）后执行一次回调函数。示例：setTimeout(() => console.log('Delayed'), 1000);，1 秒后会执行一次回调打印Delayed。
setInterval：按照指定的时间间隔（毫秒）重复执行回调函数。示例：let intervalId = setInterval(() => console.log('Repeating'), 1000);，每隔 1 秒就会执行一次回调打印Repeating。
- **2：** 使用clearTimeout清除setTimeout创建的定时器，传入setTimeout返回的定时器 ID。例如：const timeoutId = setTimeout(() => console.log('Timeout'), 2000); clearTimeout(timeoutId);，这样就会取消即将执行的setTimeout回调。使用clearInterval清除setInterval创建的定时器，传入setInterval返回的定时器 ID，如clearInterval(intervalId);会停止setInterval的重复执行。
- **3：** 引用类型：对象（Object）、函数（Function）、数组（Array）等；

## Promise 的常用方法
#### 类型：基础
####  级别：W4
#### 解答（7 分）：
- **1：** Promise.resolve(value)：返回一个已解决的 Promise，如果 value 是一个 Promise，返回的 Promise 会继承其状态。
- **1：** Promise.reject(reason)：返回一个已拒绝的 Promise，带有拒绝的原因。
- **1：** Promise.all(iterable)：接收一个可迭代对象，返回一个新的 Promise，当所有 Promise 都成功时返回结果数组，若有任何 Promise 失败，返回的 Promise 会立即失败。
- **1：** Promise.race(iterable)：返回一个 Promise，它会在第一个完成的 Promise 状态改变时返回该 Promise 的结果（无论是成功还是失败）。
- **1：** Promise.allSettled(iterable)：返回一个新的 Promise，在所有输入的 Promise 完成时返回，结果包含每个 Promise 的状态及其结果。
- **1：** Promise.any(iterable)：返回一个新的 Promise，它会在第一个成功的 Promise 完成时返回成功结果，如果所有的 Promise 都失败，则返回一个拒绝的 Promise。
- **1：** Promise.finally(onFinally)：无论 Promise 成功或失败，都会执行 onFinally 回调，常用于清理操作。
