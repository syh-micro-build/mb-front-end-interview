# JavaScript

## JS 数据类型有哪些？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2 分）

- **1：** 基本类型：字符串（String）、数字（Number）、布尔（Boolean）、空（Null）、未定义（Undefined）、Symbol（ES6+）、BigInt（ES11+）
- **1：** 引用类型：对象（Object）、函数（Function）、数组（Array）等

## == 和 === 的区别是什么？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2 分）

- **1：** `==` 为宽松相等，会隐式转换类型后比较（例如 `'5' == 5` 返回 true）
- **1：** `===` 为严格相等，要求值和类型完全相同（例如 `'5' === 5` 返回 false）

## var、let、const 的区别是什么？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`

#### 解答（3 分）

- **1：** var 函数作用域/全局作用域，存在变量提升
- **1：** let/const 块级作用域，存在暂时性死区
- **1：** const 必须初始化且不可重新赋值

## 什么是事件冒泡和事件捕获？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（3 分）

- **1：** 事件冒泡：事件从目标元素向上传播到 `document`
- **1：** 事件捕获：事件从 `document` 向下捕获到目标元素
- **1：** 事件流顺序：捕获阶段 → 目标阶段 → 冒泡阶段

## 什么是防抖和节流？

#### 类型：`基础`、`编程`

#### 级别：`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（6 分）

<details>

- **2：** 基本概念
  + **防抖（Debounce）**：是指在一定时间内，只有最后一次触发事件才会执行相应的处理函数。如果在这个时间间隔内再次触发事件，会重新计时。其底层机制是利用定时器，每次触发事件时清除之前的定时器，重新设置一个新的定时器，当定时器计时结束后执行处理函数。
  + **节流（Throttle）**：是指在一定时间内，只执行一次事件处理函数。即使在这个时间间隔内多次触发事件，也只会按照固定的时间间隔执行处理函数。其底层机制通常是通过记录上次执行的时间，在每次触发事件时判断是否达到了规定的时间间隔，如果达到了则执行处理函数并更新上次执行时间。

- **2：** 应用场景
  + **防抖**：适用于搜索框输入联想、窗口大小改变触发的重绘、按钮点击避免重复提交等场景，这些场景中用户可能会频繁触发事件，使用防抖可以减少不必要的处理。
  + **节流**：适用于页面滚动加载更多数据、鼠标移动事件、游戏中的技能冷却等场景，这些场景中需要控制事件处理的频率，避免过度处理。
  
- **2：** 代码实现示例
  + **防抖实现（运行环境：浏览器或 Node.js 环境）**：

  ```javascript
  function debounce(func, delay) {
      let timer = null;
      return function() {
          const context = this;
          const args = arguments;
          // 清除之前的定时器
          clearTimeout(timer);
          // 设置新的定时器
          timer = setTimeout(() => {
              func.apply(context, args);
          }, delay);
      };
  }

  // 使用示例
  function search() {
      console.log('执行搜索请求');
  }
  const debouncedSearch = debounce(search, 300);
  // 模拟连续触发事件
  window.addEventListener('input', debouncedSearch);
  ```

  + **节流实现（运行环境：浏览器或 Node.js 环境）**：

  ```javascript
  function throttle(func, limit) {
      let inThrottle;
      return function() {
          const context = this;
          const args = arguments;
          if (!inThrottle) {
              func.apply(context, args);
              inThrottle = true;
              // 设置定时器，在规定时间后重置状态
              setTimeout(() => inThrottle = false, limit);
          }
      };
  }

  // 使用示例
  function loadMore() {
      console.log('加载更多数据');
  }
  const throttledLoadMore = throttle(loadMore, 500);
  // 模拟滚动事件
  window.addEventListener('scroll', throttledLoadMore);
  ```

</details>

## 解决下方 this 指向问题（示例代码）

#### 类型：`基础`、`编程`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（4 分）

<details>

```javascript
const obj = {
  name: 'obj',
  method: function() {
    console.log(this.name);
  },
  nested: {
    name: 'nested',
    method: function() {
      setTimeout(function() {
        console.log(this.name);
      }, 100);
    }
  }
};

const func = obj.method;
const arrowMethod = () => console.log(this.name);

func(); // 输出？
obj.method(); // 输出？
obj.nested.method(); // 输出？
arrowMethod(); // 输出？
```

- **1：** `func()`
  + 输出为空字符串，this 指向 window（浏览器环境）或 global（Node.js 环境）
  + 原因：独立函数调用时遵循默认绑定规则
- **1：** `obj.method()`
  + 输出为 "obj"，this 指向 obj
  + 原因：方法调用时遵循隐式绑定规则
- **1：** `obj.nested.method()`
  + 输出为空字符串，this 指向 window/global
  + 原因：定时器回调函数中的 this 指向全局对象（ES6 之前）
- **1：** `arrowMethod()`
  + 输出为 undefined，this 指向定义时的作用域
  + 原因：箭头函数无自身 this，继承外层词法作用域

</details>

## 请解释setTimeout和setInterval的区别，并说明如何清除定时器

#### 类型：`基础`、`编程`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（4 分）

<details>

- **1：** 区别
  + `setTimeout`：单次执行，延迟指定时间后执行一次。  
  + `setInterval`：循环执行，每隔指定时间执行一次。
- **1：** 清除定时器
  + `clearTimeout(timerId)`：清除 `setTimeout` 返回的定时器 ID。  
  + `clearInterval(timerId)`：清除 `setInterval` 返回的定时器 ID。
- **2：** 优先使用 setTimeout 递归模式替代 setInterval，避免累积延迟

  ```javascript
  // 定义一个变量来存储定时器 ID

  let timerId;

  function recursiveTimeout() {
      console.log('定时任务执行');
      // 递归调用 setTimeout
      timerId = setTimeout(recursiveTimeout, 2000);
  }

  // 启动定时器
  recursiveTimeout();

  // 定义一个清理定时器的函数
  function clearRecursiveTimeout() {
      clearTimeout(timerId);
  }

  // 在需要的时候调用清理函数
  // 例如，在 5 秒后停止定时器
  setTimeout(() => {
      clearRecursiveTimeout();
      console.log('定时器已清理');
  }, 5000);
  ```

</details>

## Promise 是什么？常用方法有哪些？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（9 分）

- **1：** Promise 是一种用于处理异步操作的 JavaScript 对象。它代表了一个尚未完成但预期将来会完成的操作的结果。
- **1：** Promise 对象有三种状态：
  + Pending：准备状态。
  + Fulfilled：成功状态。
  + Rejected：失败状态。
- **7：** 常用方法
  + Promise.resolve(value)：返回一个已解决的 Promise，如果 value 是一个 Promise，返回的 Promise 会继承其状态。
  + Promise.reject(reason)：返回一个已拒绝的 Promise，带有拒绝的原因。
  + Promise.all(iterable)：接收一个可迭代对象，返回一个新的 Promise，当所有 Promise 都成功时返回结果数组，若有任何 Promise 失败，返回的 Promise 会立即失败。
  + Promise.race(iterable)：返回一个 Promise，它会在第一个完成的 Promise 状态改变时返回该 Promise 的结果（无论是成功还是失败）。
  + Promise.allSettled(iterable)：返回一个新的 Promise，在所有输入的 Promise 完成时返回，结果包含每个 Promise 的状态及其结果。
  + Promise.any(iterable)：返回一个新的 Promise，它会在第一个成功的 Promise 完成时返回成功结果，如果所有的 Promise 都失败，则返回一个拒绝的 Promise，ES2021 引入。
  + Promise.finally(onFinally)：无论 Promise 成功或失败，都会执行 onFinally 回调，常用于清理操作。

## 编写一个函数，找出两个数组中都存在的元素，并返回去重后的结果

#### 类型：`基础`、`编程`

#### 级别：`W2`、`W3`、`W4`

#### 解答（3 分）

```javascript
// 参考代码
function getIntersection(arr1, arr2) {
    return [...new Set(arr1)].filter(x => new Set(arr2).has(x));
}
```

## 编写一个函数，统计字符串中每个字符的出现次数，键为字符，值为出现次数

#### 类型：`基础`、`编程`

#### 级别：`W2`、`W3`、`W4`

#### 解答（5 分）

**代码实现：**

```javascript
function countCharacters(str) {
    return [...str].reduce((map, char) => {
        map.set(char, (map.get(char) || 0) + 1);
        return map;
    }, new Map());
}
```

## 实现数组去重

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（8 分）

<details>

- **1：** 方法一：使用Set对象（ES6 及以上）

```js
//原理：Set是一种新的数据结构，它类似于数组，但是成员的值都是唯一的。可以将数组转换为Set，然后再转换回数组来实现去重。
function uniqueArray(arr) {
    return [...new Set(arr)];
}
let array = [1, 2, 2, 3, 4, 4];
console.log(uniqueArray(array)); // 输出[1, 2, 3, 4]
//解释：new Set(array)会创建一个Set对象，其中包含了array中的所有元素，并且自动去重。然后，通过扩展运算符...将Set对象转换回数组，得到去重后的结果。
```

- **1：** 方法二：使用循环和一个新数组

```js
function uniqueArray(arr) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (!newArray.includes(arr[i])) {
            newArray.push(arr[i]);
        }
    }
    return newArray;
}
let array = [1, 2, 2, 3, 4, 4];
    console.log(uniqueArray(array)); // 输出[1, 2, 3, 4]
```

- **2：** 方法三：使用filter方法和indexOf函数

```js
//原理：filter方法用于过滤数组中的元素，indexOf函数用于查找元素在数组中的首次出现位置。通过filter方法遍历数组，只保留首次出现的元素，从而实现去重。
let array = [1, 2, 2, 3, 4, 4];
let uniqueArray = array.filter((element, index, self) => {
    return self.indexOf(element) === index;
});
console.log(uniqueArray);
//解释：filter方法的回调函数接收三个参数：element（当前元素）、index（当前元素的索引）和self（数组本身）。在回调函数中，self.indexOf(element)会查找element在数组中的首次出现位置。如果这个位置等于当前元素的索引index，说明这个元素是首次出现的，filter方法会保留这个元素；否则，就过滤掉这个元素。最终filter方法返回一个新的去重后的数组。
```

