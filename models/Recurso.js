import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.js';

export default (sequelize) => {
  const Recurso = sequelize.define('Recurso', {
    idrecurso: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
   
   nombre_recurso: {
      type: DataTypes.STRING,
        allowNull: false,
    }, 
    recurso_tipo: {     
      type: DataTypes.STRING,
      allowNull: false,
    }
},
    {
    tableName: 'recurso', // Nombre de la tabla "hija"
    timestamps: false,
  });

return Recurso;
};