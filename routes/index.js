var express = require('express');
var bodyParser = require('body-parser');
var app= express.Router();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

/* GET home page. */
app.get('/', function(req, res, next) {
  res.sendStatus(200)
});

module.exports = app;
