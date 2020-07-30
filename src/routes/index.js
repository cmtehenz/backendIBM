const router = require('express').Router()

const users = require('./users')
const missions = require('./missions')
const vehicles = require('./vehicles')
const dogs = require('./dogs')

router.get('/', (req, res) => res.send('DevReactJS sample project.'))
router.use('/users', users)
router.use('/vehicles', vehicles)
router.use('/missions', missions)
router.use('/dogs', dogs)

module.exports = router