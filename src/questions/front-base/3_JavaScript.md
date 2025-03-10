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

## 31. 匿名函数的典型应用场景是什么？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（3 分）

- 匿名函数可以在 IIFE 中使用，来封装局部作用域内的代码，以便其声明的变量不会暴露到全局作用域。

```js
(function () {
  // 一些代码。
})();
```

- 匿名函数可以作为只用一次，不需要在其他地方使用的回调函数。当处理函数在调用它们的程序内部被定义时，代码具有更好地自闭性和可读性，可以省去寻找该处理函数的函数体位置的麻烦。

```js

setTimeout(function () {
  console.log('Hello world!');
}, 1000);

```

- 匿名函数可以用于函数式编程或 Lodash（类似于回调函数）。

```js
const arr = [1, 2, 3];
const double = arr.map(function (el) {
  return el * 2;
});
console.log(double); // [2, 4, 6]

```

## 32. 手写单例模式（创建模式）

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（3 分）

```js
    let CreateSingleton = (function(){
       let instance;
       return function(name) {
           if (instance) {
               return instance;
           }
           this.name = name;
           return instance = this;
       }
    })();
    CreateSingleton.prototype.getName = function() {
       console.log(this.name);
    }

let Winner = new CreateSingleton('Winner');
let Looser = new CreateSingleton('Looser');
​
console.log(Winner === Looser); // true
console.log(Winner.getName());  // 'Winner'
console.log(Looser.getName());  // 'Winner'

```

## 33. 手写观察者模式（行为模式）

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（3 分）

```js
const queuedObservers = new Set();
const observe = fn => queuedObservers.add(fn);
​
​
const observable = obj => new Proxy(obj, {
  set(target, key, value, receiver) {
    const result = Reflect.set(target, key, value, receiver);
    // notify
    queuedObservers.forEach(observer => observer());
    return result;
  }
});

obj = observable({
  name:'789'
})
​
observe(function test(){
  console.log('触发了')
})
​
obj.name ="前端柒八九"

```

## 34. 手写发布订阅 （行为模式）

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（3 分）

```js
class Observer {
  caches = {}; // 事件中心
  
  // eventName事件名-独一无二, fn订阅后执行的自定义行为
  on (eventName, fn){ 
    this.caches[eventName] = this.caches[eventName] || [];
    this.caches[eventName].push(fn);
  }
  
  // 发布 => 将订阅的事件进行统一执行
  emit (eventName, data) { 
    if (this.caches[eventName]) {
      this.caches[eventName]
      .forEach(fn => fn(data));
    }
  }
  // 取消订阅 => 若fn不传, 直接取消该事件所有订阅信息
  off (eventName, fn) { 
    if (this.caches[eventName]) {
      const newCaches = fn 
        ? this.caches[eventName].filter(e => e !== fn) 
        : [];
      this.caches[eventName] = newCaches;
    }
  }
​
}

    ob = new Observer();
    ​
    l1 = (data) => console.log(`l1_${data}`)
    l2 = (data) => console.log(`l2_${data}`)
    ​
    ob.on('event1',l1)
    ob.on('event1',l2)
    ​
    //发布订阅
    ob.emit('event1',789) 
    // l1_789
    // l2_789
    ​
    // 取消，订阅l1
    ob.off('event1',l1)
    ​
    ob.emit('event1',567)

```

## 35. 深浅拷贝的区别？如何实现一个深拷贝？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（3 分）

- 深浅拷贝通常只针对引用类型

- 浅拷贝：只拷贝一层对象，复制这一层对象中的原始值，如果有引用类型的话，就复制它的指针

- 深拷贝：层层拷贝，所有类型的属性值都会被复制，原对象的修改不会影响拷贝后的对象 JSON.parse(JSON.stringify(obj)) --- 无法处理 undefined Symbol function -- 无法处理循环引用

```js

Function  shallowCopy(obj){
      let newObj = {]
      for( let key in  obj ){
        if(obj.hasOwnProperty(key)){ 
        //hasOwnProperty检测对象自己身上方法而不是原先链上的
          newObj[key]=obj[key]
        }
      }
      return  newObj
} 
// 咱们会浅拷贝当然还要深拷贝呀  开始
Function  shallowCopy(obj){
      let newObj = {]
      for( let key in  obj ){
        if(obj.hasOwnProperty(key)){ 
        //hasOwnProperty检测对象自己身上方法而不是原先链上的
        if  ( typeof(obj[key])!==obj||obj[key]===null){
           newObj[key]=obj[key]
        }else{
           newObj[key]=shallowCopy(obj[key])
        }  
        }
      }
      return  newObj
}
```

