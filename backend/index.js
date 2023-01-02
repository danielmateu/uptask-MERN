
import express from 'express';
import conectarDB from './config/db.js';
import dotenv from 'dotenv'
import usuarioRoutes from './routes/usuarioRoutes.js';
import proyectoRoutes from './routes/proyectoRoutes.js';
import tareaRoutes from './routes/tareaRoutes.js';



const app = express();
app.use(express.json())

dotenv.config();

//Routing
app.use('/api/usuarios', usuarioRoutes)
app.use('/api/proyectos', proyectoRoutes)
app.use('/api/tareas', tareaRoutes)

const PORT = process.env.PORT || 4000;


conectarDB();

app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`)
})