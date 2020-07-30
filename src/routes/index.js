const router = require('express').Router()

const users = require('./users')
const missions = require('./missions')

router.get('/', (req, res) => res.send('DevReactJS sample project.'))
router.use('/users', users)
router.use('/missions', missions)

module.exports = router