import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.js';

export default (sequelize) => {
  const TipoObjetivo = sequelize.define('tipos_objetivo', {
    idtipoobjetivo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
  
    nombre_objetivo: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  }, {
    tableName: 'tipos_objetivo',
    timestamps: false,
  });

return TipoObjetivo;
};