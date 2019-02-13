//import { validationResult } from 'express-validator/check';
import meals from '../models/meals';

const mealsData = meals;

class mealsService {
  static createMeal(req, res) {
    // const vError = validationResult(req);
    // if (!vError) {
    //  res.status(400).json(vError.array());
    //  }
    req.body.mealID = mealsData.length + 1;
    mealsData.push(req.body);
    return res.status(200).json({
      status: 200,
      data: mealsData,
    });
  }
}

export default mealsService;
