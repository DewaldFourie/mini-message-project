var express = require('express');
var router = express.Router();

// simple message array to keep track of messages for testing purposes
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

// Get new page to add new message
router.get('/new', function(req, res, next) {
  res.render('form', { title: 'Add New Message',  })
})

// post new message and push to message array 
router.post('/new', function(req, res, next) {
  messageUser = req.body.name;
  messageText = req.body.message;

  messages.push({
    text: messageText,
    user: messageUser,
    added: new Date()
  })
  // redirect to home page 
  res.redirect('/')
})

module.exports = router;

