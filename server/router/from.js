var express = require('express');
var router = express.Router();
//引用发送邮件插件
var nodemailer = require('nodemailer');
//引入证书文件
var credentials = require('../config/credentials');
//创建传输方式
var transporter = nodemailer.createTransport({
  service: 'qq',
  auth: {
    user: credentials.qq.user,
    pass: credentials.qq.pass,
  }
});
let { UserModel: User } = require('../mongo/user.js')
// 用户数据库表
router.post('/register', async function (req, res) {
  let obj = req.body
  // 注册
  let findEnd = await User.find({ email: obj.email })

  if (findEnd.length) {
    res.send({
      code: 1,
      data: "用户已经注册"
    })
  } else {
    console.log('注册成功')
    // 注册成功
    if (await User.find({})) {
      // 超级用户
      console.log('超级用户')
      await User.create({ ...obj, vip: 9 })
      res.send({
        code: 0,
        data: "用注册成功"
      })
    } else {
      await User.create(obj)
      res.send({
        code: 0,
        data: "用注册成功"
      })
    }
  }

})
router.post('/login', async function (req, res) {
  let obj = req.body
  let find = await User.find(obj)
  if (find.length) {
    // 找到了 返回信息
    find = { ...find[0]._doc, psw: "" }
    res.send({
      code: 0,
      data: find
    })
  } else {
    res.send({
      code: 1,
      data: {}
    })
  }
})
router.post('/forgetWord', async function (req, res) {
  let obj = req.body
  let arr = await User.find(obj)
  let psw = arr[0]._doc.psw
  //发送信息内容
  let options = {
    from: '2132795941@qq.com',
    to: obj.email,
    subject: '密码找回',
    html: `<span>欢迎你的加入!密码为${psw}</span><a href="http://${global.webPort}/">点击</a>`
  };
  //发送邮件
  transporter.sendMail(options, function (err, msg) {
    if (err) {
      res.send({ code: 1, data: "邮箱错误" });
    } else {
      res.send({ code: 0, data: '请在邮箱查收！' });
    }
  })
})
module.exports = router