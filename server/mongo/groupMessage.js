const mongoose = require('mongoose');
const Mongo = require('./mongodb');
// 群消息表
let GroupMessage = Mongo({
  groupID: { type: Schema.Types.ObjectId, ref: 'Group' },	//群id
  userID: { type: Schema.Types.ObjectId, ref: 'User' },	//用户id
  message: { type: String },							//内容
  types: { type: String },								//内容类型（0文字，1图片链接，2音频链接...)
  time: { type: Date },								    //发送时间
});
let GroupMessageModel = mongoose.model('GroupMessage', GroupMessage, 'groupMessage');
// User 模块导出
exports.GroupMessageModel = GroupMessageModel