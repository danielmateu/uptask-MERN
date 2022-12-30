import generarId from "../helpers/generarId.js";
import Usuario from "../models/Usuario.js"


const registrar = async (req, res, next) => {

    //Evitar registros duplicados
    const {email} = req.body;
    const existeUsuario = await Usuario.findOne({email});

    if(existeUsuario){
        const error = new Error('Usuario ya registrado')
        return res.status(400).json({msg: error.message})
    }

    try {
        const usuario = new Usuario(req.body);
        usuario.token = generarId();
        const usuarioAlmacenado = await usuario.save();
        
        res.json(usuarioAlmacenado)
    } catch (error) {
        console.log(error)
    }
}

const autenticar = async (req, res, next) => {

    const {email, password} = req.body;

    //Comprobar si el usuario existe
    const usuario = await Usuario.findOne({email})
    if(!usuario){
        const error = new Error('El usuario no existe');
        return res.status(404).json({msg: error.message})
    }
    
    //Comprobar si el usuario está confirmado
    if(!usuario.confirmado){
        const error = new Error('Debes validar tu email');
        return res.status(403).json({msg: error.message})
    }

    //Comprobar el pssword
    
}


export { 
    registrar,
    autenticar
}