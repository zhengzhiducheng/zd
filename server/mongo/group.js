const mongoose = require('mongoose');
const Mongo = require('./mongodb');
// 群表
let Group = Mongo({
  userID: { type: Schema.Types.ObjectId, ref: 'User' },	//用户id
  name: { type: String },								//群名称
  GroupUrl: { type: String, default: '' },		//群头像
  time: { type: Date },								    //创建时间
  notice: { type: String },								//公告
});
let GroupModel = mongoose.model('GroupModel', GroupModel, 'groupModel');
// User 模块导出
exports.GroupModel = GroupModel