- **2：** 方法四：使用reduce方法

```js
//原理：reduce方法用于对数组中的每个元素执行一个由您提供的reducer函数（升序执行），将其结果汇总为单个返回值。可以利用reduce方法来构建一个新的去重数组。
let array = [1, 2, 2, 3, 4, 4];
let uniqueArray = array.reduce((acc, cur) => {
    if (!acc.includes(cur)) {
        acc.push(cur);
    }
    return acc;
}, []);
console.log(uniqueArray);
//解释：reduce方法的第一个参数是一个reducer函数，它接收两个参数：acc（累加器，初始值是一个空数组[]）和cur（当前元素）。在reducer函数中，如果acc数组不包含cur元素（acc.includes(cur)返回false），就将cur添加到acc中。最后，reduce方法返回acc，即去重后的数组。
```

- **2：** 方法五：使用Object对象（以元素为键）

```js
//原理：利用Object的键的唯一性，将数组元素作为对象的键，值可以任意设置（这里设置为true），然后获取对象的键并转换回数组来实现去重。
let array = [1, 2, 2, 3, 4, 4];
let uniqueArray = [];
let tempObj = {};
for (let i = 0; i < array.length; i++) {
    let current = array[i];
    if (!tempObj[current]) {
        uniqueArray.push(current);
        tempObj[current] = true;
    }
}
console.log(uniqueArray);
//解释：首先创建一个空数组uniqueArray用于存储去重后的元素，以及一个空对象tempObj。然后遍历array数组，对于每个元素current，检查tempObj对象中是否已经存在以current为键的属性（tempObj[current]是否为true）。如果不存在，就将current添加到uniqueArray中，并在tempObj中添加一个以current为键，值为true的属性。这样，利用对象键的唯一性实现了数组去重。最后返回uniqueArray。
```

</details>

## ES6 和 CommonJS 的区别

#### 类型：`拓展`

#### 级别：`W3`、`W4`、`W5`、`W6`

#### 解答（4 分）

- **1：** 语法风格
  + ES6 模块使用 `import` 和 `export` 关键字。支持多种导出和导入方式，如默认导出（`export default`）和命名导出（`export const` 等）。
  + CommonJS 模块使用 `require()` 和 `module.exports`。支持 exports 对象和 exports.foo 属性的方式导出。
- **1：** 加载方式
  + ES6 模块是静态加载，在编译时就确定模块的依赖关系和导入导出的内容。这使得 JavaScript 引擎可以进行静态分析，实现诸如 Tree - Shaking（消除未使用的代码）等优化。
  + CommonJS是动态加载，在运行时才会去查找和加载模块。每次 require 调用时都会执行模块代码，只有第一次加载时会缓存结果。
- **1：** 模块加载机制
  + ES6 模块主要用于浏览器环境和现代 Node.js 环境（Node.js 从 v13.2.0 开始默认支持 ES6 模块，文件扩展名使用 .mjs）。
  + CommonJS主要用于 Node.js 服务器端开发，因为它与 Node.js 的同步加载模型和文件系统操作配合良好。
- **1：** 循环依赖处理
  + ES6 模块可以处理循环依赖，因为它是静态分析的，在模块加载过程中会先创建模块的引用，在运行时再填充具体的值。
  + CommonJS处理循环依赖时可能会出现问题，因为它是动态加载的，如果在循环依赖的情况下，某个模块在未完全初始化时就被引用，可能会得到未完全初始化的对象。

## new 操作符的实现原理

#### 类型：基础

#### 级别：`W3`、`W4`、`W5`、`W6`

#### 解答（2 分）

<details>

- **2：** new操作符的执行过程：
  1. 首先创建了一个新的空对象
  1. 将新对象的原型指向构造函数的原型
  1. 执行构造函数，并将 `this` 绑定到新对象上
  1. 根据构造函数的返回值类型决定最终返回的结果，如果构造函数返回一个对象，则返回该对象；否则返回新创建的对象

```js
function myNew(constructor, ...args) {
    // 步骤 1：创建一个新对象
    const obj = {};

    // 步骤 2：将新对象的原型指向构造函数的原型
    obj.__proto__ = constructor.prototype;

    // 步骤 3：执行构造函数，并将 this 绑定到新对象上
    const result = constructor.apply(obj, args);

    // 步骤 4：根据构造函数的返回值类型决定最终返回的结果
    return typeof result === 'object' && result!== null? result : obj;
}

// 示例构造函数
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// 使用自定义的 myNew 函数创建对象
const person = myNew(Person, 'John', 30);
console.log(person); 
```

</details>

## 数组常用方法有哪些

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（6 分）

<details>

- **1：** 数组创建与合并
  + `Array.from()`：从类数组对象或可迭代对象创建新数组（ES6+）

    ```javascript
    const set = new Set([1, 2, 3]);
    const arr = Array.from(set); // [1, 2, 3]
    ```

  + `Array.of()`：创建包含指定元素的数组（ES6+）

    ```javascript
    const arr = Array.of(1, 2, 3); // [1, 2, 3]
    ```

  + `concat()`：合并多个数组，返回新数组

    ```javascript
    const arr1 = [1, 2];
    const arr2 = [3, 4];
    const newArr = arr1.concat(arr2); // [1, 2, 3, 4]
    ```

- **1：** 数组元素操作
  + `push()/pop()`：尾增 / 删元素

    ```javascript
    const arr = [1, 2];
    arr.push(3); // [1, 2, 3]
    arr.pop(); // [1, 2]
    ```

  + `unshift()/shift()`：头增 / 删元素

    ```javascript
    const arr = [2, 3];
    arr.unshift(1); // [1, 2, 3]
    arr.shift(); // [2, 3]
    ```

  + `splice()`：任意位置增删元素

    ```javascript
    const arr = [1, 2, 3, 4];
    arr.splice(1, 2, 5, 6); // [1, 5, 6, 4]
    ```

- **1：** 数组查找过滤
  + `indexOf()/lastIndexOf()`：返回元素索引

    ```javascript
    const arr = [1, 2, 3, 2];
    arr.indexOf(2); // 1
    arr.lastIndexOf(2); // 3
    ```

  + `find()/findIndex()`：按条件查找元素

    ```javascript
    const arr = [1, 2, 3, 4];
    arr.find(item => item > 2); // 3
    arr.findIndex(item => item > 2); // 2
    ```

  + `includes()`： 判断数组是否包含某元素

    ```javascript
    const arr = [1, 2, 3, 4];
    arr.includes(3); // true
    ```

  + `filter()`：按条件过滤元素

    ```javascript
    const arr = [1, 2, 3, 4];
    arr.filter(item => item > 2); // [3, 4]
    ```

- **1：** 数组遍历与映射
  + `forEach()`：遍历数组元素

    ```javascript
    const arr = [1, 2, 3, 4];
    arr.forEach(item => console.log(item));
    ```

  + `map()`：映射数组元素

    ```javascript
    const arr = [1, 2, 3, 4];
    arr.map(item => item * 2); // [2, 4, 6, 8]
    ```

- **1：** 数组排序与反转
  + `sort()`：排序数组元素

    ```javascript
    const arr = [3, 1, 4, 2];
    arr.sort(); // [1, 2, 3, 4]
    ```

  + `reverse()`：反转数组

    ```javascript
    const arr = [1, 2, 3];
    arr.reverse(); // [3, 2, 1]
    ```

- **1：** 数组转换与归约
  + `join()`：将数组元素拼接成字符串

    ```javascript
    const arr = [1, 2, 3];
    arr.join('-'); // '1-2-3'
    ```

  + `toString()`：将数组元素拼接成字符串

    ```javascript
    const arr = [1, 2, 3];
    arr.toString(); // '1,2,3'
    ```

  + `reduce()`：累加计算

    ```javascript
    const arr = [1, 2, 3];
    arr.reduce((acc, cur) => acc + cur); // 6
    ```

</details>

## bind、call、apply 区别

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（3 分）

- **3：** 核心区别对比

  | 方法 | 是否立即执行 | this 绑定方式 | 参数传递方式 | 返回值 |
  |--|--|--|--|--|
  | `call` | 是 | 显式指定 `this` | 逗号分隔参数列表 | 函数执行结果 |
  | `apply`| 是 | 显式指定 `this` | 数组形式参数列表 | 函数执行结果 |
  | `bind` | 否 | 创建绑定 `this` 的新函数 | 可预传参数 | 新函数 |

  ```javascript
  function greet(msg) { console.log(`${msg}, ${this.name}`); }

  // call：明确传递多个参数
  greet.call({ name: 'John' }, 'Hello'); // "Hello, John"

  // apply：参数已存在数组中
  greet.apply({ name: 'Alice' }, ['Hi']); // "Hi, Alice"

  // bind：固定 this 并生成新函数
  const boundGreet = greet.bind({ name: 'Bob' }, 'Hey');
  boundGreet(); // "Hey, Bob"
  ```

## 谈谈你对Proxy的理解

#### 类型：`基础`、`架构`

#### 级别：`W3`、`W4`、`W5`、`W6`

#### 解答（6 分）

<details>

- **1：** 基本概念
  + `Proxy`，ES6 引入，用于创建一个对象的代理，从而可以对该对象的基本操作（如属性查找、赋值、枚举、函数调用等）进行拦截和自定义处理。`Proxy` 可以理解为在目标对象之前设置一层“拦截”，外界对该对象的访问，都必须先通过这层拦截。
  + 其语法为 `const proxy = new Proxy(target, handler)`，其中 `target` 是要代理的目标对象，`handler` 是一个对象，它定义了拦截行为的方法。

