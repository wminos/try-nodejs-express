var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  res.send('Hello World!');
});

router.post('/', function (req, res, next) {
  res.send('Got a POST request');
});

router.put('/user', function (req, res, next) {
  res.send('Got a PUT request at /user');
});

router.delete('/user', function (req, res, next) {
  res.send('Got a DELETE request at /user');
});

module.exports = router;
