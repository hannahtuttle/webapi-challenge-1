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

module.exports = router