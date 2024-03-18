/* module.exports = app => {
    const task = require('../controllers/task.controller.js')
    const router = require('express').Router()

    router.get('/', task.findAll)

    router.post('/', task.create)

    router.get('/:id', task.findOne)

    router.put('/:id', task.update)

    router.delete('/:id', task.delete)

    app.use('/api/task', router)
}
*/
module.exports = app => {
    const task = require('../controllers/task.controller.js')
    const router = require('express').Router()

    router.get('/', task.findAll)

    router.post('/', task.create)

    router.get('/:id', task.findOne)

    router.put('/:id', task.update)

    router.delete('/:id', task.delete)

    app.use('/api/task', router)
}