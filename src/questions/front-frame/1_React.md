# react

## 什么是 React 的生命周期方法？

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

## React 中的 Hook 是什么？

#### 类型：基础

#### 级别：W1

#### 解答（5 分）

- **1：** useState()：用于在函数组件中添加状态。
- **1：** useEffect()：用于在函数组件中执行副作用操作（如数据请求、订阅、DOM 操作等）。
- **1：** useContext()：用于在函数组件中访问上下文（Context）。
- **1：** useReducer()：类似于 useState，但适用于复杂的状态管理，类似于 Redux 的 reducer。
- **1：** useRef()：用于访问组件中的 DOM 节点或保存可变的值。
- **1：** useMemo() 和 useCallback()：用于性能优化，避免不必要的渲染。

## React 中的状态和 props 有什么区别？

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

## React 中如何处理事件？

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

## useState 连续调用，页面不更新？

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

## 什么是 React？它的主要特点是什么？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（3 分）

- React 是一个用于构建用户界面的 JavaScript 库，由 Facebook 开发并维护。它主要用于构建单页应用程序（SPA）和复杂的用户界面。React 的主要特点包括：

- 组件化：React 将 UI 分解成独立的、可重用的组件。每个组件都有自己的逻辑和控制。

- 虚拟 DOM：React 使用虚拟 DOM 来提高性能。虚拟 DOM 是一个内存中的树结构，React 会先在虚拟 DOM 中进行操作，然后批量更新真实 DOM。

- 声明式编程：React 采用声明式编程风格，开发者只需描述 UI 应该是什么样的，React 会负责处理 UI 的变化。

- JSX：React 使用 JSX（JavaScript XML）语法，允许在 JavaScript 中编写类似 HTML 的标记。

- 生态系统丰富：React 拥有丰富的生态系统，包括路由器（React Router）、状态管理库（Redux、MobX）等。

## 什么是 JSX？它有什么优点？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（3 分）

- JSX 是一种语法扩展，允许在 JavaScript 中编写类似 HTML 的标记。JSX 最终会被编译成普通的 JavaScript 代码.

- 可读性强：JSX 使得模板代码更加直观和易读，特别是对于复杂的 UI 结构。

- 类型检查：JSX 可以在编译时进行类型检查，减少运行时错误。

- 表达式支持：可以在 JSX 中嵌入 JavaScript 表达式，使得动态生成 UI 变得更加方便。

- 工具支持：现代开发工具（如 Babel）可以将 JSX 编译成兼容所有浏览器的 JavaScript 代码。

## 什么是虚拟 DOM？它是如何工作的？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（3 分）

- 虚拟 DOM 是一个轻量级的内存中的 DOM 树表示。React 使用虚拟 DOM 来提高性能，避免频繁的操作真实 DOM。

- 创建虚拟 DOM：React 在内存中创建一个虚拟 DOM 树。

- Diff 算法：当状态改变时，React 会比较新的虚拟 DOM 和旧的虚拟 DOM，找出差异（即最小的变更集合）。

- 批量更新：React 将这些差异批量应用到真实 DOM，减少 DOM 操作次数，提高性能。

## React 中的单向数据流是什么意思？

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（3 分）

- 单向数据流 是 React 的核心设计理念之一。在单向数据流中，数据只能从父组件流向子组件，不能反向流动。这种方式使得数据流更加清晰和可控。

- 数据一致性：单向数据流确保了数据的一致性，避免了数据的混乱和不可预测的变化。

- 易于调试：数据流的单一方向使得调试更加容易，可以更容易地追踪数据的变化。

- 可预测性：单向数据流使得应用的状态变化更加可预测，便于维护和扩展。

## 什么是函数组件和类组件？它们有什么区别？

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

## React.memo 的作用和使用场景

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

## 什么是 React 中的高阶组件（HOC）？请简单举例说明其用法

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（3 分）

- **1：** 高阶组件（Higher - Order Component，简称 HOC）是一个函数，它接收一个组件作为参数，并返回一个新的组件。这个新组件通常会增强或修改原始组件
的功能、行为或外观。可以把它看作是一种组件的 “工厂函数”，用于创建具有额外功能的组件。
- **1：** 用法1：代码复用。HOC 可以将多个组件共有的逻辑提取出来，放到一个地方进行复用。例如，多个组件都需要进行权限验证，就可以创建一个权限验证的 HOC，
让这些组件都通过这个 HOC 来获得权限验证功能。
- **1：** 用法2：逻辑抽象和分离。可以将一些复杂的、与业务逻辑无关的功能（如数据加载、动画效果等）从组件内部抽象出来，通过 HOC 来处理，使得组件本身更加专
注于自己的核心业务逻辑（如展示 UI 和处理用户交互）。

## 什如何在 React 应用中进行有效的内存泄漏排查和修复？

#### 类型：`拓展`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（3 分）

- **1：** 使用 Chrome 开发者工具的 Memory 面板进行内存快照分析，查找未被释放的对象；
- **1：** 检查组件卸载时是否取消了订阅、定时器、事件监听器等可能导致内存泄漏的源头；
- **1：** 对于使用了第三方库的情况，要确保库的使用方式正确，避免因库的不当使用造成内存泄漏。

## 什么是纯组件？为什么要使用纯组件？

#### 类型：`拓展`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（3 分）

- 纯组件：

- 纯组件是一种特殊的组件，它通过 React.memo（函数组件）或 PureComponent（类组件）来实现。纯组件会在 props 或 state 发生变化时进行浅比较，如果前后值相同，则跳过重新渲染。

- 优点：1、减少不必要的重新渲染，提高应用性能。 2、开发者不需要手动实现 shouldComponentUpdate 方法来优化性能。

- 使用场景：

- 静态数据：组件的 props 和 state 不经常变化。

- 复杂组件：组件内部逻辑复杂，重新渲染开销大。

## 什么是 React Context API？它解决了什么问题？

#### 类型：`拓展`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（3 分）

- React Context API：

- Context API 是 React 提供的一种在组件树中传递数据的机制，无需通过 props 逐层传递。

- 创建 Context：使用 React.createContext 创建一个 Context 对象。

- 提供 Context：使用 Context.Provider 组件将数据传递给子组件。

- 消费 Context：使用 Context.Consumer 组件或 useContext Hook 在子组件中访问数据。

## 什么是 React Router？它的主要特点是什么？

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