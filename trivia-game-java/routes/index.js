const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.render('homepage');
});

router.get('/hard', function(req, res, next) {
  res.render('hard');
});

router.get('/easy', function(req, res, next) {
  res.render('easy');
});

router.get('/medium', function(req, res, next) {
  res.render('medium');
});


module.exports = router;