const express = require('express');
const router = express.Router();
const productController = require('../controllers/products.controller')



router.post('/', productController.save);
router.get('/', productController.find);
router.get('/:id', productController.findById);
router.delete('/', productController.remove);
router.delete('/:id', productController.removeById);
router.put('/:id', productController.updateById);
router.get('/all/published', productController.findPublished);



module.exports = router;