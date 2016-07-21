var express = require('express');
var app = express();

app.set('views', './view');
app.set('view engine', 'jade');

app.get('/', function (req, res) {
  console.log('Hello World!');
  res.render('index');
});



var server = app.listen(8080, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
