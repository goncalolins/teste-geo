const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  salePrice: { type: Number, required: true },
  type: { type: String, required: true, enum: ['simples', 'digital', 'configurável', 'agrupado'] },
  downloadLink: String,
  features: [String],
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;