- **1：** 拦截操作示例

  ```javascript
  const target = {
    name: 'John',
    age: 30
  };

  const handler = {
    get(target, property) {
      console.log(`Getting property ${property}`);
      return target[property];
    },
    set(target, property, value) {
      console.log(`Setting property ${property} to ${value}`);
      target[property] = value;
      return true;
    }
  };

  const proxy = new Proxy(target, handler);

  console.log(proxy.name); // 会触发 get 拦截器，输出 "Getting property name" 然后输出 "John"
  proxy.age = 31; // 会触发 set 拦截器，输出 "Setting property age to 31"
  ```

- **4：** 应用场景
  + **数据验证**：在设置对象属性时进行验证，确保属性值符合特定的规则。例如：

  ```javascript
  const person = {
    age: 20
  };
  const validator = {
    set(target, prop, value) {
      if (prop === 'age' && typeof value!== 'number') {
        throw new TypeError('Age must be a number');
      }
      target[prop] = value;
      return true;
    }
  };
  const personProxy = new Proxy(person, validator);
  try {
    personProxy.age = 'twenty';
  } catch (error) {
    console.log(error.message); // 输出 "Age must be a number"
  }
  ```

  + **日志记录**：在访问或修改对象属性时记录日志，方便调试和监控。例如在开发过程中，记录对配置对象的操作。

  ```javascript
  const config = {
    apiKey: '123456'
  };
  const logger = {
    get(target, prop) {
      console.log(`Reading property ${prop} from config`);
      return target[prop];
    },
    set(target, prop, value) {
      console.log(`Setting property ${prop} in config to ${value}`);
      target[prop] = value;
      return true;
    }
  };
  const configProxy = new Proxy(config, logger);
  const apiKey = configProxy.apiKey; // 输出 "Reading property apiKey from config"
  configProxy.apiKey = '654321'; // 输出 "Setting property apiKey in config to 654321"
  ```

  + **访问控制**：对对象的某些属性进行访问限制，只有满足特定条件的操作才能执行。例如，只允许特定用户修改敏感信息。

  ```javascript
  const sensitiveData = {
    password: 'secret'
  };
  const allowedUser = 'admin';
  const accessController = {
    set(target, prop, value, receiver) {
      if (prop === 'password' && currentUser!== allowedUser) {
        throw new Error('Only admin can change the password');
      }
      target[prop] = value;
      return true;
    }
  };
  let currentUser = 'guest';
  const dataProxy = new Proxy(sensitiveData, accessController);
  try {
    dataProxy.password = 'newSecret';
  } catch (error) {
    console.log(error.message); // 输出 "Only admin can change the password"
  }
  ```

  + **响应式编程**：在 Vue 3 框架中，`Proxy` 被用于实现数据的响应式更新。当对象的属性发生变化时，自动更新与之绑定的视图。例如：

  ```javascript
  import { reactive, effect } from 'vue';
  const state = reactive({
    count: 0
  });
  effect(() => {
    console.log(state.count);
  });
  state.count++; // 会触发 effect 重新执行，输出更新后的 count 值
  ```

</details>

## 谈谈你对 Object.defineProperty 的理解

#### 类型：`基础`、`编程`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（5 分）

<details>

- **1：** 核心功能  
  `Object.defineProperty` 是 ES5 引入的方法，用于精确控制对象属性的行为。通过设置属性描述符，可以定义属性的可写性、可枚举性、可配置性，以及 getter/setter 函数。

- **2：** 属性描述符详解

  ```javascript
  const obj = {};
  Object.defineProperty(obj, 'count', {
    configurable: false, // 禁止删除属性
    enumerable: true,    // 允许 for-in 遍历
    writable: true,      // 允许修改属性值
    value: 0,           // 初始值
    get() { return this._count; }, // 读取时触发
    set(v) { this._count = v >=0? v : 0; } // 设置时校验
  });
  ```

- **1：** 典型应用场景  
  + **数据监听（如 Vue 2.x 的响应式系统）**  

    ```javascript
    function defineReactive(obj, key, value) {
      Object.defineProperty(obj, key, {
        get() { return value; },
        set(newVal) {
          if (newVal !== value) {
            value = newVal;
            console.log(`属性 ${key} 被修改为 ${newVal}`);
          }
        }
      });
    }
    ```

  + **只读属性创建**  

    ```javascript
    const constant = {};
    Object.defineProperty(constant, 'PI', {
      value: 3.1415,
      writable: false, // 禁止修改
      configurable: false // 禁止删除
    });
    ```

- **1：** 技术特性与限制  
  + 只能监听对象属性的直接变化  
  + 数组索引和 `length` 修改无法自动触发监听  
  + 深度嵌套对象需递归处理  

**技术对比**：

| 特性 | Object.defineProperty | Proxy |
|--|--|--|
| 兼容性 | IE9+ | IE11+ |
| 监听范围 | 单个属性  | 整个对象 |
| 性能开销 | 较低  | 较高（复杂对象）|
| 数组支持 | 需特殊处理 | 原生支持 |
| 嵌套对象处理 | 递归定义 | 自动代理 |

</details>

## 谈谈你对作用域链的理解

#### 类型：`基础`、`架构`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（4 分）

<details>

- **1：** 基本定义  
  作用域链是变量及函数查找的链式结构，由函数嵌套关系决定。内部函数可访问外部函数的变量，查找时从当前作用域逐层向上直至全局作用域。

- **1：** 运行机制  
  函数执行时生成执行上下文，其作用域链由当前变量对象和外部作用域引用组成。例如：

  ```javascript
  function outer() {
    const x = 1;
    function inner() {
      console.log(x); // 沿作用域链访问 outer 的 x
    }
    inner();
  }
  outer(); // 输出 1
  ```

- **2：** 具体应用场景  
  + **闭包计数器**  

    ```javascript
    // 通过闭包持久保存 count 变量
    function createCounter() {
      let count = 0;
      return {
        increment: () => { count++; return count; },
        get: () => count
      };
    }
    const counter = createCounter();
    console.log(counter.increment()); // 1
    ```

  + **私有变量封装**  

    ```javascript
    // 利用作用域链隐藏内部状态
    function User(name) {
      const privateEmail = 'user@example.com';
      this.getName = () => name;
      this.getEmail = () => privateEmail; // 外部无法直接访问
    }
    const user = new User('Alice');
    console.log(user.getEmail()); // user@example.com
    ```

  + **事件回调绑定**  

    ```javascript
    // 回调函数通过作用域链捕获外部变量
    function setupButton() {
      const message = 'Button clicked!';
      document.getElementById('btn').addEventListener('click', () => {
        alert(message); // 点击时仍能访问 setupButton 的 message
      });
    }
    setupButton();
    ```

  + **函数柯里化**  

    ```javascript
    // 通过作用域链保存预传参数
    function add(a) {
      return function(b) {
        return a + b;
      };
    }
    const add5 = add(5);
    console.log(add5(3)); // 8
    ```

</details>

## 谈谈你对原型链的理解

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（3 分）

<details>

- **1：** 基本概念
原型链是 JavaScript 中实现继承的一种方式。每个对象都有一个内部属性 `[[Prototype]]`（在浏览器中可通过 `__proto__` 访问），它指向该对象的原型对象。
当访问一个对象的属性或方法时，首先会在该对象本身查找，如果找不到，就会沿着其原型链向上，在其原型对象中查找，若原型对象中也没有，就继续在原型对象的原型对象中查找，以此类推，直到找到该属性或方法，或者到达原型链的末尾（即 `Object.prototype`，其 `[[Prototype]]` 为 `null`）。

- **1：** 代码示例及原理

  ```javascript
  // 定义一个构造函数
  function Animal(name) {
      this.name = name;
  }

  // 在 Animal 的原型上添加方法
  Animal.prototype.sayName = function() {
      console.log(this.name);
  };

  // 创建一个 Animal 的实例
  const cat = new Animal('Tom');

  // 调用 sayName 方法
  cat.sayName(); 

  // 原型链查找过程：
  // 1. 首先在 cat 对象本身查找 sayName 方法，未找到
  // 2. 接着在 cat 的原型对象（即 Animal.prototype）中查找，找到并执行
  ```

- **1：** 作用与应用场景
  + **代码复用**：通过原型链可以实现多个对象之间的属性和方法共享，避免代码重复。例如，多个 `Animal` 实例都可以共享 `sayName` 方法。
  + **继承实现**：利用原型链可以让一个对象继承另一个对象的属性和方法，实现不同对象之间的继承关系。例如，定义一个 `Dog` 构造函数，让 `Dog.prototype` 指向 `Animal.prototype`，那么 `Dog` 的实例就可以继承 `Animal` 的属性和方法。

  ```javascript
  function Dog(name) {
      Animal.call(this, name);
  }

  // 设置 Dog 的原型为 Animal 的实例
  Dog.prototype = Object.create(Animal.prototype);
  Dog.prototype.constructor = Dog;

  const dog = new Dog('Buddy');
  dog.sayName(); 
  ```

</details>

## 谈谈你对函数柯里化的理解

#### 类型：`基础`、`架构`、`编程`

#### 级别：`W3`、`W4`、`W5`、`W6`

#### 解答（5 分）

<details>

- **1：** 基本概念
函数柯里化是把一个多参数函数转换为一系列单参数函数的技术。也就是说，它允许你将一个需要多个参数的函数，转化为可以逐个接收参数的函数。例如，对于一个接收三个参数的函数 `function add(a, b, c) { return a + b + c; }`，柯里化后可以先传入一个参数，再传入第二个，最后传入第三个，每次传入参数后都会返回一个新的函数等待接收剩余的参数。

- **2：** 实现示例

  ```javascript
  function curry(func) {
      return function curried(...args) {
          if (args.length >= func.length) {
              return func.apply(this, args);
          } else {
              return function(...newArgs) {
                  return curried.apply(this, args.concat(newArgs));
              };
          }
      };
  }

  function sum(a, b, c) {
      return a + b + c;
  }

  const curriedSum = curry(sum);
  console.log(curriedSum(1)(2)(3)); // 输出 6
  ```

