// importamos la conexión a la DB
import db from "../database/db.js";
// importamos sequelize
import { DataTypes } from "sequelize";

 const AgendaModel = db.define('notas', {
    title:{ type: DataTypes.STRING},
    content:{ type: DataTypes.STRING},
 });

 export default AgendaModel;