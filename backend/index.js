
import express from 'express';
import conectarDB from './config/db.js';
import dotenv from 'dotenv'

const app = express();

dotenv.config();

const PORT = process.env.PORT || 4000;

conectarDB();

app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`)
})