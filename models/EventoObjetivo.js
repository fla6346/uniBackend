// models/EventoObjetivo.js
import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.js';
import Objetivo from '../models/Objetivo.js';
import Evento from '../models/Event.js'
export default(sequelize)=>{

const EventoObjetivo = sequelize.define('EventoObjetivo', {
  idevento: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references:{
      model:'Evento',
      key:'idevento'
    }
  },
  idobjetivo: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references:{
      model:'Objetivo',
      key: 'idobjetivo'
    }
  },
  texto_personalizado: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  tableName: 'evento_objetivos',
  timestamps: false,
});

return EventoObjetivo;
}