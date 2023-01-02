import { Proyecto } from "../models/Proyecto.js";
import Tarea from "../models/Tarea.js";


const agregarTarea = async (req, res, next) => {
    const { proyecto } = req.body;

    const existeProyecto = await Proyecto.findById(proyecto);

    if (!existeProyecto) {
        const error = new Error(`Proyecto ${proyecto} no encontrado`)
        return res.status(404).json({ msg: error.message })
        
    }

    if (existeProyecto.creador.toString() !== req.usuario._id.toString()) {
        const error = new Error(`No tienes los permisos para realizar la acción`)
        return res.status(403).json({ msg: error.message })
    }

    try {
        const tareaAlmacenada = await Tarea.create(req.body);
        res.json(tareaAlmacenada);
    } catch (error) {
        console.log(error);
    }

    // console.log(existeProyecto);
}

const obtenerTarea = async (req, res) => {

    const {id} = req.params;

    const tarea = await Tarea.findById(id).populate('proyecto');
    
    if(!tarea){
        const error = new Error(`Tarea ${tarea} no encontrada`)
        return res.status(404).json({ msg: error.message })
    }

    if(tarea.proyecto.creador.toString() !== req.usuario._id.toString()){
        const error = new Error(`No tienes los permisos para realizar la acción`)
        return res.status(403).json({ msg: error.message })
    }

    res.json(tarea)

}

const actualizarTarea = async (req, res, next) => {

    const {id} = req.params;

    const tarea = await Tarea.findById(id).populate('proyecto');
    
    if(!tarea){
        const error = new Error(`Tarea ${tarea} no encontrada`)
        return res.status(404).json({ msg: error.message })
    }

    if(tarea.proyecto.creador.toString() !== req.usuario._id.toString()){
        const error = new Error(`No tienes los permisos para realizar la acción`)
        return res.status(403).json({ msg: error.message })
    }

    tarea.nombre = req.body.nombre || tarea.nombre;
    tarea.descripcion = req.body.descripcion || tarea.descripcion;
    tarea.prioridad = req.body.prioridad || tarea.prioridad;
    tarea.fechaEntrega = req.body.fechaEntrega || tarea.fechaEntrega;
    
    try {
        const tareaAlmacenada = await tarea.save();
        res.json(tareaAlmacenada)
    } catch (error) {
        console.log(error);
    }


}

const eliminarTarea = async (req, res, next) => { }

const camiarEstadoTarea = async (req, res, next) => { }

export {
    agregarTarea,
    obtenerTarea,
    actualizarTarea,
    eliminarTarea,
    camiarEstadoTarea,
}

