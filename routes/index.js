var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hello, World!",
    user: "Nathan",
    added: new Date()
  },
  {
    text: "Second text",
    user: "Bobby",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Index', messages: messages });
});

/* GET new page */
router.get('/new', function(req, res, next) {
  res.render('form', {title: 'New Message'});
});

module.exports = router;
