import express from 'express';
import ordersService from '../services/ordersService';

const router = express.Router();
const { placeOrder } = ordersService;

router.post('/', placeOrder);

export default router;
