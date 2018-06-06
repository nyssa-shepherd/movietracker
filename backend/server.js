const express = require('express');
const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);
const bodyParser = require('body-parser');
const cors = require('express-cors');
const app = express();

app.use(cors());
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.set('port', process.env.PORT || 3000);
app.use(bodyParser.json());

app.get('/api/v1/users', (request, response) => {
  database('users').select()
  .then( users => {
    response.status(200).json(users);
  })
  .catch( error => {
    response.status(404).json({ error });
  });
});

app.get('/api/v1/users/:id/favorites', (request, response) => {
  const { id } = request.params;

  database('favorites').where('user_id', id)
    .then( favorite => {
      response.status(200).json(favorite);
    })
    .catch( error => {
      response.status(404).json({ error });
    });
});

app.post('/api/v1/users', (request, response) => {
  const userInfo = request.body;

  for (let requiredParameter of ['username', 'password']) {
    if (!userInfo[requiredParameter]) {
      return response
        .status(422)
        .send({ error: `You're missing a "${requiredParameter}" property.` });
    }
  }

  database('users').insert(userInfo, 'id')
    .then(user => {
      const { username, password } = userInfo;
      response.status(201).json({ id: user[0], username, password });
    })
    .catch(error => {
      response.status(500).json({ error });
    });
});

app.post('/api/v1/users/:id/favorites', (request, response) => {
  //const user_id = request.params.id
  const favoriteInfo = request.body;

  for (let requiredParameter of ['user_id', 'movie_id', 'title', 'poster', 'overview', 'date']) {
    if (!favoriteInfo[requiredParameter]) {
      return response
        .status(422)
        .send({ error: `You're missing a "${requiredParameter}" property.` });
    }
  }

  database('favorites').insert(favoriteInfo, 'id')
    .then( favorite => {
      const { user_id, movie_id, title, poster, overview, date } = favoriteInfo;
      response.status(201).json({ id: favorite[0], user_id, movie_id, title, poster, overview, date  });
    })
    .catch(error => {
      response.status(500).json({ error });
    });
});

app.listen(app.get('port'), () => {
  console.log(`Movie Tracker is running on ${app.get('port')}.`);
});

module.exports = app;
