var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { id: '404411646', name: '趙斌宏' });
});

module.exports = router;