## 36. 说说Ajax的原理

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（3 分）

- Async Javascript and XML ，是一种异步js和网页交互的技术，可以实现不刷新网页就跟服务器交换数据，更新页面。

- 创建XHR实例对象

- 调用实例对象中的open方法与服务器建立连接

- 调用实例对象中的send方法发送请求

- 监听onreadystatechange事件，通过判断readyState的值来获取到最终的数据

- 将数据更新到html页面

## 37. 什么是执行上下文和执行栈？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（1 分）

- 变量或函数的执行上下文，决定了它们的行为以及可以访问哪些数据。每个上下文都有一个关联的变量对象，而这个上下文中定义的所有变量和函数都存在于这个对象上(如DOM中全局上下文关联的便是window对象)。

- 每个函数调用都有自己的上下文。当代码执行流进入函数时，函数的上下文被推到一个执行栈中。在函数执行完之后，执行栈会弹出该函数上下文，在其上的所有变量和函数都会被销毁，并将控制权返还给之前的执行上下文。 JS的执行流就是通过这个执行栈进行控制的。

## 38. 作用域和执行上下文的区别是什么？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（1 分）

- 函数的执行上下文只在函数被调用时生成，而其作用域在创建时已经生成；

- 函数的作用域会包含若干个执行上下文(有可能是零个，当函数未被调用时)。

## 39. require/import之间的区别？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2 分）

- require是CommonJS语法，import是ES6语法；

- require只在后端服务器支持，import在高版本浏览器及Node中都可以支持；

- require引入的是原始导出值的复制，import则是导出值的引用；

- require时运行时动态加载，import是静态编译；

- require调用时默认不是严格模式，import则默认调用严格模式.

## 40. script标签中defer和async的区别？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2 分）

- defer 和 async属性都是去异步加载外部的JS脚本文件，它们都不会阻塞页面HTML的解析，其区别如下：

- 执行顺序： 多个带async属性的标签，不能保证加载的顺序；多个带defer属性的标签，按照加载顺序执行；

- 脚本是否并行执行：async属性，表示 后续文档的加载和执行与js脚本的加载和执行是并行进行的，即异步执行；defer属性，加载后续文档的过程和js脚本的加载(此时仅加载不执行)是并行进行的(异步)，js脚本需要等到文档所有元素解析完成之后才执行，DOMContentLoaded事件触发执行之前。

- 没有 defer 或 async，浏览器会立即加载并执行指定的脚本，之前加载到一半的HTML页面会停止下来，被阻塞加载。

- 有 async，加载和渲染后续文档元素的过程将和 script.js 的加载与执行并行进行，将script变成异步，当scripet异步解析完成后，如果HTML页面还没有完成解析，又会继续阻塞页面的解析。

- 有 defer，加载后续文档元素的过程将和 script.js 的加载并行进行，将script变成异步。但是 script.js 的执行要在所有元素解析完成之后，类似于将这个script放在了页面的底部。

## 41. class和function的区别?

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2 分）

- 相同点：1. 函数作为构造函数

- 不同点：

- class构造函数必须使用new操作符。

- class声明不可以提升。

- class不可以用call、apply、bind改变this指向。

## 42. 为什么0.1+0.2 ! == 0.3，如何让其相等 ？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2 分）

- 计算机是通过二进制的方式存储数据的，所以计算机计算0.1+0.2的时候，实际上是计算的两个数的二进制的和。0.1的二进制是0.0001100110011001100...（1100循环），0.2的二进制是：0.00110011001100...（1100循环），这两个数的二进制都是无限循环的数。那JavaScript是如何处理无限循环的二进制小数呢？

- toFixed(num) 方法可把 Number 四舍五入为指定小数位数的数字。

```js
(n1 + n2).toFixed(2) // 注意，toFixed为四舍五入
```

## 43. JS严格模式有什么特点？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2 分）

- 全局变量必须声明

- 禁止this指向windows

- 函数参数名称不能重复

- 禁止使用with语句

- 创建eval作用域（单独作用域）

## 44. js 中const真的不能修改吗？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（1 分）

- const定义的基本类型不能改变，但是定义的引用类型中的 数组 与 对象 可以通过修改对象属性改变。 const使用建议：不要使用const定义 数组 或 对象 作为常量。

## 45. typeof与instanceof的区别？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（1 分）

- 返回结果类型不同：typeof会返回一个变量的基本类型，instanceof返回的是一个布尔值

