# REACT-TODO-DEMO

## 如何Mock数据
1: 代理到mock服务器
- 安装server npm install -g serve
- serve file_name  把一个目录作为一个mock服务器
- 在这个目录执行 serve 开启mock服务器
- 配置react 把请求转发到mock服务器
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

2: 直接将mock数据放到puclic文件夹

## React 思维方式

### 组件划分原则

- 解耦: 降低单一模块/组件的复杂度
- 复用：保证组件的一致性 提升开发效率
- 组件颗粒度需要避免过大过小

### 编写静态组件

开发过程解耦: 静态页面和动态交互
组件开发顺序: 自上而下 or 自下而上

APP -> TodoList -> TodoItem -> TodoInput -> TodoFooter

### 如何设计state

- 代表UI的完整且最小的状态的集合
- 是否通过父组件props传入
- 是否不会随着时间 交互操作变化
- 是否可以通过其他的state和props计算得到
