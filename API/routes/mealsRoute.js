import express from 'express';
import mealsService from '../services/mealsService';
import mealsValidator from '../middlewares/mealsValidator';

const router = express.Router();
const {
  createMeal, editMeal, getMeals, getMeal, removeMeal,
} = mealsService;
const { mealBodyValidator, mealIDValidator, checkMealExists } = mealsValidator;

router.post('/', mealBodyValidator, checkMealExists, createMeal);
router.put('/:id', mealBodyValidator, mealIDValidator, editMeal);
router.get('/', getMeals);
router.get('/:id', mealIDValidator, getMeal);
router.delete('/:id', mealIDValidator, removeMeal);

export default router;
