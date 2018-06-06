exports.seed = function(knex, Promise) {
  return knex('favorites').del() 
    .then(() => knex('users').del()) 
    .then(() => {
      return Promise.all([
        knex('users').insert({
          username: 'nyssa', 
          password: 'password'
        }, 'id')
        .then(users => {
          return knex('favorites').insert([
            { title: 'Lorem', poster: 'a', overview: 'b', date: 'c', user_id: users[0] },
          ])
        })
        .then(() => console.log('Seeding complete!'))
        .catch(error => console.log(`Error seeding data: ${error}`))
      ]) 
    })
    .catch(error => console.log(`Error seeding data: ${error}`));
};