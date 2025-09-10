import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.js';

export default (sequelize) => {
const ObjetivoSegmento = sequelize.define('ObjetivoSegmento', {
  idobjetivo: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  idsegmento: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
  },
  texto_personalizado: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  tableName: 'objetivo_segmento', 
  timestamps: false ,
});

return  ObjetivoSegmento;
};