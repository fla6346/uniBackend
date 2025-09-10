import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.js';
export default (sequelize) => {
const EventoTipo=sequelize.define('EventoTipo',{
   idevento:{
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: false,
        field: 'idevento',
        primaryKey: true,
    },
    idtipoevento:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: false,
        references:{
            model:'tipo_evento',
            key:'idtipoevento',
        }
    },
    texto_personalizado:{
        type: DataTypes.STRING,
        allowNull: true,
        field: 'texto_personalizado',

    },
},{
    tableName:'evento_tipos',
    timestamps:false,

});
  return EventoTipo; 
};