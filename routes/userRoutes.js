// backend/routes/userRoutes.js
import express from 'express';
import {
  getAllUsers,
  getUserById,
  createUser,
  updateUserRole,
  deleteUserByAdmin,
  linkTelegramAccount
} from '../controllers/userController.js';
import { protect, authorize } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/link-telegram',linkTelegramAccount);
router.use(protect);
router.use(authorize(['admin']));

router.route('/')
  .get(getAllUsers)   
  .post(createUser);  

router.route('/:id')
  .get(getUserById)      
  .delete(deleteUserByAdmin); // DELETE /api/users/:id

router.put('/:id/role', updateUserRole); // PUT /api/users/:id/role

/*router.post('/link-telegram', async (req, res) => {
    const { email, chat_id } = req.body;
    try {
        // Busca al usuario por email y actualiza su chat_id
        const result = await pool.query(
            "UPDATE usuario SET telegram_chat_id = $1 WHERE email = $2",
            [chat_id, email]
        );
        if (result.rowCount === 0) {
            return res.status(404).json({ message: "Usuario no encontrado con ese email." });
        }
        res.status(200).json({ message: "Cuenta vinculada exitosamente." });
    } catch (error) {
        res.status(500).json({ message: "Error en el servidor." });
    }
});*/

export default router;