- **2：** 应用场景
  + **参数复用**：当多次调用同一个函数，并且部分参数相同时，可以通过柯里化固定这些参数，减少重复传递。例如，在一个处理不同用户的日志记录函数中，日志的类型是固定的，就可以通过柯里化固定日志类型参数。

  ```javascript
  function log(type, message) {
      console.log(`${type}: ${message}`);
  }

  const errorLog = curry(log)('ERROR');
  errorLog('File not found'); // 输出 "ERROR: File not found"
  ```

  + **延迟计算**：可以在需要的时候再传入剩余的参数，实现延迟计算。比如在事件处理中，有些参数在事件触发时才确定，就可以先柯里化函数，在事件触发时再传入这些参数。
  + **函数组合**：柯里化函数更适合进行函数组合，将多个简单的函数组合成复杂的函数。

</details>

## JS 如何实现函数缓存

#### 类型：`基础`、`架构`、`编程`、`算法`

#### 级别：`W3`、`W4`、`W5`、`W6`

#### 解答（3 分）

<details>

- **1：** 基本原理
函数缓存是指将函数的输入参数和对应的输出结果存储起来，当再次使用相同的参数调用该函数时，直接从缓存中获取结果，而不是重新执行函数，从而提高函数的执行效率，尤其是对于一些计算密集型或耗时的函数。

- **2：** 实现方式

```javascript
// 定义 memoize 高阶函数，用于将普通函数转换为具有缓存功能的函数
function memoize(func) {
    // 使用 Map 对象来存储缓存，键为参数，值为函数执行结果
    const cache = new Map();
    return function (...args) {
        // 将参数转换为字符串作为缓存的键
        const key = JSON.stringify(args);
        // 检查缓存中是否已存在该键对应的结果
        if (cache.has(key)) {
            // 若存在，直接从缓存中获取结果并返回
            return cache.get(key);
        }
        // 若缓存中不存在，调用原函数并传入参数
        const result = func.apply(this, args);
        // 将参数和对应的结果存入缓存
        cache.set(key, result);
        // 返回函数执行结果
        return result;
    };
}

// 模拟一个计算密集型的函数
function expensiveCalculation(num) {
    // 打印提示信息，表示正在进行耗时计算
    console.log('Performing expensive calculation...');
    // 返回输入参数乘以 2 的结果
    return num * 2;
}

// 使用 memoize 函数将 expensiveCalculation 转换为具有缓存功能的函数
const memoizedCalculation = memoize(expensiveCalculation);

// 第一次调用，由于缓存中没有结果，会执行计算并将结果存入缓存
console.log(memoizedCalculation(5)); 
// 第二次调用，由于参数相同，直接从缓存中获取结果，不再执行计算
console.log(memoizedCalculation(5)); 
```

- **2：** 注意事项
  + **参数类型限制**：在使用 `JSON.stringify` 将参数转换为键时，存在一些类型限制。

```javascript
// 定义一个接收函数作为参数的函数
function funcWithFuncParam(callback) {
    // 执行传入的回调函数并返回结果
    return callback();
}
// 将 funcWithFuncParam 转换为具有缓存功能的函数
const memoizedFunc = memoize(funcWithFuncParam);
// 定义一个回调函数
const callback = () => 10;
// 将包含回调函数的参数数组转换为字符串作为键
const key1 = JSON.stringify([callback]); 
// 输出结果为 [null]，说明 JSON.stringify 忽略了函数
console.log(key1); 
// 定义一个 Symbol 类型的参数
const symbolParam = Symbol('test');
// 将包含 Symbol 类型参数的数组转换为字符串作为键
const key2 = JSON.stringify([symbolParam]); 
// 输出结果为 [null]，说明 JSON.stringify 忽略了 Symbol
console.log(key2); 
```

对于包含函数、`Symbol` 等特殊类型的复杂对象参数，需要自定义生成唯一键的方式，比如使用 `WeakMap` 结合其他逻辑来处理函数，或者为 `Symbol` 类型参数添加额外的标识信息。

- **缓存大小控制**：如果缓存不断增长，可能会导致内存占用过高。可以考虑实现缓存淘汰策略，如最近最少使用（LRU）算法。

```javascript
// 定义 LRUCache 类，实现最近最少使用的缓存策略
class LRUCache {
    // 构造函数，接收缓存容量作为参数
    constructor(capacity) {
        // 存储缓存容量
        this.capacity = capacity;
        // 使用 Map 对象来存储缓存
        this.cache = new Map();
    }

    // 获取缓存中指定键的值
    get(key) {
        // 检查缓存中是否存在该键
        if (this.cache.has(key)) {
            // 若存在，获取该键对应的值
            const value = this.cache.get(key);
            // 先删除该键值对
            this.cache.delete(key);
            // 再重新插入该键值对，以更新其访问顺序
            this.cache.set(key, value);
            // 返回该键对应的值
            return value;
        }
        // 若不存在，返回 -1
        return -1;
    }

    // 向缓存中插入或更新键值对
    put(key, value) {
        // 若缓存中已存在该键，先删除该键值对
        if (this.cache.has(key)) {
            this.cache.delete(key);
        } 
        // 若缓存已满
        else if (this.cache.size >= this.capacity) {
            // 删除最早访问的键值对
            this.cache.delete(this.cache.keys().next().value);
        }
        // 插入或更新键值对
        this.cache.set(key, value);
    }
}
```

在实现函数缓存时，可以将 `Map` 替换为 `LRUCache` 实例，以控制缓存的大小。

</details>

## 谈谈你对唤醒函数的理解

#### 类型：`基础`、`编程`

#### 级别：`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（5 分）

<details>

- **1：** 基本概念
唤醒函数通常用于控制程序的执行流程，特别是在异步编程或并发编程场景中。其核心作用是在特定条件满足时，将处于等待或阻塞状态的代码重新激活继续执行。它就像是一个“开关”，在合适的时机触发，让程序从暂停状态恢复运行，有助于实现程序的有序执行和资源的合理利用。

- **2：** 实现方式及示例
  + **基于定时器的唤醒**：通过 `setTimeout` 或 `setInterval` 来设置一个延迟时间，当时间到达时触发唤醒操作。

  ```javascript
  function wakeAfterDelay(delay) {
      return new Promise((resolve) => {
          setTimeout(() => {
              resolve('唤醒啦');
          }, delay);
      });
  }

  async function main() {
      console.log('开始等待');
      const result = await wakeAfterDelay(2000);
      console.log(result);
      console.log('继续执行');
  }

  main();
  ```

  + **基于事件的唤醒**：监听某个特定事件，当事件发生时进行唤醒。在前端开发中，常见的如按钮点击、网络请求完成等事件。

  ```html
  <!DOCTYPE html>
  <html lang="en">

  <head>
      <meta charset="UTF-8">
  </head>

  <body>
      <button id="wakeBtn">点击唤醒</button>
      <script>
          function wakeOnClick() {
              return new Promise((resolve) => {
                  const btn = document.getElementById('wakeBtn');
                  btn.addEventListener('click', () => {
                      resolve('按钮点击，唤醒啦');
                  });
              });
          }

          async function main() {
              console.log('等待点击');
              const result = await wakeOnClick();
              console.log(result);
              console.log('继续执行');
          }

          main();
      </script>
  </body>

  </html>
  ```

- **2：** 应用场景
  + **电商系统中的限时抢购**：在电商的限时抢购活动中，服务器需要在活动开始的瞬间处理大量用户的请求。可以使用唤醒函数结合定时器来实现。服务器在活动开始前处于等待状态，通过 `setTimeout` 设定活动开始时间，当时间到达，唤醒函数被触发，服务器开始接收和处理用户的抢购请求。例如：

  ```javascript
  const startTime = new Date('2024-12-31 00:00:00').getTime();
  const currentTime = Date.now();
  const delay = startTime - currentTime;

  function startFlashSale() {
      console.log('限时抢购活动开始，开始处理请求');
      // 处理抢购请求的逻辑
  }

  if (delay > 0) {
      setTimeout(startFlashSale, delay);
  } else {
      startFlashSale();
  }
  ```

  + **视频会议系统中的发言控制**：在视频会议系统中，为了避免多人同时发言造成混乱，通常会有一个主持人控制发言顺序。当主持人允许某个参会者发言时，相当于触发了一个唤醒事件。可以使用基于事件的唤醒函数来实现。例如，参会者的客户端代码如下：

  ```javascript
  function waitForPermission() {
      return new Promise((resolve) => {
          // 监听主持人允许发言的事件
          document.addEventListener('host-permission', () => {
              resolve('你可以发言了');
          });
      });
  }

  async function participant() {
      console.log('等待主持人允许发言');
      const result = await waitForPermission();
      console.log(result);
      // 开始发言的逻辑
  }

  participant();
  ```

  + **物流系统中的任务调度**：在物流系统中，当一个包裹到达某个中转站时，需要等待特定的条件满足（如车辆装满、到达规定的发车时间等）才会继续运输。可以使用唤醒函数来控制任务的执行。例如，使用定时器在规定的发车时间唤醒运输任务，或者监听车辆装满的事件来触发唤醒。

</details>

## 如何判断一个元素是否在可视区域？

#### 类型：`基础`、`编程`

#### 级别：`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（6 分）

<details>

- **2：** 元素边界与视口边界比较法
  + **原理**：通过获取元素相对于视口的位置和尺寸信息，与视口的尺寸进行对比，判断元素是否在视口内。底层机制是利用 `getBoundingClientRect()` 方法获取元素的边界信息，该方法返回一个包含元素的大小及其相对于视口的位置的 DOMRect 对象。
  + **代码示例（运行环境：浏览器环境）**：

  ```javascript
  function isElementInViewport(el) {
      // 获取元素相对于视口的位置和尺寸信息
      const rect = el.getBoundingClientRect();
      return (
          // 判断元素上边界是否在视口内
          rect.top >= 0 &&
          // 判断元素左边界是否在视口内
          rect.left >= 0 &&
          // 判断元素下边界是否在视口内
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          // 判断元素右边界是否在视口内
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
  }

  // 使用示例
  const element = document.getElementById('testElement');
  console.log(isElementInViewport(element));
  ```

