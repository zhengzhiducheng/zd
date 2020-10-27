const mongoose = require('mongoose');
const Mongo = require('./mongodb');
// 用户表
let User = Mongo({
  user: { type: String },								//用户名
  psw: { type: String },								//密码
  email: { type: String },								//邮箱
  sex: { type: String, default: '0' },			//性别 0 没写 1 男 2 女
  birth: { type: Date },								//生日
  phone: { type: Number },								//电话
  explain: { type: String },							//介绍
  url: { type: String, default: '' },		//用户头像
  time: { type: Date },
  vip: { type: Number, default: 0 }
});
let UserModel = mongoose.model('User', User, 'user');
// User 模块导出
exports.UserModel = UserModel