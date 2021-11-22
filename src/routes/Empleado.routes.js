const {Router} = require ('express')
const router = Router ()

const EmpleadoCtrl = require ('../controllers/Empleado.controllers')

router.post('/crear', EmpleadoCtrl.crear)
router.get('/listarEmpleados', EmpleadoCtrl.Listar)
router.get('/listar/:id', EmpleadoCtrl.ListarId)

module.exports = router
