const router = require('express').Router();
const productController = require('../controller/ProductsController');

router.get('/', productController.getAllProduct);
router.get('/:id', productController.getProduct);
router.get('/search/:key', productController.searchProduct);
router.post('/', productController.createProduct);

module.exports=router