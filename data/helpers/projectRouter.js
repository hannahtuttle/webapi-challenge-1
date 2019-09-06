const express = require('express')

const Data = require('./projectModel.js')

const router = express.Router()

router.get('/', (req, res) => {
    Data.get()
    .then(result => {
        res.status(200).json(result)
    })
    .catch(error => {
        res.status(500).json({error: "The projects information could not be retrieved."})
    })
})

router.get('/:id', (req, res) => {
    const {id} = req.params
    Data.getProjectActions(id)
    .then(results => {
        res.status(200).json(results)
    })
    .catch(error => {
        res.status(500).json({error: "The projects information could not be retrieved."})
    })
})

router.post('/', (req, res) => {
    const body = req.body
    Data.insert(body)
    .then(result => {
        res.status(200).json(result)
    })
    .catch(error => {
        res.status(500).json({error: "The project information could not be added."})
    })
})

router.delete('/:id', (req, res) => {
    const {id} = req.params
    Data.remove(id)
    .then(result => {
        res.status(200).json({message: 'project deleted succesfully'})
    })
    .catch(error => {
        res.status(500).json({error: "The projects information could not be removed."})
    })
})

router.put('/:id', (req, res) => {
    const {id} = req.params
    const changes = req.body
    Data.update(id, changes)
    .then(updated => {
        res.status(200).json(updated)
    })
    .catch(error => {
        res.status(500).json({ error: "The projects information could not be modified." })
    })
})

module.exports = router