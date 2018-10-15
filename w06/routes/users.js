var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    //res.send('respond with a resource');
    res.json([{
        id: 1,
        username: "王羿詠"
    }, {
        id: 2,
        username: "趙振東"
    }, {
        id: 3,
        username: "趙斌宏"
    }]);
});

module.exports = router;