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
    db('actions')
    .select('*')
    .join('projects', { "projects.id": "actions.projects_id"})
        .then(result => {
            res.status(201).json(result)
        })
        .catch(error => {
            console.error(error)
            res.status(500).json(error)
        })
})

module.exports = router;