const mongoose = require('mongoose');
const Mongo = require('./mongodb');
// 朋友表
let Friend = Mongo({
  userID: { type: Schema.Types.ObjectId, ref: 'User' },	//用户id
  friendID: { type: Schema.Types.ObjectId, ref: 'User' },	//好友id
  state: { type: String },								//好友状态（0已为好友，1申请中，2不是好友）
  nike: { type: String },							//好友昵称
  time: { type: Date },								    //生成时间
});
let FriendModel = mongoose.model('Friend', Friend, 'friend');
// User 模块导出
exports.FriendModel = FriendModel