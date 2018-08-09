
exports.up = function(knex, Promise) {
  return knex.schema.createTable('restaurants', function(table){
    table.increments()
    table.text('Restaurant')
    table.text('Hours')
    table.text('Url')
    table.text('Image')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('restaurants')
};
