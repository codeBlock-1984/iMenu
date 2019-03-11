import { check } from 'express-validator/check';
import menus from '../models/menus';

const menusData = menus;
const newDate = new Date();
const thisDay = newDate.toISOString().slice(0, 10);

const menusValidator = {
  menuBodyValidator: [
    /* check('menuOptions')
      .exists()
      .withMessage('Menu options is required!')
      .trim(),
      */
    check('menuDate')
      .exists()
      .withMessage('Date is required!')
      .isDataURI()
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
  checkMenuIsSet: [
    check('menuDate')
      .equals(thisDay)
      .withMessage('You can only set menu for current day!')
      .custom((menuDate) => {
        const existingMenu = menusData.find(menu => menu.menuDate === menuDate);
        if (!existingMenu) return true;
        return false;
      })
      .withMessage('Menu has been set for today!'),
  ],
};

export default menusValidator;
