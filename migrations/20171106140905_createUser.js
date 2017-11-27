exports.up = function(knex) {
    return knex.schema.createTable('User', function(table) {
        table.increments('id').primary();
        table.string('firstName').notNullable();
        table.string('lastName').notNullable();
        table.string('password').notNullable();
        table.string('email').notNullable();
        table.boolean('goldCard').notNullable().defaultTo(false);
        table.integer('score').notNullable().defaultTo(0);
        table.string('function').notNullable().defaultTo('Peasant');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('User')
};
