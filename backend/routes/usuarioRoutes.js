import express from 'express';
import { autenticar, confirmar, registrar } from '../controllers/usuarioController.js';


const router = express.Router();

//Autenticación, Registro y Confirmación de usuarios
router.post('/', registrar ) //Crea un nuevo usuario
router.post('/login', autenticar ) //Autenticar Usuario
router.get('/confirmar/:token', confirmar) //Confirmar usuario





export default  router;