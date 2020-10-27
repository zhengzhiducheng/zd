const mongoose = require('mongoose');
const Mongo = require('./mongodb');
// 群成员表
let GroupUser = Mongo({
  groupID: { type: Schema.Types.ObjectId, ref: 'Group' },	//群id
  userID: { type: Schema.Types.ObjectId, ref: 'User' },	//用户id
  name: { type: String },								//群内名称
  tip: { type: Number, default: 0 },						//未读消息数
  time: { type: Date },								    //加入时间
  shield: { type: Number },								//是否屏蔽群消息（0不屏蔽，1屏蔽）
  time: { type: Date },
});
let GroupUserModel = mongoose.model('GroupUser', GroupUser, 'groupUser');
// User 模块导出
exports.GroupUser = GroupUser