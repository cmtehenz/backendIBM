const router = require('express').Router()
const controller = require('../controllers/users')

const db = require('../database/db')

router.get('/', controller.get({ db }))
router.get('/me', controller.getMe({ db }))
router.patch('/:id', controller.update({ db }))
router.get('/:id', controller.getOne({ db }))
router.delete('/:id', controller.remove({ db }))

module.exports = router