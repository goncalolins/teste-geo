const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

/**
 * @openapi
 * /api/products:
 *   get:
 *     summary: Lista todos os produtos.
 *     responses:
 *       200:
 *         description: Array de produtos.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 *             example:
 *               - id: 1
 *                 name: 'Produto Exemplo 1'
 *                 description: 'Descrição do Produto Exemplo 1'
 *                 salePrice: 19.99
 *               - id: 2
 *                 name: 'Produto Exemplo 2'
 *                 description: 'Descrição do Produto Exemplo 2'
 *                 salePrice: 29.99
 */
router.get('/', productController.getAllProducts);

/**
 * @openapi
 * /api/products/{id}:
 *   get:
 *     summary: Obtém um produto pelo ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID do produto.
 *     responses:
 *       200:
 *         description: Produto encontrado.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *             example:
 *               id: 1
 *               name: 'Produto Exemplo 1'
 *               description: 'Descrição do Produto Exemplo 1'
 *               salePrice: 19.99
 *               type: 'simples'
 *       404:
 *         description: Produto não encontrado.
 */
router.get('/:id', productController.getProductById);

/**
 * @openapi
 * /api/products:
 *   post:
 *     summary: Cria um novo produto.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - description
 *               - salePrice
 *               - type
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               salePrice:
 *                 type: number
 *               type:
 *                  type: string
 *           example:
 *             name: 'Produto Exemplo'
 *             description: 'Descrição do Produto Exemplo'
 *             salePrice: 19.99
 *             type: 'simples'
 *     responses:
 *       201:
 *         description: Produto criado com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *             example:
 *               id: 1
 *               name: 'Produto Exemplo'
 *               description: 'Descrição do Produto Exemplo'
 *               salePrice: 19.99
 *               type: 'simples'
 */
router.post('/', productController.createProduct);

/**
 * @openapi
 * /api/products/{id}:
 *   put:
 *     summary: Atualiza um produto pelo ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID do produto a ser atualizado.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - description
 *               - salePrice
 *               - type
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               salePrice:
 *                 type: number
 *               type:
 *                  type: string
 *           example:
 *             name: 'Produto Exemplo Atualizado'
 *             description: 'Descrição atualizada do Produto Exemplo'
 *             salePrice: 29.99
 *             type: 'simples'
 *     responses:
 *       200:
 *         description: Produto atualizado com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *             example:
 *               id: 1
 *               name: 'Produto Exemplo Atualizado'
 *               description: 'Descrição atualizada do Produto Exemplo'
 *               salePrice: 29.99
 *               type: 'simples'
 */
router.put('/:id', productController.updateProduct);

/**
 * @openapi
 * /api/products/{id}:
 *   delete:
 *     summary: Exclui um produto pelo ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID do produto a ser excluído.
 *     responses:
 *       204:
 *         description: Produto excluído com sucesso.
 */
router.delete('/:id', productController.deleteProduct);

module.exports = router;