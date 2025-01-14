# react

## 1. 什么是 React 的生命周期方法？

#### 类型：基础

#### 级别：W1

#### 解答（3 分）

- **1：** 类组件声明周期方法:
- **1：** 挂载阶段：constructor(): 在组件创建时调用，通常用来初始化状态; componentDidMount(): 在组件挂载到 DOM 后调用，一般用来执行异步请求或订阅事件。
- **1：** 更新阶段：shouldComponentUpdate(): 用来优化性能，判断组件是否需要重新渲染； componentDidUpdate(): 在组件更新后调用，通常用于来操作DOM。
- **1：** 卸载阶段：componentWillUnmount(): 在组件从 DOM 中卸载之前调用，一般用来清理资源。
- **1：** 函数组件生命周期（Hooks）:
- **1：** useEffect(): 用来替代 componentDidMount、componentDidUpdate 和 componentWillUnmount，可以设置副作用和清理操作。

```js

useEffect(() => {
// 组件挂载时执行的操作
return () => {
// 组件卸载时清理资源
};
}, [dependencies]);  // 依赖数组

```

## 2. React 中的 Hook 是什么？

#### 类型：基础

#### 级别：W1

#### 解答（5 分）

- **1：** useState()：用于在函数组件中添加状态。
- **1：** useEffect()：用于在函数组件中执行副作用操作（如数据请求、订阅、DOM 操作等）。
- **1：** useContext()：用于在函数组件中访问上下文（Context）。
- **1：** useReducer()：类似于 useState，但适用于复杂的状态管理，类似于 Redux 的 reducer。
- **1：** useRef()：用于访问组件中的 DOM 节点或保存可变的值。
- **1：** useMemo() 和 useCallback()：用于性能优化，避免不必要的渲染。

## 3. React 中的状态和 props 有什么区别？

#### 类型：基础

#### 级别：W2

#### 解答（2 分）

- **1：** props（属性）：由父组件传递给子组件，用于传递数据。props 是只读的，子组件不能修改 props。

```js
 function MyComponent(props) {
  return <h1>{props.message}</h1>;
}

```

- **1：** state（状态）：由组件自身管理，用于存储和跟踪组件的动态数据。state 是可变的，可以通过 this.setState()（类组件）或 useState()（函数组件）来更新。

```js
function MyComponent() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}

```

## 4. React 中如何处理事件？

#### 类型：基础

#### 级别：W2

#### 解答（3 分）

- **1：** React 事件处理的方式与原生 JavaScript 不同，React 使用事件委托来优化性能，并且事件名称采用驼峰命名法。

```js
function MyComponent() {
  const handleClick = (event) => {
    alert('Button clicked!');
  };

  return <button onClick={handleClick}>Click Me</button>;
}

```

- **1：** React 会自动绑定事件处理函数。
- **1：** 事件对象会被 React 规范化。

## 5. useState 连续调用，页面不更新？

#### 类型：基础

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2分）

```js
const [age,  setAge] = useState(42);

function handleClick() {
  setAge(age + 1); // setAge(42 + 1)
  setAge(age + 1); // setAge(42 + 1)
  setAge(age + 1); // setAge(42 + 1)
}

// 点击一次后，age 将只会变为 43 而不是 45！
```

- **1：** 连续调用 useState 不会触发页面更新，因为每次调用 useState 都会返回一个新的状态值和更新状态的函数。
- **1：** 要连续更新状态，你可以使用函数式更新，将当前状态作为参数传递给更新函数

```js
function handleClick() {
  setAge(a => a + 1); // setAge(42 => 43)
  setAge(a => a + 1); // setAge(43 => 44)
  setAge(a => a + 1); // setAge(44 => 45)
}
```

## 6. React中的性能优化方法有哪些？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（5 分）

- **1：** 使用React.memo进行组件缓存：

```jsx
const MyComponent = React.memo(function MyComponent(props) {
  /* 组件逻辑 */
});
```

- **1：** 使用useMemo缓存计算结果：

