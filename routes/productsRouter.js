const express = require('express')
const router = express.Router()

const ProductsController = require('../controllers/ProductsController')

router.get('/', ProductsController.produtos)
router.get('/createproduct', ProductsController.createProduct)
router.get('/details:id', ProductsController.getProductId)
router.get('/edit:id', ProductsController.editProduct)
router.post('/remove:id', ProductsController.deleteProduct)
router.post('/creatingProduct', ProductsController.creatingProduct)
router.post('/editingProduct', ProductsController.editingProduct)

module.exports = router