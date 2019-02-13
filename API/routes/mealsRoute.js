import express from 'express';
import mealsService from '../services/mealsService';
// import mealsV from '../middlewares/mealsValidator';

const router = express.Router();
const { createMeal } = mealsService;
// const { nameValidator } = mealsV;

router.post('/', createMeal);

export default router;
