exports.up = function(knex, Promise) {
    return knex.schema
    .createTable('Goal', function(table){
        table.increments('id').primary();
        table.string('goalName').notNullable();
        table.timestamps();
    });
};

exports.down = function(knex, Promise) {
    return knex.schema
    .dropTableIfExists('Goal')
};