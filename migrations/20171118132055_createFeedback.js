exports.up = function(knex, Promise) {
    return knex.schema
    .createTable('Feedback', function(table){
        table.increments('id').primary();
        table.integer('sender_id')
            .references('id')
            .inTable('User')
            .onDelete('CASCADE');
        table.integer('receiver_id')
            .references('id')
            .inTable('User')
            .onDelete('CASCADE');
        table.integer('question_id')
            .references('id')
            .inTable('Question')
            .onDelete('CASCADE');
        table.boolean('anonymous').notNullable().defaultTo(true);
        table.string('top').notNullable();
        table.string('tip').notNullable();
        table.text('comment');
        table.timestamps();
    });

};

exports.down = function(knex, Promise) {
    return knex.schema
    .dropTableIfExists('Feedback')
};