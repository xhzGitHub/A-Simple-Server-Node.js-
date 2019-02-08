// 数据库 中添加数据
// 导入：把数据的schema和model作为模块导入进来
const order = require('./order');

function insert() {
    // model 创建一条数据
    const order1 = new order({
        number: '123123123',
        price: 100,
        buyTime: new Date()
    })
    // 把数据保存到数据库中
    order1.save((err,response)=>{
        if(err){
            console.log(err);
        }else{
            console.log('success' + response);
        }
    });
}

insert();