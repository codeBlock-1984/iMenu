import { check } from 'express-validator/check';

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
};

export default ordersValidator;
