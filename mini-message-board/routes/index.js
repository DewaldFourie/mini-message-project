var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Message Board', messages: messages });
});

router.get('/new', function(req, res, next) {
  res.render('form', { title: 'Add a new Message',  })
})

router.post('/new', function(req, res, next) {
  messageUser = req.body.name;
  messageText = req.body.message;

  messages.push({
    text: messageText,
    user: messageUser,
    added: new Date()
  })

  res.redirect('/')
})

module.exports = router;

