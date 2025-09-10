// backend/config/db.js

import 'dotenv/config';
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    port: process.env.DB_PORT || 5432,
    logging: false, // Cambiar a console.log para depurar SQL
    pool: { max: 5, min: 0, acquire: 30000, idle: 10000 }
  }
);

// Importa las funciones que definen los modelos
import defineEvento from '../models/Event.js';
import defineObjetivo from '../models/Objetivo.js';
import defineUser from '../models/User.js';
import defineAlumno from '../models/Alumno.js'; 
import defineCategory from '../models/Category.js';
import defineLocation from '../models/Location.js';
import defineResultado from '../models/Resultado.js';
import definePDI from '../models/ObjetivoPDI.js';
import defineTipoObjetivo from '../models/TipoObjetivo.js';
import defineSegmento from '../models/Segmento.js'; 
import defineObjetivoSegmento from '../models/ObjetivoSegmento.js'; // Estandarizado
import defineRecurso from '../models/Recurso.js';
import defineEventoRecurso from '../models/EventoRecurso.js';
import defineEventoTipo from '../models/EventoTipo.js';
import defineArgumentacion from '../models/Argumentacion.js';
import defineEventoObjetivo from '../models/EventoObjetivo.js';



const Evento = defineEvento(sequelize);
const Objetivo = defineObjetivo(sequelize);
const User = defineUser(sequelize);
const Argumentacion = defineArgumentacion(sequelize);
const Alumno = defineAlumno(sequelize);
const Category = defineCategory(sequelize);
const Location = defineLocation(sequelize); 
const Resultado = defineResultado(sequelize);
const ObjetivoPDI = definePDI(sequelize);
const TipoObjetivo = defineTipoObjetivo(sequelize);
const Segmento = defineSegmento(sequelize);
const ObjetivoSegmento = defineObjetivoSegmento(sequelize); // Estandarizado
const Recurso = defineRecurso(sequelize);
const EventoRecurso = defineEventoRecurso(sequelize);
const EventoTipo = defineEventoTipo(sequelize);
const EventoObjetivo = defineEventoObjetivo(sequelize);

// Crea la instancia de Sequelize


Evento.belongsToMany(Objetivo, { 
  through:EventoObjetivo,
  foreignKey: 'idevento',
  otherKey:'idobjetivo',
  as: 'Objetivos' });

Objetivo.belongsToMany(Evento, { 
  through: EventoObjetivo,
  foreignKey: 'idobjetivo',
  otherKey:'idevento' ,
  as: 'Eventos'});

Objetivo.hasMany(ObjetivoPDI, { foreignKey: 'idobjetivo', as: 'ObjetivoPDIs' });
ObjetivoPDI.belongsTo(Objetivo, { foreignKey: 'idobjetivo' });

// Relaciones Muchos-a-Muchos
Evento.belongsToMany(EventoTipo, { // Ahora 'TipoEvento' SÍ está definido
  through: 'EventoTipo',
  foreignKey: 'idevento',
  otherKey: 'idtipoevento',
  as: 'TipoEvento'
});
EventoTipo.belongsToMany(Evento, { // Y aquí también
  through: 'EventoTipos',
  foreignKey: 'idtipoevento',
  otherKey: 'idevento',
  as: 'Eventos'
});
Evento.hasOne(Resultado, { foreignKey: 'idevento', as: 'Resultados' });
Objetivo.belongsToMany(Segmento, {
  through: ObjetivoSegmento,
  foreignKey: 'idobjetivo',
  otherKey: 'idsegmento',
  as: 'Segmentos'
});
Segmento.belongsToMany(Objetivo, {
  through: ObjetivoSegmento,
  foreignKey: 'idsegmento',
  otherKey: 'idobjetivo',
  as: 'Objetivos'
});

Evento.belongsToMany(Recurso, {
  through: EventoRecurso,
  foreignKey: 'idevento',
  otherKey:'idrecurso',
  as: 'Recursos'
});
Recurso.belongsToMany(Evento, {
  through: EventoRecurso,
  foreignKey: 'idrecurso',
  otherKey:'idevento',
  as: 'Eventos'
});
Objetivo.hasMany(Argumentacion, { foreignKey: 'idobjetivo', as: 'Argumentaciones' });
Argumentacion.belongsTo(Objetivo, { foreignKey: 'idobjetivo' });
Resultado.belongsTo(Evento, { foreignKey: 'idevento',as:'evento' });
const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('PostgreSQL Conectado Exitosamente.');
  } catch (error) {
    console.error('No se pudo conectar a PostgreSQL:', error);
    process.exit(1);
  }
};

export {
  sequelize,
  connectDB,
  Evento,
  Objetivo,
  User,
  // Alumno, // Desactivado
  Category,
  Location,
  Resultado,
  ObjetivoPDI,
  TipoObjetivo,
  Segmento,
  ObjetivoSegmento,
  Recurso,
  EventoRecurso,
  EventoTipo,
  Argumentacion,
  EventoObjetivo
};