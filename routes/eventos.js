import express from 'express';
import { Op } from 'sequelize';
import { sequelize, Evento, Objetivo, Resultado, ObjetivoPDI } from '../config/db.js';
import { createEvento,getAllEventos,deleteEvento,getEventoById } from '../controllers/eventController.js';

const router = express.Router();

router.post('/',createEvento);
//router.get('/',getAllEventos);
//router.get('/reporte/estadisticas', getEstadisticas);

export default router;