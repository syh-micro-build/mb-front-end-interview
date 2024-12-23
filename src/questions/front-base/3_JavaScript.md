# JavaScript

## JS 数据类型有哪些？

#### 类型：`基础`

#### 级别：`W1`

#### 解答（2 分）

- **1：** 基本类型：字符串（String）、数字(Number)、布尔(Boolean)、空（Null）、未定义（Undefined）、Symbol（ES6特性）、BigInt（ES11特性）；
- **1：** 引用类型：对象（Object）、函数（Function）、数组（Array）等；

## == 和 === 的区别是什么？

#### 类型：`基础`

#### 级别：`W1`

#### 解答（2 分）

- **1：** == 是 宽松相等，会进行类型转换，比较前会先转换两边的操作数类型（例如，'5' == 5 为 true;
- **1：** === 是 严格相等，不会进行类型转换，只有两边的值和类型都相同才会返回 true（例如，'5' === 5 为 false;

## var 、let 、 const 的区别是什么？

#### 类型：`基础`

#### 级别：`W1`

#### 解答（2 分）

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

#### 解答（2 分）

- **1：** 事件冒泡：事件从目标元素开始，向上冒泡到 document;
- **1：** 事件捕获：事件从 document 开始，向下捕获到目标元素;
- **1：** 事件流顺序: 1.捕获 -> 2.目标 -> 3.冒泡;
- **2：** 引用类型：对象（Object）、函数（Function）、数组（Array）等；

## JS 什么是防抖和节流？它们的应用场景有哪些？

#### 类型：`基础`

#### 级别：`W1`

#### 解答（3 分）

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

#### 解答（2 分）

- **1：** 在person.sayHello()调用中，this指向person对象。
- **1：** 当一个函数作为对象的方法被调用时，this指向调用该方法的对象。在这里，sayHello是person对象的方法，所以this指代person，因此可以正确访问person.name

## JS 请解释setTimeout和setInterval的区别，并说明如何清除定时器

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2 分）

- **1：** setTimeout：在指定的延迟时间（毫秒）后执行一次回调函数。示例：setTimeout(() => console.log('Delayed'), 1000);，1 秒后会执行一次回调打印Delayed。
setInterval：按照指定的时间间隔（毫秒）重复执行回调函数。示例：let intervalId = setInterval(() => console.log('Repeating'), 1000);，每隔 1 秒就会执行一次回调打印Repeating。
- **1：** 使用clearTimeout清除setTimeout创建的定时器，传入setTimeout返回的定时器 ID。例如：const timeoutId = setTimeout(() => console.log('Timeout'), 2000); clearTimeout(timeoutId);，这样就会取消即将执行的setTimeout回调。
          使用clearInterval清除setInterval创建的定时器，传入setInterval返回的定时器 ID，如clearInterval(intervalId);会停止setInterval的重复执行。

## Promise 的常用方法

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（7 分）

- **1：** Promise.resolve(value)：返回一个已解决的 Promise，如果 value 是一个 Promise，返回的 Promise 会继承其状态。
- **1：** Promise.reject(reason)：返回一个已拒绝的 Promise，带有拒绝的原因。
- **1：** Promise.all(iterable)：接收一个可迭代对象，返回一个新的 Promise，当所有 Promise 都成功时返回结果数组，若有任何 Promise 失败，返回的 Promise 会立即失败。
- **1：** Promise.race(iterable)：返回一个 Promise，它会在第一个完成的 Promise 状态改变时返回该 Promise 的结果（无论是成功还是失败）。
- **1：** Promise.allSettled(iterable)：返回一个新的 Promise，在所有输入的 Promise 完成时返回，结果包含每个 Promise 的状态及其结果。
- **1：** Promise.any(iterable)：返回一个新的 Promise，它会在第一个成功的 Promise 完成时返回成功结果，如果所有的 Promise 都失败，则返回一个拒绝的 Promise。
- **1：** Promise.finally(onFinally)：无论 Promise 成功或失败，都会执行 onFinally 回调，常用于清理操作。

