import express from 'express';
import loginsService from '../services/loginsService';
// import mealsValidator from '../middlewares/mealsValidator';

const router = express.Router();
const { loginUser } = loginsService;
// const { mealBodyValidator, mealIDValidator, checkMealExists } = mealsValidator;

router.post('/', loginUser);

export default router;
