// models/Objetivo.js
import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.js';


export default (sequelize) => {
  const Argumentacion = sequelize.define('Argumentacion', {
    idargumentacion: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    idobjetivo: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    texto_argumentacion: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'texto_personalizado',
    },
   
  }, {
    tableName: 'argumentacion', // Nombre de la tabla "hija"
    timestamps: false,
  });

return Argumentacion;
};