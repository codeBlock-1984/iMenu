import express from 'express';
import mealsService from '../services/mealsService';
import authorize from '../middlewares/authorize';
// import mealsValidator from '../middlewares/mealsValidator';

const router = express.Router();
const {
  createMeal, editMeal, getMeals, getMeal, removeMeal,
} = mealsService;
const { isAuth, isAdmin } = authorize;
// const { mealBodyValidator, mealIDValidator, checkMealExists } = mealsValidator;

router.post('/', isAuth, isAdmin, createMeal);
router.put('/:id', isAuth, isAdmin, editMeal);
router.get('/', isAuth, getMeals);
router.get('/:id', isAuth, getMeal);
router.delete('/:id', isAuth, isAdmin, removeMeal);

export default router;
