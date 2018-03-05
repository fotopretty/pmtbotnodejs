var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();

router.use(bodyParser.json())
router.set('port', (process.env.PORT || 4000))
router.use(bodyParser.urlencoded({extended: false}))
router.use(bodyParser.json())

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Hello');
});

module.exports = router;
