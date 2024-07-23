const express = require('express');
const router = express.Router();
const { registerUser, getUsers, getUserById, updateUser, deleteUser, loginUser, logoutUser } = require('../controllers/userController');
const { authMiddleware } = require('../middleware/authMiddleware');

// Rutas CRUD
router.post('/register', registerUser);
router.get('/', authMiddleware, getUsers);
router.get('/:id', authMiddleware, getUserById);
router.put('/:id', authMiddleware, updateUser);
router.delete('/:id', authMiddleware, deleteUser);

// Rutas de autenticación
router.post('/login', loginUser);
router.post('/logout', logoutUser);

module.exports = router;
