var express = require('express');

// Constants
var PORT = 9000;

// App
var app = express();
app.get('/', function (req, res) {
  res.send('Hello docker world\n');
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
