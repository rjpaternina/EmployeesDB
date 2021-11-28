const {Router} = require ('express')
const { eliminarEmpleado } = require('../controllers/Empleado.controllers')
const router = Router ()

const EmpleadoCtrl = require ('../controllers/Empleado.controllers')

router.post('/crear', EmpleadoCtrl.crear)
router.get('/listarEmpleados', EmpleadoCtrl.Listar)
router.get('/listar/:id', EmpleadoCtrl.ListarId)
router.get('/listarEmpleadosJefe/:id', EmpleadoCtrl.empleadoDeunJefe)
router.delete('/eliminarEmpleado/:id', EmpleadoCtrl.eliminarEmpleado)
router.put('/actualizarEmpleado/:id', EmpleadoCtrl.actualizarEmpleado)
router.get('/buscarEmpleado/:nombres/:id', EmpleadoCtrl.buscarEmpleado)

module.exports = router
