const express = require('express');
const bodyParser = require('bodyParser');
const api = require('./api');

const port = 3000;
const app = express();

app.listen(port, function () {
  console.log('running at port: ' + port);
});

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use('/api', api);
