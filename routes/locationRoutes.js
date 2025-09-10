// D:\Nueva carpeta\backend\routes\locationRoutes.js
import express from 'express';
const router = express.Router(); // O como hayas llamado a tu instancia de router
import {
  getAllLocations,
  createLocation,
  updateLocation,
  deleteLocation
  // Asegúrate de que estas funciones estén exportadas nombradamente desde locationController.js
} from '../controllers/locationController.js';
import { protect, authorize } from '../middleware/authMiddleware.js';

// Define tus rutas aquí usando 'router.get', 'router.post', etc.
router.get('/', getAllLocations); // Asumiendo que es público o protegido en el controlador
router.post('/', protect, authorize(['admin']), createLocation);
router.put('/:id', protect, authorize(['admin']), updateLocation);
router.delete('/:id', protect, authorize(['admin']), deleteLocation);

export default router; // <--- ASEGÚRATE DE TENER ESTA LÍNEA