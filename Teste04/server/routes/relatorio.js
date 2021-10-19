const express = require('express')
const controllers = require('../controllers')
const router = express.Router()


router.get('/', controllers.relatorio.searchDb)
router.get('/uf', controllers.relatorio.getAllUf)
router.get('/modalidades', controllers.relatorio.getAllModalidades)

module.exports = router