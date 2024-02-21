const saleService = require('../services/saleService');

exports.createSale = async (req, res) => {
  try {
    const sale = await saleService.createSale(req.body);
    res.status(201).json(sale);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getAllSales = async (req, res) => {
  try {
    const sales = await saleService.getAllSales();
    res.status(200).json(sales);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getSaleById = async (req, res) => {
  try {
    const sale = await saleService.getSaleById(req.params.id);
    if (!sale) {
      return res.status(404).json({ message: 'Sale not found' });
    }
    res.status(200).json(sale);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateSale = async (req, res) => {
  try {
    const updatedSale = await saleService.updateSale(req.params.id, req.body);
    res.status(200).json(updatedSale);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteSale = async (req, res) => {
  try {
    await saleService.deleteSale(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};