var express = require('express');
var router = express.Router();

var user = {
  name: 'minte_liu',
  age: '25'
};

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get('/getUserName', function (req, res, next) {
  res.send(user.name);
});

module.exports = router;
