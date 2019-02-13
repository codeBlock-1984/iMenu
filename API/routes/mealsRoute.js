import express from 'express';
import mealsService from '../services/mealsService';
// import mealsV from '../middlewares/mealsValidator';

const router = express.Router();
const { createMeal, editMeal } = mealsService;
// const { nameValidator } = mealsV;

router.post('/', createMeal);
router.put('/:id', editMeal);

export default router;
