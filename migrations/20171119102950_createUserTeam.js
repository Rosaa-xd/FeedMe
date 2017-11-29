exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('UserTeam', function(table) {
        table.integer('team_id')
            .references('id')
            .inTable('Team')
            .onDelete('CASCADE');
        table.integer('user_id')
            .references('id')
            .inTable('User')
            .onDelete('CASCADE');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema
    .dropTableIfExists('UserTeam')
};
