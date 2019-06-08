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

/*
//working
router.get('/', (req, res) => {
    db('projects')
        .then(results => {
            for (let i = 0; i < results.length; i++){
                console.log(results[i])
                const id = results[i].id
                db('actions')
                .where({ projects_id: id })
                .then(results => {
                    res.status(200).json({ ...results[i], actions: results })
                    })
                 .catch(err => res.status(500).json({message: 'error'}))
            }
        })
        .catch(error => {
            console.error(error)
            res.status(500).json(error)
        })
    })

*/

router.get('/:id', (req, res) => {
    db('projects')
        .where({ id: req.params.id })
        .then(result => {
            db('actions')
            .where({ projects_id: req.params.id })
            .then(results => {

                res.json({...result[0], actions: results })
            })
            .catch(err => {
                res.status(500).json({ message: 'err'})
            })
        })
        .catch(error => {
            console.error(error)
            res.status(500).json(error)
        })
})



module.exports = router;
