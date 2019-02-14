import express from 'express';
import ordersService from '../services/ordersService';

const router = express.Router();
const {
  placeOrder, getOrdersDay, modifyOrder, getOrder, cancelOrder,
} = ordersService;

router.post('/', placeOrder);
router.get('/:date', getOrdersDay);
router.get('/:id', getOrder);
router.put('/:id', modifyOrder);
router.delete('/:id', cancelOrder);


export default router;
