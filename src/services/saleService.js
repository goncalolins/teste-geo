const Sale = require('../models/sale');

exports.createSale = async (saleData) => {
  const sale = new Sale(saleData);
  return sale.save();
};

exports.getAllSales = async () => {
  return Sale.find().populate('items.productId');
};

exports.getSaleById = async (id) => {
  return Sale.findById(id).populate('items.productId');
};

exports.updateSale = async (id, saleData) => {
  return Sale.findByIdAndUpdate(id, saleData, { new: true });
};

exports.deleteSale = async (id) => {
  return Sale.findByIdAndDelete(id);
};