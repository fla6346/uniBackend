import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.js';

export default (sequelize) => {
  const ObjetivoPDI = sequelize.define('ObjetivoPDI', {
    idobjetivo_pdi: {
      type: DataTypes.INTEGER,
      primaryKey: true, // ← Agregar esta línea
      autoIncrement: true,
      allowNull: false,
    },
    idobjetivo: {
      type: DataTypes.INTEGER,
      allowNull: false, // ← Agregar allowNull: false para consistencia
      references: {
        model: 'objetivos',
        key: 'idobjetivo',
      },
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  }, {
    tableName: 'objetivo_pdi',
    timestamps: false,
  });

  return ObjetivoPDI;
};