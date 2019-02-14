import express from 'express';
import ordersService from '../services/ordersService';

const router = express.Router();
const { placeOrder, getOrdersDay, modifyOrder } = ordersService;

router.post('/', placeOrder);
router.get('/:date', getOrdersDay);
router.put('/:id', modifyOrder);

export default router;
