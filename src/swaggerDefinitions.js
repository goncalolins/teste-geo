module.exports = {
    Product: {
      type: 'object',
      properties: {
        id: { type: 'string' },
        name: { type: 'string' },
        description: { type: 'string' },
        salePrice: { type: 'number' },
        type: {type: 'string'}
      },
      required: ['name', 'description', 'salePrice','type']
    },
    Sale: {
      type: 'object',
      properties: {
        id: { type: 'string' },
        productId: { type: 'string' },
        quantity: { type: 'integer' },
        totalPrice: { type: 'number' }
      },
      required: ['productId', 'quantity', 'totalPrice']
    }
  };