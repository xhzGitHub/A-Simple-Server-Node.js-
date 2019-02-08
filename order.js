// 导入db.js文件
const mongoose = require('./db')

// mongoose下有两个概念
// 1. schema -> 数据模型(数据结构)
// 2. model -> 文档 (一条数据就是一个model)

// 创建shema对象
const Schema = mongoose.Schema;

// 根据数据模型对象，定义数据结构
const orderschema = new Schema({
    number: String,
    price: Number,
    buyTime: Date,
})

// 导出, 将数据结构与名为'order'的数据库进行关联
module.exports = mongoose.model('order', orderschema)