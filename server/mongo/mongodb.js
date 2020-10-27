const mongoose = require('mongoose');
mongoose.connect(`mongodb://${global.http}/ZD-SHOP`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
// 向外暴露Schema构造函数
module.exports = (option) => {
  return mongoose.Schema(option)
};