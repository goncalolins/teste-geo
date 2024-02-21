const express = require('express');
const router = express.Router();
const saleController = require('../controllers/saleController');

/**
 * @openapi
 * /api/sales:
 *   post:
 *     summary: Cria uma nova venda.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - productId
 *               - quantity
 *               - totalPrice
 *             properties:
 *               productId:
 *                 type: string
 *               quantity:
 *                 type: integer
 *               totalPrice:
 *                 type: number
 *           example:
 *             productId: '1'
 *             quantity: 2
 *             totalPrice: 39.98
 *     responses:
 *       201:
 *         description: Venda criada com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Sale'
 *             example:
 *               id: 1
 *               productId: '1'
 *               quantity: 2
 *               totalPrice: 39.98
 */
router.post('/', saleController.createSale);

/**
 * @openapi
 * /api/sales:
 *   get:
 *     summary: Lista todas as vendas.
 *     responses:
 *       200:
 *         description: Array de vendas.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Sale'
 *             example:
 *               - id: 1
 *                 productId: '1'
 *                 quantity: 2
 *                 totalPrice: 39.98
 *               - id: 2
 *                 productId: '2'
 *                 quantity: 1
 *                 totalPrice: 19.99
 */
router.get('/', saleController.getAllSales);

/**
 * @openapi
 * /api/sales/{id}:
 *   get:
 *     summary: Obtém uma venda pelo ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID da venda.
 *     responses:
 *       200:
 *         description: Venda encontrada.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Sale'
 *             example:
 *               id: 1
 *               productId: '1'
 *               quantity: 2
 *               totalPrice: 39.98
 *       404:
 *         description: Venda não encontrada.
 */
router.get('/:id', saleController.getSaleById);

/**
 * @openapi
 * /api/sales/{id}:
 *   put:
 *     summary: Atualiza uma venda pelo ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID da venda a ser atualizada.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - productId
 *               - quantity
 *               - totalPrice
 *             properties:
 *               productId:
 *                 type: string
 *               quantity:
 *                 type: integer
 *               totalPrice:
 *                 type: number
 *           example:
 *             productId: '1'
 *             quantity: 3
 *             totalPrice: 59.97
 *     responses:
 *       200:
 *         description: Venda atualizada com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Sale'
 *             example:
 *               id: 1
 *               productId: '1'
 *               quantity: 3
 *               totalPrice: 59.97
 */
router.put('/:id', saleController.updateSale);

/**
 * @openapi
 * /api/sales/{id}:
 *   delete:
 *     summary: Exclui uma venda pelo ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID da venda a ser excluída.
 *     responses:
 *       204:
 *         description: Venda excluída com sucesso.
 */
router.delete('/:id', saleController.deleteSale);

module.exports = router;