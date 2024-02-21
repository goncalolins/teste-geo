const mongoose = require('mongoose');

const saleSchema = new mongoose.Schema({
  saleDate: { type: Date, default: Date.now },
  description: String,
  totalValue: Number,
  client: {
    name: { type: String, required: true },
    cpf: { type: String, required: true },
    email: String
  },
  items: [{
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    description: String,
    quantity: Number,
    unitValue: Number,
    totalValue: Number
  }]
});

const Sale = mongoose.model('Sale', saleSchema);
module.exports = Sale;