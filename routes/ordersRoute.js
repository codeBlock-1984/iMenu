import express from 'express';
import ordersService from '../services/ordersService';
import authorize from '../middlewares/authorize';

const router = express.Router();
const {
  placeOrder, getOrdersDay, modifyOrder, getOrder, getOrders, cancelOrder,
} = ordersService;
const { isAuth, isAdmin } = authorize;

router.post('/', isAuth, placeOrder);
router.get('/:date', isAuth, isAdmin, getOrdersDay);
router.get('/', isAuth, isAdmin, getOrders);
router.get('/:id', isAuth, isAdmin, getOrder);
router.put('/:id', isAuth, modifyOrder);
router.delete('/:id', isAuth, cancelOrder);


export default router;
