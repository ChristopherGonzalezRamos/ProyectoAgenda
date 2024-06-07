import express from 'express';
import { getAllLogins, loginUser } from '../controllers/LoginController.js';
const routerLogin = express.Router();

routerLogin.get('/', getAllLogins); // Para obtener todos los registros
routerLogin.post('/', loginUser); // Para iniciar sesión

export default routerLogin;