```jsx
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

- **1：** 使用useCallback缓存函数：

```jsx
const memoizedCallback = useCallback(
  () => {
    doSomething(a, b);
  },
  [a, b],
);
```

- **1：** 合理使用key：

```jsx
{list.map(item => (
  <ListItem 
    key={item.id} // 使用唯一且稳定的key
    data={item}
  />
))}
```

- **1：** 避免不必要的渲染：
  + 使用React.lazy进行代码分割
  + 使用虚拟列表处理长列表
  + 合理设计组件层级

## 7. 什么是 React？它的主要特点是什么？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（3 分）

- React 是一个用于构建用户界面的 JavaScript 库，由 Facebook 开发并维护。它主要用于构建单页应用程序（SPA）和复杂的用户界面。React 的主要特点包括：

- 组件化：React 将 UI 分解成独立的、可重用的组件。每个组件都有自己的逻辑和控制。

- 虚拟 DOM：React 使用虚拟 DOM 来提高性能。虚拟 DOM 是一个内存中的树结构，React 会先在虚拟 DOM 中进行操作，然后批量更新真实 DOM。

- 声明式编程：React 采用声明式编程风格，开发者只需描述 UI 应该是什么样的，React 会负责处理 UI 的变化。

- JSX：React 使用 JSX（JavaScript XML）语法，允许在 JavaScript 中编写类似 HTML 的标记。

- 生态系统丰富：React 拥有丰富的生态系统，包括路由器（React Router）、状态管理库（Redux、MobX）等。

## 8. 什么是 JSX？它有什么优点？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（3 分）

- JSX 是一种语法扩展，允许在 JavaScript 中编写类似 HTML 的标记。JSX 最终会被编译成普通的 JavaScript 代码.

- 可读性强：JSX 使得模板代码更加直观和易读，特别是对于复杂的 UI 结构。

- 类型检查：JSX 可以在编译时进行类型检查，减少运行时错误。

- 表达式支持：可以在 JSX 中嵌入 JavaScript 表达式，使得动态生成 UI 变得更加方便。

- 工具支持：现代开发工具（如 Babel）可以将 JSX 编译成兼容所有浏览器的 JavaScript 代码。

## 9. React中的Context是什么？如何使用？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（4 分）

- **1：** Context的创建和提供：

```jsx
const ThemeContext = React.createContext('light');

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <ThemedButton />
    </ThemeContext.Provider>
  );
}
```

- **1：** 在类组件中使用Context：

```jsx
class ThemedButton extends React.Component {
  static contextType = ThemeContext;
  render() {
    return <Button theme={this.context} />;
  }
}
```

- **1：** 在函数组件中使用useContext：

```jsx
function ThemedButton() {
  const theme = useContext(ThemeContext);
  return <Button theme={theme} />;
}
```

- **1：** Context的注意事项：
  + 避免过度使用Context
  + Context值变化会导致所有消费组件重新渲染
  + 适合共享全局数据，如主题、用户信息等

## 10. 什么是虚拟 DOM？它是如何工作的？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（3 分）

- 虚拟 DOM 是一个轻量级的内存中的 DOM 树表示。React 使用虚拟 DOM 来提高性能，避免频繁的操作真实 DOM。

- 创建虚拟 DOM：React 在内存中创建一个虚拟 DOM 树。

- Diff 算法：当状态改变时，React 会比较新的虚拟 DOM 和旧的虚拟 DOM，找出差异（即最小的变更集合）。

- 批量更新：React 将这些差异批量应用到真实 DOM，减少 DOM 操作次数，提高性能。

## 11. React 中的单向数据流是什么意思？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（3 分）

- 单向数据流 是 React 的核心设计理念之一。在单向数据流中，数据只能从父组件流向子组件，不能反向流动。这种方式使得数据流更加清晰和可控。

- 数据一致性：单向数据流确保了数据的一致性，避免了数据的混乱和不可预测的变化。

- 易于调试：数据流的单一方向使得调试更加容易，可以更容易地追踪数据的变化。

- 可预测性：单向数据流使得应用的状态变化更加可预测，便于维护和扩展。

## 12. React中的Refs是什么？有哪些使用场景？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（4 分）

- **1：** 创建和使用Refs：

```jsx
function TextInputWithFocusButton() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus Input</button>
    </>
  );
}
```

- **1：** 转发Refs：

```jsx
const FancyButton = React.forwardRef((props, ref) => (
  <button ref={ref} className="fancy-button">
    {props.children}
  </button>
));
```

- **1：** 常见使用场景：
  + 管理焦点、文本选择或媒体播放
  + 触发强制动画
  + 集成第三方DOM库

- **1：** 使用注意事项：
  + 避免过度使用Refs
  + 不要用Refs来做可以通过声明式实现的事情
  + 在类组件中使用需要通过React.createRef()创建

## 13. 什么是函数组件和类组件？它们有什么区别？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（3 分）

- 函数组件：

- 定义：函数组件是一个简单的 JavaScript 函数，接收 props 作为参数，返回 JSX。

- 优点：代码更简洁，性能更好（因为没有类的开销）。

- 限制：早期版本的函数组件不支持生命周期方法和状态管理，但随着 Hooks 的引入，这些限制已经被解除。

- 类组件：

- 定义：类组件是继承自 React.Component 的 ES6 类，可以定义生命周期方法和管理状态。

- 优点：支持生命周期方法和状态管理，功能更强大。

- 缺点：代码相对复杂，性能略逊于函数组件。

## 14. React.memo 的作用和使用场景

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（5 分）

<details>

- **1：** 作用1： 性能优化：React.memo 是一个高阶组件，它通过对组件的 props 进行浅比较来决定组件是否需要重新渲染。如果传入组件的 props 没有发生变化，组
件就不会重新渲染；只有当 props 发生变化时，组件才会重新渲染。这有助于减少不必要的渲染操作，提高应用程序的性能。
- **1：** 作用2：避免重复渲染：在 React 应用中，当一个组件的父组件重新渲染时，它默认会导致子组件也重新渲染。对于那些只依赖于 props 且计算成本较高的组件，这
种默认行为可能会导致性能浪费。React.memo 可以帮助解决这个问题，它可以让组件 “记住” 之前的渲染结果，在 props 不变的情况下跳过重新渲染。
- **1：** 使用场景1：纯展示组件。纯展示组件是指那些只根据传入的 props 来展示 UI，没有内部状态变化和副作用（如数据获取、订阅事件等）的组件。例如，一个简单的用户
信息展示组件，它接收用户的姓名、年龄等信息作为 props，并将这些信息展示出来。示例：

```js
import React from 'react';
const UserInfo = ({ name, age }) => (
    <div>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
    </div>
);
export default React.memo(UserInfo);
//在这个例子中，UserInfo 组件是一个纯展示组件。通过使用 React.memo 包裹它，当组件的 name 和 age props 没有变化时，组件就不会重新渲染，从而提高了性能。
```

- **1：** 使用场景2：大型组件树中的子组件。在大型的 React 应用中，组件树可能会非常复杂。在这种情况下，一些深层次的子组件可能会因为父组件的重新渲染而频繁地重新渲染，即
使这些子组件的 props 并没有实际变化。示例：

```js
import React from 'react';
const Sidebar = ({ menuData }) => {
    // 复杂的菜单渲染逻辑
    return (
        <div>
            {menuData.map((item) => (
                <MenuItem key={item.id} item={item} />
            ))}
        </div>
    );
};
export default React.memo(Sidebar);
//通过使用 React.memo 包裹 Sidebar 组件，当父组件重新渲染但 menuData 没有变化时，Sidebar 组件就不会重新渲染，避免了不必要的渲染开销，提高了整个页面的性能。
```

- **1：** 使用场景3：在函数式组件中。如果组件的渲染逻辑比较复杂，或者组件在一个频繁更新的环境中（如在一个实时数据更新的仪表盘应用中），使用 React.memo 可以有效减少不
必要的渲染。示例：

```js
import React from 'react';
const RealTimeChart = ({ dataArray, chartType }) => {
    // 复杂的图表绘制逻辑，可能涉及到数据处理、坐标轴设置等
    return (
        <div>
            <Chart data={dataArray} type={chartType} />
        </div>
    );
};
export default React.memo(RealTimeChart);
//当数据更新时，只有 dataArray 或 chartType 发生变化，RealTimeChart 组件才会重新渲染，否则将使用之前的渲染结果，避免了因其他无关因素导致的重新渲染，提升了性能。
```

</details>

## 15. 什么是 React 中的高阶组件（HOC）？请简单举例说明其用法

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（3 分）

- **1：** 高阶组件（Higher - Order Component，简称 HOC）是一个函数，它接收一个组件作为参数，并返回一个新的组件。这个新组件通常会增强或修改原始组件
的功能、行为或外观。可以把它看作是一种组件的 “工厂函数”，用于创建具有额外功能的组件。
- **1：** 用法1：代码复用。HOC 可以将多个组件共有的逻辑提取出来，放到一个地方进行复用。例如，多个组件都需要进行权限验证，就可以创建一个权限验证的 HOC，
让这些组件都通过这个 HOC 来获得权限验证功能。
- **1：** 用法2：逻辑抽象和分离。可以将一些复杂的、与业务逻辑无关的功能（如数据加载、动画效果等）从组件内部抽象出来，通过 HOC 来处理，使得组件本身更加专
注于自己的核心业务逻辑（如展示 UI 和处理用户交互）。

## 16. 什如何在 React 应用中进行有效的内存泄漏排查和修复？

#### 类型：`拓展`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（3 分）

- **1：** 使用 Chrome 开发者工具的 Memory 面板进行内存快照分析，查找未被释放的对象；
- **1：** 检查组件卸载时是否取消了订阅、定时器、事件监听器等可能导致内存泄漏的源头；
- **1：** 对于使用了第三方库的情况，要确保库的使用方式正确，避免因库的不当使用造成内存泄漏。

## 17. 什么是纯组件？为什么要使用纯组件？

#### 类型：`拓展`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（3 分）

- 纯组件：

- 纯组件是一种特殊的组件，它通过 React.memo（函数组件）或 PureComponent（类组件）来实现。纯组件会在 props 或 state 发生变化时进行浅比较，如果前后值相同，则跳过重新渲染。

- 优点：1、减少不必要的重新渲染，提高应用性能。 2、开发者不需要手动实现 shouldComponentUpdate 方法来优化性能。

- 使用场景：

- 静态数据：组件的 props 和 state 不经常变化。

- 复杂组件：组件内部逻辑复杂，重新渲染开销大。

## 18. 什么是 React Context API？它解决了什么问题？

#### 类型：`拓展`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（3 分）

- React Context API：

- Context API 是 React 提供的一种在组件树中传递数据的机制，无需通过 props 逐层传递。

- 创建 Context：使用 React.createContext 创建一个 Context 对象。

- 提供 Context：使用 Context.Provider 组件将数据传递给子组件。

- 消费 Context：使用 Context.Consumer 组件或 useContext Hook 在子组件中访问数据。

## 19. 什么是 React Router？它的主要特点是什么？

#### 类型：`拓展`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（3 分）

- React Router 是一个用于 React 应用的路由库，它允许你在单页应用（SPA）中实现多页面的导航和路由管理。

- 主要特点：

- 声明式路由：使用声明式的方式来定义路由，使代码更加清晰和易于维护。

- 动态路由匹配：支持动态参数匹配，可以根据 URL 参数动态加载不同的组件。

- 嵌套路由：支持嵌套路由，可以轻松实现多级嵌套的页面结构。

- 编程式导航：提供编程式导航的方法，可以在代码中控制页面的跳转。

- 路由守卫：支持路由守卫，可以在路由切换前后执行特定的逻辑。

- 懒加载：支持代码分割和懒加载，可以按需加载组件，提高应用性能。

## 20. 什么是 useState？它如何工作？

#### 类型：`拓展`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（1 分）

- useState 是一个 Hook，用于在函数组件中添加状态。

- 主要特点：

- 初始化状态：第一次调用 useState 时，传入的初始值会被用作初始状态。

- 更新状态：返回一个数组，第一个元素是当前状态，第二个元素是一个用于更新状态的函数。

```JSX
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;

