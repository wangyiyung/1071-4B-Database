var express = require('express');
var router = express.Router();

/* GET users listing. */
/*
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
*/

router.get('/', function(req, res, next) {
	// Comment out this line:
  //res.send('respond with a resource');

  // And insert something like this instead:
  res.json([{
  	id: 1,
  	username: "趙斌宏"
  }, {
  	id: 2,
  	username: "王羿詠"
  }, {
    id: 3,
    username: "趙振東"
  }]);
});

module.exports = router;
