const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const auth = require('../middleware/auth');

// POST /api/users/register
router.post('/register', userController.register);

// POST /api/users/login
router.post('/login', userController.login);

// GET /api/users/profile  (protected)
router.get('/profile', auth, userController.getProfile);

module.exports = router;