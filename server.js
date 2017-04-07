// our main server file
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const express = require('express');
const app = express();
const apiRouter = require('./routes/api');
const bodyParser = require('body-parser');
const jsonParse = bodyParser.json();

mongoose.connect('mongodb://localhost/cats_api');

app.use(jsonParse);

app.use('/api', apiRouter);

app.use('/*', function (req, res) {
  res.status(404).send({reason: 'ROUTE NOT FOUND'});
});

app.get('/', function (req, res) {
  res.status(200).send({status: 'OK'});
})

app.listen(3000, function (err) {
  if (err) {
    return console.log(err);
  }
  console.log('App listening on port 3000');
});
