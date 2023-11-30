const express = require('express');
const router = express.Router();
const Product = require('../models/product');


router.post('/api/products', async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});


router.get('/api/products', async (req, res) => {

});


router.get('/api/products/:productId', async (req, res) => {

});


router.put('/api/products/:productId', async (req, res) => {
  
});


router.delete('/api/products/:productId', async (req, res) => {

});

module.exports = router;
