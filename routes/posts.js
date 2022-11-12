var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.send('Display links to all blog posts');
});

module.exports = router;
