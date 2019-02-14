import express from 'express';
import ordersService from '../services/ordersService';

const router = express.Router();
const { placeOrder, getOrdersDay } = ordersService;

router.post('/', placeOrder);
router.get('/:date', getOrdersDay);

export default router;
