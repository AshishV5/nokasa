import express from 'express';
import { createOrder, getUserOrders, updateOrderStatus } from '../controllers/orderController.js';
import auth from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', auth, createOrder);
router.get('/', auth, getUserOrders);
router.put('/status', auth, updateOrderStatus);

export default router;