```

## 21. 什么是 useEffect？它如何工作？

#### 类型：`拓展`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（1 分）

- useEffect 是一个 Hook，用于在函数组件中执行副作用操作，如数据获取、订阅或手动更改 DOM。

- 工作原理：

- 执行副作用：在组件挂载和更新时执行副作用操作。

- 清理副作用：返回一个可选的清理函数，用于在组件卸载或下次执行副作用前清理上一次的副作用。

```JSX
import React, { useState, useEffect } from 'react';

const DataFetcher = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/data');
      const json = await response.json();
      setData(json);
    };

    fetchData();

    // 清理函数
    return () => {
      console.log('Cleanup');
    };
  }, []); // 依赖数组为空，表示仅在组件挂载时执行

  return (
    <div>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
    </div>
  );
};

export default DataFetcher;

```

## 22. 在 React 组件中，useEffect 钩子的第二个参数（依赖项数组）为空数组和不设置有什么区别？

#### 类型：基础

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（1 分）

- **1：** 为空数组时，useEffect 仅在组件挂载和卸载时执行一次，类似 componentDidMount 与 componentWillUnmount 的结合；不设置时，每次组件渲染
后 useEffect 都会执行，可能导致不必要的副作用反复运行。

## 23. 说说对Fiber架构的理解？解决了什么问题？

#### 类型：`编程`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（1 分）

在react中，主要做了以下的操作：

- **1：** 为每个增加了优先级，优先级高的任务可以中断低优先级的任务。然后再重新，注意是重新执行优先级低的任务
- **1：** 增加了异步任务，调用requestIdleCallback api，浏览器空闲的时候执行
- **1：** dom diff树变成了链表，一个dom对应两个fiber（一个链表），对应两个队列，这都是为找到被中断的任务，重新执行
- **1：** Fiber把渲染更新过程拆分成多个子任务，每次只做一小部分，做完看是否还有剩余时间，如果有继续下一个任务；如果没有，挂起当前任务，将时间控制权交给主线程，等主线程不忙的时候在继续执行，即可以中断与恢复，恢复后也可以复用之前的中间状态，并给不同的任务赋予不同的优先级，其中每个任务更新单元为 React Element 对应的 Fiber节点

## 24. react无状态组件和class类组件的区别？

#### 类型：`编程`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（1 分）

- 直观区别，函数组件代码量较少，相比类组件更加简洁

- 函数组件看似只是一个返回react元素的函数，其实体现的是无状态组件的思想，函数组件中没有this， 没有state，也没有生命周期，这就决定了函数组件都是展示性组件，接收props，渲染dom，而不关注其他逻辑

- 因为函数组件不需要考虑组件状态和组件生命周期方法中的各种比较校验，所以有很大的性能提升空间

## 25. react如何做到和vue中keep-alive的缓存效果

#### 类型：`编程`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（1 分）

- React Keep Alive 提供了 ，必须把 放在 Provider 里面，并且每个 组件都必须拥有一个唯一的 key

## 26. React如何做路由监听

#### 类型：`编程`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（1 分）

``` react

