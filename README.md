# 从零搭建vue+express开发环境

该项目是在学习vue过程中，秉着前后端分离的态度，尝试着自己搭建vue+express环境

## 搭建vue项目

* 安装vue-cli脚手架
``` bash
npm install -g vue-cli
```

* 创建基于webpack模版的项目
``` bash
vue init webpack firstapp
```

* 安装包依赖并运行
``` bash
cd firstapp
npm install
npm run dev
```
在浏览器上输入localhost:8080，这就是一个完整的基于vue-cli脚手架的项目。

那么怎么样集成进express呢？我们接着往下看。
## 集成express

* 修改文件结构
1. 将src文件夹修改为client
2. 将webpack.base.conf.js内的src地址修改为client

* 根目录下新建一个文件夹，命名为server

* server目录下新建一个文件，命名为app.js

* 安装express
``` bash
npm install express --save
```

* server目录下新建一个文件夹，命名为routes

* app.js中启动服务器，代码如下：
``` js
var express = require('express');
var fs = require('fs');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

// 注册users接口
var users = require('./routes/users');
app.use('/users', users);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

// 访问静态资源
app.use(express.static(path.resolve(__dirname, '../dist')));

// 访问单页
app.get('*', function (req, res) {
  var html = fs.readFileSync(path.resolve(__dirname, '../dist/index.html'), 'utf-8');
  res.send(html);
});

// 监听
app.listen(8081, function () {
  console.log('success listen...8081');
});
```

## 打包
``` bash
npm run build
node server/app.js
```

搭建过程参考文章：https://julytian.github.io/2017/04/06/vue%E4%B8%8Enode%E7%BB%93%E5%90%88%E5%BC%80%E5%8F%91%E9%83%A8%E7%BD%B2/
