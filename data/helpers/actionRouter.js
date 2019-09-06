const express = require('express')

const Data = require('./actionModel.js')
const projectDB = require('./projectModel.js')

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

router.post('/',validateProjectId, (req, res) => {
    let body = req.body
    Data.insert(body)
    .then(result => {
        res.status(201).json(result)
    })
    .catch(error => {
        res.status(500).json({error: "The action information could not be retrieved."})
    })
})

router.delete('/:id', (req, res) => {
    const {id} = req.params
    Data.remove(id)
    .then(result => {
        res.status(200).json({message: 'action deleted succesfully'})
    })
    .catch(error => {
        res.status(500).json({error: "The action information could not be removed."})
    })
})

router.put("/:id", (req, res) => {
    const {id} = req.params
    const changes = req.body
    Data.update(id, changes)
    .then(updated => {
        res.status(200).json(updated)
    })
    .catch(error => {
        res.status(500).json({ error: "The action information could not be modified." })
    })
})

//build custom middleware to test if project id belongs to an existing project
function validateProjectId(req, res, next) {
    const id = req.body.project_id
    const body = req.body
    console.log('req.body:'. body)
    projectDB.get(id)
    .then(project => {
        console.log("project:",project)
         if(project === null){
             res.status(400).json({ message: "invalid project id" })
        }
        else{
            next()  
        }
    })
    
};

module.exports = router