- **2：** Intersection Observer API 法
  + **原理**：`Intersection Observer API` 提供了一种异步观察目标元素与其祖先元素或顶级文档视口交叉状态的方法。它会在目标元素与视口的交叉状态发生变化时触发回调函数，通过回调函数中的 `isIntersecting` 属性可以判断元素是否在可视区域。
  + **代码示例（运行环境：支持 Intersection Observer API 的浏览器环境）**：

  ```javascript
  const element = document.getElementById('testElement');
  // 创建 IntersectionObserver 实例
  const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
          if (entry.isIntersecting) {
              console.log('元素在可视区域');
          } else {
              console.log('元素不在可视区域');
          }
      });
  });

  // 开始观察元素
  observer.observe(element);
  ```

- **2：** 两种方法对比
  + **元素边界与视口边界比较法**：兼容性好，可在较旧的浏览器（如 IE 5 及以上）中使用，但需要手动处理滚动事件，频繁滚动时会导致性能下降，可以通过节流提升性能。
  + **Intersection Observer API 法**：性能较高，采用异步方式，不会阻塞主线程，但兼容性稍差，支持现代浏览器，不支持较旧的浏览器（如 IE 系列）。

</details>

## 如何实现一个上拉加载，下拉刷新？

#### 类型：`基础`、`编程`

#### 级别：`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（6 分）

<details>

![](/public/images/3_JavaScript_20241230002614.png)

- **2：** 上拉加载实现
  + **原理**：通过监听页面滚动事件，当滚动到底部时触发加载更多数据的操作。底层机制是比较元素的 `scrollTop`（滚动距离）、`clientHeight`（可见高度）和 `scrollHeight`（内容总高度），当 `scrollTop + clientHeight` 大于等于 `scrollHeight` 时，判定为滚动到底部。
  + **代码示例（运行环境：浏览器环境）**：

  ```html
  <!DOCTYPE html>
  <html lang="en">

  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
          #list {
              height: 300px;
              overflow-y: auto;
          }

          .item {
              height: 50px;
              border: 1px solid #ccc;
              margin: 5px;
          }
      </style>
  </head>

  <body>
      <div id="list">
          <!-- 列表项 -->
      </div>
      <script>
          const list = document.getElementById('list');
          let page = 1;

          // 模拟加载数据
          function loadData() {
              for (let i = 0; i < 10; i++) {
                  const item = document.createElement('div');
                  item.classList.add('item');
                  item.textContent = `Item ${(page - 1) * 10 + i + 1}`;
                  list.appendChild(item);
              }
              page++;
          }

          // 监听滚动事件
          list.addEventListener('scroll', function () {
              if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
                  loadData();
              }
          });

          // 初始加载数据
          loadData();
      </script>
  </body>

  </html>
  ```

- **2：** 下拉刷新实现
  + **原理**：通过监听触摸事件（如 `touchstart`、`touchmove`、`touchend`）或鼠标事件，当用户下拉一定距离后触发刷新操作。通过记录触摸开始的位置，计算下拉的距离，根据距离判断是否触发刷新。
  + **代码示例（运行环境：支持触摸事件的浏览器环境）**：

  ```html
  <!DOCTYPE html>
  <html lang="en">

  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
          #refresh-container {
              position: relative;
              height: 300px;
              overflow: hidden;
          }

          #refresh-content {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              transition: top 0.3s;
          }

          #refresh-tip {
              position: absolute;
              top: -50px;
              left: 0;
              width: 100%;
              height: 50px;
              text-align: center;
              line-height: 50px;
              background-color: #eee;
          }
      </style>
  </head>

  <body>
      <div id="refresh-container">
          <div id="refresh-tip">下拉刷新</div>
          <div id="refresh-content">
              <!-- 内容 -->
              <p>Content</p>
          </div>
      </div>
      <script>
          const container = document.getElementById('refresh-container');
          const content = document.getElementById('refresh-content');
          const tip = document.getElementById('refresh-tip');
          let startY = 0;
          let isDragging = false;

          // 触摸开始事件
          container.addEventListener('touchstart', function (e) {
              startY = e.touches[0].clientY;
              isDragging = true;
          });

          // 触摸移动事件
          container.addEventListener('touchmove', function (e) {
              if (isDragging) {
                  const currentY = e.touches[0].clientY;
                  const distance = currentY - startY;
                  if (distance > 0) {
                      content.style.top = distance + 'px';
                      if (distance > 50) {
                          tip.textContent = '释放刷新';
                      } else {
                          tip.textContent = '下拉刷新';
                      }
                  }
              }
          });

          // 触摸结束事件
          container.addEventListener('touchend', function () {
              if (isDragging) {
                  isDragging = false;
                  const top = parseInt(content.style.top);
                  if (top > 50) {
                      // 触发刷新操作
                      tip.textContent = '正在刷新...';
                      setTimeout(() => {
                          content.style.top = 0 + 'px';
                          tip.textContent = '下拉刷新';
                      }, 2000);
                  } else {
                      content.style.top = 0 + 'px';
                  }
              }
          });
      </script>
  </body>

  </html>
  ```

- **1：** 注意事项
在实际开发中，还需要考虑更多的细节，如加载状态的显示（如加载中动画）、错误处理（如网络请求失败）、性能优化（如使用防抖或节流处理滚动事件）等，以提升用户体验。

</details>

## for in和for of的区别？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（3 分）

<details>

- **1：** 遍历目标不同
  + **for in**：遍历对象的**可枚举属性**（包括原型链属性），返回属性名（字符串类型）。

    ```javascript
    const obj = { a: 1, b: 2 };
    for (const key in obj) console.log(key); // 'a', 'b'
    ```

  + **for of**：遍历**可迭代对象**（数组/字符串/Set/Map等），返回属性值。

    ```javascript
    const arr = [1, 2, 3];
    for (const val of arr) console.log(val); // 1, 2, 3
    ```

- **1：** 底层机制差异
  + **for in**：基于对象的`Object.keys()` + 原型链搜索，会触发`[[Enumerate]]`内部方法。
  + **for of**：基于可迭代协议（需实现`Symbol.iterator`方法），直接访问迭代器。

- **1：** 典型应用场景

  | 场景 | 推荐方案 | 原因 |
  |--|--|--|
  | 对象属性遍历 | for in | 直接获取属性名 |
  | 数组元素处理 | for of | 直接获取值，避免索引转换 |
  | 字符串字符遍历 | for of | 支持Unicode代码点（如表情符号）|
  | 过滤原型链属性 | for in | 配合`hasOwnProperty`判断 |

</details>

## forEach和map的区别？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（3 分）

<details>

- **1：** 返回值
  + **forEach**：没有返回值，它只是对数组中的每个元素执行一次提供的函数，本质上是用于执行一些副作用操作，比如打印元素、修改元素等。示例如下：

  ```javascript
  const arr = [1, 2, 3];
  const result = arr.forEach((element) => {
      console.log(element);
  });
  console.log(result); // 输出 undefined
  ```

  + **map**：会返回一个新数组，新数组中的元素是原数组中每个元素经过提供的函数处理后的结果。示例如下：

  ```javascript
  const arr = [1, 2, 3];
  const newArr = arr.map((element) => element * 2);
  console.log(newArr); // 输出 [2, 4, 6]
  ```

- **1：** 用途
  + **forEach**：侧重于对数组元素进行遍历并执行一些操作，例如更新对象属性、发送请求等。示例如下：

  ```javascript
  const users = [
      { name: 'Alice', age: 20 },
      { name: 'Bob', age: 25 }
  ];
  users.forEach((user) => {
      user.age++;
  });
  console.log(users); // 每个用户的年龄加 1
  ```

  + **map**：更适合用于创建一个新数组，新数组的元素与原数组元素有某种映射关系，比如对数组元素进行数学运算、转换数据格式等。示例如下：

  ```javascript
  const numbers = [1, 2, 3];
  const squaredNumbers = numbers.map((num) => num * num);
  console.log(squaredNumbers); // 输出 [1, 4, 9]
  ```

- **1：** 中断遍历
  + **forEach**：不能使用常规的 `break` 或 `continue` 语句来中断或跳过循环，因为它是一个方法，不是传统的循环结构。如果需要提前终止遍历，只能通过抛出异常的方式，但这种方式不推荐。示例如下：

  ```javascript
  const arr = [1, 2, 3];
  try {
      arr.forEach((element) => {
          if (element === 2) {
              throw new Error('Stop iteration');
          }
          console.log(element);
      });
  } catch (error) {
      // 处理异常
  }
  ```

  + **map**：同样不能使用 `break` 或 `continue` 来中断或跳过循环，无论尝试任何中断处理，它都会对数组中的每个元素执行一次提供的函数。

</details>

## 谈谈你对匿名函数的理解

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（3 分）

- **1：** 概念：匿名函数无明确名称，可以像变量一样传递和使用。
- **1：** 语法：有函数表达式（如 `const func = function() {}` ）和箭头函数（ES6，如 `const func = () => {}` ）两种形式。
- **1：** 应用与优势：常用于事件处理（如 `element.addEventListener('event', () => {})` ）和回调函数（如 `array.map(num => num * 2)` ），能避免命名冲突，让代码更简洁。

## 谈谈你对单例模式的理解

#### 类型：`基础`、`架构`、`编程`

#### 级别：`W3`、`W4`、`W5`、`W6`

#### 解答（6 分）

<details>

