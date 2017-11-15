
exports.up = function(knex, Promise) {
    return knex.schema
    .createTable('User_Goal', function(table){
        table.integer('User_id')
            .references('id')
            .inTable('User');
        table.integer('Goal_id')
            .references('id')
            .inTable('Goal');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema
    .dropTableIfExists('User_Goal')
};
