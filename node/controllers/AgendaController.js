// importamos el Modelo
import AgendaModel from "../models/AgendaModel.js";

//** Métodos para el CRUD **/

// Mostrar todos los registros
export const getAllNotas = async (req, res) => {
    try {
        const notas = await AgendaModel.findAll();
        res.json(notas);
    } catch (error) {
        res.json( {message: error.message} );
    }
}

// Mostrar un registro
export const getNota = async (req, res) => {
    try {
        const nota = await AgendaModel.findAll({
            where:{ id:req.params.id }
        });
        res.json(nota[0]);
    } catch (error) {
        res.json( {message: error.message} );
    }
}

// Crear un registro
export const createNota = async (req, res) => {
    try {
       await AgendaModel.create(req.body);
       res.json({
        "message":"¡Registro creado correctamente"
       });
    } catch (error) {
        res.json( {message: error.message} );
    }
}

// Actualizar un registro
export const updateNota = async (req, res) => {
    try {
        await AgendaModel.update(req.body, {
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
export const deleteNota = async (req, res) => {
    try {
        await AgendaModel.destroy( {
            where: { id : req.params.id}
        });
        res.json({
            "message":"¡Registro eliminado correctamente"
        });
    } catch (error) {
        res.json( {message: error.message} );
    }
}