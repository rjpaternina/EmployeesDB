const {Routes, Router} = require('express')
const { crearJefe } = require('../controllers/Jefe.controllers')
const router = Router()
const JefeCtrl = require ('../controllers/Jefe.controllers')


router.post('/crear', JefeCtrl.crearJefe)
router.post('/login', JefeCtrl.Login)

module.exports = router