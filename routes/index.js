var express = require('express');
var bodyParser = require('body-parser');
var line = require('@line/bot-sdk');

require('dotenv').config();

var app= express.Router();

var config = {
  channelAccessToke: process.env.channelAccessToken,
  channelSecret: process.env.channelSecret
};

var client = new line.Client(config);

app.post('/webhook', line.middleware(config), (req,res,next)=>{
  Promise
    .all(req.body.events.map(handleEvent))
    .then((result)=> res.json(result));
});

function handleEven(event){
  console.log(event);
  if(event.type === 'message' && event.message.type === 'text'){
    handlemessageEvent(event);
  }else{
    return Promise.resolve(null);
  }
}

function handleMessageEvent(event){
  var msg = {
    type: 'text',
    text: 'สวัสดีครับ'
  };
  return client.replyMessage(event.replyToken, msg);
}

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

/* GET home page. */
app.get('/', function(req, res, next) {
  res.sendStatus(200)
});

module.exports = app;
