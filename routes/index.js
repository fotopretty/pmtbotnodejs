var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({extended: false}))
router.use(bodyParser.json())

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendStatus(200)
});

module.exports = router;
