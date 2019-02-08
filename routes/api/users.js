// 用于login regist
const express = require('express');
const router = express.Router();
const User = require('../../models/users');

// $route   GET api/users/test
// @desc    返回请求的json数据
// @access  public
router.get('/test', (req, res) => {
    res.json(
        {
            msg: 'login working',
        }
    );
})

// $route   POST api/users/register
// @desc    返回请求的json数据
// @access  public
router.post('/register', (req, res) => {
    // 查询数据库中是否有邮箱
    User.findOne({email: req.body.email})
        .then((user) => {
            if(user){
                return res.status(400).json({email: '邮箱已被注册'});
            } else {
                const newUser = new User({
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password
                })
                // 把数据保存到数据库中
                newUser.save()
                    .then(user => res.json(user))
                    .catch(err => console.log(err));
            }
        })
})

module.exports = router;