- 判断范围不同：instanceof 可以准确地判断复杂引用数据类型，但是不能正确判断基础数据类型；而typeof 也存在弊端，它虽然可以判断基础数据类型（null 除外），但是引用数据类型中，除了function 类型以外，其他的也无法判断

## 46. 如何判断一个变量是不是数组？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（1 分）

- instanceof Array

- Array.isArray();

- Object.prototype.toString.call();

## 47. class的原型本质怎么理解？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2 分）

- 原型：所有的class都有显示原型，每个实例都有隐式原型，实例的隐式原型等于对应class的显示原型，非基本属性的class的隐式原型等于其继承的class的显示原型。

- 原型链：每一个对象都有一个隐式原型叫__proto__，它的指向是构造函数的原型对象。当查找某个属性或方法时，先从自身上查找，没有找到会沿着__proto_找到构造函数的原型对象，仍然没有找到会继续沿着__proto__向上查找到它构造函数原型对象的原型对象，直到找到顶级对象object为null，由此形成的链条为原型链。

## 48. ES5、ES6 如何实现继承?

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2 分）

- ES5：①原型链继承 ②构造函数继承 ③组合继承 ④寄生组合继承

- ES6：ES6 中引入了 class 关键字， class 可以通过 extends 关键字实现继承。ES6的继承中super是用来①调用父类函数 ②指向父类的原型

## 49. 宏任务有哪些？微任务有哪些？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2 分）

- JavaScript 运行时的事件循环机制中，任务分为宏任务（macro task）和微任务（micro task）。

- 常见的宏任务有：

- setTimeout 和 setInterval 的回调函数

- DOM 事件

- XMLHttpRequest 中的readystatechange事件

- requestAnimationFrame 中的回调函数

- I/O 操作和网络请求的回调函数

- Node.js 中的文件读写操作的回调函数

- Node.js 中的进程事件

- 常见的微任务有：

- Promise.then 和 Promise.catch 的回调函数

- MutationObserver 的回调函数

- process.nextTick 函数

- Object.observe 的回调函数

## 50. DOM操作的常用API

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

- 设置元素类名：className

- 获取元素内容：innerHTML

## 51. attribute和property（都是属性）的区别

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（3 分）

- 两者都有可能引起DOM重新渲染

- property : 修改对象属性，不会体现到html结构中

- attribute : 修改html属性，会改变html结构

## 52. 什么是事件冒泡？什么是事件代理？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2 分）

- 事件冒泡和事件代理都是JavaScript中处理事件的机制。

- 事件冒泡指的是当用户触发某个元素的事件时，该事件会先被触发该元素上，然后再逐级往上层元素传递，直至达到文档节点。简单来说，就是事件从子元素向父元素冒泡传递的过程。

- 事件代理，又称事件委托，是利用了事件冒泡机制，把事件绑定到父元素上，然后通过判断事件的target属性，来确定触发事件的元素是否是我们需要处理事件的元素，从而实现事件处理的目的。这种机制能够减少事件处理程序的数量，避免了为每一个节点添加事件处理程序，从而节省内存和提高程序的效率。

## 53. Ajax Fetch Axios的区别？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2 分）

- Fetch：是一个具体的浏览器原生API，用于网络请求；它和xmlhttpRequest是一个级别的，但是其语法更加简洁，更加易用，并且支持Promise

- Axios：是一个第三方库。内部可以通过XMLHttpRequest和Fetch来实现

- Ajax：是一个概念，表示通过JavaScript进行异步网络请求的技术。

## 54. 描述cookie，localStorage，sessionStorage的区别？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2 分）

- cookie：存储在客户端，大小限制为4KB，有有效期，可以设置过期时间，默认为会话级别，即浏览器关闭后cookie失效。

- localStorage：存储在客户端，大小限制为5MB，没有有效期，除非手动清除，否则一直存在。

- sessionStorage：存储在客户端，大小限制为5MB，仅在当前会话有效，关闭浏览器后失效。

- localStorage和sessionStorage的区别在于，localStorage的数据在浏览器关闭后依然存在，而sessionStorage的数据在浏览器关闭后就会失效。

## 55. 如何阻止事件冒泡，事件的默认行为？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2 分）

- 阻止事件冒泡：

- event.stopPropagation();

- IE：evnet.cancelBuddle = true;

- 阻止事件默认行为：

- event.preventDefault();

- IE： e.return Value = false;

## 56. document.write() 和 innerHTML 的区别？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2 分）

