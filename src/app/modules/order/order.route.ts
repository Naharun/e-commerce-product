import express from 'express';
import { OrderControllers } from './order.controller';
const router = express.Router();

//router

router.post('/orders', OrderControllers.createOrder);
router.get('/orders', OrderControllers.getAllOrders);
router.get('/orders', OrderControllers.getOrdersByEmail);

export const OrderRoutes = router;