- **1：** 概念：单例模式是一种创建型设计模式，确保一个类仅有一个实例，并提供一个全局访问点来获取该实例。这样可以避免因创建多个实例导致的资源浪费和数据不一致问题。
- **2：** 应用场景：单例模式适用于需要全局唯一资源的场景，具体如下：
  + **数据库连接**：在一个应用程序中，数据库连接是一种昂贵的资源。使用单例模式可以确保整个应用程序中只有一个数据库连接实例，避免因创建多个连接而导致的资源浪费和性能问题。例如，在一个 Node.js 的 Web 应用中，所有的数据库操作都可以通过这一个连接实例来完成。
  + **日志记录器**：日志记录器用于记录应用程序的运行状态和错误信息。为了保证日志的一致性和完整性，通常只需要一个日志记录器实例。所有模块都可以通过这个单例日志记录器来记录日志，避免不同的日志记录器实例产生的日志文件混乱。
  + **配置对象**：应用程序的配置信息（如数据库连接字符串、API 密钥等）通常在整个应用程序中是共享的。使用单例模式创建一个配置对象实例，可以确保所有模块访问的是相同的配置信息，避免因配置不一致而导致的错误。
- **3：** 实现方式：在 JavaScript 中可通过闭包和立即执行函数实现。示例代码如下：

```javascript
// 使用立即执行函数创建一个闭包，确保变量 instance 的私有性
const Singleton = (function () {
    // 用于存储单例实例的变量，初始为 null
    let instance;
    // 内部函数，用于创建单例实例
    function createInstance() {
        // 创建一个新对象作为单例实例
        const object = new Object({ name: 'Singleton Instance' });
        return object;
    }
    // 返回一个对象，该对象包含获取单例实例的方法
    return {
        // 获取单例实例的方法
        getInstance: function () {
            // 如果 instance 为 null，说明还未创建实例
            if (!instance) {
                // 调用 createInstance 函数创建实例
                instance = createInstance();
            }
            // 返回单例实例
            return instance;
        }
    };
})();
// 调用 getInstance 方法获取单例实例
const instance1 = Singleton.getInstance();
// 再次调用 getInstance 方法获取单例实例
const instance2 = Singleton.getInstance();
// 验证两次获取的实例是否为同一个
console.log(instance1 === instance2); // true
```

</details>

## 谈谈你对观察者模式的理解

#### 类型：`基础`、`架构`、`编程`

#### 级别：`W3`、`W4`、`W5`、`W6`

#### 解答（6 分）

<details>

- **1：** 概念：观察者模式定义了一种一对多的依赖关系，当一个对象（被观察对象，也称为主题）的状态发生变化时，所有依赖它的对象（观察者）都会收到通知并自动更新。这种模式实现了对象之间的解耦，使得主题和观察者可以独立地变化。
- **2：** 应用场景：观察者模式在很多场景中都有应用，例如：
  + **事件处理**：在前端开发中，DOM 事件的处理就是观察者模式的一种应用。DOM 元素是主题，事件监听器是观察者。当元素上的事件触发时，会通知所有的监听器。
  + **状态管理库**：如 React 的 Redux 或 Vue 的 Vuex，它们使用观察者模式来管理应用的状态。当状态发生变化时，所有订阅了该状态的组件都会收到通知并更新。
  + **实时数据更新**：在实时数据展示的场景中，如股票行情、实时聊天等，数据的更新可以通过观察者模式通知所有关注该数据的界面进行更新。
- **3：** 实现方式：在 JavaScript 中，可通过对象和数组来实现观察者模式。示例代码如下：

```javascript
// 定义主题对象
class Subject {
    constructor() {
        // 存储所有观察者的数组
        this.observers = [];
    }
    // 注册观察者的方法
    subscribe(observer) {
        this.observers.push(observer);
    }
    // 移除观察者的方法
    unsubscribe(observer) {
        this.observers = this.observers.filter(obs => obs!== observer);
    }
    // 通知所有观察者状态变化的方法
    notify() {
        this.observers.forEach(observer => observer.update());
    }
}

// 定义观察者对象
class Observer {
    constructor(name) {
        this.name = name;
    }
    // 观察者更新自身状态的方法
    update() {
        console.log(`${this.name} 收到通知并更新`);
    }
}

// 创建主题实例
const subject = new Subject();
// 创建观察者实例
const observer1 = new Observer('观察者1');
const observer2 = new Observer('观察者2');

// 注册观察者
subject.subscribe(observer1);
subject.subscribe(observer2);

// 主题状态变化，通知观察者
subject.notify();

// 移除一个观察者
subject.unsubscribe(observer2);
// 再次通知观察者
subject.notify();
```

</details>

## 谈谈你对发布订阅模式的理解

#### 类型：`基础`、`架构`、`编程`

#### 级别：`W3`、`W4`、`W5`、`W6`

#### 解答（6 分）

<details>

- **1：** 概念：发布 - 订阅模式定义了一种消息传递机制，在该模式里，发布者（发布消息的一方）不会直接将消息发送给特定的订阅者（接收消息的一方），而是将消息发布到一个中间的消息代理（也叫事件总线或调度中心）。
订阅者则向消息代理订阅自己感兴趣的消息类型，当发布者发布特定类型的消息时，消息代理会将消息推送给相应的订阅者。此模式实现了发布者和订阅者之间的解耦，增强了系统的可扩展性和可维护性。
- **2：** 应用场景：发布 - 订阅模式在很多场景下都有广泛应用，例如：
  + **前端开发**：在前端框架（如 Vue、React）中，组件间通信可使用发布 - 订阅模式。不同组件可以通过事件总线来发布和订阅事件，实现组件间的解耦通信。
  + **消息队列系统**：像 RabbitMQ、Kafka 等消息队列系统，就是基于发布 - 订阅模式实现的。生产者（发布者）将消息发送到消息队列，消费者（订阅者）从队列中接收消息。
  + **系统模块间通信**：在大型软件系统中，不同模块之间的通信可以采用发布 - 订阅模式。一个模块发布事件，其他感兴趣的模块订阅该事件，这样可以降低模块间的耦合度，提高系统的灵活性。
- **3：** 实现方式：在 JavaScript 中可通过对象来实现一个简单的发布 - 订阅模式。示例代码如下：

```javascript
// 定义事件总线类
class EventEmitter {
    constructor() {
        // 用于存储事件及其对应的回调函数列表
        this.events = {};
    }

    // 订阅事件的方法
    on(eventName, callback) {
        if (!this.events[eventName]) {
            // 如果该事件还没有对应的回调列表，就创建一个空数组
            this.events[eventName] = [];
        }
        // 将回调函数添加到对应事件的回调列表中
        this.events[eventName].push(callback);
    }

    // 发布事件的方法
    emit(eventName, ...args) {
        if (this.events[eventName]) {
            // 遍历对应事件的回调列表并依次执行回调函数，同时传递参数
            this.events[eventName].forEach(callback => callback(...args));
        }
    }

    // 取消订阅事件的方法
    off(eventName, callback) {
        if (this.events[eventName]) {
            // 过滤掉指定的回调函数
            this.events[eventName] = this.events[eventName].filter(cb => cb!== callback);
        }
    }
}

// 创建事件总线实例
const eventEmitter = new EventEmitter();

// 定义订阅者的回调函数
const callback1 = (data) => {
    console.log(`订阅者 1 收到消息：${data}`);
};
const callback2 = (data) => {
    console.log(`订阅者 2 收到消息：${data}`);
};

// 订阅事件
eventEmitter.on('message', callback1);
eventEmitter.on('message', callback2);

// 发布事件
eventEmitter.emit('message', 'Hello, World!');

// 取消订阅
eventEmitter.off('message', callback1);
eventEmitter.emit('message', 'New Message!');
```

</details>

## 浅拷贝和深拷贝的区别

#### 类型：`基础`

#### 级别：`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（3 分）

<details>

- **1：** 概念差异
  + **浅拷贝**：对于基本数据类型，会直接复制其值到新对象，新旧对象相互对立；对于引用数据类型，复制的新对象和原对象的引用数据类型属性指向同一个内存地址，修改任意一个，都会同步到另一个。
  + **深拷贝**：无论是基本数据类型还是引用数据类型，创建一个新对象，它会递归地复制原对象的所有属性。新旧对象相互对立。
- **1：** 应用场景
  + **浅拷贝**：在处理一些简单对象且后续可能会对引用数据类型属性进行统一操作时可以使用浅拷贝。
  + **深拷贝**：在开发中需要对一个配置对象进行修改，但又不想影响原配置时，就可以使用深拷贝。
- **1：** 实现方式
  + **浅拷贝方式**
    - **Object.assign()**：用于将一个或多个源对象的所有可枚举属性复制到目标对象。

    ```javascript
    const original = { a: 1, b: { c: 2 } };
    const shallowCopied = Object.assign({}, original);
    ```

    - **扩展运算符**：使用 `...` 语法可以快速实现浅拷贝。

    ```javascript
    const original = { a: 1, b: { c: 2 } };
    const shallowCopied = { ...original };
    ```

    - **数组的浅拷贝方法**：`Array.prototype.slice()` 和 `Array.prototype.concat()` 可用于数组的浅拷贝。

    ```javascript
    const originalArray = [1, { value: 2 }];
    const shallowCopiedArray1 = originalArray.slice();
    const shallowCopiedArray2 = [].concat(originalArray);
    ```

  + **深拷贝方式**
    - **递归实现**：通过递归遍历对象的所有属性，对每个属性进行复制。

    ```javascript
    function deepCopy(obj) {
        if (typeof obj!== 'object' || obj === null) {
            return obj;
        }
        let newObj = Array.isArray(obj)? [] : {};
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                newObj[key] = deepCopy(obj[key]);
            }
        }
        return newObj;
    }
    const original = { a: 1, b: { c: 2 } };
    const deepCopied = deepCopy(original);
    ```

    - **JSON.parse(JSON.stringify())**：将对象转换为 JSON 字符串，再将字符串解析为新对象。但这种方法有局限性，如无法处理函数、正则表达式、`Date` 对象等。

    ```javascript
    const original = { a: 1, b: { c: 2 } };
    const deepCopied = JSON.parse(JSON.stringify(original));
    ```

    - **使用第三方库**：如 `lodash` 中的 `cloneDeep` 方法。

    ```javascript
    const _ = require('lodash');
    const original = { a: 1, b: { c: 2 } };
    const deepCopied = _.cloneDeep(original);
    ```

</details>

## Ajax是什么

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（5 分）

