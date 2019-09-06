const express = require('express')

const Data = require('./actionModel.js')

const router = express.Router()

router.get('/', (req, res) => {
    Data.get()
    .then(result => {
        res.status(200).json(result)
    })
    .catch(error => {
        res.status(500).json({error: "The action information could not be retrieved."})
    })
})


module.exports = router