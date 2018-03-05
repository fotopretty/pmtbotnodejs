var express = require('express');
var bodyParser = require('body-parser')
var request = require('request')
var app = express.Router()


app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.post('/webhook', function(req, res, next) {
  var text = req.body.events[0].message.text
  var sender = req.body.events[0].source.userId
  var replyToken = req.body.events[0].replyToken
  console.log(text, sender, replyToken)
  console.log(typeof sender, typeof text)
  // console.log(req.body.events[0])
  if (text === 'สวัสดี' || text === 'Hello' || text === 'hello') {
    sendText(sender, text)
  }
  res.sendStatus(200);
});

function sendText (sender, text) {
  let data = {
    to: sender,
    messages: [
      {
        type: 'text',
        text: 'สวัสดีค่ะ เราเป็นผู้ช่วยปรึกษาด้านความรัก สำหรับหมามิ้น'
      }
    ]
  }
  request({
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer bx3HiabWCUvB9HAeXc1SLcJzP7iz6HXoOz2EDrg58Dm/2+U1eUjx8drZPU/+seMpE3pGkwXx62dY8CBU1oDQv0MhMZ6dEIPXyKQnhINJUeLrnyv2lvoYS9s0EUSliDLwtM+HnmLtrp03uRAiMWaQMwdB04t89/1O/w1cDnyilFU='
    },
    url: 'https://api.line.me/v2/bot/message/push',
    method: 'POST',
    body: data,
    json: true
  }, function (err, res, body) {
    if (err) console.log('error')
    if (res) console.log('success')
    if (body) console.log(body)
  });
}

/* GET home page. */
app.get('/', function (req, res, next) {
  res.send('Hello LINE BOT')
});

module.exports = app;
