// importamos la conexión a la DB
import db from "../database/db.js";
import { DataTypes } from "sequelize";

const LoginModel = db.define('usuarios', {
    correo_usuario: { type: DataTypes.STRING },
    contrasena_usuario: { type: DataTypes.STRING },
}, {
    freezeTableName: true // Esto evita que Sequelize pluralice el nombre de la tabla
});

export default LoginModel;