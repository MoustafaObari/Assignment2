var express = require('express');
var router = express.Router();
var catController = require('../controllers/categories.controller')

router.post('/', catController.save);
router.get('/', catController.find);
router.get('/:id', catController.findById);
router.delete('/', catController.remove);
router.delete('/:id', catController.removeById);
router.put('/:id', catController.updateById);


module.exports = router; 