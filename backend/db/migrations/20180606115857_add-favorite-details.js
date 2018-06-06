exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('favorites', function(table) {
      table.integer('movie_id');
      table.string('title');
      table.string('poster');
      table.string('overview');
      table.string('date');
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('favorites', function(table) {
      table.dropColumn('movie_id');
      table.dropColumn('title');
      table.dropColumn('poster');
      table.dropColumn('overview');
      table.dropColumn('date');
    })
  ]);
};
