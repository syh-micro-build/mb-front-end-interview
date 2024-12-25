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

## React中的性能优化方法有哪些？

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
