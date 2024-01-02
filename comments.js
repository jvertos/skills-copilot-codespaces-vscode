// Create web server with express
// Run with node comments.js
// Then go to http://localhost:3000/comments

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');

// Set up server to use body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Set up server to use static files
app.use(express.static('public'));

// Set up server to use EJS templates
app.set('views', './views');
app.set('view engine', 'ejs');

// Display comments
app.get('/comments', function(req, res) {
  fs.readFile('comments.json', 'utf8', function(err, data) {
    if (err) throw err;
    var comments = JSON.parse(data);
    res.render('comments', { comments: comments });
  });
});

// Add a comment
app.post('/comments', function(req, res) {
  fs.readFile('comments.json', 'utf8', function(err, data) {
    if (err) throw err;
    var comments = JSON.parse(data);
    comments.push(req.body);
    fs.writeFile('comments.json', JSON.stringify(comments), function(err) {
      if (err) throw err;
      console.log('Comment added');
    });
  });
  res.redirect('comments');
});

// Start server
app.listen(3000, function() {
  console.log('Server started on port 3000');
});

