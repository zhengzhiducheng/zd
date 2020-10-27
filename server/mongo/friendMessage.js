const mongoose = require('mongoose');
const Mongo = require('./mongodb');
// 朋友消息表
let FriendMessage = Mongo({
  userID: { type: Schema.Types.ObjectId, ref: 'User' },	//用户id
  friendID: { type: Schema.Types.ObjectId, ref: 'User' },	//好友id
  message: { type: String },							//内容
  types: { type: String },								//内容类型（0文字，1图片链接，2音频链接...)
  time: { type: Date },								    //发送时间
  state: { type: Number },								//消息状态（0已读，1未读）
});
let FriendMessageModel = mongoose.model('FriendMessage', FriendMessage, 'friendMessage');
// User 模块导出
exports.FriendMessageModel = FriendMessageModel