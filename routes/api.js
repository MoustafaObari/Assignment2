const express = require('express');
const router = express.Router();


const productsRouter = require('./products');
router.use('/products', productsRouter);

const categoriesRouter = require('./categories');
router.use('/categories', categoriesRouter);

module.exports = router;