- **1：** 概念
Ajax 即 Asynchronous JavaScript and XML（异步的 JavaScript 与 XML），它不是一种新的编程语言，而是一种在不刷新整个页面的情况下，与服务器进行异步通信并更新部分网页的技术。通过在后台与服务器进行少量数据交换，Ajax 可以使网页实现异步更新，这意味着可以在不重新加载整个网页的情况下，对网页的某部分进行更新。
- **1：** 工作原理
  + 浏览器中的 JavaScript 代码创建一个 XMLHttpRequest 对象（现代也常用 `fetch` API）。
  + 该对象向服务器发送 HTTP 请求（如 GET、POST 等）。
  + 服务器接收到请求后进行处理，并返回响应数据（可以是 XML、JSON 等格式）。
  + 浏览器中的 JavaScript 代码接收服务器的响应数据。
  + 根据接收到的数据，使用 JavaScript 动态更新网页的部分内容。
- **1：** 应用场景
  + **表单验证**：在用户填写表单时，实时验证输入信息，如检查用户名是否已存在。
  + **数据实时更新**：如股票行情、新闻资讯等的实时刷新。
  + **动态加载内容**：在网页滚动时动态加载更多数据，实现无限滚动效果。
- **2：** 示例代码

  ```javascript
  // 创建 XMLHttpRequest 对象
  const xhr = new XMLHttpRequest();

  // 打开一个请求
  xhr.open('GET', 'https://api.example.com/data', true);

  // 监听状态变化
  xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
          // 请求成功，获取响应数据
          const responseData = JSON.parse(xhr.responseText);
          // 更新网页内容
          document.getElementById('result').innerHTML = responseData.message;
      }
  };

  // 发送请求
  xhr.send();
  ```

## script标签中defer和async的区别？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（3 分）

- **1：** 执行顺序
  + **defer**：多个带 `defer` 的脚本会按它们在 HTML 里出现的顺序执行，并且是在整个 HTML 文档解析完成后、`DOMContentLoaded` 事件触发前执行。例如，有 `<script defer src="a.js"></script>` 和 `<script defer src="b.js"></script>`，那会先执行 `a.js` 再执行 `b.js`。
  + **async**：脚本加载完成就马上执行，不保证脚本间的执行顺序。假设有 `<script async src="c.js"></script>` 和 `<script async src="d.js"></script>`，如果 `d.js` 先加载完，就会先执行 `d.js`。
- **1：** 加载方式
  + **defer**：在 HTML 文档解析时，脚本会异步加载，不会阻碍文档解析。文档解析结束后，才开始依次执行这些脚本。
  + **async**：同样是异步加载脚本，不影响文档解析。不过一旦脚本加载完毕，会立刻中断文档解析去执行脚本，执行完再接着解析文档。
- **1：** 应用场景
  + **defer**：当脚本之间存在依赖关系，需要按特定顺序执行，并且要确保 DOM 已构建完成时使用。比如要操作 DOM 元素的脚本。
  + **async**：对于独立运行、不依赖其他脚本和文档解析状态的脚本适用，像第三方统计脚本、广告脚本。

## class和function的区别?

#### 类型：`基础`

#### 级别：`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（4 分）

- **1：** 语法
  + **class**：ES6 引入，用 `class` 声明，有 `constructor` 等特定结构。
  + **function**：传统声明，可作普通或构造函数。
- **1：** 继承
  + **class**：用 `extends` 实现，简洁直观。
  + **function**：实现方式复杂，如原型链、组合继承。
- **1：** `this` 指向
  + **class**：方法默认严格模式，`this` 指向实例。
  + **function**：`this` 指向取决于调用方式。
- **1：** 静态成员
  + **class**：用 `static` 定义。
  + **function**：在函数对象上添加属性模拟。

## 为什么0.1 + 0.2!== 0.3，如何让其相等 ？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（3 分）

- **1：** 原因：JavaScript 用 IEEE 754 双精度 64 位浮点数表示数字，0.1 和 0.2 转二进制是无限循环小数，存储有精度丢失，相加结果是近似值，所以 `0.1 + 0.2!== 0.3`。
- **1：** 设误差范围：用 `Number.EPSILON` 作最小精度，两数差值小于它就认为相等。

  ```javascript
  const isEqual = (a, b) => Math.abs(a - b) < Number.EPSILON;
  console.log(isEqual(0.1 + 0.2, 0.3));
  ```

- **1：** 转整数计算：小数乘倍数变整数计算，结果再除以相同倍数。

  ```javascript
  const result = (0.1 * 10 + 0.2 * 10) / 10;
  console.log(result === 0.3);
  ```

## typeof与instanceof的区别？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2 分）

- **1：** typeof 为一元运算符，语法如 `typeof 变量`，返回表示数据类型的字符串，只能区分基本类型，引用类型（除 `function`）都返回 `'object'`，`null` 也返回 `'object'`
- **1:** instanceof 为二元运算符，语法如 `对象 instanceof 构造函数`，返回布尔值，判断对象是否为特定类的实例，比如Array、Function、Object、自定义类

## 如何判断一个变量是不是数组？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（1 分）

- instanceof Array

- Array.isArray();

- Object.prototype.toString.call();

## 谈谈你对事件循环的理解

#### 类型：`基础`、`架构`、`编程`

#### 级别：`W3`、`W4`、`W5`、`W6`

#### 解答（10 分）

<details>

- **1：**
  + 事件循环是 JavaScript 在单线程环境下处理异步任务的执行机制。
  + 执行顺序为：先执行同步代码，同步代码执行完后，检查并执行微任务队列中的所有微任务，微任务队列清空后，从宏任务队列中取出一个宏任务执行，执行完这个宏任务后，再次检查并执行微任务队列，如此循环往复。

- **3：**
  **浏览器环境代码示例（Chrome 112）**

  ```javascript
  console.log('start');

  // 同步执行 Promise 构造函数内的代码
  new Promise((resolve) => {
    console.log('Promise 构造函数内');
    resolve();
  }).then(() => {
    console.log('Promise 微任务 1');
    // 嵌套微任务
    Promise.resolve().then(() => console.log('Promise 微任务 2'));
  });

  // 宏任务 setTimeout
  setTimeout(() => {
    console.log('宏任务 setTimeout');
    // 微任务
    Promise.resolve().then(() => console.log('Promise 微任务 3'));
  }, 0);

  // 创建 MutationObserver 实例，这是一个微任务
  const observer = new MutationObserver(() => console.log('MutationObserver 微任务'));
  const div = document.createElement('div');
  observer.observe(div, { attributes: true });
  div.setAttribute('test', 'attr');

  // 同步代码
  console.log('end');
  ```

  **执行顺序说明**：
  1. 执行同步代码：输出 `start`，`Promise 构造函数内`，`end`。
  2. 执行微任务队列：输出 `Promise 微任务 1`，`Promise 微任务 2`，`MutationObserver 微任务`。
  3. 执行宏任务队列：`宏任务 setTimeout`，`Promise 微任务 3`。

- **2：**
  **常见宏任务和微任务类型**
  + **宏任务**：
    - **定时器类**：`setTimeout`、`setInterval`。
    - **I/O 操作**：文件读取、网络请求（如 `XMLHttpRequest` 的完成回调）。
    - **UI 渲染**：浏览器的重排和重绘。
    - **`setImmediate`**：在 Node.js 环境中，它是一个宏任务，会在 I/O 事件回调之后执行。
    - **`requestAnimationFrame`**：在浏览器中，它会在下次重绘之前执行，属于宏任务。
  + **微任务**：
    - **Promise 相关**：`Promise.then`、`Promise.catch`、`Promise.finally`。
    - **`process.nextTick`**：在 Node.js 环境中，它的优先级高于普通微任务，会在当前操作结束后立即执行。
    - **`MutationObserver`**：用于监听 DOM 变化，当 DOM 发生变化时，相应的回调会作为微任务执行。
    - **`queueMicrotask`**：可以将一个函数作为微任务加入到微任务队列中。

- **2：**
  **浏览器与 Node.js 差异**
  + **微任务优先级**：浏览器中常见的微任务顺序是 `Promise` 相关微任务 > `MutationObserver`；Node.js 中 `process.nextTick` 优先级高于 `Promise` 相关微任务。
  + **宏任务队列**：浏览器的宏任务队列包含定时器、I/O、UI 渲染等；Node.js 的宏任务队列有多个执行阶段，如 `timers`（处理定时器回调）、`I/O`（处理 I/O 回调）、`idle`、`prepare`、`check`（执行 `setImmediate` 回调）等。
- **2：**
  **实践建议**：
  + 避免在 `Promise` 构造函数内编写耗时代码，防止阻塞主线程。
  + 对于动画相关任务，使用 `requestAnimationFrame` 进行优化。
  + 控制微任务执行时间，避免长时间占用主线程导致 UI 渲染卡顿。

</details>

## DOM操作的常用API

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（3 分）

- 创建：createElement

- 插入：appendChild

- 删除：removeChild

- 获取子节点：childNodes

- 获取子节点：parentNodes

- 获取兄弟节点：nextSibling

- 获取兄弟节点：previousSibling

- 获取属性：getAttribute

- 设置属性：setAttribute

- 获取元素样式：style

- 获取元素属性：getAttribute

- 设置元素属性：setAttribute

- 获取元素类名：className

- 获取元素内容：innerHTML

