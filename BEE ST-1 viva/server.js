const express = require('express');
const router = express.Router();
const Product = require('../models/product');

router.post('/api/products/:productId/reviews', async (req, res) => {

});


router.get('/api/products/:productId/reviews', async (req, res) => {

});


router.put('/api/products/:productId/reviews/:reviewId', async (req, res) => {
 
});

router.delete('/api/products/:productId/reviews/:reviewId', async (req, res) => {

});

module.exports = router;
