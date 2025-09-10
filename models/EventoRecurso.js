import { DataTypes } from "sequelize";
import { sequelize } from '../config/db.js';
import Evento from "../models/Event.js";
import Recurso from '../models/Recurso.js'
export default (sequelize) => {
  const EventoRecurso = sequelize.define("EventoRecurso",{
      idevento: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references:{
          model:Evento,
          key:'idevento'
        }
      },
      idrecurso: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references:{
          model:Recurso,
          key:'idrecurso',
        }
      },
    },
    {
      tableName: "evento_recurso", // Nombre de la tabla "hija"
      timestamps: false,
    }
  );

  return EventoRecurso;
}