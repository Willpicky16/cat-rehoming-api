// our main server file
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const express = require('express');
const app = express();
const apiRouter = require('./routes/api');
const bodyParser = require('body-parser');
const jsonParse = bodyParser.json();

// mongoose.connect('mongodb://localhost/cats_api');
mongoose.connect('mongodb://admin:admin@ds037005.mlab.com:37005/cat-rehoming');

app.use(jsonParse);

app.use('/api', apiRouter);

app.use('/*', function (req, res) {
  res.status(404).send({reason: 'ROUTE NOT FOUND'});
});

app.get('/', function (req, res) {
  res.status(200).send({status: 'OK'});
})

app.listen(process.env.PORT || 3000, function (err) {
  if (err) {
    return console.log(err);
  }
  console.log('App listening on port 3000');
});
