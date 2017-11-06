exports.up = function(knex, Promise) {
    return knex.schema
        .createTable('User', function(table) {
            table.increments('id').primary();
            table.string('userName').notNullable().unique();
            table.string('password').notNullable();
            table.string('email').notNullable().unique();
            table.boolean('goldCard').notNullable.defaultTo(false);
            table.integer('score').notNullable.defaultTo(0);
            table.timestamps();
        })
        .createTable('Team', function(table) {
            table.increments('id').primary();
            table.integer('teamLead_id')
                .references('id')
                .inTable('User')
                .onDelete('CASCADE');
            table.integer('teamLid_id')
                .references('id')
                .inTable('User');
        })
        .createTable('Goal', function(table) {
            table.increments('id').primary();
            table.string('goalName').notNullable();
        })
        .createTable('Question', function(table) {
            table.increments('id').primary();
            table.integer('goal_id')
                .references('id')
                .inTable('Goal')
                .onDelete('CASCADE');
            table.string('question').notNullable();
            table.string('question_type').notNullable();
            table.timestamps()
        })
        .createTable('Feedback', function(table) {
            table.increments('id').primary();
            table.integer('sender_id')
                .references('id')
                .inTable('User');
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
            table.string('comment');
            table.timestamps('date');
        })
        .createTable('User_Goal', function(table) {
            table.integer('User_id')
                .references('id')
                .inTable('User')
                .onDelete('CASCADE');
            table.integer('Goal_id')
                .references('id')
                .inTable('Goal')
                .onDelete('CASCADE')
        });
};

exports.down = function(knex, Promise) {
    return knex.schema
        .dropTableIfExists('User')
        .dropTableIfExists('Team')
        .dropTableIfExists('Goal')
        .dropTableIfExists('Question')
        .dropTableIfExists('Feedback')
        .dropTableIfExists('User_Goal')
}