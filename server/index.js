let express = require('express')
let app = express() // 监听函数
let path = require('path')
let bodyParser = require('body-parser')
let cors = require('cors')
const multer = require('multer');
var upload = multer({ dest: 'uploads/' }) // 文件储存路径
var http = require('http').Server(app);
var io = require('socket.io')(http);
let credentials = require('./config/credentials')
global.http = credentials.http
global.webPort = credentials.webPort
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization')
  next()
})

app.use(express.static('public'));
app.use(cors())
// 解析 application/json
app.use(bodyParser.json());
// 解析 application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// 中台/from/register
app.use('/from', require('./router/from.js'));


http.listen(7000, () => {
  console.log('服务器7000启动成功')
})
app.listen(7001, () => {
  console.log('服务器7001启动成功')
})
const init = require('./socket')
io.on('connection', function (socket) {
  init(socket, io)
})
