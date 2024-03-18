const db = require('../models')
const Task = db.task

exports.findAll = (req, res) => {
    Task.findAll()
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: 'Could not find the tasks'
            })
        })
}

exports.create = (req, res) => {
    if (!req.body.name) {
        res.status(400).send({
            message: "The Name is mandatory"
        })
        return;
    }
    Task.create(req.body)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: 'Could not insert the task'
            })
        })
}

exports.findOne = (req, res) => {
    const id = req.params.id
    Task.findByPk(id)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: 'Could not find the task'
            })
        })
}

exports.update = (req, res) => {
    const id = req.params.id
    Task.update(req.body, {
        where: {id: id}
    })
    .then(num => {
        if(num == 1){
            res.send(
                {
                    message: 'Task Updated'
                })
        }else{
            res.send(
                {
                    message: 'Task not found'
                })
        }
    })
    .catch(err => {
        res.status(500).send({
            message: 'Could not update the task'
        })
    })
}

exports.delete = (req, res) => {
    const id = req.params.id
    Task.destroy({
        where: {id: id}
    })
    .then(num => {
        if(num == 1){
            res.send(
                {
                    message: 'Task deleted'
                })
        }else{
            res.send(
                {
                    message: 'Task not found'
                })
        }
    })
    .catch(err => {
        res.status(500).send({
            message: 'Could not delete the task'
        })
    })
}
