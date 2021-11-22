
const EmpleadoCtrl = {}

const Empleado = require ('../models/Usuario.models')

EmpleadoCtrl.crear = async (req, res )=>{

    const {nombres, apellidos, cedula, puesto, tcontrato, jefe} = req.body;

    const NuevoEmpleado = new Empleado({
        nombres, apellidos, cedula, puesto, tcontrato, jefe
    })

    const respuesta = await NuevoEmpleado.save()

    res.json({

        mensaje: 'Empleado creado', 
        respuesta
    
    })


} 

EmpleadoCtrl.Listar = async (req, res)=>{

    const respuesta = await Empleado.find()
    res.json(respuesta)

}

EmpleadoCtrl.ListarId = async (req, res)=>{

    const id = req.params.id;
    const respuesta = await Empleado.findOne({_id: id})
    res.json(respuesta)

}

module.exports = EmpleadoCtrl