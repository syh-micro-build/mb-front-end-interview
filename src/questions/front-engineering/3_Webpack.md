# webpack

## webpack 的热更新是什么?
#### 类型：`架构`
#### 级别：`W3`、`W4`、`W5`、`W6`
#### 解答（2 分）：
- **1：** Hot Module Replacement 简称 HRM
- **1：** 模块热替换，指在应用程序运行过程中，替换、添加、删除模块，而无需重新刷新整个应用

## webpack 中如何配置开启热更新？
#### 类型：`架构`
#### 级别：`W3`、`W4`、`W5`、`W6`
#### 解答（2 分）：
- **2：**
```javascript
const webpack = require("webpack");
module.exports = {
  // ...
  devServer: {
    // HMR
    hot: true,
    // hotOnly: true
  },
};
```

