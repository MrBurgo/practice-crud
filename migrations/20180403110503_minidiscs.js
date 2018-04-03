
exports.up = function(knex, Promise) {
  return knex.schema.createTable('minidiscs', (table) => {
    table.increments()
    table.varchar('title', 255).notNullable().defaultTo('')
    table.varchar('artist', 255).notNullable().defaultTo('')
    table.varchar('genre', 255).notNullable().defaultTo('')
    table.text('description').notNullable().defaultTo('')
    table.text('cover_url').notNullable().defaultTo('')
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('minidiscs')
};
