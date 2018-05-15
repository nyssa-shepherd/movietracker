const express = require('express');
const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);
const bodyParser = require('body-parser');
const app = express();

app.set('port', process.env.PORT || 3000);
app.use(bodyParser.json());

app.listen(app.get('port'), () => {
  console.log(`Movie Tracker is running on ${app.get('port')}.`);
});

module.exports = app;
