var express = require('express');
var user = require('../model/user.js');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/helloworld', function(req, res, next) {
  res.render('helloworld', { title: 'Hello World' });
});

router.get('/userlist', function(req, res, next) {
    user.find(function(err, results) {
        if (err) return next(err);
        res.render('userlist', {"users" : results});
    });
});

module.exports = router;
