var express = require('express');
var request = require('request');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, response, next) {
  request('http://localhost:9090/posts', {json: true},
    (err, res, body) => {
      if(err) { return console.log(err)}
      console.log(body.url)
      console.log(body)
      response.render('index', { title: 'Express', "posts": body });
    }
  )
  
});

module.exports = router;
