const router = require('express').Router()

const users = require('./users')
const missions = require('./missions')
const vehicles = require('./vehicles')
const animals = require('./animals')

router.get('/', (req, res) => res.send('DevReactJS sample project.'))
router.use('/firefighters', users)
router.use('/vehicles', vehicles)
router.use('/missions', missions)
router.use('/animals', animals)

module.exports = router