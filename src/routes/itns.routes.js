const router = require('express-promise-router')()
const itemController = require('../controllers/itns.controller')

router.post('/inserir', itemController.createItem)
router.get('/itens', itemController.mostrarItens)

module.exports = router