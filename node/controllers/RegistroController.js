// importamos el Modelo
import RegistroModel from "../models/RegistroModel.js";
import LoginModel from "../models/LoginModel.js"; // Asegúrate de importar el modelo de usuarios

//** Métodos para el CRUD **/

// Mostrar todos los registros
export const getAllUsuarios = async (req, res) => {
    try {
        const usuarios = await RegistroModel.findAll();
        res.json(usuarios);
    } catch (error) {
        res.json( {message: error.message} );
    }
}

// Mostrar un registro
export const getUsuario = async (req, res) => {
    try {
        const usuario = await RegistroModel.findAll({
            where:{ id:req.params.id }
        });
        res.json(usuario[0]);
    } catch (error) {
        res.json( {message: error.message} );
    }
}

// Crear un registro y usuario
export const createUsuario = async (req, res) => {
    try {
        // Crear registro en la tabla de registros
        const nuevoRegistro = await RegistroModel.create(req.body);

        // Crear registro en la tabla de usuarios
        await LoginModel.create({
            correo_usuario: req.body.correo_usuario,
            contrasena_usuario: req.body.contrasena_usuario,
        });

        res.json({
            message: "¡Registro y usuario creados correctamente!",
            registro: nuevoRegistro,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Actualizar un registro
export const updateUsuario = async (req, res) => {
    try {
        await RegistroModel.update(req.body, {
            where: { id: req.params.id}
        });
        res.json({
            "message":"¡Registro actualizado correctamente"
        });
    } catch (error) {
        res.json( {message: error.message} );
    }
}

// Eliminar un registro
export const deleteUsuario = async (req, res) => {
    try {
        await RegistroModel.destroy( {
            where: { id : req.params.id}
        });
        res.json({
            "message":"¡Registro eliminado correctamente"
        });
    } catch (error) {
        res.json( {message: error.message} );
    }

}