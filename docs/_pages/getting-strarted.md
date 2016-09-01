## 前期准备

### 学习 React

Amaze UI React 基于 React.js（`v0.14+`）开发，如果你没有使用过 React，请先访问 [React 官网](https://facebook.github.io/react/index.html)学习。

### 了解 Amaze UI 基础样式

**Amaze UI React 与 [Amaze UI (jQuery 版) v2.4+](https://github.com/allmobilize/amazeui) 共用 CSS**，如果你以前没有接触过 Amaze UI，请先[点击此查看以下内容](http://amazeui.org/css?_ver=2.x)：

- [样式统一](http://amazeui.org/css/normalize?_ver=2.x)
- [基础设置](http://amazeui.org/css/base?_ver=2.x)
- [文字排版](http://amazeui.org/css/typography?_ver=2.x)

## 获取 Amaze UI React

### 包管理工具

#### NPM

```
npm install amazeui-react
```

#### Bower

```
bower install amazeui-react
```

### CDN

```
http://cdn.amazeui.org/amazeui-react/__VERSION__/amazeui.react.js
http://cdn.amazeui.org/amazeui-react/__VERSION__/amazeui.react.min.js
```

### 获取源代码

Amaze UI React 源代码托管在 GitHub 上，你可以点击下面的按钮获取。为了帮助我们更好的发展，请不吝献出你的 Star。

<iframe src="https://ghbtns.com/github-btn.html?user=amazeui&repo=amazeui-react&type=star&count=true&size=large" frameborder="0" scrolling="0" width="160px" height="30px"></iframe>


## 页面配置

### HTML 模板

```html
<!DOCTYPE html>
<html>
<head lang="zh-cn">
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="description" content="">
  <meta name="keywords" content="">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Amaze UI React</title>
  <meta name="renderer" content="webkit">
  <!-- No Baidu Siteapp-->
  <meta http-equiv="Cache-Control" content="no-siteapp"/>
  <link rel="alternate icon" type="image/png" href="i/favicon.png">
  <link rel="apple-touch-icon-precomposed" href="i/app-icon72x72@2x.png">
  <meta name="apple-mobile-web-app-title" content="AMUI React"/>
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black">
  <link rel="stylesheet" href="http://cdn.amazeui.org/amazeui/2.5.0/css/amazeui.min.css"/>
  <script src="http://cdn.amazeui.org/react/0.14.3/react.min.js"></script>
  <script src="http://cdn.amazeui.org/react/0.14.3/react-dom.min.js"></script>
  <script src="path/to/amazeui.react.min.js"></script>
</head>
<body>
</body>
</html>
```

### 组件调用方式

#### CommonJS

推荐使用 CommonJS 方式开发 React 应用，具体参考 **[Amaze UI React Starter Kit](https://github.com/amazeui/react-starter-kit)**

```
npm install amazeui-react
```

```js
var React = require('react');
var ReactDOM = require('react-dom');
var AMUIReact = require('amazeui-react');
var Button = AMUIReact.Button;

ReactDOM.render(<Button>Button</Button>, mountNode);
```

#### 全局方式

```html
<script src="http://cdn.amazeui.org/react/0.14.3/react.min.js"></script>
<script src="http://cdn.amazeui.org/react/0.14.3/react-dom.min.js"></script>
<script src="path/to/amazeui.react.min.js"></script>
<script>
  var Button = AMUIReact.Button;
</script>
```

#### AMD

```js
define(['amazeui-react'], function(AMUIReact){
  var Button = AMUIReact.Button;
  // do...
});
```
