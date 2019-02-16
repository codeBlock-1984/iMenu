import { check } from 'express-validator/check';
import orders from '../models/orders';

const ordersData = orders;
const newDate = new Date();
const thisDay = newDate.toISOString().slice(0, 10);

const ordersValidator = {
  orderBodyValidator: [
    check('userID')
      .exists()
      .withMessage('User ID is required!')
      .isInt({ allow_leading_zeroes: false })
      .withMessage('User ID must be a valid integer value!'),
    check('menuID')
      .exists()
      .withMessage('Menu ID is required!')
      .isInt({ allow_leading_zeroes: false })
      .withMessage('Menu ID must be a valid integer value!'),
    check('orderItems')
      .exists()
      .withMessage('Order items is required!')
      .trim(),
    check('orderDate')
      .exists()
      .withMessage('Date is required!')
      .isISO8601()
      .withMessage('Date must be of the format YYYY-MM-DD!')
      .trim(),
    check('orderBill')
      .exists()
      .withMessage('Bill is required!')
      .isCurrency({ symbol: '#' })
      .withMessage('Bill must be a valid currency amount')
      .isLength({ min: 2, max: 5 })
      .withMessage('Bill must be between 2 and 5 characters!'),
  ],
  orderIDValidator: [
    check('id')
      .exists()
      .withMessage('Order ID is required!')
      .isInt({ allow_leading_zeroes: false })
      .withMessage('ID parameter must be a valid integer value!'),
  ],
  orderDateValidator: [
    check('date')
      .exists()
      .withMessage('Date is required!')
      .isISO8601()
      .withMessage('Date must be of the format YYYY-MM-DD!')
      .trim(),
  ],
  checkOrderExists: [
    check('userID')
      .custom((userID) => {
        const existingOrder = ordersData.find(order => order.userID === userID);
        if (!existingOrder) return true;
        return false;
      })
      .withMessage('Order already exists!'),
  ],
  checkOrderAllowed: [
    check('orderDate')
      .equals(thisDay)
      .withMessage('You can only place an order on current day!'),
  ],
};

export default ordersValidator;
