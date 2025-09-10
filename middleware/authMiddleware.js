import jwt from 'jsonwebtoken';
import {User} from '../config/db.js'; 
import asyncHandler from 'express-async-handler';
import 'dotenv/config'; // Asegúrate de que dotenv esté configurado

export const protect = asyncHandler( async (req, res, next) => { // <--- EXPORT NOMBRADO
  let token;
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findByPk(decoded.id, { // Usar findByPk para Sequelize
        attributes: { exclude: ['password'] } // Excluir contraseña
      });

      if (!req.user) {
        return res.status(401).json({ message: 'No autorizado, usuario no encontrado con ese token' });
      }
      next();
    } catch (error) {
      console.error('Error en middleware protect:', error);
      res.status(401);
      throw new Error('No autorizado, token falló');
    }

      // Diferenciar errores de token inválido/expirado de otros errores
      /*if (error.name === 'JsonWebTokenError' || error.name === 'TokenExpiredError') {
        return res.status(401).json({ message: 'No autorizado, token falló o expiró' });
      }
      return res.status(500).json({ message: 'Error del servidor en la autenticación' });*/
    
  }
  if (!token) {
    res.status(401).json({ message: 'No autorizado, no hay token' });
  }
});

export const authorize = (roles) => { // <--- EXPORT NOMBRADO
  return (req, res, next) => {
    if (!req.user || !req.user.role) {
        return res.status(403).json({ message: 'Acceso denegado. Rol no definido.' });
    }
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ message: `Acceso denegado. Rol '${req.user.role}' no tiene permiso para este recurso.` });
    }
    next();
  };
};

// NO HAGAS ESTO SI QUIERES IMPORTAR { protect, authorize }:
// const authMiddleware = { protect, authorize };
// export default authMiddleware;