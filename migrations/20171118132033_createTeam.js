exports.up = function(knex, Promise) {
    return knex.schema
    .createTable('Team', function(table){
        table.increments('id').primary();
        table.integer('teamLead_id')
            .references('id')
            .inTable('User')
            .onDelete('CASCADE');
        table.integer('teamMember_id')
            .references('id')
            .inTable('User');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema
    .dropTableIfExists('Team')
};