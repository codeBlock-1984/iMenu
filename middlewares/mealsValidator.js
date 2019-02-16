import { check } from 'express-validator/check';
import meals from '../models/meals';

const mealsData = meals;

const mealsValidator = {
  mealBodyValidator: [
    check('mealName')
      .exists()
      .withMessage('Meal name is required!')
      .isAlpha()
      .withMessage('Meal name must be alphabet letters!')
      .isLength({ min: 2, max: 20 })
      .withMessage('Meal name must be between 2 and 20 characters!')
      .trim(),
    check('mealPrice')
      .exists()
      .withMessage('Price is required!')
      .isCurrency({ symbol: '#' })
      .withMessage('Price must be a valid currency amount')
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
        const existingMeal = mealsData.find(meal => meal.mealName === mealName);
        if (!existingMeal) return true;
        return false;
      })
      .withMessage('Meal already exists!'),
  ],
};

export default mealsValidator;
