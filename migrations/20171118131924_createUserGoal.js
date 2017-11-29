exports.up = function(knex, Promise) {
    return knex.schema
    .createTable('User_Goal', function(table){
        table.integer('user_id')
            .references('id')
            .inTable('User')
            .onDelete('CASCADE');
        table.integer('goal_id')
            .references('id')
            .inTable('Goal')
            .onDelete('CASCADE');
        table.string('status').notNullable().defaultTo('To improve');
        table.timestamps();
    });
};

exports.down = function(knex, Promise) {
    return knex.schema
    .dropTableIfExists('User_Goal')
};