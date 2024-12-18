
react
## 什么是 React 的生命周期方法？
#### 类型：基础
####  级别：W1
#### 解答（3 分）：
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
####  级别：W1
#### 解答（5 分）：
- **1：** useState()：用于在函数组件中添加状态。
- **1：** useEffect()：用于在函数组件中执行副作用操作（如数据请求、订阅、DOM 操作等）。
- **1：** useContext()：用于在函数组件中访问上下文（Context）。
- **1：** useReducer()：类似于 useState，但适用于复杂的状态管理，类似于 Redux 的 reducer。
- **1：** useRef()：用于访问组件中的 DOM 节点或保存可变的值。
- **1：** useMemo() 和 useCallback()：用于性能优化，避免不必要的渲染。