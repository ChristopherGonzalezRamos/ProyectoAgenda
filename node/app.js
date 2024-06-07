import express from "express";
import cors from 'cors';
import db from "./database/db.js";
import notaRoutes from './routes/routes.js';
import registroRoutes from './routes/routesregistro.js';
import loginRoutes from './routes/routeslogin.js';


const app = express();

app.use(cors());
app.use(express.json()); // Asegúrate de llamar a express.json()

app.use('/notas', notaRoutes);
app.use('/registro', registroRoutes);
app.use('/login', loginRoutes);

try {
    await db.authenticate();
    console.log('Conexión exitosa a la base de datos');
} catch (error) {
    console.log(`El error de conexión es: ${error}`); // Usa backticks para interpolación
}

app.get('/', (req, res) => {
    res.send('HOLA MUNDO');
});

app.listen(8000, () => {
    console.log('Server UP running in http://localhost:8000/');
});
