// backend/models/Evento.js
import { sequelize } from '../config/db.js';
import { DataTypes } from 'sequelize';
import Resultado from '../models/Resultado.js';
import Objetivo from '../models/Objetivo.js';
import EventoTipo from '../models/EventoTipo.js';
import Recurso from '../models/Recurso.js';
export default (sequelize) => {
  
  // Definición del modelo Evento
const Event = sequelize.define('Evento', {
  idevento: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    field: 'idevento', 
  },
  nombreevento: {
    type: DataTypes.STRING(20), 
    allowNull: false, 
    field: 'nombreevento',
  },
  lugarevento: {
    type: DataTypes.STRING(30),
    allowNull: true, 
    field: 'lugarevento',
  },
  fechaevento: {
    type: DataTypes.DATEONLY, 
    allowNull: false,
    field: 'fechaevento',
  },
  horaevento: {
    type: DataTypes.TIME, 
    allowNull: false, 
    field: 'horaevento',
  },
  
  
  responsable_evento: {
    type: DataTypes.STRING(100),
    allowNull: true,
    field: 'responsable_evento',
  },
},

 {
  tableName: 'evento', // Nombre exacto de tu tabla
  timestamps: false, // Si tu tabla NO tiene createdAt y updatedAt, ponlo en false
});

 
return Event;
};