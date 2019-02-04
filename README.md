# REACT-TODO-DEMO

## 如何 Mock 数据

1: 代理到 mock 服务器

- 安装 server npm install -g serve
- serve file_name 把一个目录作为一个 mock 服务器
- 在这个目录执行 serve 开启 mock 服务器
- 配置 react 把请求转发到 mock 服务器

```
// 在项目的package.json 配置proxy属性(已经过时只能设置单一代理)
"proxy": {
  //定义那些path需要转发
  "/api": {
    //转发到目标
    "target": "url"
  }
 "proxy": "url"
}

// 新的使用方法
//npm install http-proxy-middleware --save
//创建新的文件 src/setupProxy.js
const proxy = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(proxy('/auth/google', { target: 'http://localhost:5000/' }));
};

```

2: 直接将 mock 数据放到 puclic 文件夹

## React 思维方式

### 组件划分原则

- 解耦: 降低单一模块/组件的复杂度
- 复用：保证组件的一致性 提升开发效率
- 组件颗粒度需要避免过大过小

### 编写静态组件

开发过程解耦: 静态页面和动态交互
组件开发顺序: 自上而下 or 自下而上

APP -> TodoList -> TodoItem -> TodoInput -> TodoFooter

### 如何设计 state

- 代表 UI 的完整且最小的状态的集合
- 是否通过父组件 props 传入
- 是否不会随着时间 交互操作变化
- 是否可以通过其他的 state 和 props 计算得到

### 分析 state 保存位置

- 如果 state 只是这个组件的私有状态不会被其他状态运用 可以成为这个组件的 state

- 如果这个 state 会被多个组件共享 要确定这个组件的公共组件
  把 state 上移到公用的父组件。(状态上移)

### 添加交互行为

- 借助 props 添加反向数据流
- 新增 todo 修改 todo 的显示 过滤显示

### 为什么用 Redux

- 前端的状态复杂: API 数据 本地数据 UI 状态等
- 视图和状态管理耦合, 状态管理失控

### Redux 基本思想

- store 包含着 state
- state 定义 UI 的状态
- UI 可以触发一个行为(action)
- action 发送给 reducer
- reducer 更新 store

### state

- 集中管理 全局唯一
- 不可变性

### actions

- 描述如何修改状态
- JSON 对象 type 属性必须
- 发送 store.dispatch

### Reducer
- reducer 是一个函数 action定义如何修改state reducer落实代码层面真实修改action
- reducer 接受两个参数一个state 一个action 返回更改之后的state

- 根据不同的state处理不同的action

- 处理的每个 action 返回的是新的state对象 不是原有的 因为state对象是不可变的。

- 初始默认的state 作为默认参数传递

### 拆分reducer

- 便于扩展和维护

- 把拆分的reducer合并一个reducer combineReducers

- 根据state的拆分reducer 拆分之后的reducer 分别对应处理局部的state。

### 创建store

- 相当粘合剂 把 state action 和 reducer 整合在一起。

- 通过reducer创建一个store

- 通过dispatch 发送 actions 修改store

- 通过 getState 和 subscribe 获取和订阅 store

### react-redux

向根组件注入Store -> Provider组件
连接React组件和Redux状态层 -> connect
获取react组件所需要的State和Actions -> map api

### 异步action

当业务复杂的时候 会涉及到很多异步的场景。 那如何在react如何使用异步的action
异步的阶段会涉及到3个阶段
1: 异步开始的时候
2：异步成功的时候
3：异步失败的时候

当我们要发送异步action的时候先定义3个辅助的action 一个是异步开始action 一个是异步成功的action 一个是异步失败的时候
然后在定义一个真实请求的action。action的返回值是一个函数 接收一个dispatch方法. 在这个action处理异步的逻辑
最后要借助redux-thunk处理

### Redux 调试工具

工具名称: Redux DevTools

### Redux项目组织结构

- 按照类型

- 按照功能模块

- Ducks(鸭子)

### State设计原则

常见的错误

以API为设计原则

以页面UI为设计原则

正确的做法是像数据库设计state

数据按照领域(Domain)分类 存储在不同的表中，不同的表中存储的列数据不重复

表中每一列的数据都依赖于这张表的主键

表中除了组件以外的其他列 互相之前不能有直接依赖关系

### Selector 函数

当state的数据多次被多个组件引用的时候, 如果要重新修改state的数据的命名要多次修改多个组件。我们可以把state数据统一管理以函数的形式返回,如果修改就修改函数的返回数据就好,实现了view层和状态层的解耦。


### redux的状态管理

1 在传统的开发中我们开发的网站只是来显示数据
并没有太多的逻辑和数据管理

前端只是调用服务端的api接口获取数据, 并把自己的数据提交到服务端

2 由于前端的数据的变得越来越复杂 如果只是传统的数据管理数据方式
使得数据的管理变的混乱,这个时候需要抽象出数据管理

页面需要通过数据层获取服务器的数据, 页面收到用户的数据也要经过服务层提交给服务器


### 软件架构的演变

- 前后端一体

- 前后端分离

- 微服务化


## middleware(中间件)

redux增强dispatch的能力

redux的可以使用多个中间件

我们在view层发送的每个action都会经过多个中间件的处理到达reducer

redux的中间件是一个签名类似这样的签名
Function: ({getState, dispatch}) => next => action