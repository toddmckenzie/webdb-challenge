const knex = require('knex');
const router = require('express').Router();

const knexConfig = require('../knexfile.js');

const db = knex(knexConfig.development);
/*
//working
router.get('/', (req, res) => {
    db('projects')
        .then(result => {
            res.status(201).json(result)
        })
        .catch(error => {
            res.status(500).json(error)
        })
})
*/
//working
router.post('/', (req, res) => {
    db('projects')
        .insert(req.body)
        .then(result => {
            res.status(201).json(result)
        })
        .catch(error => {
            res.status(500).json(error)
        })
})

//working
router.get('/', (req, res) => {
    db('projects')
    .join('actions', { "projects.id": "actions.projects_id"})
    .select('projects.id as id', 'projects.name as name', 'projects.ProjectDescription as description', 'projects.completed as completed', 'actions.id as id', 'actions.WhatNeedsDone as description', 'actions.AddtionalNotes as notes', 'actions.Completed as completed')
        .then(result => {
            res.status(200).json(result)
        })
        .catch(error => {
            console.error(error)
            res.status(500).json(error)
        })
})


module.exports = router;