exports.up = function(knex, Promise) {
    return knex.schema
    .createTable('Question', function(table){
        table.increments('id').primary();
        table.integer('goal_id')
            .references('id')
            .inTable('Goal')
            .onDelete('CASCADE');
        table.string('question').notNullable();
        table.string('question_type').notNullable();
        table.timestamps();
    })
};

exports.down = function(knex, Promise) {
    return knex.schema
    .dropTableIfExists('Question')
};