- document.write()是直接写入到页面的内容流，如果在写之前没有调用document.open()，浏览器会自动调用open()，每次写完关闭之后会重新调用该函数，会导致页面被重写；

- innerHTML则是 DOM 页面元素的一个属性，代表该元素的html内容；

- innerHTML将内容写入到某个DOM节点，不会导致页面重绘；

- innerHTML在很多情况下都优于document.write()，原因在于其允许更精确的控制要刷新页面的那个部分

## 57. window load和document ready的区别？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2 分）

- window load：当整个页面及所有依赖资源如样式表和图片都已完成加载时，触发window load事件。

- document ready：当初始的 HTML 文档被完全加载和解析完成之后，DOMContentLoaded 事件被触发，无需等待样式表、图像和子框架的加载完成。

- window load事件是在页面加载完成后触发的，而document ready事件是在DOM加载完成后触发的，因此，document ready事件比window load事件更早触发。

- 因此，如果需要在页面加载完成后执行某些操作，可以使用window load事件；如果需要在DOM加载完成后执行某些操作，可以使用document ready事件。

## 58. Set、Map的区别？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2 分）

- Set：是一种新的数据结构，类似于数组，但是成员的值都是唯一的，没有重复的值。

- Map：是一种新的数据结构，类似于对象，但是键可以是任意类型。

- Set和Map的区别在于，Set的键值是唯一的，而Map的键值可以是任意类型。

## 59. return，break，continue的区别是什么

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2 分）

- return 必须写在函数内部，遇到return后函数内部剩余的代码不再执行，直接返回；还可以使用return返回一个值给外面使用

- break 跳出循环，剩余的循环不再执行

- continue  跳出本次循环，剩余的循环继续执行

## 60. typeof NaN 的结果是什么？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2 分）

- NaN 指“不是一个数字”（not a number），NaN 是一个“警戒值”（sentinel value，有特殊用途的常规值），用于指出数字类型中的错误情况，即“执行数学运算没有成功，这是失败后返回的结果”。

```js

typeof NaN; // "number"

```

## 61. 其他值到字符串的转换规则？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2 分）

- Null 和 Undefined 类型 ，null 转换为 "null"，undefined 转换为 "undefined"，

- Boolean 类型，true 转换为 "true"，false 转换为 "false"。

- Number 类型的值直接转换，不过那些超出字符表示范围的整数部分，则用十六进制表示。

- Symbol 类型的值直接转换，但是只允许显式转换，如 String(sym)。

- 对普通对象来说，除非自行定义 toString() 方法，否则会调用 toString()（Object.prototype.toString()）来返回内部属性 [[Class]] 的值，如"[object Object]"。如果对象有自己的 toString() 方法，字符串化时就会调用该方法并使用其返回值。

## 62. isNaN 和 Number.isNaN 函数的区别？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2 分）

- 函数 isNaN 接收参数后，会尝试将这个参数转换为数值，任何不能被转换为数值的的值都会返回 true，因此非数字值传入也会返回 true ，会影响 NaN 的判断。

- 函数 Number.isNaN 会首先判断传入参数是否为数字，如果是数字再继续判断是否为 NaN ，不会进行数据类型的转换，这种方法对于 NaN 的判断更为准确。

## 63.  || 和 && 操作符的返回值？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2 分）

- || 和 && 首先会对第一个操作数执行条件判断，如果其不是布尔值就先强制转换为布尔类型，然后再执行条件判断。

- 对于 || 来说，如果条件判断结果为 true 就返回第一个操作数的值，如果为 false 就返回第二个操作数的值。

- && 则相反，如果条件判断结果为 true 就返回第二个操作数的值，如果为 false 就返回第一个操作数的值。

- || 和 && 返回它们其中一个操作数的值，而非条件判断的结果。

## 64. 为什么会有BigInt的提案？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（1 分）

- JavaScript中Number.MAX_SAFE_INTEGER表示最⼤安全数字，计算结果是9007199254740991，即在这个数范围内不会出现精度丢失（⼩数除外）。但是⼀旦超过这个范围，js就会出现计算不准确的情况，这在⼤数计算的时候不得不依靠⼀些第三⽅库进⾏解决，因此官⽅提出了BigInt来解决此问题。

## 65. object.assign和扩展运算法是深拷贝还是浅拷贝，两者区别？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2 分）

- 两者都是浅拷贝。

- Object.assign()方法接收的第一个参数作为目标对象，后面的所有参数作为源对象。然后把所有的源对象合并到目标对象中。它会修改了一个对象，因此会触发 ES6 setter。

