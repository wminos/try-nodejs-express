var express = require('express');
var router = express.Router();

// .use - global matching (at routed root path)
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

// .all - all method matches to specific path (in routed root path)
// router.all('/', function (req, res, next) {
//   //- write log & pass to next pipeline
//   console.log(`Got a ANY(${req.method}) request at ${req.path}`);
//   next();

//   //- stop pipeline & send to client
//   // res.send(`Got a ANY(${req.method}) request at ${req.path}`);
// }, function (req, res, next) {
//   // console.log(`Catch middle in pipeline: ${req.method}:${req.path}`);
//   // next();

//   res.send(`Catch middle in pipeline: ${req.method}:${req.path}`);
// });

// router.get('/', function (req, res, next) {
//   res.send('Got a GET request at ' + req.path);
// });

// router.post('/', function (req, res, next) {
//   res.send('Got a POST request at ' + req.path);
// });

// router.put('/', function (req, res, next) {
//   res.send('Got a PUT request at ' + req.path);
// });

// router.delete('/', function (req, res, next) {
//   res.send('Got a DELETE request at ' + req.path);
// });

// .route method reduce redundency and typos.
router.route('/')
  .all(function (req, res, next) {
    //- write log & pass to next pipeline
    console.log(`Got a ANY(${req.method}) request at ${req.path}`);
    next();

    //- stop pipeline & send to client
    // res.send(`Got a ANY(${req.method}) request at ${req.path}`);
  }, function (req, res, next) {
    console.log(`Catch middle in pipeline: ${req.method}:${req.path}`);
    next();

    // res.send(`Catch middle in pipeline: ${req.method}:${req.path}`);
  }).get(function (req, res, next) {
    res.send('Got a GET request at ' + req.path);
  }).post(function (req, res, next) {
    res.send('Got a POST request at ' + req.path);
  }).put(function (req, res, next) {
    res.send('Got a PUT request at ' + req.path);
  }).delete(function (req, res, next) {
    res.send('Got a DELETE request at ' + req.path);
  });

module.exports = router;