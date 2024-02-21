const express = require('express');
const app = express();
const mongoose = require('mongoose');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const authMiddleware = require('./middleware/auth');
const User = require('./models/user');
const swaggerDefinitions = require('./swaggerDefinitions');
const bcrypt = require('bcrypt');
require('dotenv').config();

const initializeAdminUser = async () => {
  try {
      const existingAdmin = await User.findOne({ username: 'admin' });
      if (!existingAdmin) {
          const hashedPassword = await bcrypt.hash('teste123', 10);
          await User.create({
              username: 'admin',
              password: hashedPassword
          });
          console.log('Usuário admin criado com sucesso.');
      } else {
          console.log('Usuário admin já existe.');
      }
  } catch (error) {
      console.error('Erro ao criar usuário admin:', error);
  }
};

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Conexão ao MongoDB bem-sucedida!');
    initializeAdminUser();
  })
  .catch((err) => console.error('Falha ao conectar ao MongoDB:', err));

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'API de Produtos e Vendas',
    version: '1.0.0',
    description: 'Esta é uma API criada para o cadastro e gerenciamento de produtos e vendas.',
  },
  servers: [
    {
      url: `http://localhost:${process.env.PORT || 3000}`,
      description: 'Servidor de Desenvolvimento',
    },
  ],
  components: {
    schemas: swaggerDefinitions,
    securitySchemes: {
      BearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
    },
  },
  security: [{ BearerAuth: [] }],
};
const options = {
  swaggerDefinition,
  apis: ['./src/routes/*.js'],
};
const swaggerSpec = swaggerJsdoc(options);

app.use(express.json());

app.use('/api/auth', require('./routes/authRoute'));
app.use('/api/products', authMiddleware, require('./routes/productRoutes'));
app.use('/api/sales', authMiddleware, require('./routes/saleRoutes'));

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(process.env.PORT || 3000, () => console.log(`Server running on port ${process.env.PORT || 3000}`));