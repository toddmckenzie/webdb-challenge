const knex = require('knex');
const router = require('express').Router();

const knexConfig = require('../knexfile.js');

const db = knex(knexConfig.development);



router.get('/', (req, res) => {
    db('actions')
        .then(result => {
            res.status(201).json(result)
        })
        .catch(error => {
            res.status(500).json(error)
        })
})


router.post('/', (req, res) => {
    db('actions')
        .insert(req.body)
        .then(result => {
            res.status(201).json(result)
        })
        .catch(error => {
            res.status(500).json(error)
        })
})

module.exports = router;