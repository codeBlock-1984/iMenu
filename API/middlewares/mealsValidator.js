import { check } from 'express-validator/check';

module.exports = {
  mealsValidator: [
    check('mealName')
      .exists()
      .withMessage('Meal name is required')
      .isAlpha()
      .withMessage('Meal name must be alphabet letters!')
      .isLength({ min: 2, max: 20 })
      .withMessage('Meal name must be between 2 and 20 characters!')
      .trim(),
  ],

/*
    const validationError = validationResult(req);
    if (validationError.isEmpty()) {
    // const error = err.mapped();
      console.log(validationError.array());
      return res.status(400).json({
        status: 400,
        error: validationError.array(),

      });
    }
    return next();
  }
  */
};


//export default mealsValidator;
