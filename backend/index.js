
import express from 'express';
import dotenv from 'dotenv'
import cors from 'cors';
import conectarDB from './config/db.js';
import usuarioRoutes from './routes/usuarioRoutes.js';
import proyectoRoutes from './routes/proyectoRoutes.js';
import tareaRoutes from './routes/tareaRoutes.js';

const app = express();
app.use(express.json())

dotenv.config();

conectarDB();

//Configurar CORS
const whitelist = [
    process.env.FRONTEND_URL,
    // 'http://localhost:3000'
]

const corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.includes(origin)) {
            // console.log(origin);
            //Puede consultar la api
            callback(null, true);
        } else {
            //No está permitido
            callback(new Error('Cors origin Error'))
        }
    }
}

app.use(cors(corsOptions));

//Routing
app.use('/api/usuarios', usuarioRoutes)
app.use('/api/proyectos', proyectoRoutes)
app.use('/api/tareas', tareaRoutes)

const PORT = process.env.PORT || 4000;

const servidor = app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`)
})

//Socket.io
import { Server } from "socket.io";

const io = new Server(servidor, {
    // options
    pingTimeout: 60000,
    cors: {
        origin: process.env.FRONTEND_URL,

    }
});

io.on('connection', (socket) => {
    console.log('Conectado a socket.io');

    //Definir los eventos de socket io
    
})