
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

//COnfigurar CORS
const whitelist = [
    'http://127.0.0.1:5173', 
    // 'http://localhost:3000'
]

const corsOptions = {
    origin: function(origin, callback){
        if(whitelist.includes(origin)){
            // console.log(origin);
            //Puede consultar la api
            callback(null,true);
        }else{
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

app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`)
})