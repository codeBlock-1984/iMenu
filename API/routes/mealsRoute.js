import express from 'express';
import mealsService from '../services/mealsService';
// import mealsV from '../middlewares/mealsValidator';

const router = express.Router();
const {
  createMeal, editMeal, getMeals, getMeal,
} = mealsService;
// const { nameValidator } = mealsV;

router.post('/', createMeal);
router.put('/:id', editMeal);
router.get('/', getMeals);
router.get('/:id', getMeal);

export default router;
