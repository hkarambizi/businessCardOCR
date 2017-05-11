var bodyParser = require('body-parser');
var express = require('express');
var app = express();

app.use(bodyParser.json());
require('./routes.js')(app, express);
app.listen(process.env.PORT || 3000, function () {
  console.log('Buisness Card OCR server connected.');
});

module.exports = app;