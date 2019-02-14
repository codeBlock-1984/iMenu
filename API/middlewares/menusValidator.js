import { check } from 'express-validator/check';

const menusValidator = {
  menuBodyValidator: [
    check('menuOptions')
      .exists()
      .withMessage('Menu options is required!')
      .trim(),
    check('menuDate')
      .exists()
      .withMessage('Date is required!')
      .isISO8601()
      .withMessage('Date must be of the format YYYY-MM-DD!')
      .trim(),
  ],
  menuIDValidator: [
    check('id')
      .exists()
      .withMessage('Menu ID is required!')
      .isInt({ allow_leading_zeroes: false })
      .withMessage('ID must be a valid integer value!'),
  ],
  menuDateValidator: [
    check('date')
      .exists()
      .withMessage('Date is required!')
      .isISO8601()
      .withMessage('Date must be of the format YYYY-MM-DD!')
      .trim(),
  ],
};

export default menusValidator;
