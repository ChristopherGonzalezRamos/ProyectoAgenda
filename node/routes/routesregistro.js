// Importar la función de registro del controlador
import express from 'express';
import { getAllUsuarios, getUsuario, createUsuario, updateUsuario, deleteUsuario} from '../controllers/RegistroController.js';

const routerregistro = express.Router()

routerregistro.get('/', getAllUsuarios);
routerregistro.get('/:id', getUsuario);
routerregistro.post('/', createUsuario);
routerregistro.put('/:id', updateUsuario);
routerregistro.delete('/:id', deleteUsuario);

export default routerregistro;