import { check } from 'express-validator/check';
import db from '../database/models';

const { Meal } = db;

const mealsValidator = {
  mealBodyValidator: [
    check('name')
      .exists()
      .withMessage('Meal name is required!')
      .isString()
      .withMessage('Meal name must be a String!')
      .isLength({ min: 2, max: 20 })
      .withMessage('Meal name must be between 2 and 20 characters!')
      .trim(),
    check('price')
      .exists()
      .withMessage('Price is required!')
      .isInt()
      .withMessage('Price must be an integer')
      .isLength({ min: 2, max: 5 })
      .withMessage('Price must be between 2 and 5 characters!'),
  ],
  mealIDValidator: [
    check('id')
      .exists()
      .withMessage('Meal ID is required!')
      .isInt({ allow_leading_zeroes: false })
      .withMessage('ID must be a valid integer value!'),
  ],
  checkMealExists: [
    check('mealName')
      .custom((mealName) => {
        return Meal.findOne({ where: { name: mealName } })
          .then((existingMeal) => {
            return false;
          })
          .catch((error) => {
            return true;
          });
      })
      .withMessage('Meal already exists!'),
  ],
};

export default mealsValidator;