- 扩展操作符（…）使用它时，数组或对象中的每一个值都会被拷贝到一个新的数组或对象中。它不复制继承的属性或类的属性，但是它会复制ES6的 symbols 属性。

## 66. 如果new一个箭头函数的会怎么样?

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2 分）

- 箭头函数是ES6中的提出来的，它没有prototype，也没有自己的this指向，更不可以使用arguments参数，所以不能New一个箭头函数。

- new操作符的实现步骤如下：

- 1.创建一个对象

- 2.将构造函数的作用域赋给新对象（也就是将对象的__proto__属性指向构造函数的prototype属性）

- 3.指向构造函数中的代码，构造函数中的this指向该对象（也就是为这个对象添加属性和方法）

- 4.返回新的对象

- 由于箭头函数没有自己的this，用new调用会报错！所以，上面的第二、三步，箭头函数都是没有办法执行的。

## 67. 对对象与数组的解构的理解

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2 分）

- 解构是 ES6 提供的一种新的提取数据的模式，这种模式能够从对象或数组里有针对性地拿到想要的数值。

- 数组的解构 在解构数组时，以元素的位置为匹配条件来提取想要的数据的

- 对象的解构 对象解构比数组结构稍微复杂一些，也更显强大。在解构对象时，是以属性的名称为匹配条件，来提取想要的数据的

## 68. 对 rest 参数的理解

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2 分）

- 扩展运算符被用在函数形参上时，它还可以把一个分离的参数序列整合成一个数组：

``` js
function mutiple(...args) {
  let result = 1;
  for (var val of args) {
    result *= val;
  }
  return result;
}
mutiple(1, 2, 3, 4) // 24

```

- 这里，传入 mutiple 的是四个分离的参数，但是如果在 mutiple 函数里尝试输出 args 的值，会发现它是一个数组：

``` js
function mutiple(...args) {
  console.log(args)
}
mutiple(1, 2, 3, 4) // [1, 2, 3, 4]

```

- 这就是 … rest运算符的又一层威力了，它可以把函数的多个入参收敛进一个数组里。这一点经常用于获取函数的多余参数，或者像上面这样处理函数参数个数不确定的情况。

## 68. Map数据结构有哪些操作方法？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2 分）

- size： map.size 返回Map结构的成员总数。

- set(key,value)：设置键名key对应的键值value，然后返回整个Map结构，如果key已经有值，则键值会被更新，否则就新生成该键。（因为返回的是当前Map对象，所以可以链式调用）

- get(key)：读取key对应的键值，如果找不到key，返回undefined。

- has(key)：返回一个布尔值，表示某个键是否在当前Map对象中。

- delete(key)：删除某个键，返回true。如果删除失败，返回false。

- clear()：清除所有成员，没有返回值。

## 69. 数组有哪些原生方法？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2 分）

- 数组和字符串的转换方法：toString()、toLocalString()、join() 其中 join() 方法可以指定转换为字符串时的分隔符。

- 数组尾部操作的方法 pop() 和 push()，push 方法可以传入多个参数。

- 数组首部操作的方法 shift() 和 unshift() 重排序的方法 reverse() 和 sort()，sort() 方法可以传入一个函数来进行比较，传入前后两个值，如果返回值为正数，则交换两个参数的位置。

- 数组连接的方法 concat() ，返回的是拼接好的数组，不影响原数组。

- 数组截取办法 slice()，用于截取数组中的一部分返回，不影响原数组。

- 数组插入方法 splice()，影响原数组查找特定项的索引的方法，indexOf() 和 lastIndexOf() 迭代方法 every()、some()、filter()、map() 和 forEach() 方法

- reduce() 和 reduceRight() 方法将数组元素计算为一个值，这对求和非常有用

## 70. Unicode、UTF-8、UTF-16、UTF-32的区别？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2 分）

- Unicode 是一种字符集，包含了世界上所有的符号，每个符号对应一个唯一的编码，Unicode 的编码范围是 0x0000 至 0x10FFFF。

- UTF-8、UTF-16、UTF-32 是三种不同的 Unicode 的编码方式，用于将 Unicode 的编码转换为字节序列，以便在计算机中存储和传输。

- UTF-8 是一种变长的编码方式，使用 1 到 4 个字节来表示一个符号，根据不同的符号而变化字节长度。

- UTF-16 是一种定长的编码方式，使用 2 个或 4 个字节来表示一个符号，根据不同的符号而变化字节长度。

- UTF-32 是一种定长的编码方式，使用 4 个字节来表示一个符号，每个符号都使用 4 个字节来表示。