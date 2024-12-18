## vue3和vue2的区别

#### 类型：`基础`

#### 级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`

#### 解答（11 分）：

* **1：** 源码组织方式变化：使用 TS 重写
* **1：** 支持 Composition API：基于函数的API，更加灵活组织组件逻辑（vue2用的是options api）
* **1：** 响应式系统提升：Vue3中响应式数据原理改成proxy，可监听动态新增删除属性，以及数组变化
* **1：** 编译优化：vue2通过标记静态根节点优化diff，Vue3 标记和提升所有静态根节点，diff的时候只需要对比动态节点内容
* **1：** 打包体积优化：移除了一些不常用的api（inline-template、filter）
* **1：** 生命周期的变化：使用setup代替了之前的beforeCreate和created
* **1：** Vue3 的 template 模板支持多个根标签
* **1：** Vuex状态管理：创建实例的方式改变,Vue2为new Store , Vue3为createStore
* **1：** Route 获取页面实例与路由信息：vue2通过this获取router实例，vue3通过使用 getCurrentInstance/ userRoute和userRouter方法获取当前组件实例
* **1：** Props 的使用变化：vue2 通过 this 获取 props 里面的内容，vue3 直接通过 props
* **1：** 父子组件传值：vue3 在向父组件传回数据时，如使用的自定义名称，如 backData，则需要在 emits 中定义一下
