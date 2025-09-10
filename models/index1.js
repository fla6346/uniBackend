import { sequelize } from '../config/db.js'; // Renombra para evitar conflicto si es necesario
import { DataTypes } from 'sequelize';
import User from './User.js';
import Event from './Event.js';
import Category from './Category.js';
import Location from './Location.js';
import Alumno from './Alumno.js';

Event.belongsToMany(Alumno, {
  through: 'evento_inscripciones', // La tabla intermedia
  foreignKey: 'idevento',         // La clave en la tabla intermedia que apunta a Evento
  otherKey: 'idestudiante'      // La clave que apunta al otro modelo (Participante)
});
Alumno.belongsToMany(Event, {
  through: 'evento_inscripciones',
  foreignKey: 'idestudiante',
  otherKey: 'idevento'
});
// Relación Muchos a Muchos: Usuarios (estudiantes) y Eventos (asistentes)
const EventAttendee = sequelize.define('EventAttendee', { // Usa la instancia de sequelize
  registrationDate: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, { timestamps: false });

User.belongsToMany(Event, {
  through: EventAttendee,
  as: 'registeredEvents',
  foreignKey: 'userId',
});
Event.belongsToMany(User, {
  through: EventAttendee,
  as: 'attendees',
  foreignKey: 'eventId',
});

// Exportar modelos y sequelize
export {
  sequelize, // Exporta la instancia de sequelize renombrada
  User,
  Event,
  Category,
  Location,
  EventAttendee,
};