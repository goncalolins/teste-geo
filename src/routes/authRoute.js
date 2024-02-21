const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController'); // Ajuste o caminho conforme necessário

/**
 * @openapi
 * /api/auth/login:
 *   post:
 *     summary: Autentica um usuário e retorna um token JWT.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 description: O nome de usuário
 *               password:
 *                 type: string
 *                 description: A senha do usuário
 *             required:
 *               - username
 *               - password
 *     responses:
 *       200:
 *         description: Autenticação bem-sucedida e token retornado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   description: O token JWT para autenticação nas demais APIs.
 *       401:
 *         description: Usuário ou senha inválidos.
 */
router.post('/login', authController.login);

module.exports = router;