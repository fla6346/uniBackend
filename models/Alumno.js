// models/Participante.js
import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.js';

export default (sequelize) => {
const Alumno = sequelize.define('Participante', {
  idestudiante: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  codigoestudiante: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  email: {
    type: DataTypes.STRING(255),
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
}, {
  tableName: 'usuario_estudiante',
  timestamps: false // O configúralo si tienes columnas createdAt/updatedAt
});

return Alumno;
};