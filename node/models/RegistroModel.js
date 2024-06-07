// importamos la conexión a la DB
import db from "../database/db.js";
// importamos sequelize
import { DataTypes } from "sequelize";

const RegistroModel = db.define('registros', {
    nombre_usuario: { type: DataTypes.STRING },
    edad_usuario: { type: DataTypes.NUMBER },
    ocupacion_usuario: { type: DataTypes.STRING },
    correo_usuario: { type: DataTypes.STRING },
    contrasena_usuario: { type: DataTypes.STRING },
}, {
    freezeTableName: true // Esto evita que Sequelize pluralice el nombre de la tabla
});

export default RegistroModel;