## attribute 和 property 的区别

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`

#### 解答（5 分）

- **1：**
  **定义**：attribute 是 HTML 标签属性，property 是 DOM 对象属性。
- **2：**
  **示例**

  ```html
  <input id="test" value="default">
  ```

  ```javascript
  const input = document.getElementById('test');
  input.getAttribute('value'); // "default"
  input.value = 'new';
  ```

  **区别**：
  + **类型**：attribute 是字符串，property 类型多样。
  + **同步**：二者修改通常互不影响。
- **1：**
  **特例**：表单 `value` 中，attribute 是初始值，property 是当前值；布尔属性的 attribute 存在即生效，property 需显式设置。
- **1：**
  **建议**：与 HTML 同步用 attribute，操作 DOM 状态用 property，后者性能佳。

## 什么是事件代理？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2 分）

- 事件代理，又称事件委托，是利用了事件冒泡机制，把事件绑定到父元素上，然后通过判断事件的target属性，来确定触发事件的元素是否是我们需要处理事件的元素，从而实现事件处理的目的。这种机制能够减少事件处理程序的数量，避免了为每一个节点添加事件处理程序，从而节省内存和提高程序的效率。

## Ajax Fetch Axios的区别？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2 分）

- Fetch：是一个具体的浏览器原生API，用于网络请求；它和xmlhttpRequest是一个级别的，但是其语法更加简洁，更加易用，并且支持Promise

- Axios：是一个第三方库。内部可以通过XMLHttpRequest和Fetch来实现

- Ajax：是一个概念，表示通过JavaScript进行异步网络请求的技术。

## cookie、localStorage、sessionStorage 的区别

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（5 分）

- **1：**  
  **核心区别**  

  | 维度 | cookie | localStorage | sessionStorage |
  |--|--|--|--|
  | 存储位置 | 浏览器和服务器端 | 浏览器本地 | 浏览器本地 |
  | 容量 | 约4KB | 约5-10MB | 约5-10MB |
  | 生命周期 | 可设置过期时间 | 长期保存（手动清除） | 会话结束时自动清除 |
  | 作用域 | 同源且同路径 | 同源窗口共享 | 同源且同窗口 |
  | 自动携带 | 每次HTTP请求自动发送 | 不参与网络传输 | 不参与网络传输 |

- **2：**  
  **关键特性**  
  + **cookie**：  
    - 支持 `HttpOnly`（防 XSS）、`Secure`（HTTPS 传输）  
    - 常用于会话管理、用户追踪  
  + **localStorage**：  
    - 持久化存储，适合长期保存不常更新的数据  
    - 通过 `localStorage.setItem()` 等 API 操作  
  + **sessionStorage**：  
    - 临时存储，页面关闭即失效  
    - 常用于表单草稿、临时状态保存  

- **1：**  
  **使用场景建议**  
  + **优先选 localStorage**：需持久化且不敏感的数据（如用户设置）  
  + **优先选 sessionStorage**：临时数据（如购物车未提交时的临时存储）  
  + **仅用 cookie**：需跨域传输或安全敏感场景（如 CSRF Token）  

- **1：**  
  **注意事项**  
  + 三者均受同源策略限制  
  + localStorage 和 sessionStorage 存储内容可通过 `StorageEvent` 监听  
  + cookie 需手动加密敏感信息，而另外两者无此机制

## 如何阻止事件冒泡，事件的默认行为？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2 分）

- **1：** 阻止事件冒泡：event.stopPropagation();

- **1：** 阻止事件默认行为：event.preventDefault();

## document.write() 和 innerHTML 的区别

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（5 分）

- **1：**

  | 对比项 | document.write() | innerHTML |
  | --- | --- | --- |
  | 作用 | 向文档流写内容 | 修改指定元素内部 HTML |
  | 时机 | 加载时正常，加载后覆盖文档 | 随时可用 |
  | 范围 | 全局文档 | 指定元素子节点 |
  | 性能 | 大量调用阻塞重绘 | 复杂度影响性能 |
  | 安全 | 易致 XSS | 需过滤输入 |

- **1：**
  + **document.write()**

    ```javascript
    // 加载时
    document.write('<h1>Hi</h1>');
    // 加载后覆盖
    <button onclick="document.write('Cleared')">Clear</button>
    ```

  + **innerHTML**

    ```javascript
    // 修改内容
    div.innerHTML = '<p>New</p>';
    // 批量优化
    const frag = document.createDocumentFragment();
    frag.innerHTML = '1<br>2';
    list.appendChild(frag);
    ```

- **2：**
  + **innerHTML 应用场景**：在电商商品详情页，当用户点击不同颜色款式时，使用 `innerHTML` 动态更新商品图片展示区域；在社交网站的评论区，新评论提交后用 `innerHTML` 动态添加新评论内容。
  + **document.write() 应用场景**：网页嵌入第三方广告脚本时，广告代码常使用 `document.write()` 直接向文档流插入广告内容；开发一些简单的网页生成工具，在页面加载时使用 `document.write()` 动态生成完整页面结构。

- **1：**
  document.write() 加载后用会泄漏内存；innerHTML 复杂内容用 textContent 防 XSS；两者少用于频繁更新。

## window load 和 document ready 的区别

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（5 分）

- **1：**
  **定义**：`window load` 是页面所有资源（如图片、脚本）加载完触发；`document ready` 是 DOM 结构加载完就触发，不等资源。

- **2：**
  **示例**

  ```javascript
  // window load
  window.onload = function() {
      console.log('所有资源加载完成');
  };
  // document ready（jQuery）
  $(document).ready(function() {
      console.log('DOM 结构加载完成');
  });
  ```

  **顺序**：`document ready` 通常先触发。

- **1：**
  **场景**
  + `window load`：操作图片尺寸等依赖资源加载的场景。
  + `document ready`：尽早执行交互逻辑，如绑定按钮事件。

- **1：**
  **注意**：`window load` 可能因资源慢而延迟；`document ready` 要确保操作的 DOM 已存在。

## return，break，continue 的区别是什么

#### 类型：`基础`

#### 级别：`W1`、`W2`

#### 解答（3 分）

- **1：**
  **基本概念**
  + `return`：用于函数中，会终止函数的执行，并将指定的值返回给函数调用处。如果没有指定返回值，则返回 `undefined`。
  + `break`：用于循环（`for`、`while`、`do-while`）或 `switch` 语句中，会立即终止当前所在的循环或 `switch` 语句，跳出该结构。
  + `continue`：用于循环语句中，会跳过当前循环的剩余代码，直接开始下一次循环。

- **1：**
  **应用场景**
  + `return`：当函数完成特定任务，需要将结果反馈给调用者时使用。比如计算两个数的和并返回结果。
  + `break`：在循环中，当满足某个条件，不再需要继续执行循环时使用。比如在查找数组中某个元素，找到后就停止循环。
  + `continue`：当循环中遇到某些特殊情况，不需要执行本次循环的剩余代码，但仍要继续后续循环时使用。比如过滤数组中的某些特定值。

- **1：**
  **注意事项**
  + `return` 只能在函数内部使用，在函数外部使用会导致语法错误。
  + `break` 和 `continue` 只能在循环或 `switch` 语句中使用，在其他地方使用会报错。

## typeof NaN 的结果是什么？

#### 类型：`基础`

#### 级别：`W1`、`W2`

#### 解答（2 分）

- NaN 指“不是一个数字”（not a number），NaN 是一个“警戒值”（sentinel value，有特殊用途的常规值），用于指出数字类型中的错误情况，即“执行数学运算没有成功，这是失败后返回的结果”。

```js

typeof NaN; // "number"

```

## isNaN 和 Number.isNaN 函数的区别

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`

#### 解答（4 分）

- **1：**
  **基本概念**
  + `isNaN`：是全局函数，用于判断一个值是否为 `NaN`。它会先尝试将传入的值转换为数字，再判断转换后的结果是否为 `NaN`。
  + `Number.isNaN`：是 `Number` 对象的静态方法，用于判断一个值是否严格等于 `NaN`，不会进行类型转换。

- **2：**
  **代码示例及区别体现**

  ```javascript
  // isNaN 示例
  console.log(isNaN('abc')); // true，因为 'abc' 转换为数字是 NaN
  console.log(isNaN('123')); // false，'123' 可转换为数字 123
  console.log(isNaN(NaN)); // true

  // Number.isNaN 示例
  console.log(Number.isNaN('abc')); // false，'abc' 不是严格的 NaN
  console.log(Number.isNaN(NaN)); // true
  console.log(Number.isNaN(123)); // false
  ```

- **1：**
  **应用场景**
  + `isNaN`：当需要判断一个值是否能转换为有效的数字时使用，例如在处理用户输入时，判断输入是否为合法的数字。
  + `Number.isNaN`：当需要严格判断一个值是否就是 `NaN` 时使用，比如在进行数据验证，确保某个变量的值就是 `NaN`。

## || 和 && 操作符的返回值？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2 分）

- **1：** `||` 条件判断时，符号两边有一个为`true`，则返回`true`，否则返回`false`。输出值时，输出第一个为真的值。
- **1：** `&&` 条件判断时，符号两边有一个为`false`，则返回`false`，否则返回`true`。输出值时，输出第二个为真的值。

## Map数据结构有哪些操作方法？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2 分）

- size： map.size 返回Map结构的成员总数。

- set(key,value)：设置键名key对应的键值value，然后返回整个Map结构，如果key已经有值，则键值会被更新，否则就新生成该键。（因为返回的是当前Map对象，所以可以链式调用）

- get(key)：读取key对应的键值，如果找不到key，返回undefined。

- has(key)：返回一个布尔值，表示某个键是否在当前Map对象中。

- delete(key)：删除某个键，返回true。如果删除失败，返回false。

- clear()：清除所有成员，没有返回值。

## Unicode、UTF-8、UTF-16、UTF-32的区别？

#### 类型：`拓展`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2 分）

- Unicode 是一种字符集，包含了世界上所有的符号，每个符号对应一个唯一的编码，Unicode 的编码范围是 0x0000 至 0x10FFFF。

- UTF-8、UTF-16、UTF-32 是三种不同的 Unicode 的编码方式，用于将 Unicode 的编码转换为字节序列，以便在计算机中存储和传输。

- UTF-8 是一种变长的编码方式，使用 1 到 4 个字节来表示一个符号，根据不同的符号而变化字节长度。

- UTF-16 是一种定长的编码方式，使用 2 个或 4 个字节来表示一个符号，根据不同的符号而变化字节长度。

- UTF-32 是一种定长的编码方式，使用 4 个字节来表示一个符号，每个符号都使用 4 个字节来表示。