## 解释 Set 和 Map 的使用及区别

#### 类型：基础

#### 级别：W5

#### 解答（2 分）

- **1：** Set：是一个集合，用于存储不重复的值，按照插入顺序排列。
- **1：** Map：是一个键值对集合，用于存储键值对，可以存储任何类型的键和值。

```js
// Set
let set = new Set();
set.add(1);
set.add(2);
set.add(2); // 会被忽略
console.log(set); // Set { 1, 2 }

// Map
let map = new Map();
map.set('name', 'Alice');
map.set('age', 25);
console.log(map.get('name')); // Alice

```

## 请写出几个 JavaScript 函数，用于实现数组去重

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

#### 类型：基础

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（4 分）

- **2：** CommonJS是对模块的浅拷⻉，ES6 Module是对模块的引⽤，即ES6 Module只存只读，不能改变其值，也就是指针指向不能变，类似const
- **2：** import的接⼝是read-only（只读状态），不能修改其变量值。 即不能修改其变量的指针指向，但可以改变变量内部指针指向，可以对commonJS对重新赋值（改变指针指向），但是对ES6 Module赋值会编译报错

注：S6 Module和CommonJS模块的共同点：

CommonJS和ES6 Module都可以对引⼊的对象进⾏赋值，即对对象内部属性的值进⾏改变

