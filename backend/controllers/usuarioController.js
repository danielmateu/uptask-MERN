import { emailRegistro } from "../helpers/emails.js";
import generarId from "../helpers/generarId.js";
import generarJWT from "../helpers/generarJWT.js";
import Usuario from "../models/Usuario.js"


const registrar = async (req, res, next) => {

    //Evitar registros duplicados
    const { email } = req.body;
    const existeUsuario = await Usuario.findOne({ email });

    if (existeUsuario) {
        const error = new Error('Usuario ya registrado')
        return res.status(400).json({ msg: error.message })
    }

    try {
        const usuario = new Usuario(req.body);
        usuario.token = generarId();
        await usuario.save();

        //Enviar el mail de confirmación
        // console.log(usuario);
        emailRegistro({
            email: usuario.email,
            nombre: usuario.nombre,
            token: usuario.token
        })

        res.json({msg : 'Usuario creado correctamente, revisa tu email para confirmar tu cuenta'})
    } catch (error) {
        console.log(error)
    }
}

const autenticar = async (req, res, next) => {

    const { email, password } = req.body;

    //Comprobar si el usuario existe
    const usuario = await Usuario.findOne({ email })
    if (!usuario) {
        const error = new Error('El usuario no existe');
        return res.status(404).json({ msg: error.message })
    }

    //Comprobar si el usuario está confirmado
    if (!usuario.confirmado) {
        const error = new Error('Debes validar tu email');
        return res.status(403).json({ msg: error.message })
    }

    //Comprobar el pssword
    if (await usuario.comprobarPassword(password)) {
        // const msg = 'Password correcto'
        res.json({
            _id: usuario.id,
            nombre: usuario.nombre,
            email: usuario.email,
            token: generarJWT(usuario._id),
        })
    } else {
        const error = new Error('El password es incorrecto');
        res.status(403).json({ msg: error.message })

    }
}

const confirmar = async (req, res) => {
    const { token } = req.params;
    const usuarioConfirmar = await Usuario.findOne({ token });

    if (!usuarioConfirmar) {
        const error = new Error('Token incorrecto');
        res.status(403).json({ msg: error.message })
    }

    try {
        usuarioConfirmar.confirmado = true;
        usuarioConfirmar.token = ''
        await usuarioConfirmar.save();
        res.json({ msg: 'Usuario confirmado correctamente' })
        // console.log(usuarioConfirmar)
    } catch (error) {
        console.log(error)
    }

}

const olvidePassword = async (req, res) => {
    const { email } = req.body;
    const usuario = await Usuario.findOne({ email })
    if (!usuario) {
        const error = new Error('El usuario no existe');
        return res.status(404).json({ msg: error.message })
    }

    try {
        usuario.token = generarId();
        await usuario.save();
        res.json({ msg: 'Hemos enviado un email con las instrucciones' })
    } catch (error) {
        console.log(error)
    }
}

const comprobarToken = async (req, res) => {
    const { token } = req.params;

    const tokenValido = await Usuario.findOne({ token: token });

    if (tokenValido) {
        res.json({ msg: 'Token válido, listo para cambiar el password' })
    } else {
        const error = new Error('Token no válido');
        return res.status(404).json({ msg: error.message })
    }
}

const nuevoPassword = async (req, res) => {
    const { token } = req.params;
    const { password } = req.body;

    const usuario = await Usuario.findOne({ token });

    if (usuario) {
        usuario.password = password;
        usuario.token = ''
        try {
            await usuario.save();
            res.json({ msg: 'Password modificado correctamente' })
        } catch (error) {
            console.log(error);
        }
    } else {
        const error = new Error('Token no válido');
        return res.status(404).json({ msg: error.message })
    }

    console.log(token);
    console.log(password);
}

const perfil = async (req, res) => {
    const {usuario} = req

    res.json(usuario);
}


export {
    registrar,
    autenticar,
    confirmar,
    olvidePassword,
    comprobarToken,
    nuevoPassword,
    perfil
}