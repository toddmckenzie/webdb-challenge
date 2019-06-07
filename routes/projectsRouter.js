const knex = require('knex');
const router = require('express').Router();

const knexConfig = require('../knexfile.js');

const db = knex(knexConfig.development);


router.get('/', (req, res) => {
    db('projects')
        .then(result => {
            res.status(201).json(result)
        })
        .catch(error => {
            res.status(500).json(error)
        })
})

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

module.exports = router;