
// 1. 导入mongoose模块
const mongoose = require('mongoose');

// 2. 连接mongoDB
mongoose.connect('mongodb://127.0.0.1:27017/shopdb')

// 3. 是否连接成功
mongoose.connection.on('connected', () => {
    console.log('connected OK');
})
// 4. 连接出错
mongoose.connection.on('error', (err) => {
    console.log('err' + err);
})
// 5. 连接断开
mongoose.connection.on('disconnected', () => {
    console.log('close');
})

module.exports = mongoose;
