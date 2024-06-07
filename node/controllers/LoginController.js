import LoginModel from "../models/LoginModel.js";

// Mostrar todos los registros
export const getAllLogins = async (req, res) => {
    try {
        const usuarios = await LoginModel.findAll();
        res.json(usuarios);
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const loginUser = async (req, res) => {
    const { correo_usuario, contrasena_usuario } = req.body;
    
    try {
        // Buscar usuario por correo
        const usuario = await LoginModel.findOne({ where: { correo_usuario } });
        
        // Verificar si el usuario existe y si la contraseña es correcta
        if (!usuario || usuario.contrasena_usuario !== contrasena_usuario) {
            res.status(401).json({ message: 'Correo o contraseña incorrectos' });
        } else {
            // Usuario autenticado correctamente
            res.json({ success: true, message: 'Inicio de sesión exitoso', usuario });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}