[docs](https://juejin.cn/post/7331931937357496354)

## new 操作符的实现原理

#### 类型：基础

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2 分）

<details>

- **2：** new操作符的执行过程：

>（1）首先创建了一个新的空对象
>
>（2）设置原型，将对象的原型设置为函数的 prototype 对象
>
>（3）让函数的 this 指向这个对象，执行构造函数的代码（为这个新对象添加属性）
>
>（4）判断函数的返回值类型，如果是值类型，返回创建的对象。如果是引用类型，就返回这个引用类型的对象

```js
function objectFactory() {
  let newObject = null;
  let constructor = Array.prototype.shift.call(arguments);
  let result = null;
  // 判断参数是否是一个函数
  if (typeof constructor !== "function") {
    console.error("type error");
    return;
  }
  // 新建一个空对象，对象的原型为构造函数的 prototype 对象
  newObject = Object.create(constructor.prototype);
  // 将 this 指向新建对象，并执行函数
  result = constructor.apply(newObject, arguments);
  // 判断返回对象
  let flag = result && (typeof result === "object" || typeof result === "function");
  // 判断返回结果
  return flag ? result : newObject;
}
// 使用方法
objectFactory(构造函数, 初始化参数);
```

</details>

## 数组的原生方法有哪些？

#### 类型：基础

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（7 分）

<details>

- **1：** 数组和字符串的转换方法：toString()、toLocalString()、join() 其中 join() 方法可以指定转换为字符串时的分隔符。
- **1：** 数组尾部操作的方法 pop() 和 push()，push 方法可以传入多个参数。
- **1：** 数组首部操作的方法 shift() 和 unshift() 重排序的方法 reverse() 和 sort()，sort() 方法可以传入一个函数来进行比较，传入前后两个值，如果返回值为正数，则交换两个参数的位置。
- **1：** 数组连接的方法 concat() ，返回的是拼接好的数组，不影响原数组。
- **1：** 数组截取办法 slice()，用于截取数组中的一部分返回，不影响原数组。
- **1：** 数组插入方法 splice()，影响原数组查找特定项的索引的方法，indexOf() 和 lastIndexOf() 迭代方法 every()、some()、filter()、map() 和 forEach() 方法
- **1：** 数组归并方法 reduce() 和 reduceRight() 方法

</details>

## bind、call、apply 区别

#### 类型：基础

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（3 分）

<details>

- **1：** call 和apply 都是为了解决改变 this 的指向。作⽤都是相同的，只是传参的⽅式不同
- **1：** 除了第⼀个参数外，call 可以接收⼀个参数列表，apply 只接受⼀个参数数组

```js
let a = { value: 1 }
function
  getValue(name, age) {
  console.log(name)
  console.log(age)
  console.log(this.value)
}
getValue.call(a, 'yck','24')
getValue.apply(a,['yck', '24'])
```

- **1：** bind 和其他两个⽅法作⽤也是⼀致的，只是该⽅法会返回⼀个函数。并且我们可以通过 bind 实现柯⾥化

</details>

## == 和 ===区别，什么情况⽤ ==

#### 类型：基础

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（1 分）

- **1：** ===⽤于判断两者类型和值是否相同。在开发中，对于后端返回的 code，可以通过 == 去判断

## Proxy 的使用

#### 类型：基础

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（6 分）

<details>

- **4：** 部分 API

![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3e08a8f141f44148ad6f66c7fdc1ab3e~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp)

- **1：** 函数调用的监听

```js
function fun() {
    console.log("哈哈哈");
}

const objProxy = new Proxy(fun, {
    /**
     * 拦截对函数的调用的捕获器
     * @param target target new Proxy 所代理的 obj（监听的对象）
     * @param thisArg 调用函数时绑定的 this 值
     * @param argArray 调用函数时传递的参数列表
     */
    apply(target, thisArg, argArray) {
        console.log("对 fun 函数进行了 apply 的调用。");
        // 调用原始函数，并在其结果前后添加一些内容
        target.apply(thisArg, argArray)
    },
    /**
     * 监听 class 时的捕获器
     * @param target target new Proxy 所代理的 obj（监听的对象）
     * @param argArray new fun() 时传入的参数，例：new fun(1, 2, ...rest)
     * @param newTarget 被调用的构造函数。在这里，newTarget 就是 objProxy 本身，因为 objProxy 是一个函数代理
     */
    construct(target, argArray, newTarget) {
        console.log("对 fun 函数进行了 construct 的调用。");
        return new target(...argArray)
    }
});

objProxy.apply();
new objProxy();

```

- **1：** new Proxy 中 receiver 参数的作用

```js
const obj = {
    _name: "里斯",
    age: 16,
    get name() {
        return this._name;
    },
    set name(newValue) {
        this._name = newValue;
    }
};

const objProxy = new Proxy(obj, {
    /**
     * receiver 就是 objProxy 这个代理对象
     * receiver 传入 Reflect.get 之后，他就作为 obj 里的 this 了（this 这个时候就改变了）
     *
     */
    get(target, key, receiver) {
        console.log(receiver);
        /**
         * 传入 receiver 后，他被访问了两次
         */
        return Reflect.get(target, key, receiver);
    },
    set(target, key, newValue, receiver) {
        Reflect.set(target, key, newValue, receiver);
    }
});

objProxy.name = "哈哈哈";
console.log(objProxy.name);
```

</details>

## Object.defineProperty 的使用

#### 类型：基础

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（4 分）

<details>

- **1：** Object.defineProperty 的设计初中不是为了监听对象中属性变化的，而是为了定义访问属性描述符。

- **1：** 访问属性描述符包括：configurable、enumerable、writable、value

- **1：** 访问属性描述符的方法：Object.getOwnPropertyDescriptor()

- **1：** 缺点

    ① 一次监听太多的时候，不是很友好

    ② 新增、删除的时候，他是无能为力的

    ③ 会修改原对象中的属性

```js
const obj = {
    name: "里斯",
    age: 16
};

/**
 * 监听某个属性
 */
/*
Object.defineProperty(obj, "name", {
    set(v) {
        console.log(v);
        console.log("监听到 set");
    },
    get() {
        console.log("监听到 get");
    }
});
*/

/**
 * 监听所有的属性
 */
Object.keys(obj).forEach(key => {
    console.log(key);
    let value = obj[key];
    Object.defineProperty(obj, key, {
        set(v) {
            console.log(`监听到属性 ${key}，被 set 为 ${v}`);
            value = v;
        },
        get() {
            console.log(`监听到属性 ${key} get`);
            return value;
        }
    });
});


obj.name = "哈哈哈";

console.log(obj.name);
```

</details>
