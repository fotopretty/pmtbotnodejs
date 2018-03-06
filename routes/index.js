var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var app = express.Router();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.post('/webhook', function(req, res, next) {
  var text = req.body.events[0].message.text
  var sender = req.body.events[0].source.userId
  var replyToken = req.body.events[0].replyToken
  console.log(text, sender, replyToken)
  console.log(typeof sender, typeof text)
  // console.log(req.body.events[0])
  var msgans = 'ออเจ้า สวัสดีเจ้าค่ะ'
  //sendText(sender,msgans)
  if (text === 'สวัสดี' || text === 'Hello' || text === 'hello') {
    sendText(sender, msgans)
  } 
  res.sendStatus(200);
});

function sendText (sender, text) {
  let data = {
    to: sender,
    messages: [
      {
        type: 'text',
          text: text
      }
    ]
  }
  request({
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer wt4Q0Nwi/M97LhdJyiw2KhAmjiJwlcgRE1SB2Q6lyyuxbb3cefWQNTe8vMCyrjt4bQyoI6Oqf8+gQrWLWOCKVjuN1svUQUzmPRN5gNJOrOWgakCV4P0/35O5fMs1m3hAzcDLs8ToZ4K7jQk6o8UVywdB04t89/1O/w1cDnyilFU='
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
  res.send('Hello LINE BOT');
});

module.exports = app;
