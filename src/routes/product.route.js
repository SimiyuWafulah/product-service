import express from 'express';
import {createProduct,getProducts,getProductById,updateProduct,deleteProduct} from '../controller/product.controller.js'
import {authenticateToken } from '../middleware/auth.js'

const router = express.Router();


router.post('/products', authenticateToken,createProduct);
router.get('/products', getProducts);
router.get('/products/:id', getProductById);
router.put('/products/:id',authenticateToken, updateProduct);
router.delete('/products/:id',authenticateToken,deleteProduct);

export default router;