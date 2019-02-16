import express from 'express';
import ordersService from '../services/ordersService';
import ordersValidator from '../middlewares/ordersValidator';

const router = express.Router();
const {
  placeOrder, getOrdersDay, modifyOrder, getOrder, cancelOrder,
} = ordersService;
const {
  orderBodyValidator, orderDateValidator, orderIDValidator, checkOrderExists, checkOrderAllowed,
} = ordersValidator;

router.post('/', orderBodyValidator, checkOrderExists, checkOrderAllowed, placeOrder);
router.get('/:date', orderDateValidator, getOrdersDay);
router.get('/:id', getOrder);
router.put('/:id', orderIDValidator, orderBodyValidator, modifyOrder);
router.delete('/:id', orderIDValidator, cancelOrder);


export default router;
