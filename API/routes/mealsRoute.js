import express from 'express';
import mealsService from '../services/mealsService';
// import mealsV from '../middlewares/mealsValidator';

const router = express.Router();
const {
  createMeal, editMeal, getMeals, getMeal, removeMeal,
} = mealsService;
// const { nameValidator } = mealsV;

router.post('/', createMeal);
router.put('/:id', editMeal);
router.get('/', getMeals);
router.get('/:id', getMeal);
router.delete('/:id', removeMeal);

export default router;
