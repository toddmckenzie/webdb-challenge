
exports.up = function(knex, Promise) {
    return knex.schema
    .createTable('projects', function(tbl) {
        tbl.increments();
        tbl.string('name').notNullable();
        tbl.string('ProjectDescription').notNullable();
        tbl.boolean('Completed').notNullable();
    })
    .createTable('actions', function(tbl) {
        tbl.increments();
        tbl.string('WhatNeedsDone').notNullable();
        tbl.string('AddtionalNotes');
        tbl.boolean('Completed').notNullable();
        tbl
        .integer('projects_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema
    .dropTableIfExists('actions')
    .dropTableIfExists('projects')
};
