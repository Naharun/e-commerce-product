import express from 'express';
import { ProductControllers } from './product.controller';
const router = express.Router();

router.post('/products', ProductControllers.createProduct);

router.get('/', ProductControllers.getAllProduct);

router.get('/products/:productId', ProductControllers.getSingleProduct);

router.put('/products/:productId', ProductControllers.updateProduct);

export const ProductRoutes = router;
