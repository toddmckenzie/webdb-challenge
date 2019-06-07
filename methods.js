const knex = require('knex');
const knexConfig = require('../knexfile.js')
const db = knex(knexConfig.development)

module.exports = {
   getProjects
}

function getProjects() {
    return db('projects')
        .select('*')
        .join('actions', { "projects.id": "actions.projects_id"})
        
}

/*
.select("projects.id", "projects.name as name", "projects.ProjectDescription as description", "projects.Completed as completed", "actions.WhatNeedsDone as description", "actions.AdditionalNotes as notes", "actions.Completed as completed")
*/