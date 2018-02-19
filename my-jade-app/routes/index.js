var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {

    var entities = [
        {name: 'god', age: 'NAN'},
        {name: 'man', age: '100'},
        {name: 'fly', age: '1'}
    ];

    res.render('index', {
        title: 'study-nodejs',
        note: 'examples',
        entities: entities
    });
});

module.exports = router;
