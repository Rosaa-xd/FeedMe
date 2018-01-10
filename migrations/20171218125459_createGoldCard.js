
exports.up = function(knex, Promise) {
    return knex.schema.createTable('GoldCard', function(table) {
        table.increments('id').primary();
        table.integer('user_id')
            .references('id')
            .inTable('User')
            .onDelete('CASCADE');
        table.timestamps();
    })
};

exports.down = function(knex, Promise) {
    return knex.schema
        .dropTableIfExists('GoldCard');
};
