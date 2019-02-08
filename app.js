const express = require('express');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const users = require('./routes/api/users');
const app = express();


//引入 bodyParser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

// CORS设置跨域
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    //Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Content-Type', 'application/json;charset=utf-8');
    next();
});

// 配置路由
app.get('/', (req,res) => {
    // res.render('index');
    res.sendfile('./views/index.html');
})

app.get('/about', (req,res) => {
    res.render('about');
})

// 使用routes
app.use('/api/users', users);

const port = 5000;

app.listen(port,() => {
    console.log(`Server started on ${port}`);
})