componentDidMount(){ this.context.router.history.listen((route)=>{ if(route.pathname==='/xxx'){ console.log(1); } }); } 

```

## 27. React 中 keys 的作用是什么？

#### 类型：`编程`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（1 分）

- Keys 是 React 用于追踪哪些列表中元素被修改、被添加或者被移除的辅助标识。

- 在 React 中渲染集合时，向每个重复的元素添加关键字对于帮助React跟踪元素与数据之间的关联非常重要。key 应该是唯一ID，最好是 UUID 或收集项中的其他唯一字符串：

``` react

  <ul>
  {todos.map((todo) =>
    <li key={todo.id}>
      {todo.text}
    </li>
  )};
  </ul>

```

## 28. React diff 原理

#### 类型：`编程`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（3 分）

- 把树形结构按照层级分解，只比较同级元素。

- 列表结构的每个单元添加唯一的 key 属性，方便比较。

- React 只会匹配相同 class 的 component（这里面的 class 指的是组件的名字）

- 合并操作，调用 component 的 setState 方法的时候, React 将其标记为 dirty 到每一个事件循环结束, React 检查所有标记 dirty 的 component 重新绘制.

- 选择性子树渲染。开发人员可以重写 shouldComponentUpdate 提高 diff 的性能。

## 29. 受控组件和非受控组件有什么区别？

#### 类型：`编程`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2 分）

- 在 HTML 文档中，许多表单元素（例如、、）都保持自己的状态。不受控制的组件将 DOM 视为这些输入状态的真实源。在受控组件中，内部状态用于跟踪元素值。当输入值改变时，React 会重新渲染输入。

- 在与非 React 代码集成时，不受控制的组件非常有用（例如，如果您需要支持某种 jQuery 表单插件）。

## 30. React如何进行代码拆分？拆分的原则是什么？

#### 类型：`编程`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（3 分）

- react 的拆分前提是代码目录设计规范，模块定义规范，代码设计规范，符合程序设计的一般原则，例如高内聚、低耦合等等。

- 在我们的react项目中：

- 在 api 层面我们单独封装，对外暴露 http 请求的结果。

- 数据层我们使用的 mobx 封装处理异步请求和业务逻辑处理。

- 视图层，尽量使用 mobx 层面的传递过来的数据，修改逻辑。

- 静态类型的资源单独放置

- 公共组件、高阶组件、插件单独放置

- 工具类文件单独放置

## 31. 为什么说React中的props是只读的？

#### 类型：`编程`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（1 分）

- 保证react的单向数据流的设计模式，使状态更可预测。如果允许自组件修改，那么一个父组件将状态传递给好几个子组件，这几个子组件随意修改，就完全不可预测，不知道在什么地方修改了状态，所以我们必须像纯函数一样保护 props 不被修改

## 32. 使用Hooks要遵守哪些原则？

#### 类型：`编程`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2 分）

- 只在最顶层使用 Hook  不要在循环，条件或嵌套函数中调用 Hook， 确保总是在你的 React 函数的最顶层调用他们。

- 只在 React 函数中调用 Hook

不要在普通的 JavaScript 函数中调用 Hook。你可以：

- 在 React 的函数组件中调用 Hook

- 在自定义 Hook 中调用其他 Hook

## 33. 说说对高阶组件（HOC）的理解？

#### 类型：`编程`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2 分）

- 高阶函数（Higher-order function），至少满足下列一个条件的函数

- 接受一个或多个函数作为输入

- 输出一个函数

- 在React中，高阶组件即接受一个或多个组件作为参数并且返回一个组件，本质也就是一个函数，并不是一个组件

## 34. 解释 React 中 render() 的目的？

#### 类型：`编程`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（2 分）

- 每个React组件强制要求必须有一个 render()。它返回一个 React 元素，是原生 DOM 组件的表示。如果需要渲染多个 HTML 元素，则必须将它们组合在一个封闭标记内，此函数必须保持纯净，即必须每次调用时都返回相同的结果。

## 35. Redux 有哪些优点？

#### 类型：`编程`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（3 分）

- 结果的可预测性 - 由于总是存在一个真实来源，即 store ，因此不存在如何将当前状态与动作和应用的其他部分同步的问题。

- 可维护性 - 由于没有直接接触 DOM，React 组件更容易进行单元测试和重用。

- 服务端渲染 - 你只需渲染应用一次，然后将结果发送到客户端。这对于 SEO 和快速首次渲染非常重要。

- 开发人员工具 - 从组件层次结构、当前状态和派生数据（如路由）到与时间旅行和编辑动作相关的任何内容，您都可以立即访问。

- 社区和生态系统 - React 拥有非常庞大且快速增长的生态系统，大量可重用的库和组件都可用于 React。

- 易于测试 - 由于应用的状态保存在 store 中，并且不直接与浏览器 DOM 交互，因此您的测试将更易于预测和复制。

## 36. React的事件和普通的HTML事件有什么不同？

#### 类型：`编程`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（3 分）

区别：

- 对于事件名称命名方式，原生事件为全小写，react 事件采用小驼峰；

- 对于事件函数处理语法，原生事件为字符串，react 事件为函数；

- react 事件不能采用 return false 的方式来阻止浏览器的默认行为，而必须要地明确地调用preventDefault()来阻止默认行为。

合成事件是 react 模拟原生 DOM 事件所有能力的一个事件对象，其优点如下：

- 兼容所有浏览器，更好的跨平台；

- 将事件统一存放在一个数组，避免频繁的新增与删除（垃圾回收）。

- 方便 react 统一管理和事务机制。

事件的执行顺序为原生事件先执行，合成事件后执行，合成事件会冒泡绑定到 document 上，所以尽量避免原生事件与合成事件混用，如果原生事件阻止冒泡，可能会导致合成事件不执行，因为需要冒泡到document 上合成事件才会执行。

## 37. React 组件中怎么做事件代理？它的原理是什么？

#### 类型：`编程`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（3 分）

区别：

React基于Virtual DOM实现了一个SyntheticEvent层（合成事件层），定义的事件处理器会接收到一个合成事件对象的实例，它符合W3C标准，且与原生的浏览器事件拥有同样的接口，支持冒泡机制，所有的事件都自动绑定在最外层上。

在React底层，主要对合成事件做了两件事：

- 事件委派： React会把所有的事件绑定到结构的最外层，使用统一的事件监听器，这个事件监听器上维持了一个映射来保存所有组件内部事件监听和处理函数。

- 自动绑定： React组件中，每个方法的上下文都会指向该组件的实例，即自动绑定this为当前组件。

## 38. React.Component 和 React.PureComponent 的区别

#### 类型：`编程`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（3 分）

区别：

PureComponent表示一个纯组件，可以用来优化React程序，减少render函数执行的次数，从而提高组件的性能。：

在React中，当prop或者state发生变化时，可以通过在shouldComponentUpdate生命周期函数中执行return false来阻止页面的更新，从而减少不必要的render执行。React.PureComponent会自动执行 shouldComponentUpdate。

不过，pureComponent中的 shouldComponentUpdate() 进行的是浅比较，也就是说如果是引用数据类型的数据，只会比较不是同一个地址，而不会比较这个地址里面的数据是否一致。浅比较会忽略属性和或状态突变情况，其实也就是数据引用指针没有变化，而数据发生改变的时候render是不会执行的。如果需要重新渲染那么就需要重新开辟空间引用数据。PureComponent一般会用在一些纯展示组件上。

使用pureComponent的好处：当组件更新时，如果组件的props或者state都没有改变，render函数就不会触发。省去虚拟DOM的生成和对比过程，达到提升性能的目的。这是因为react自动做了一层浅比较。

## 39. Component, Element, Instance 之间有什么区别和联系？

#### 类型：`编程`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（3 分）

- 元素： 一个元素element是一个普通对象(plain object)，描述了对于一个DOM节点或者其他组件component，你想让它在屏幕上呈现成什么样子。元素element可以在它的属性props中包含其他元素(译注:用于形成元素树)。创建一个React元素element成本很低。元素element创建之后是不可变的。

- 组件： 一个组件component可以通过多种方式声明。可以是带有一个render()方法的类，简单点也可以定义为一个函数。这两种情况下，它都把属性props作为输入，把返回的一棵元素树作为输出。

- 实例： 一个实例instance是你在所写的组件类component class中使用关键字this所指向的东西(译注:组件实例)。它用来存储本地状态和响应生命周期事件很有用。

函数式组件(Functional component)根本没有实例instance。类组件(Class component)有实例instance，但是永远也不需要直接创建一个组件的实例，因为React帮我们做了这些。

## 40. React.createClass和extends Component的区别有哪些？

#### 类型：`编程`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（3 分）

语法区别

- createClass本质上是一个工厂函数，extends的方式更加接近最新的ES6规范的class写法。两种方式在语法上的差别主要体现在方法的定义和静态属性的声明上。

- createClass方式的方法定义使用逗号，隔开，因为creatClass本质上是一个函数，传递给它的是一个Object；而class的方式定义方法时务必谨记不要使用逗号隔开，这是ES6 class的语法规范。

propType 和 getDefaultProps

- React.createClass：通过proTypes对象和getDefaultProps()方法来设置和获取props.

- React.Component：通过设置两个属性propTypes和defaultProps

状态的区别

- React.createClass：通过getInitialState()方法返回一个包含初始值的对象

- React.Component：通过constructor构造函数设置初始状态

this.state

- React.createClass：需要显示的调用this.setState()方法

- React.Component：不需要调用，直接this.state获取

Mixins

- React.createClass：通过mixins属性混合进来

- React.Component：通过引入React Mixin

## 41. 对componentWillReceiveProps 的理解

#### 类型：`编程`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（3 分）

该方法当props发生变化时执行，初始化render时不执行，在这个回调函数里面，你可以根据属性的变化，通过调用this.setState()来更新你的组件状态，旧的属性还是可以通过this.props来获取,这里调用更新状态是安全的，并不会触发额外的render调用。

使用好处： 在这个生命周期中，可以在子组件的render函数执行前获取新的props，从而更新子组件自己的state。 可以将数据请求放在这里进行执行，需要传的参数则从componentWillReceiveProps(nextProps)中获取。而不必将所有的请求都放在父组件中。于是该请求只会在该组件渲染时才会发出，从而减轻请求负担。

componentWillReceiveProps在初始化render的时候不会执行，它会在Component接受到新的状态(Props)时被触发，一般用于父组件状态更新时子组件的重新渲染。

## 42. 哪些方法会触发 React 重新渲染？重新渲染 render 会做些什么？

#### 类型：`编程`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（3 分）

（1）哪些方法会触发 react 重新渲染?

- setState（）方法被调用

setState 是 React 中最常用的命令，通常情况下，执行 setState 会触发 render。但是这里有个点值得关注，执行 setState 的时候不一定会重新渲染。当 setState 传入 null 时，并不会触发 render。

- 父组件重新渲染

只要父组件重新渲染了，其子组件都有可能重新渲染，因为父组件重新渲染了之后，所有子组件都会重新走一遍生命周期，这个时候只要子组件的 shouldComponentUpdate 或者 pureComponent 返回了 true，都会触发子组件的重新渲染。

（2）重新渲染 render 会做些什么?

- 会对新旧 VNode 进行对比，也就是我们所说的Diff算法。

- 对新旧两棵树进行一个深度优先遍历，这样每一个节点都会一个标记，在到深度遍历的时候，每遍历到一和个节点，就把该节点和新的节点树进行对比，如果有差异就放到一个对象里面

- 遍历差异对象，根据差异的类型，根据对应对规则更新VNode

## 43. React如何判断什么时候重新渲染组件？

#### 类型：`编程`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（3 分）

组件状态的改变可以因为props的改变，或者直接通过setState方法改变。组件获得新的状态，然后React决定是否应该重新渲染组件。只要组件的state发生变化，React就会对组件进行重新渲染。这是因为React中的shouldComponentUpdate方法默认返回true，这就是导致每次更新都重新渲染的原因。

当React将要渲染组件时会执行shouldComponentUpdate方法来看它是否返回true（组件应该更新，也就是重新渲染）。所以需要重写shouldComponentUpdate方法让它根据情况返回true或者false来告诉React什么时候重新渲染什么时候跳过重新渲染。

## 44. 在React中如何避免不必要的render？

#### 类型：`编程`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（3 分）

React 基于虚拟 DOM 和高效 Diff 算法的完美配合，实现了对 DOM 最小粒度的更新。大多数情况下，React 对 DOM 的渲染效率足以业务日常。但在个别复杂业务场景下，性能问题依然会困扰我们。此时需要采取一些措施来提升运行性能，其很重要的一个方向，就是避免不必要的渲染（Render）。这里提下优化的点

- shouldComponentUpdate 和 PureComponent

在 React 类组件中，可以利用 shouldComponentUpdate或者 PureComponent 来减少因父组件更新而触发子组件的 render，从而达到目的。shouldComponentUpdate 来决定是否组件是否重新渲染，如果不希望组件重新渲染，返回 false 即可。

- 利用高阶组件

在函数组件中，并没有 shouldComponentUpdate 这个生命周期，可以利用高阶组件，封装一个类似 PureComponet 的功能

- 使用 React.memo

React.memo 是 React 16.6 新的一个 API，用来缓存组件的渲染，避免不必要的更新，其实也是一个高阶组件，与 PureComponent 十分类似，但不同的是， React.memo只能用于函数组件。

## 45. 对 React-Intl 的理解，它的工作原理？

#### 类型：`编程`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（3 分）

React-intl是雅虎的语言国际化开源项目FormatJS的一部分，通过其提供的组件和API可以与ReactJS绑定。

React-intl提供了两种使用方法，一种是引用React组件，另一种是直接调取API，官方更加推荐在React项目中使用前者，只有在无法使用React组件的地方，才应该调用框架提供的API。它提供了一系列的React组件，包括数字格式化、字符串格式化、日期格式化等。

在React-intl中，可以配置不同的语言包，他的工作原理就是根据需要，在语言包之间进行切换。