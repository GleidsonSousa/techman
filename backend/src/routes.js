const express =  require('express')
const router = express.Router()

const usuario = require('./controllers/usuario')
const equipamento = require('./controllers/equipamento')
const comentario = require('./controllers/comentario')
const perfis = require('./controllers/perfis')



router.post('/usuario/login', usuario.login)
router.get('/usuario/read', usuario.read)
 
router.post('/equipamento/create', equipamento.create)
router.get('/equipamento/read', equipamento.read)
router.delete('/equipamento/delete/:id', equipamento.remove)

router.post('/comentario/create', comentario.create)
router.get('/comentario/read', comentario.read)

router.post('/perfis/create', perfis.create)
router.get('/perfis/read', perfis.read)

module.exports = router